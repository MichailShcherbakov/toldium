import { Args, Query, Resolver } from "@nestjs/graphql";
import UserEntity from "~/db/entities/user.entity";
import { UUID } from "~/tools/scalar/uuid";
import { User } from "./user.model";
import { PrimitiveUser, UsersService } from "./users.service";

@Resolver(_of => User)
export class UsersResolver {
  public constructor(private readonly usersService: UsersService) {}

  @Query(_returns => [User])
  public async getUsers(): Promise<PrimitiveUser[]> {
    const users = await this.usersService.getUsers();

    return users.map(user => this.usersService.convertEntityToModel(user));
  }

  @Query(_returns => User, { nullable: true })
  public async getUserById(
    @Args("userId", { type: () => UUID }) userId: UserEntity["id"],
  ): Promise<PrimitiveUser | null> {
    const user = await this.usersService.getUserById(userId);

    if (!user) return null;

    return this.usersService.convertEntityToModel(user);
  }
}
