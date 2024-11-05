import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { PassportStrategy } from "@nestjs/passport";
import { Profile, Strategy } from "passport-github2";

@Injectable()
export class GithubStrategy extends PassportStrategy(Strategy, "github") {
    constructor(private configService: ConfigService) {
        super({
            clientID: configService.get<string>("GITHUB_CLIENT_ID"),
            clientSecret: configService.get<string>("GITHUB_CLIENT_SECRET"),
            callbackURL: configService.get<string>("GITHUB_CALLBACK_URL"),
            scope: ["user:email"],
        });
    }

    async validate(
        accessToken: string,
        refreshToken: string,
        profile: Profile,
    ) {
        const user = { accessToken, refreshToken, profile };
        return user;
    }
}
