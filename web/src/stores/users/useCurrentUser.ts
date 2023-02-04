import { useQuery } from "@vue/apollo-composable";
import { computed, ref, toRef, watch } from "vue";
import { WHO_AM_I } from "./queries";
import type { User } from "./type";

export const useCurrentUser = () => {
  const currentUser = ref<User | null>(null);

  const { result } = useQuery(WHO_AM_I);

  watch(result, (value) => {
    currentUser.value = value.whoAmI;
  });

  const currentUserId = computed(() => currentUser.value?.id);

  return { currentUser, currentUserId };
};
