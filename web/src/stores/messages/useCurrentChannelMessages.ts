import { computed } from "vue";
import { useQuery } from "@vue/apollo-composable";
import { GET_CHANNEL_MESSAGES_BY_CHANNEL_ID } from "./queries";
import { useCurrentChannel } from "../channels/useCurrentChannel";

export const useCurrentChannelMessages = () => {
  const { currentChannelId } = useCurrentChannel();

  const { result } = useQuery(GET_CHANNEL_MESSAGES_BY_CHANNEL_ID, () => ({
    channelId: currentChannelId.value,
  }));

  const messages = computed(() => result.value?.getMessagesByChannelId ?? []);

  return {
    messages,
  };
};
