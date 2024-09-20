import { BadRequestException, Injectable, Logger } from "@nestjs/common";
import { SignupDto } from "./dto/signup.dto";
import { hash } from "src/utils/argon2";

@Injectable()
export class AuthService {
    private readonly logger = new Logger(AuthService.name);

    constructor() {}

    async signup(signupDto: SignupDto) {
        const user = signupDto; // TODO: fake signup till we have user model
        user.password = await hash(signupDto.password);

        if (!user) {
            this.logger.error(
                `Auth - Signup: user with username '${user}' Failed to sign up`,
            );
            throw new BadRequestException("Failed to sign up");
        }

        this.logger.log(
            `Auth - Signup: user with username '${user}' successfully signed up`,
        );
        return user;
    }
}
1;
