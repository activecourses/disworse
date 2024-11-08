import { Query, Resolver } from "@nestjs/graphql";
import { AppService } from "./app.service";
import { Public } from "./common/custom-decorators/public-endpoint";
import { User } from "./modules/users/entities/user.entity";

@Resolver()
export class AppResolver {
    constructor(private appService: AppService) {}

    @Public()
    @Query(() => String)
    hello(): string {
        return this.appService.getHello();
    }

    @Public()
    @Query(() => [User])
    async db(): Promise<User[]> {
        return this.appService.testDb();
    }
}
