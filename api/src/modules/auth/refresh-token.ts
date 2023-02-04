import { createParamDecorator, ExecutionContext } from "@nestjs/common";
import { GqlExecutionContext } from "@nestjs/graphql";
import { AUTH_TOKEN_NAME } from "./access-token-cookie.interceptor";

export const RefreshToken = createParamDecorator(
  (_data: unknown, context: ExecutionContext) => {
    const ctx = GqlExecutionContext.create(context).getContext();
    return ctx.req.cookies[AUTH_TOKEN_NAME];
  },
);
