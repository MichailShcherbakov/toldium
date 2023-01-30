import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import ChannelEntity from "./channel.entity";
import { IEntity } from "./entity.interface";
import MemberEntity from "./member.entity";

@Entity({ name: "messages" })
export class MessageEntity extends IEntity {
  @Column({ length: 4096 })
  content!: string;

  @Column({ name: "member_id", type: "uuid" })
  memberId!: MemberEntity["id"];

  @ManyToOne(() => MemberEntity)
  @JoinColumn({ name: "member_id" })
  member!: MemberEntity | undefined;

  @Column({ name: "channel_id", type: "uuid" })
  channelId!: ChannelEntity["id"];

  @ManyToOne(() => ChannelEntity)
  @JoinColumn({ name: "channel_id" })
  channel!: ChannelEntity | undefined;
}

export default MessageEntity;
