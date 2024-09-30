import { join } from "path";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { APP_PIPE } from "@nestjs/core";
import { GraphQLModule } from "@nestjs/graphql";
import { AppResolver } from "./app.resolver";
import { AppService } from "./app.service";
import { DrizzleModule } from "./drizzle/drizzle.module";
import { AuthModule } from "./modules/auth/auth.module";
import { MailModule } from "./modules/mail/mail.module";

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
        DrizzleModule.forRootAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: (configService: ConfigService) => ({
                // TODO: add validation for env vars
                url: configService.get<string>("DATABASE_URL") as string,
                database: configService.get<string>("POSTGRES_DB") as string,
            }),
        }),
        AuthModule,
        MailModule,
    ],
    providers: [AppService, AppResolver],
})
export class AppModule {}
