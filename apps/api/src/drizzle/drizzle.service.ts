import { Inject, Injectable, Logger, Scope } from "@nestjs/common";
import { CONTEXT } from "@nestjs/graphql";
import { NodePgDatabase, drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import { DrizzleLogger } from "./drizzle.logger";
import { CONNECTION_POOL } from "./drizzle.module-definition";
import * as schema from "./schema";
import { DRIZZLE_DATABASE_KEY } from "./transaction.interceptor";

@Injectable({ scope: Scope.REQUEST })
export class DrizzleService {
    private readonly logger = new Logger("Drizzle:Service");

    constructor(
        @Inject(CONNECTION_POOL) private readonly pool: Pool,
        @Inject(CONTEXT) private readonly context: any,
    ) {}

    public get db(): NodePgDatabase<typeof schema> {
        return (
            this.context[DRIZZLE_DATABASE_KEY] ??
            drizzle(this.pool, {
                schema,
                logger: new DrizzleLogger(this.logger),
            })
        );
    }
}
