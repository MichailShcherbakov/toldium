import { Field, ObjectType } from "@nestjs/graphql";
import { UUID } from "~/tools/scalar/uuid";

@ObjectType()
export class User {
  @Field(() => UUID)
  id!: string;

  @Field(() => String)
  name!: string;

  @Field(() => String)
  email!: string;

  @Field(() => String, { nullable: true })
  avatarURL!: string | null;

  @Field(() => Date)
  createdAt!: Date;

  @Field(() => Date)
  updatedAt!: Date;
}
