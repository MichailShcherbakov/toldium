import type { Message } from "../messages/type";

export enum ChannelKind {
  DIALOG = "DIALOG",
  GROUP = "GROUP",
  PUBLIC = "PUBLIC",
}

export type Channel = {
  id: string;
  name: string;
  desc: string | null;
  kind: ChannelKind;
  avatarURL: string | null;
  lastMessage: Message | null;
  unread: number;
  updatedAT: Date;
  createdAt: Date;
};
