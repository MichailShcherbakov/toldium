import { computed } from "vue";
import { useCurrentUser } from "../users/useCurrentUser";
import { useCurrentChannelMembers } from "./useCurrentChannelMembers";

export const useCurrentChannelMember = () => {
  const { currentUserId } = useCurrentUser();
  const { members } = useCurrentChannelMembers();

  const currentMember = computed(
    () =>
      members.value.find((member) => member.userId === currentUserId.value) ??
      null,
  );

  const currentMemberId = computed(() => currentMember.value?.id ?? null);

  return {
    currentMember,
    currentMemberId,
  };
};
