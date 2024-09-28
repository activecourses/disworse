import { Body, Controller, Post, Req, UseGuards } from "@nestjs/common";
import { Request } from "express";
import { Public } from "src/common/custom-decorators/public-endpoint";
import { LocalAuthGuard } from "src/common/guards/local-auth.guard";
import { SerializedUser } from "src/common/serialized-types/user";
import { AuthService } from "./auth.service";
import { SignupDto } from "./dto/signup.dto";

@Controller("auth")
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Public()
    @Post("signup")
    async signup(@Body() signupDto: SignupDto) {
        const user = await this.authService.signup(signupDto);

        return new SerializedUser(user);
    }

    @Public()
    @UseGuards(LocalAuthGuard)
    @Post("login")
    async login(@Req() req: Request) {
        return req.user;
    }
}
