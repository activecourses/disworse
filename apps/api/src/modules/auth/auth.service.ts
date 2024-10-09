import {
    BadRequestException,
    Injectable,
    Logger,
    UnauthorizedException,
} from "@nestjs/common";
import { eq } from "drizzle-orm";
import { Request, Response } from "express";
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

        this.logger.debug(
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

        this.logger.debug(
            `Auth - Validate: user with username '${user.username}' successfully validated`,
        );
        return user;
    }

    async logout(req: Request, res: Response) {
        if (!req.isAuthenticated()) {
            return false; // User is not logged in, resolve as false
        }
        return new Promise((resolve, reject) => {
            req.logout((err) => {
                if (err) {
                    this.logger.error("Auth - Logout: Error logging out:", err);
                    return reject(false); // If there's an error, reject the promise
                }

                req.session.destroy((sessionErr) => {
                    if (sessionErr) {
                        return reject(false);
                    }
                    res.clearCookie("connect.sid", { path: "/" }); // Clear the session cookie
                    this.logger.debug(
                        "Auth - Logout: Logged out successfully:",
                    );
                    return resolve(true); // Resolve the promise as true if everything worked
                });
            });
        });
    }
}
