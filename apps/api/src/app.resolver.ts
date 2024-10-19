import { Query, Resolver } from "@nestjs/graphql";
import { AppService } from "./app.service";
import { Public } from "./common/custom-decorators/public-endpoint";

@Resolver()
export class AppResolver {
    constructor(private appService: AppService) {}

    @Public()
    @Query(() => String)
    hello(): string {
        return this.appService.getHello();
    }

    @Query(() => String)
    async db(): Promise<string> {
        return this.appService.testDb();
    }
}
