import { Field, ObjectType } from "@nestjs/graphql";
import { UUID } from "~/tools/scalar/uuid";
import { Channel } from "../channels/channel.model";
import { Member } from "../members/members.model";

@ObjectType()
export class Message {
  @Field(() => UUID)
  id!: string;

  @Field(() => String)
  content!: string;

  @Field(() => Date)
  createAt!: Date;

  @Field(() => Date)
  updatedAt!: Date;

  @Field(() => Channel)
  channel!: Channel;

  @Field(() => Member)
  member!: Member;
}
