import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { GqlExecutionContext } from "@nestjs/graphql";
import { IS_PUBLIC_KEY } from "../custom-decorators/public-endpoint";

@Injectable()
export class AuthenticatedGuard implements CanActivate {
    public constructor(private readonly reflector: Reflector) {}

    public async canActivate(context: ExecutionContext): Promise<boolean> {
        const isPublic = this.reflector.getAllAndOverride<boolean>(
            IS_PUBLIC_KEY,
            [context.getHandler(), context.getClass()],
        );

        if (isPublic) {
            return true;
        }

        let request;

        if (context.getType() === "http") {
            // Handle REST requests
            request = context.switchToHttp().getRequest();
        } else {
            // Handle GraphQL requests
            const ctx = GqlExecutionContext.create(context);
            request = ctx.getContext().req;
        }
        return request.isAuthenticated();
    }
}
