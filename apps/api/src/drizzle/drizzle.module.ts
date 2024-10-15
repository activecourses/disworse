import { Global, Module } from "@nestjs/common";
import { APP_INTERCEPTOR } from "@nestjs/core";
import { Pool } from "pg";
import { DatabaseOptions } from "./database-options";
import {
    CONNECTION_POOL,
    ConfigurableDatabaseModule,
    DATABASE_OPTIONS,
} from "./drizzle.module-definition";
import { DrizzleService } from "./drizzle.service";
import { TransactionInterceptor } from "./transaction.interceptor";

@Global()
@Module({
    providers: [
        DrizzleService,
        {
            provide: CONNECTION_POOL,
            inject: [DATABASE_OPTIONS],
            useFactory: (databaseOptions: DatabaseOptions) => {
                return new Pool({
                    connectionString: databaseOptions.url,
                    database: databaseOptions.database,
                });
            },
        },
        {
            provide: APP_INTERCEPTOR,
            useClass: TransactionInterceptor,
        },
    ],
    exports: [DrizzleService],
})
export class DrizzleModule extends ConfigurableDatabaseModule {}
