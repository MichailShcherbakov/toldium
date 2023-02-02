import { ref, watch } from "vue";
import { useQuery } from "@vue/apollo-composable";
import type { Message } from "./type";
import { GET_CHANNEL_MESSAGES_BY_CHANNEL_ID } from "./queries";
import { useCurrentChannel } from "../channels";

export const useCurrentChannelMessages = () => {
  const { currentChannelId } = useCurrentChannel();

  const messages = ref<Message[]>([]);

  const { result } = useQuery(GET_CHANNEL_MESSAGES_BY_CHANNEL_ID, () => ({
    channelId: currentChannelId.value,
  }));

  watch(result, (value) => {
    messages.value = value.getMessagesByChannelId;
  });

  return {
    messages,
  };
};
