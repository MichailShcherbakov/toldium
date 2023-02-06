import { computed } from "vue";
import { useQuery } from "@vue/apollo-composable";
import { GET_CHANNELS } from "~/stores/channels/queries";

export const useChannels = () => {
  const { result } = useQuery(GET_CHANNELS);

  const channels = computed(() => result.value?.getChannels ?? []);

  return { channels };
};
