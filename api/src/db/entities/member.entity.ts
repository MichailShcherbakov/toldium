import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import ChannelEntity from "./channel.entity";
import { IEntity } from "./entity.interface";
import UserEntity from "./user.entity";

@Entity({ name: "members" })
export class MemberEntity extends IEntity {
  @Column({ name: "channel_id", type: "uuid" })
  channelId!: ChannelEntity["id"];

  @ManyToOne(_type => ChannelEntity)
  @JoinColumn({ name: "channel_id" })
  channel!: ChannelEntity | undefined;

  @Column({ name: "user_id", type: "uuid" })
  userId!: UserEntity["id"];

  @ManyToOne(_type => UserEntity)
  @JoinColumn({ name: "user_id" })
  user!: UserEntity | undefined;
}

export default MemberEntity;
