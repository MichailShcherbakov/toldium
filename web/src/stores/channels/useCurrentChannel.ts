import { ref, toRef, watch } from "vue";
import { useQuery } from "@vue/apollo-composable";
import { GET_CHANNEL_BY_ID } from "~/stores/channels/queries";
import type { Channel } from "./type";
import { defineStore } from "pinia";

const useChannelStore = defineStore("channels", () => {
  const currentChannelId = ref<string | null>(null);

  function setCurrentChannelId(channelId: Channel["id"] | null) {
    currentChannelId.value = channelId;
  }

  return { currentChannelId, setCurrentChannelId };
});

export const useCurrentChannel = () => {
  const currentChannel = ref<Channel | null>(null);

  const channelStore = useChannelStore();

  const { result } = useQuery(GET_CHANNEL_BY_ID, () => ({
    channelId: channelStore.currentChannelId,
  }));

  watch(result, (value) => {
    currentChannel.value = value.getChannelById;
  });

  return {
    currentChannel,
    currentChannelId: toRef(channelStore, "currentChannelId"),
    setCurrentChannelId: channelStore.setCurrentChannelId,
  };
};
