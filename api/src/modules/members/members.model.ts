import { Field, ObjectType } from "@nestjs/graphql";
import { UUID } from "~/tools/scalar/uuid";
import { Channel } from "~/modules/channels/channel.model";
import { User } from "../users/user.model";
import { AbstractModel } from "../common/model.abstract";

@ObjectType()
export class Member extends AbstractModel {
  @Field(() => UUID)
  channelId!: string;

  @Field(() => Channel)
  channel!: Channel;

  @Field(() => UUID)
  userId!: string;

  @Field(() => User)
  user!: User;
}
