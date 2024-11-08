import { INestApplication, ValidationPipe } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { NestExpressApplication } from "@nestjs/platform-express";
import { Test } from "@nestjs/testing";
import RedisStore from "connect-redis";
import * as session from "express-session";
import * as passport from "passport";
import { createClient } from "redis";
import { AppModule } from "../src/app.module";

export class TestManager {
    // biome-ignore lint/suspicious/noExplicitAny: it is any.
    public httpServer: any;
    public app: INestApplication<NestExpressApplication>;

    // TODO: Find a way to abstract this logic, found in main.ts too.
    async beforeAll(): Promise<void> {
        const moduleRef = await Test.createTestingModule({
            imports: [AppModule],
        }).compile();
        this.app = moduleRef.createNestApplication();

        const configService = this.app.get(ConfigService);

        this.app.useGlobalPipes(
            new ValidationPipe({
                transform: true,
                whitelist: true,
            }),
        );

        const redisClient = await createClient({
            url: String(configService.getOrThrow("REDIS_URL")),
        }).connect();

        this.app.use(
            session({
                secret: configService.getOrThrow<string>("SESSION_SECRET"),
                resave: false,
                saveUninitialized: false,
                cookie: {
                    maxAge: configService.getOrThrow<number>("COOKIE_MAX_AGE"),
                    httpOnly: true,
                },
                store: new RedisStore({
                    client: redisClient,
                }),
            }),
        );

        this.app.use(passport.initialize());
        this.app.use(passport.session());
        this.app.enableCors();

        this.httpServer = this.app.getHttpServer();
        await this.app.init();
    }

    async afterAll() {
        await this.app.close();
    }

    //   Helper functions can be added here if needed e.g. generateUser().
}
