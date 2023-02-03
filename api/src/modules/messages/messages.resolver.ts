import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
  Subscription,
} from "@nestjs/graphql";
import { Message } from "./message.model";
import { UUID } from "~/tools/scalar/uuid";
import { MessagesService, PrimitiveMessage } from "./messages.service";
import { Channel } from "../channels/channel.model";
import {
  ChannelsService,
  PrimitiveChannel,
} from "../channels/channels.service";
import { Member } from "../members/members.model";
import { MembersService, PrimitiveMember } from "../members/members.service";
import { CreateMessageInput } from "./messages.input";
import { PubSub } from "graphql-subscriptions";
import { InjectPubSub } from "../qraphql.module";
import AuthGuard from "../auth/auth.guard";
import { CurrentUser, Iam } from "../auth/current-user";

@Resolver(_of => Message)
export class MessagesResolver {
  public constructor(
    private readonly messagesService: MessagesService,
    private readonly channelsService: ChannelsService,
    private readonly membersService: MembersService,
    @InjectPubSub()
    private readonly pubSub: PubSub,
  ) {}

  @Query(_returns => [Message])
  public async getMessagesByChannelId(
    @Args("channelId", { type: () => UUID }) channelId: string,
  ): Promise<PrimitiveMessage[]> {
    const messages = await this.messagesService.getMessagesByChannelId(
      channelId,
    );

    return messages.map(message =>
      this.messagesService.convertEntityToModel(message),
    );
  }

  @ResolveField("channel", _returns => Channel)
  public async getChannel(
    @Parent() message: Message,
  ): Promise<PrimitiveChannel> {
    const channel = await this.channelsService.getChannelByIdOrFail(
      message.channelId,
    );

    return this.channelsService.convertEntityToModel(channel);
  }

  @ResolveField("member", _returns => Member)
  public async getMember(@Parent() message: Message): Promise<PrimitiveMember> {
    const member = await this.membersService.getMemberByIdOrFail(
      message.memberId,
    );

    return this.membersService.convertEntityToModel(member);
  }

  @Mutation(_returns => Message)
  public async createMessage(
    @Args("createMessageInput") input: CreateMessageInput,
  ): Promise<PrimitiveMessage> {
    const message = this.messagesService.convertEntityToModel(
      await this.messagesService.createMessage(input),
    );

    this.pubSub.publish("onMessageAdded", { onMessageAdded: message });

    return message;
  }

  @AuthGuard()
  @Subscription(_returns => Message, {
    name: "onMessageAdded",
  })
  onMessageAdded(@CurrentUser() _user: Iam) {
    return this.pubSub.asyncIterator("onMessageAdded");
  }
}
