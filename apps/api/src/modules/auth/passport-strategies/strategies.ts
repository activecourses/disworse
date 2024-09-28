import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { SerializedUser } from "src/common/serialized-types/user";
import { AuthService } from "../auth.service";
import { LoginDto } from "../dto/login.dto";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor(private readonly authService: AuthService) {
        super({ usernameField: "email" });
    }

    async validate(email: string, password: string) {
        const user = await this.authService.validateUser({ email, password });

        if (!user) {
            throw new UnauthorizedException("Invalid credentials");
        }

        return new SerializedUser(user);
    }
}
