import { Args, Mutation, Resolver } from "@nestjs/graphql";
import { Tokens } from "./tokens/tokens.model";
import { AuthService } from "./auth.service";
import { TokensService } from "./tokens/tokens.service";
import { SignInInput, SignUpInput } from "./auth.inputs";
import { PrimitiveUser, UsersService } from "../users/users.service";
import { User } from "../users/user.model";
import AuthGuard from "./auth.guard";
import {
  RemoveOutAccessTokenOfCookie,
  StoreAccessTokenToCookie,
} from "./access-token-cookie.interceptor";
import { RefreshToken } from "./refresh-token";

@Resolver(_of => Tokens)
export class AuthResolver {
  public constructor(
    private readonly authService: AuthService,
    private readonly tokensService: TokensService,
    private readonly usersService: UsersService,
  ) {}

  @StoreAccessTokenToCookie()
  @Mutation(_returns => Tokens)
  public async signIn(
    @Args("signInInput") input: SignInInput,
  ): Promise<Tokens> {
    const user = await this.authService.validateOrFail(
      input.email,
      input.password,
    );

    return this.tokensService.generateTokens(user.id);
  }

  @Mutation(_returns => User)
  public async signUp(
    @Args("signUpInput") input: SignUpInput,
  ): Promise<PrimitiveUser> {
    return this.usersService.convertEntityToModel(
      await this.usersService.createUser(input),
    );
  }

  @StoreAccessTokenToCookie()
  @Mutation(_returns => Tokens, { description: "Use for web apps" })
  public async refreshTokensWeb(
    @RefreshToken() token: string,
  ): Promise<Tokens> {
    return this.tokensService.refreshTokens(token);
  }

  @StoreAccessTokenToCookie()
  @Mutation(_returns => Tokens, { description: "Use for mobile apps" })
  public async refreshTokensMobile(
    @Args("refreshToken", { type: () => String })
    refreshToken: Tokens["refreshToken"],
  ): Promise<Tokens> {
    return this.tokensService.refreshTokens(refreshToken);
  }

  @AuthGuard()
  @RemoveOutAccessTokenOfCookie()
  @Mutation(_returns => Boolean)
  public async signOut(
    @Args("refreshToken", { type: () => String })
    refreshToken: Tokens["refreshToken"],
  ): Promise<boolean> {
    await this.tokensService.removeToken(refreshToken);
    return true;
  }
}
