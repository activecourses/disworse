import {
    CallHandler,
    ExecutionContext,
    Inject,
    Injectable,
    NestInterceptor,
} from "@nestjs/common";
import { GqlExecutionContext } from "@nestjs/graphql";
import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import { Observable, catchError, switchMap, throwError } from "rxjs";
import { CONNECTION_POOL } from "./drizzle.module-definition";
import * as schema from "./schema";

export const DRIZZLE_DATABASE_KEY = "DRIZZLE_DATABASE";

@Injectable()
export class TransactionInterceptor implements NestInterceptor {
    constructor(@Inject(CONNECTION_POOL) private readonly pool: Pool) {}

    async intercept(
        context: ExecutionContext,
        next: CallHandler<any>,
    ): Promise<Observable<any>> {
        const gqlContext = GqlExecutionContext.create(context);
        const req = gqlContext.getContext().req;

        const db = drizzle(this.pool, { schema });
        return db.transaction(async (tx) => {
            // Attach the transaction to the request object
            // @ts-ignore
            req[DRIZZLE_DATABASE_KEY] = tx;

            return next
                .handle()
                .pipe(
                    switchMap(async (data) => {
                        // If we reach this point, it means the request was successful
                        // The transaction will be automatically committed
                        return data;
                    }),
                    catchError((error) => {
                        // If an error occurs, the transaction will be automatically rolled back
                        return throwError(() => error);
                    }),
                )
                .toPromise();
        });
    }
}
