import {
    Body,
    Controller,
    Get,
    Post,
    Redirect,
    Req,
    Res,
    UseGuards,
} from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { GithubAuthGuard } from "src/common/guards/github.guard";
import { Public } from "../../common/custom-decorators/public-endpoint";
import { UserService } from "../users/user.service";
import { AuthService } from "./auth.service";
import { CompleteProfileDto } from "./dto/complete-profile.input";

@Controller("auth")
export class AuthController {
    constructor(
        private readonly authService: AuthService,
        private readonly userService: UserService,
    ) {}

    @Public()
    @Get("github/login")
    @UseGuards(AuthGuard("github")) //validates the github token.
    async githubLogin() {}

    @Get("dashboard")
    async dashboard() {
        return "you are authenticated!";
    }

    @Public()
    @Get("github/callback")
    @UseGuards(GithubAuthGuard)
    async githubCallback(@Req() req: any, @Res() res: any) {
        const github_id = req.user.profile.id;
        const email = req.user.profile.emails[0].value;
        console.log("github_id: ", github_id);
        const user = await this.userService.findOneByGithubId(github_id);
        req.session.passport.user.profile = {
            github_id,
            email,
        };
        if (!user) {
            res.redirect("http://localhost:3333/auth/complete-profile"); // TODO: change to a frontend url
        } else {
            res.redirect("http://localhost:3333/auth/dashboard"); // TODO: change to a frontend url
        }
    }

    @Post("complete-profile")
    async completeProfile(
        @Req() req: any,
        @Body() completeProfileDto: CompleteProfileDto,
    ) {
        this.userService.create(completeProfileDto);
    }
}
