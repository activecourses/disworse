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
import { Observable, from, throwError } from "rxjs";
import { catchError, switchMap } from "rxjs/operators";
import { CONNECTION_POOL } from "./drizzle.module-definition";
import * as schema from "./schema";

export const DRIZZLE_DATABASE_KEY = "DRIZZLE_DATABASE";

@Injectable()
export class TransactionInterceptor implements NestInterceptor {
    constructor(@Inject(CONNECTION_POOL) private readonly pool: Pool) {}

    intercept(
        context: ExecutionContext,
        next: CallHandler<any>,
    ): Observable<any> {
        const gqlContext = GqlExecutionContext.create(context);
        const ctx = gqlContext.getContext();

        const db = drizzle(this.pool, { schema });

        return from(
            db.transaction(async (tx) => {
                // Attach the transaction to the request object
                ctx[DRIZZLE_DATABASE_KEY] = tx;

                try {
                    // Execute the route handler
                    const result = await next.handle().toPromise();

                    // If we reach this point, it means the request was successful
                    // The transaction will be automatically committed
                    return result;
                } catch (error) {
                    // If an error occurs, the transaction will be automatically rolled back
                    throw error;
                } finally {
                    delete ctx[DRIZZLE_DATABASE_KEY];
                }
            }),
        ).pipe(catchError((error) => throwError(() => error)));
    }
}
