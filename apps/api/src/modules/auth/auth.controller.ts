import { Body, Controller, Post } from "@nestjs/common";
import { SerializedUser } from "../../common/serialized-types/user";
import { NodemailerStrategy } from "../mail/Providers/nodemailer";
import { MailService } from "../mail/mail.service";
import { AuthService } from "./auth.service";
import { SignupDto } from "./dto/signup.dto";

@Controller("auth")
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post("signup")
    async signup(@Body() signupDto: SignupDto) {
        const user = await this.authService.signup(signupDto);

        // const nodemailer = new NodemailerStrategy();
        // const mail = new MailService(nodemailer);
        // mail.welcomeUser("test@gmail.com");

        return new SerializedUser(user);
    }
}
