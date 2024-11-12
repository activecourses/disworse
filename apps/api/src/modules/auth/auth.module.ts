import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";
import { AuthenticatedGuard } from "../../common/guards/auth.guard";
import { AuthController } from "./auth.controller";
import { AuthResolver } from "./auth.resolver";
import { AuthService } from "./auth.service";
import { GithubStrategy } from "./passport-strategies/github.strategy";
import { JwtStrategy } from "./passport-strategies/jwt.strategy";
import { LocalStrategy } from "./passport-strategies/local.strategy";
import { SessionSerializer } from "./sessions.serializer";

import { ConfigService } from "@nestjs/config";
import { UserService } from "../users/user.service";
const configService = new ConfigService();

@Module({
    imports: [
        PassportModule.register({ session: true }),
        JwtModule.register({
            secret: configService.get<string>("JWT_SECRET"),
            signOptions: { expiresIn: "600s" },
        }),
    ],
    providers: [
        AuthService,
        LocalStrategy,
        GithubStrategy,
        JwtStrategy,
        AuthenticatedGuard,
        SessionSerializer,
        AuthResolver,
        UserService,
    ],
    controllers: [AuthController],
})
export class AuthModule {}
