import { join } from "path";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { APP_GUARD } from "@nestjs/core";
import { GraphQLModule } from "@nestjs/graphql";
import { AppResolver } from "./app.resolver";
import { AppService } from "./app.service";
import { AuthenticatedGuard } from "./common/guards/auth.guard";
import { DrizzleModule } from "./drizzle/drizzle.module";
import { AuthModule } from "./modules/auth/auth.module";

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
        }),
        GraphQLModule.forRoot<ApolloDriverConfig>({
            driver: ApolloDriver,
            playground: true,
            sortSchema: true,
            autoSchemaFile: join(process.cwd(), "schema.graphql"),
        }),
        DrizzleModule,
    ],
    controllers: [],
    providers: [
        AppService,
        AppResolver,
        {
            provide: APP_GUARD,
            useClass: AuthenticatedGuard,
        },
    ],
})
export class AppModule {}
