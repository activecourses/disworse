import { ExecutionContext, Injectable } from "@nestjs/common";
import { GqlExecutionContext } from "@nestjs/graphql";
import { AuthGuard } from "@nestjs/passport";

@Injectable()
export class LocalAuthGuard extends AuthGuard("local") {
    public async canActivate(context: ExecutionContext): Promise<boolean> {
        const ctx = GqlExecutionContext.create(context);
        const { req } = ctx.getContext();
        console.log(req.body);
        // For GraphQL mutations, set the request body from args
        if (ctx.getType() === "graphql") {
            const args = ctx.getArgs();
            req.body = args.loginInput || args;
        }

        const result = (await super.canActivate(context)) as boolean;
        await super.logIn(req);
        return result;
    }

    public getRequest(context: ExecutionContext) {
        const ctx = GqlExecutionContext.create(context);
        const { req } = ctx.getContext();
        return req;
    }
}
