import { Field, ObjectType } from "@nestjs/graphql";
import { UUID } from "~/tools/scalar/uuid";
import { Channel } from "../channels/channel.model";
import { AbstractModel } from "../common/model.abstract";
import { Member } from "../members/members.model";

@ObjectType()
export class Message extends AbstractModel {
  @Field(() => String)
  content!: string;

  @Field(() => UUID)
  memberId!: string;

  @Field(() => Member)
  member!: Member;

  @Field(() => UUID)
  channelId!: string;

  @Field(() => Channel)
  channel!: Channel;
}
