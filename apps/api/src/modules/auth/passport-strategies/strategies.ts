import { Injectable, UnauthorizedException } from "@nestjs/common";
import { Args } from "@nestjs/graphql";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { AuthService } from "../auth.service";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor(private readonly authService: AuthService) {
        super({ usernameField: "email" });
    }

    async validate(@Args() email: string, @Args() password: string) {
        const user = await this.authService.validateUser({ email, password });

        if (!user) {
            throw new UnauthorizedException("Invalid credentials");
        }

        return user;
    }
}
