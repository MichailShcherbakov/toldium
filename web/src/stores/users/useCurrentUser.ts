import { useQuery } from "@vue/apollo-composable";
import { defineStore } from "pinia";
import { ref, toRef, watch } from "vue";
import { GET_USER_BY_ID } from "./queries";
import type { User } from "./type";

export const useUserStore = defineStore("users", () => {
  const currentUserId = ref<User["id"] | null>(
    "330e65b8-ac85-472f-ac0f-24702bf8b56c",
  );

  function setCurrentUserId(id: User["id"]) {
    currentUserId.value = id;
  }

  return {
    currentUserId,
    setCurrentUserId,
  };
});

export const useCurrentUser = () => {
  const currentUser = ref<User | null>(null);

  const userStore = useUserStore();

  const { result } = useQuery(GET_USER_BY_ID, () => ({
    userId: userStore.currentUserId,
  }));

  watch(result, (value) => {
    currentUser.value = value.getUserById;
  });

  return { currentUser, currentUserId: toRef(userStore, "currentUserId") };
};
