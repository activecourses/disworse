import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";

@Injectable()
export class LocalAuthGuard implements CanActivate {
    async canActivate(context: ExecutionContext) {
        const req = context.switchToHttp().getRequest();

        return req.isAuthenticated();
    }
}
