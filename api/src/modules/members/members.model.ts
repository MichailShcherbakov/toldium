import { Field, ObjectType } from "@nestjs/graphql";
import { UUID } from "~/tools/scalar/uuid";
import { Channel } from "~/modules/channels/channel.model";
import { User } from "../users/user.model";

@ObjectType()
export class Member {
  @Field(() => UUID)
  id!: string;

  @Field(() => Date)
  createdAt!: Date;

  @Field(() => Date)
  updatedAt!: Date;

  @Field(() => UUID)
  channelId!: string;

  @Field(() => Channel)
  channel!: Channel;

  @Field(() => UUID)
  userId!: string;

  @Field(() => User)
  user!: User;
}
