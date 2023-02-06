import { Field, Int, ObjectType, registerEnumType } from "@nestjs/graphql";
import { ChannelKindEnum } from "~/db/entities/channel.entity";
import { UUID } from "~/tools/scalar/uuid";
import { AbstractModel } from "../common/model.abstract";
import { Message } from "../messages/message.model";

registerEnumType(ChannelKindEnum, {
  name: "ChannelKindEnum",
});

@ObjectType()
export class Channel extends AbstractModel {
  @Field(() => String)
  name!: string;

  @Field(() => String, { nullable: true })
  desc!: string | null;

  @Field(() => String, { nullable: true })
  avatarURL!: string | null;

  @Field(() => ChannelKindEnum)
  kind!: ChannelKindEnum;

  @Field(() => Int)
  memberLimit!: number;

  @Field(() => Int)
  unread!: number;

  @Field(() => UUID, { nullable: true })
  lastMessageId!: string | null;

  @Field(() => Message, { nullable: true })
  lastMessage!: Message | null;
}
