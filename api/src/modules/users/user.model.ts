import { Field, ObjectType } from "@nestjs/graphql";
import { AbstractModel } from "../common/model.abstract";

@ObjectType()
export class User extends AbstractModel {
  @Field(() => String)
  name!: string;

  @Field(() => String)
  email!: string;

  @Field(() => String, { nullable: true })
  avatarURL!: string | null;
}
