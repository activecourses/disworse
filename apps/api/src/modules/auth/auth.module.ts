import { Module } from "@nestjs/common";
import { PassportModule } from "@nestjs/passport";
import { AuthenticatedGuard } from "src/common/guards/auth.guard";
import { DrizzleModule } from "src/drizzle/drizzle.module";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { LocalStrategy } from "./passport-strategies/strategies";
import { SessionSerializer } from "./sessions.serializer";

@Module({
    imports: [DrizzleModule, PassportModule.register({ session: true })],
    providers: [
        AuthService,
        LocalStrategy,
        AuthenticatedGuard,
        SessionSerializer,
    ],
    controllers: [AuthController],
})
export class AuthModule {}
