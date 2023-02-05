import { computed, ref, toRef, watch } from "vue";
import { useQuery } from "@vue/apollo-composable";
import { GET_CHANNEL_BY_ID } from "~/stores/channels/queries";
import type { Channel } from "./type";
import { defineStore } from "pinia";
import { useRoute } from "vue-router";

const useChannelStore = defineStore("channels", () => {
  const route = useRoute();

  const currentChannelId = computed<string | null>(
    () => route.params.id as any,
  );

  return { currentChannelId };
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
  };
};
