import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { TokensService } from "./tokens.service";
import { TokenEntity } from "~/db/entities/token.entity";
import { TypeOrmModule } from "@nestjs/typeorm";
import JwtStrategy from "./jwt.strategy";
import { UsersModule } from "~/modules/users/users.module";

const { SECRET_KEY } = process.env;

@Module({
  imports: [
    JwtModule.register({
      secret: SECRET_KEY,
    }),
    TypeOrmModule.forFeature([TokenEntity]),
    UsersModule,
  ],
  providers: [TokensService, JwtStrategy],
  exports: [TokensService, JwtStrategy],
})
export class TokensModule {}
