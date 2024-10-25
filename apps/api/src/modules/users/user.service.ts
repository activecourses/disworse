import { Injectable } from "@nestjs/common";
import { eq } from "drizzle-orm";
import { NodePgDatabase, drizzle } from "drizzle-orm/node-postgres";
import { DrizzleService } from "src/drizzle/drizzle.service";
import { users } from "../../drizzle/schema/user";
import { CreateUserInput } from "./dto/create-user.input";
import { UpdateUserInput } from "./dto/update-user.input";

@Injectable()
export class UserService {
    constructor(private readonly drizzleService: DrizzleService) {}

    async create(createUserInput: CreateUserInput) {
        console.log(createUserInput);
        await this.drizzleService.db.insert(users).values(createUserInput);
    }

    //   async createOAuthUser(oAuthUserData: Partial<CreateUserInput>) {
    //     await this.drizzleService.db.insert(users).values(oAuthUserData);
    //   }

    async findAll() {
        const Users = await this.drizzleService.db.select().from(users);
        return Users;
    }

    async findOneByGithubId(githubId: string) {
        const User = await this.drizzleService.db
            .select()
            .from(users)
            .where(eq(users.github_id, githubId));
        return User;
    }

    async findOne(id: number) {
        const User = await this.drizzleService.db
            .select()
            .from(users)
            .where(eq(users.id, id));
        return User;
    }

    update(id: number, updateUserInput: UpdateUserInput) {
        return `This action updates a #${id} user`;
    }

    remove(id: number) {
        return `This action removes a #${id} user`;
    }
}
