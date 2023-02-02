import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { In, Repository } from "typeorm";
import ChannelEntity from "~/db/entities/channel.entity";
import MemberEntity from "~/db/entities/member.entity";
import UserEntity from "~/db/entities/user.entity";
import { Member } from "./members.model";

export type PrimitiveMember = Omit<Member, "channel" | "user">;

@Injectable()
export class MembersService {
  public constructor(
    @InjectRepository(MemberEntity)
    private readonly membersRepo: Repository<MemberEntity>,
  ) {}

  public async getMemberById(
    memberId: MemberEntity["id"],
  ): Promise<MemberEntity | null> {
    return this.membersRepo.findOneBy({
      id: memberId,
    });
  }

  public async getMemberByIdOrFail(
    memberId: MemberEntity["id"],
  ): Promise<MemberEntity> {
    return this.membersRepo.findOneByOrFail({
      id: memberId,
    });
  }

  public async getMembersByChannelIds(
    channelIds: UserEntity["id"][],
  ): Promise<MemberEntity[]> {
    return this.membersRepo.findBy({
      channelId: In(channelIds),
    });
  }

  public async getMemberByUserId(
    userId: UserEntity["id"],
  ): Promise<MemberEntity | null> {
    return this.membersRepo.findOneBy({
      userId,
    });
  }

  public async getMemberByUserIdOrFail(
    userId: UserEntity["id"],
  ): Promise<MemberEntity> {
    return this.membersRepo.findOneByOrFail({
      userId,
    });
  }

  public async getMembersByChannelId(
    channelId: ChannelEntity["id"],
  ): Promise<MemberEntity[]> {
    return this.membersRepo.findBy({
      channelId,
    });
  }

  public async getMemberByChannelId(
    channelId: ChannelEntity["id"],
  ): Promise<MemberEntity | null> {
    return this.membersRepo.findOneBy({
      channelId,
    });
  }

  public async getMemberByChannelIdOfFail(
    channelId: ChannelEntity["id"],
  ): Promise<MemberEntity> {
    return this.membersRepo.findOneByOrFail({
      channelId,
    });
  }

  public convertEntityToModel(entity: MemberEntity): PrimitiveMember {
    return {
      id: entity.id,
      channelId: entity.channelId,
      userId: entity.userId,
      updatedAt: entity.updatedAt,
      createdAt: entity.createdAt,
    };
  }
}
