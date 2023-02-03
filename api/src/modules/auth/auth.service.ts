import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from "@nestjs/common";
import UserEntity from "~/db/entities/user.entity";
import { UsersService } from "../users/users.service";
import * as bcrypt from "bcryptjs";

@Injectable()
export class AuthService {
  public constructor(private readonly usersService: UsersService) {}

  public async validateOrFail(
    email: UserEntity["email"],
    password: UserEntity["password"],
  ): Promise<UserEntity> {
    const user = await this.usersService.getUserByEmail(email);

    if (!user)
      throw new NotFoundException(
        `The user was not found with the email: ${email}`,
      );

    if (!bcrypt.compareSync(password, user.password))
      throw new UnauthorizedException(`The authentication fails`);

    return user;
  }
}
