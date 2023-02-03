import { Field, InputType } from "@nestjs/graphql";
import UserEntity from "~/db/entities/user.entity";

@InputType()
export class SignInInput {
  @Field(_type => String)
  email: UserEntity["email"];

  @Field(_type => String)
  password: UserEntity["password"];
}

@InputType()
export class SignUpInput {
  @Field(_type => String)
  name: UserEntity["name"];

  @Field(_type => String)
  email: UserEntity["email"];

  @Field(_type => String)
  password: UserEntity["password"];

  @Field(_type => String, { nullable: true })
  avatarURL?: UserEntity["avatarURL"];
}
