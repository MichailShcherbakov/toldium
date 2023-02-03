import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import UserEntity from "~/db/entities/user.entity";
import { UsersService } from "~/modules/users/users.service";
import * as uuid from "uuid";
import { InjectRepository } from "@nestjs/typeorm";
import TokenEntity from "~/db/entities/token.entity";
import { MoreThan, Repository } from "typeorm";
import { Tokens } from "./tokens.model";

/**
 *  60 days
 */
export const MAX_TOKEN_AGE: number = 1000 * 60 * 60 * 24 * 60;

@Injectable()
export class TokensService {
  public constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
    @InjectRepository(TokenEntity)
    private readonly tokensRepo: Repository<TokenEntity>,
  ) {}

  public async generateTokens(userId: UserEntity["id"]): Promise<Tokens> {
    if (!this.usersService.hasUserWithId(userId)) {
      throw new NotFoundException(`The user was not found: ${userId}`);
    }

    const tokens = this.createTokensByUserId(userId);

    await this.expireTokenByUserId(userId);

    await this.tokensRepo.save(
      this.tokensRepo.create({
        userId,
        token: tokens.refreshToken,
        expiresAt: new Date(Date.now() + MAX_TOKEN_AGE),
      }),
    );

    return tokens;
  }

  private createTokensByUserId(userId: UserEntity["id"]): Tokens {
    return {
      accessToken: this.jwtService.sign(
        { sub: userId },
        { expiresIn: "15min" },
      ),
      refreshToken: uuid.v4(),
    };
  }

  private async expireTokenByUserId(userId: string): Promise<void> {
    const now = new Date(Date.now());

    await this.tokensRepo.update(
      {
        userId,
        expiresAt: MoreThan(now),
      },
      {
        expiresAt: now,
      },
    );
  }

  public async refreshTokens(refreshToken: string): Promise<Tokens> {
    const token = await this.tokensRepo.findOne({
      where: {
        token: refreshToken,
      },
      order: {
        expiresAt: "DESC",
      },
    });

    if (!token) throw new UnauthorizedException("The refresh token is invalid");

    if (token.expiresAt.getTime() < Date.now())
      throw new UnauthorizedException("The refresh token is expired");

    const newTokens = this.createTokensByUserId(token.userId);

    await this.expireTokenByUserId(token.userId);

    await this.tokensRepo.save({
      ...token,
      token: newTokens.refreshToken,
      expiresAt: new Date(Date.now() + MAX_TOKEN_AGE),
    });

    return newTokens;
  }

  public async removeToken(refreshToken: string): Promise<void> {
    const token = await this.tokensRepo.findOne({
      where: {
        token: refreshToken,
      },
      order: {
        expiresAt: "DESC",
      },
    });

    if (!token) throw new UnauthorizedException("The refresh token is invalid");

    if (token.expiresAt.getTime() < Date.now())
      throw new UnauthorizedException("The refresh token is expired");

    await this.expireTokenByUserId(token.userId);
  }
}
