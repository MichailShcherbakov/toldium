import { useMutation } from "@vue/apollo-composable";
import { useCurrentChannel } from "../channels/useCurrentChannel";
import { useCurrentChannelMember } from "../members/useCurrentChannelMember";
import {
  CREATE_MESSAGE_MUT,
  GET_CHANNEL_MESSAGES_BY_CHANNEL_ID,
} from "./queries";

export const useSendMessage = () => {
  const { currentChannelId } = useCurrentChannel();
  const { currentMemberId } = useCurrentChannelMember();

  const { mutate } = useMutation(CREATE_MESSAGE_MUT, () => ({
    update: (cache, { data: givenData }) => {
      if (!givenData) return;

      console.log(
        cache.readQuery({
          query: GET_CHANNEL_MESSAGES_BY_CHANNEL_ID,
          variables: {
            channelId: currentChannelId.value,
          },
        }),
      );

      let data = cache.readQuery({
        query: GET_CHANNEL_MESSAGES_BY_CHANNEL_ID,
        variables: {
          channelId: currentChannelId.value,
        },
      });

      if (!data) return;

      data = {
        ...data,
        getMessagesByChannelId: [
          ...data.getMessagesByChannelId,
          givenData.createMessage,
        ],
      };

      cache.writeQuery({
        query: GET_CHANNEL_MESSAGES_BY_CHANNEL_ID,
        variables: {
          channelId: currentChannelId.value,
        },
        data,
      });
    },
  }));

  function sendMessage(content: string) {
    if (!currentChannelId.value || !currentMemberId.value) return;

    mutate({
      createMessageInput: {
        content,
        channelId: currentChannelId.value,
        memberId: currentMemberId.value,
      },
    });
  }

  return {
    sendMessage,
  };
};
