import { Field, Int, ObjectType } from "@nestjs/graphql";
import { ChannelKind } from "~/db/entities/channel.entity";
import { UUID } from "~/tools/scalar/uuid";
import { Message } from "../messages/message.model";

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

  @Field(() => String)
  kind!: ChannelKind;

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
