import { Module } from "@nestjs/common";
import { PassportModule } from "@nestjs/passport";
import { AuthenticatedGuard } from "src/common/guards/auth.guard";
import { AuthResolver } from "./auth.resolver";
import { AuthService } from "./auth.service";
import { LocalStrategy } from "./passport-strategies/strategies";
import { SessionSerializer } from "./sessions.serializer";

@Module({
    imports: [PassportModule.register({ session: true })],
    providers: [
        AuthService,
        LocalStrategy,
        AuthenticatedGuard,
        SessionSerializer,
        AuthResolver,
    ],
    controllers: [],
})
export class AuthModule {}
