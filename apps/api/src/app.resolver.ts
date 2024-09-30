import { Query, Resolver } from "@nestjs/graphql";
import { AppService } from "./app.service";

@Resolver()
export class AppResolver {
    constructor(private appService: AppService) {}

    @Query(() => String)
    hello(): string {
        return this.appService.getHello();
    }

    @Query(() => String)
    async db(): Promise<string> {
        return this.appService.testDb();
    }
}
