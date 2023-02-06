import { useQuery } from "@vue/apollo-composable";
import { computed } from "vue";
import { WHO_AM_I } from "./queries";

export const useCurrentUser = () => {
  const { result } = useQuery(WHO_AM_I);

  const currentUser = computed(() => result.value?.whoAmI);
  const currentUserId = computed(() => currentUser.value?.id);

  return { currentUser, currentUserId };
};
