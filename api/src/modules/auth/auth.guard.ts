import { ExecutionContext, Injectable, UseGuards } from "@nestjs/common";
import { GqlExecutionContext } from "@nestjs/graphql";
import { AuthGuard as PasswordGuard } from "@nestjs/passport";

@Injectable()
class Guard extends PasswordGuard("jwt") {
  getRequest(context: ExecutionContext) {
    const ctx = GqlExecutionContext.create(context);
    return ctx.getContext().req;
  }
}

export const AuthGuard = () => UseGuards(Guard);
export default AuthGuard;
