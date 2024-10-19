import { ValidationPipe } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { NestFactory } from "@nestjs/core";
import RedisStore from "connect-redis";
import * as session from "express-session";
import { WinstonModule } from "nest-winston";
import * as passport from "passport";
import { createClient } from "redis";
import { createLogger } from "winston";
import { AppModule } from "./app.module";
import { winstonConfig } from "./utils/winston.config";

async function bootstrap() {
    const loggerInstance = createLogger(winstonConfig);

    const app = await NestFactory.create(AppModule, {
        logger: WinstonModule.createLogger({ instance: loggerInstance }),
    });
    const configService = app.get(ConfigService);

    app.useGlobalPipes(
        new ValidationPipe({
            transform: true,
            whitelist: true,
        }),
    );

    const redisClient = await createClient({
        url: String(configService.getOrThrow("REDIS_URL")),
    }).connect();

    app.use(
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

    app.use(passport.initialize());
    app.use(passport.session());
    app.enableCors();

    await app.listen(configService.get("PORT") || 3333);
}
bootstrap();
