import { Field, InputType } from "@nestjs/graphql";
import ChannelEntity from "~/db/entities/channel.entity";
import MemberEntity from "~/db/entities/member.entity";
import MessageEntity from "~/db/entities/message.entity";
import { UUID } from "~/tools/scalar/uuid";

@InputType()
export class CreateMessageInput {
  @Field(_type => UUID)
  channelId: ChannelEntity["id"];

  @Field(_type => UUID)
  memberId: MemberEntity["id"];

  @Field(_type => String)
  content: MessageEntity["content"];
}
