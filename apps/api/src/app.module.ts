import { join } from "path";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { APP_GUARD } from "@nestjs/core";
import { GraphQLModule } from "@nestjs/graphql";
import { ServeStaticModule } from "@nestjs/serve-static";
import { Request, Response } from "express";
import { AppResolver } from "./app.resolver";
import { AppService } from "./app.service";
import { AuthenticatedGuard } from "./common/guards/auth.guard";
import { DrizzleModule } from "./drizzle/drizzle.module";
import { AuthModule } from "./modules/auth/auth.module";
import { validate } from "./utils/env.validate";
import { ApolloLogger } from "./utils/graphql.logger";

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            envFilePath: ".env",
            validate,
        }),
        GraphQLModule.forRoot<ApolloDriverConfig>({
            driver: ApolloDriver,
            context: ({
                req,
                res,
            }: {
                req: Request;
                res: Response;
            }): { req: Request; res: Response } => ({ req, res }),
            playground: true,
            sortSchema: true,
            autoSchemaFile: join(process.cwd(), "schema.graphql"),
            // https://github.com/nestjs/nest/issues/1905#issuecomment-479431252
            // @ts-ignore
            context: ({ req }) => ({ req }),
        }),
        DrizzleModule.forRoot({
            url: String(process.env.DATABASE_URL),
            database: String(process.env.POSTGRES_DB),
        }),
        AuthModule,
        ServeStaticModule.forRoot({
            rootPath: join(__dirname, "../../..", "web", "dist"),
            exclude: ["/api*", "/graphql*"],
        }),
    ],
    providers: [
        AppService,
        AppResolver,
        {
            provide: APP_GUARD,
            useClass: AuthenticatedGuard,
        },
        ApolloLogger,
    ],
})
export class AppModule {}
