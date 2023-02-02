import { forwardRef, Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import ChannelEntity from "~/db/entities/channel.entity";
import { MembersModule } from "../members/members.module";
import { MessagesModule } from "../messages/messages.module";
import { UsersModule } from "../users/users.module";
import { ChannelsResolver } from "./channels.resolver";
import { ChannelsService } from "./channels.service";

@Module({
  imports: [
    TypeOrmModule.forFeature([ChannelEntity]),
    forwardRef(() => MessagesModule),
    UsersModule,
    forwardRef(() => MembersModule),
  ],
  providers: [ChannelsResolver, ChannelsService],
  exports: [ChannelsService],
})
export class ChannelsModule {}
