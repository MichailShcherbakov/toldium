import { forwardRef, Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import MemberEntity from "~/db/entities/member.entity";
import { ChannelsModule } from "../channels/channels.module";
import { UsersModule } from "../users/users.module";
import { MembersResolver } from "./members.resolver";
import { MembersService } from "./members.service";

@Module({
  imports: [
    TypeOrmModule.forFeature([MemberEntity]),
    forwardRef(() => ChannelsModule),
    UsersModule,
  ],
  providers: [MembersResolver, MembersService],
  exports: [MembersService],
})
export class MembersModule {}
