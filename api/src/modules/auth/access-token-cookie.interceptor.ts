import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
  UseInterceptors,
} from "@nestjs/common";
import { GqlExecutionContext } from "@nestjs/graphql";
import { Observable, tap } from "rxjs";
import { Tokens } from "./tokens/tokens.model";
import { MAX_TOKEN_AGE } from "./tokens/tokens.service";
import { Response } from "express";

export const AUTH_TOKEN_NAME = "__auth_token";

@Injectable()
class StoreAccessTokenToCookieInterceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next: CallHandler<Tokens>,
  ): Observable<any> {
    const ctx = GqlExecutionContext.create(context);
    const response: Response = ctx.getContext().res;

    return next.handle().pipe(
      tap(data => {
        response.cookie(AUTH_TOKEN_NAME, data.refreshToken, {
          path: "/",
          httpOnly: true,
          sameSite: "strict",
          maxAge: MAX_TOKEN_AGE,
        });
      }),
    );
  }
}

@Injectable()
class RemoveOutAccessTokenOfCookieInterceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next: CallHandler<Tokens>,
  ): Observable<any> {
    const ctx = GqlExecutionContext.create(context);
    const response: Response = ctx.getContext().res;

    return next.handle().pipe(
      tap(() => {
        response.cookie(AUTH_TOKEN_NAME, "", {
          path: "/",
          httpOnly: true,
          sameSite: "strict",
          maxAge: 0,
        });
      }),
    );
  }
}

export const StoreAccessTokenToCookie = () =>
  UseInterceptors(StoreAccessTokenToCookieInterceptor);

export const RemoveOutAccessTokenOfCookie = () =>
  UseInterceptors(RemoveOutAccessTokenOfCookieInterceptor);
