import { Field, ObjectType } from "@nestjs/graphql";
import { UUID } from "~/tools/scalar/uuid";
import { Channel } from "~/modules/channels/channel.model";

@ObjectType()
export class Member {
  @Field(() => UUID)
  id!: string;

  @Field(() => Date)
  createAt!: Date;

  @Field(() => Date)
  updatedAt!: Date;

  @Field(() => Channel)
  channel!: Channel;
}
