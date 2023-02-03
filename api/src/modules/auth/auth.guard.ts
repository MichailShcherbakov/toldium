import { ExecutionContext, Injectable, UseGuards } from "@nestjs/common";
import { GqlExecutionContext } from "@nestjs/graphql";
import { AuthGuard as PasswordGuard } from "@nestjs/passport";

@Injectable()
class Guard extends PasswordGuard("jwt") {
  getRequest(context: ExecutionContext) {
    const ctx = GqlExecutionContext.create(context).getContext();

    if (ctx.websocketHeader?.connectionParams) {
      const websocketHeader = ctx.websocketHeader?.connectionParams || {};

      return { headers: { ...websocketHeader } };
    }

    return ctx.req;
  }
}

export const AuthGuard = () => UseGuards(Guard);
export default AuthGuard;
