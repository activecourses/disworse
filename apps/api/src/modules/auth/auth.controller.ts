import { Body, Controller, Post, Get, Req, UseGuards } from "@nestjs/common";
import { SerializedUser } from "../../common/serialized-types/user";
import { AuthService } from "./auth.service";
import { SignupDto } from "./dto/signup.dto";
import { AuthGuard } from '@nestjs/passport';

@Controller("auth")
export class AuthController {
    constructor(private readonly authService: AuthService) { }

    @Post("signup")
    async signup(@Body() signupDto: SignupDto) {
        const user = await this.authService.signup(signupDto);

        return new SerializedUser(user);
    }

    @Get('google')
    @UseGuards(AuthGuard('google'))
    async googleAuth(@Req() req: Request) {
    }

    @Get('google/redirect')
    @UseGuards(AuthGuard('google'))
    googleAuthRedirect(@Req() req: Request) {
        return this.authService.googleLogin(req);
    }
}
