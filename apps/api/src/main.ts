import { ValidationPipe } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import RedisStore from "connect-redis";
import * as session from "express-session";
import * as passport from "passport";
import { createClient } from "redis";
import { AppModule } from "./app.module";

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.setGlobalPrefix("api");
    app.useGlobalPipes(
        new ValidationPipe({
            transform: true,
            whitelist: true,
        }),
    );

    const redisClient = await createClient({
        url: String(process.env.REDIS_URL),
    }).connect();

    app.use(
        session({
            secret: String(process.env.SESSION_SECRET),
            resave: false,
            saveUninitialized: false,
            cookie: {
                maxAge: Number(process.env.COOKIE_MAX_AGE),
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
    await app.listen(3333);
}
bootstrap();
