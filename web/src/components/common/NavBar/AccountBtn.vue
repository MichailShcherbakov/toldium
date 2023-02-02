<script setup lang="ts">
import { UiAvatar } from "~/components/ui";
import { useCurrentUser } from "~/stores/users/useCurrentUser";

const { currentUser } = useCurrentUser();
</script>

<template>
  <div
    class="relative flex flex-row items-center justify-center w-20 h-20 select-none"
  >
    <UiAvatar
      :name="currentUser?.name ?? 'Unknown'"
      :url="currentUser?.avatarURL"
    />
  </div>
</template>
