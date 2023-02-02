import { Args, Parent, Query, ResolveField, Resolver } from "@nestjs/graphql";
import { UUID } from "~/tools/scalar/uuid";
import { Channel } from "../channels/channel.model";
import {
  ChannelsService,
  PrimitiveChannel,
} from "../channels/channels.service";
import { User } from "../users/user.model";
import { PrimitiveUser, UsersService } from "../users/users.service";
import { Member } from "./members.model";
import { MembersService, PrimitiveMember } from "./members.service";

@Resolver(_of => Member)
export class MembersResolver {
  public constructor(
    private readonly membersService: MembersService,
    private readonly channelsService: ChannelsService,
    private readonly usersService: UsersService,
  ) {}

  @Query(_returns => [Member])
  public async getMembersByChannelId(
    @Args("channelId", { type: () => UUID }) channelId: string,
  ): Promise<PrimitiveMember[]> {
    const members = await this.membersService.getMembersByChannelId(channelId);

    return members.map(member =>
      this.membersService.convertEntityToModel(member),
    );
  }

  @ResolveField("channel", _returns => Channel)
  public async getChannel(@Parent() member: Member): Promise<PrimitiveChannel> {
    const channel = await this.channelsService.getChannelByIdOrFail(
      member.channelId,
    );

    return this.channelsService.convertEntityToModel(channel);
  }

  @ResolveField("user", _returns => User)
  public async getUser(@Parent() member: Member): Promise<PrimitiveUser> {
    const user = await this.usersService.getUserByIdOrFail(member.userId);

    return this.usersService.convertEntityToModel(user);
  }
}
