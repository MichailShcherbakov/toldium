import { ref, watch } from "vue";
import { useQuery } from "@vue/apollo-composable";
import { GET_CHANNELS } from "~/stores/channels/queries";
import type { Channel } from "./type";
import { useCurrentUser } from "../users/useCurrentUser";

export const useChannels = () => {
  const { currentUserId } = useCurrentUser();

  const channels = ref<Channel[]>([]);

  const { result } = useQuery(GET_CHANNELS, () => ({
    userId: currentUserId.value,
  }));

  watch(result, (value) => {
    channels.value = value.getChannels;
  });

  return { channels };
};
