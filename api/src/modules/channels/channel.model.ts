import { Field, Int, ObjectType, registerEnumType } from "@nestjs/graphql";
import { ChannelKindEnum } from "~/db/entities/channel.entity";
import { UUID } from "~/tools/scalar/uuid";
import { Message } from "../messages/message.model";

registerEnumType(ChannelKindEnum, {
  name: "ChannelKindEnum",
});

@ObjectType()
export class Channel {
  @Field(() => UUID)
  id!: string;

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

  @Field(() => Date)
  createdAt!: Date;

  @Field(() => Date)
  updatedAt!: Date;

  @Field(() => Int)
  unread!: number;

  @Field(() => UUID, { nullable: true })
  lastMessageId!: string | null;

  @Field(() => Message, { nullable: true })
  lastMessage!: Message | null;
}
