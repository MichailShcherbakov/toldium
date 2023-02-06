import { computed, toRef } from "vue";
import { useQuery } from "@vue/apollo-composable";
import { GET_CHANNEL_BY_ID } from "~/stores/channels/queries";
import { defineStore } from "pinia";
import { useRoute } from "vue-router";

export const useChannelStore = defineStore("channels", () => {
  const route = useRoute();

  const currentChannelId = computed<string | null>(
    () => route.params.id as any,
  );

  return { currentChannelId };
});

export const useCurrentChannel = () => {
  const channelStore = useChannelStore();

  const { result } = useQuery(GET_CHANNEL_BY_ID, () => ({
    channelId: channelStore.currentChannelId,
  }));

  const currentChannel = computed(() => result.value?.getChannelById ?? null);

  return {
    currentChannel,
    currentChannelId: toRef(channelStore, "currentChannelId"),
  };
};
