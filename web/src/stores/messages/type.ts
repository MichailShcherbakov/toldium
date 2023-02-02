import type { Channel } from "../channels/type";
import type { Member } from "../members/type";

export type Message = {
  id: string;
  content: string;
  memberId: string;
  member: Member | null;
  channelId: string;
  channel: Channel | null;
  updatedAt: Date;
  createdAt: Date;
};
