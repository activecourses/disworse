import { Module } from "@nestjs/common";
import { DrizzleModule } from "src/drizzle/drizzle.module";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";

@Module({
    imports: [DrizzleModule],
    providers: [AuthService],
    controllers: [AuthController],
})
export class AuthModule {}
