import { useQuery } from "@vue/apollo-composable";
import { computed } from "vue";
import { useCurrentChannel } from "../channels";
import { GET_CHANNEL_MEMBERS_BY_CHANNEL_ID } from "./queries";

export const useCurrentChannelMembers = () => {
  const { currentChannelId } = useCurrentChannel();

  const { result } = useQuery(GET_CHANNEL_MEMBERS_BY_CHANNEL_ID, () => ({
    channelId: currentChannelId.value,
  }));

  const members = computed(() => result.value?.getMembersByChannelId ?? []);

  return {
    members,
  };
};
