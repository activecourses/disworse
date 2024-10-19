import { Module } from "@nestjs/common";
import { PassportModule } from "@nestjs/passport";
import { AuthenticatedGuard } from "../../common/guards/auth.guard";
import { AuthResolver } from "./auth.resolver";
import { AuthService } from "./auth.service";
import { LocalStrategy } from "./passport-strategies/local.strategy";
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
})
export class AuthModule {}
