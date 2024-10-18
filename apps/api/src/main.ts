import { ValidationPipe } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { NestFactory } from "@nestjs/core";
import RedisStore from "connect-redis";
import * as session from "express-session";
import * as passport from "passport";
import { createClient } from "redis";
import { AppModule } from "./app.module";

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
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
