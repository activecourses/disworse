import {
    BadRequestException,
    Injectable,
    Logger,
    UnauthorizedException,
} from "@nestjs/common";
import { eq } from "drizzle-orm";
import { DrizzleService } from "src/drizzle/drizzle.service";
import * as schema from "src/drizzle/schema";
import { hash, verify } from "src/utils/argon2";
import { LoginDto } from "./dto/login.input";
import { SignupDto } from "./dto/signup.input";

@Injectable()
export class AuthService {
    private readonly logger = new Logger(AuthService.name);

    constructor(private readonly drizzleService: DrizzleService) {}

    async signup(signupDto: SignupDto) {
        signupDto.password = await hash(signupDto.password);

        const user = await this.drizzleService.db
            .insert(schema.users)
            .values(signupDto)
            .returning();

        if (!user) {
            this.logger.error(
                `Auth - Signup: user with username '${signupDto.username}' Failed to sign up`,
            );
            throw new BadRequestException("Failed to sign up");
        }

        this.logger.log(
            `Auth - Signup: user with username '${user[0].username}' successfully signed up`,
        );

        return user[0];
    }

    async validateUser(loginDto: LoginDto) {
        const user = await this.drizzleService.db.query.users.findFirst({
            where: eq(schema.users.email, loginDto.email),
        });

        if (!user) {
            this.logger.error("Auth - Validate: Invalid credentials");
            throw new UnauthorizedException("AUTH: Invalid credentials");
        }

        const isMatch = await verify(loginDto.password, user.password);

        if (!isMatch) {
            this.logger.error("Auth - Validate: Invalid credentials");
            throw new UnauthorizedException("AUTH: Invalid credentials");
        }

        this.logger.log(
            `Auth - Validate: user with username '${user.username}' successfully validated`,
        );
        return user;
    }
}
