import { computed } from "vue";
import { useQuery } from "@vue/apollo-composable";
import {
  GET_CHANNEL_MESSAGES_BY_CHANNEL_ID,
  ON_MESSAGE_CREATED_SUBS,
} from "./queries";
import { useCurrentChannel } from "../channels/useCurrentChannel";

export const useCurrentChannelMessages = () => {
  const { currentChannelId } = useCurrentChannel();

  const { result, subscribeToMore } = useQuery(
    GET_CHANNEL_MESSAGES_BY_CHANNEL_ID,
    () => ({
      channelId: currentChannelId.value,
    }),
  );

  subscribeToMore(() => ({
    document: ON_MESSAGE_CREATED_SUBS,
    variables: {
      channelId: currentChannelId.value,
    },
    updateQuery: (prev, { subscriptionData }) => {
      if (!subscriptionData.data) return prev;

      const newMessage = subscriptionData.data.onMessageCreated;

      return Object.assign({}, prev, {
        post: {
          comments: [newMessage, ...prev.getMessagesByChannelId],
        },
      });
    },
  }));

  const messages = computed(() => result.value?.getMessagesByChannelId ?? []);

  return {
    messages,
  };
};
