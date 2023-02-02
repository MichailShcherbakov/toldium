import {
  Args,
  Int,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from "@nestjs/graphql";
import { Message } from "../messages/message.model";
import {
  MessagesService,
  PrimitiveMessage,
} from "../messages/messages.service";
import { Channel } from "./channel.model";
import { ChannelsService, PrimitiveChannel } from "./channels.service";

@Resolver(_of => Channel)
export class ChannelsResolver {
  public constructor(
    private readonly channelsService: ChannelsService,
    private readonly messagesService: MessagesService,
  ) {}

  @Query(_returns => Channel, { nullable: true })
  public async getChannelById(
    @Args("channelId") channelId: string,
  ): Promise<PrimitiveChannel | null> {
    const channel = await this.channelsService.getChannelById(channelId);

    if (!channel) return null;

    return this.channelsService.convertEntityToModel(channel);
  }

  @Query(_returns => [Channel])
  public async getChannelsByUserId(
    @Args("userId") userId: string,
  ): Promise<PrimitiveChannel[]> {
    const channels = await this.channelsService.getChannelsByUserId(userId);

    return channels.map(channel =>
      this.channelsService.convertEntityToModel(channel),
    );
  }

  @ResolveField("lastMessage", _returns => Message, { nullable: true })
  public async getLastMessage(
    @Parent() channel: Channel,
  ): Promise<PrimitiveMessage | null> {
    const lastMessage = await this.messagesService.getLastMessageByChannelId(
      channel.id,
    );

    if (lastMessage) {
      return this.messagesService.convertEntityToModel(lastMessage);
    }

    return null;
  }

  @ResolveField("unread", _returns => Int)
  public async getUnreadMessageCount(): Promise<number> {
    return 0;
  }
}
