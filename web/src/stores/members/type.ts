import type { Channel } from "../channels/type";
import type { User } from "../users/type";

export type Member = {
  id: string;
  userId: string;
  user: User;
  channelId: string;
  channel: Channel;
};
