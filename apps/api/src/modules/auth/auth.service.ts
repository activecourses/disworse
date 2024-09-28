import {
    BadRequestException,
    Inject,
    Injectable,
    Logger,
    UnauthorizedException,
} from "@nestjs/common";
import { eq } from "drizzle-orm";
import { NodePgDatabase } from "drizzle-orm/node-postgres";
import * as schema from "src/drizzle/schema";
import { hash, verify } from "src/utils/argon2";
import { LoginDto } from "./dto/login.dto";
import { SignupDto } from "./dto/signup.dto";

@Injectable()
export class AuthService {
    private readonly logger = new Logger(AuthService.name);

    constructor(@Inject("DB_DEV") private db: NodePgDatabase<typeof schema>) {}

    async signup(signupDto: SignupDto) {
        signupDto.password = await hash(signupDto.password);

        const user = await this.db
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

        return user;
    }

    async validateUser(loginDto: LoginDto) {
        const user = await this.db.query.users.findFirst({
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
