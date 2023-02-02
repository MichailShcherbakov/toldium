import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import ChannelEntity, { ChannelKind } from "~/db/entities/channel.entity";
import MemberEntity from "~/db/entities/member.entity";
import UserEntity from "~/db/entities/user.entity";
import { MembersService } from "../members/members.service";
import { UsersService } from "../users/users.service";
import { Channel } from "./channel.model";

export type PrimitiveChannel = Omit<
  Channel,
  "unread" | "lastMessage" | "lastMessageId"
>;

@Injectable()
export class ChannelsService {
  public constructor(
    @InjectRepository(ChannelEntity)
    private readonly channelsRepo: Repository<ChannelEntity>,
    private readonly membersService: MembersService,
    private readonly usersService: UsersService,
  ) {}

  public async getChannelsByUserId(
    userId: UserEntity["id"],
  ): Promise<ChannelEntity[]> {
    const channels = await this.channelsRepo.findBy({
      members: {
        userId,
      },
    });

    const dialogIds = channels
      .filter(c => c.kind === ChannelKind.DIALOG)
      .map(c => c.id);

    const members = await this.membersService.getMembersByChannelIds(dialogIds);

    const userIdsByChannelId = new Map<string, string[]>();

    members.forEach(m => {
      if (userIdsByChannelId.has(m.channelId)) {
        userIdsByChannelId.get(m.channelId).push(m.userId);
      } else {
        userIdsByChannelId.set(m.channelId, [m.userId]);
      }
    });

    const users = await this.usersService.getUserByIds(
      members.map(m => m.userId),
    );

    const userById = new Map(users.map(u => [u.id, u]));

    return channels.map(channel => {
      if (channel.kind !== ChannelKind.DIALOG) return channel;

      const otherUserId = userIdsByChannelId
        .get(channel.id)
        .find(id => id !== userId);
      const otherUser = userById.get(otherUserId);

      return {
        ...channel,
        name: otherUser.name,
        avatarURL: otherUser.avatarURL,
      };
    });
  }

  public async getChannelsByMemberId(
    memberId: MemberEntity["id"],
  ): Promise<ChannelEntity[]> {
    return this.channelsRepo.findBy({
      members: {
        id: memberId,
      },
    });
  }

  public async getChannelById(
    channelId: ChannelEntity["id"],
  ): Promise<ChannelEntity | null> {
    return this.channelsRepo.findOneBy({
      id: channelId,
    });
  }

  public async getChannelByIdOrFail(
    channelId: ChannelEntity["id"],
  ): Promise<ChannelEntity> {
    return this.channelsRepo.findOneByOrFail({
      id: channelId,
    });
  }

  public convertEntityToModel(entity: ChannelEntity): PrimitiveChannel {
    return {
      id: entity.id,
      name: entity.name,
      desc: entity.desc,
      avatarURL: entity.avatarURL,
      kind: entity.kind,
      memberLimit: entity.memberLimit,
      updatedAt: entity.updatedAt,
      createdAt: entity.createdAt,
    };
  }
}
