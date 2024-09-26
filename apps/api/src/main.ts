import { ValidationPipe } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import * as session from "express-session";
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

    await app.listen(3333);
}
bootstrap();
