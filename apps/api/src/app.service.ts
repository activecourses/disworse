import { Injectable } from "@nestjs/common";
import { DrizzleService } from "./drizzle/drizzle.service";
import { User } from "./modules/users/entities/user.entity";

@Injectable()
export class AppService {
    constructor(private drizzleService: DrizzleService) {}

    getHello(): string {
        return "Hello World!";
    }

    async testDb(): Promise<User[]> {
        const users = await this.drizzleService.db.query.users.findMany();
        return users;
    }
}
