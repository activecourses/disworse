import { ExecutionContext, Injectable } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";

@Injectable()
export class GithubAuthGuard extends AuthGuard("github") {
    public async canActivate(context: ExecutionContext): Promise<boolean> {
        const request = context.switchToHttp().getRequest();
        const result = (await super.canActivate(context)) as boolean;
        await super.logIn(request);
        return result;
    }
}
