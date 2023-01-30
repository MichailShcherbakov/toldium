import { Column, Entity, OneToMany } from "typeorm";
import { IEntity } from "./entity.interface";
import MemberEntity from "./member.entity";
import MessageEntity from "./message.entity";

export enum ChannelKind {
  DIALOG = "DIALOG",
  GROUP = "GROUP",
  PUBLIC = "PUBLIC",
}

@Entity({ name: "channels" })
export class ChannelEntity extends IEntity {
  @Column({ length: 255, nullable: true })
  name!: string;

  @Column({ length: 2048, nullable: true })
  desc!: string;

  @Column({ name: "avatar_url", nullable: true })
  avatarURL!: string;

  @Column({ nullable: true })
  kind!: ChannelKind;

  @Column({ name: "member_limit", nullable: true })
  memberLimit!: number;

  @OneToMany(_type => MemberEntity, member => member.channel)
  members!: MemberEntity[];

  @OneToMany(_type => MessageEntity, message => message.channel)
  messages!: MessageEntity[];
}

export default ChannelEntity;
