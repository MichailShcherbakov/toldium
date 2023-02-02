import { forwardRef, Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import MessageEntity from "~/db/entities/message.entity";
import { ChannelsModule } from "../channels/channels.module";
import { MembersModule } from "../members/members.module";
import { MessagesResolver } from "./messages.resolver";
import { MessagesService } from "./messages.service";

@Module({
  imports: [
    TypeOrmModule.forFeature([MessageEntity]),
    forwardRef(() => ChannelsModule),
    MembersModule,
  ],
  providers: [MessagesResolver, MessagesService],
  exports: [MessagesService],
})
export class MessagesModule {}
