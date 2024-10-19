import { Injectable, Logger, LoggerService } from "@nestjs/common";
import { Logger as DrizzleLoggerInterface } from "drizzle-orm";

@Injectable()
export class DrizzleLogger implements DrizzleLoggerInterface {
    constructor(private readonly logger: LoggerService) {}

    logQuery(query: string, params: unknown[]): void {
        if (query && params) this.logger.log(`Query: ${query} ${params}`);
    }
}
