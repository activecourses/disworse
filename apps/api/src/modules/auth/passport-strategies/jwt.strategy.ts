import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { PassportStrategy } from "@nestjs/passport";
import { Request } from "express";
import { ExtractJwt, Strategy } from "passport-jwt";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, "jwt") {
    constructor(private configService: ConfigService) {
        super({
            jwtFromRequest: ExtractJwt.fromExtractors([
                (request: Request) => {
                    let token = null;
                    if (request && request.cookies) {
                        token = request.cookies["jwt"];
                    }
                    return token;
                },
            ]),
            ignoreExpiration: false,
            secretOrKey: configService.getOrThrow<string>("JWT_SECRET"),
        });
    }

    validate(payload: any) {
        console.log("JWT strategy called");
        return { id: payload.id, email: payload.email };
    }
}
