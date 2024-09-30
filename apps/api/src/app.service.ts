import { Injectable } from "@nestjs/common";
import { DrizzleService } from "./drizzle/drizzle.service";

@Injectable()
export class AppService {
    constructor(private drizzleService: DrizzleService) {}

    getHello(): string {
        return "Hello World!";
    }

    async testDb(): Promise<string> {
        const users = await this.drizzleService.db.query.users.findMany();
        return `${users}`;
    }
}
