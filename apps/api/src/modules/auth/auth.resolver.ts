import { UseGuards } from "@nestjs/common";
import { Args, Context, Mutation, Resolver } from "@nestjs/graphql";
import { Request, Response } from "express";
import { Public } from "src/common/custom-decorators/public-endpoint";
import { LocalAuthGuard } from "src/common/guards/local-auth.guard";
import { User } from "../users/entities/user.entity";
import { AuthService } from "./auth.service";
import { LoginDto } from "./dto/login.input";
import { SignupDto } from "./dto/signup.input";

@Resolver("auth")
export class AuthResolver {
    constructor(private readonly authService: AuthService) {}

    @Public()
    @Mutation(() => User, { name: "signup" })
    async signup(@Args() signupDto: SignupDto) {
        const user = await this.authService.signup(signupDto);

        return user;
    }

    @Public()
    @UseGuards(LocalAuthGuard)
    @Mutation(() => User, { name: "login" })
    async login(@Context() ctx: any, @Args() loginDto: LoginDto) {
        return ctx.req.user;
    }

    @Mutation(() => Boolean, { name: "logout" })
    async logout(@Context() context: { req: Request; res: Response }) {
        return await this.authService.logout(context.req, context.res);
    }
}
