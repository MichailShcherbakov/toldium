import { Field, Int, ObjectType } from "@nestjs/graphql";
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

  @Field(() => Date)
  createAt!: Date;

  @Field(() => Date)
  updatedAt!: Date;

  @Field(() => Int)
  unread!: number;

  @Field(() => Message, { nullable: true })
  lastMessage!: Message | null;
}
