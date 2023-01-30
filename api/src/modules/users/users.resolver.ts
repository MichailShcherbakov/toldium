import { Query, Resolver } from "@nestjs/graphql";
import { User } from "./user.model";
import { UsersService } from "./users.service";

@Resolver(_of => User)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Query(_returns => [User])
  async getUsers(): Promise<User[]> {
    const users = await this.usersService.getUsers();
    return users.map(user => ({
      id: user.id,
      name: user.name,
      email: user.email,
      avatarURL: user.avatarURL,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    }));
  }
}
