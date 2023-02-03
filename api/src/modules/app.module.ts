import { Module } from "@nestjs/common";
import { DbModule } from "../db/db.module";
import { UsersModule } from "./users/users.module";
import { MessagesModule } from "./messages/messages.module";
import { ChannelsModule } from "./channels/channels.module";
import { MembersModule } from "./members/members.module";
import { GraphQLModule } from "./qraphql.module";
import { AuthModule } from "./auth/auth.module";

@Module({
  imports: [
    GraphQLModule.forRoot(),
    DbModule,
    AuthModule,
    UsersModule,
    MessagesModule,
    ChannelsModule,
    MembersModule,
  ],
})
export class AppModule {}
