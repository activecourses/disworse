import { ExecutionContext, Injectable } from "@nestjs/common";
import { GqlExecutionContext } from "@nestjs/graphql";
import { AuthGuard } from "@nestjs/passport";

@Injectable()
export class LocalAuthGuard extends AuthGuard("local") {
    async canActivate(context: ExecutionContext): Promise<boolean> {
        const ctx = GqlExecutionContext.create(context);
        const { req } = ctx.getContext();

        // For GraphQL mutations, set the request body from args
        if (ctx.getType() === "graphql") {
            const args = ctx.getArgs();
            req.body = args.loginInput || args; // Adjust 'loginInput' if your input name differs
        }

        const result = (await super.canActivate(context)) as boolean;
        await super.logIn(req);
        return result;
    }

    getRequest(context: ExecutionContext) {
        const ctx = GqlExecutionContext.create(context);
        const request = ctx.getContext().req;
        return request;
    }
}
