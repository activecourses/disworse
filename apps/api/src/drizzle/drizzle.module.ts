import { Global, Module } from "@nestjs/common";
import { Pool } from "pg";
import { DatabaseOptions } from "./database-options";
import {
    CONNECTION_POOL,
    ConfigurableDatabaseModule,
    DATABASE_OPTIONS,
} from "./drizzle.module-definition";
import { DrizzleService } from "./drizzle.service";

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
    ],
    exports: [DrizzleService],
})
export class DrizzleModule extends ConfigurableDatabaseModule {}
