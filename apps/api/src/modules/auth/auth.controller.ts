import { Body, Controller, Get, Post, Req, UseGuards } from "@nestjs/common";
import { Request } from "express";
import { LocalAuthGuard } from "src/common/guards/local-auth.guard";
import { SerializedUser } from "src/common/serialized-types/user";
import { AuthenticatedGuard } from "../../common/guards/auth.guard";
import { AuthService } from "./auth.service";
import { SignupDto } from "./dto/signup.dto";

@Controller("auth")
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post("signup")
    async signup(@Body() signupDto: SignupDto) {
        const user = await this.authService.signup(signupDto);

        return new SerializedUser(user);
    }

    @UseGuards(LocalAuthGuard)
    @Post("login")
    async login(@Req() req: Request) {
        return req.user;
    }
}
