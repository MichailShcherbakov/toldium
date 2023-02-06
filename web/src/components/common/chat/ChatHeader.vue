<script setup lang="ts">
import UiAvatar from "~/components/ui/UiAvatar.vue";
import { useCurrentChannel } from "~/stores/channels/useCurrentChannel";

const { currentChannel } = useCurrentChannel();
</script>

<template>
  <div
    class="w-fill h-16 flex flex-row items-center px-4 z-10 shadow-midnight-600 shadow-divider-b"
  >
    <div class="w-full h-full flex flex-row items-center gap-4">
      <UiAvatar
        :name="currentChannel?.name ?? ''"
        :url="currentChannel?.avatarURL"
      />
      <p class="text-gray-200">{{ currentChannel?.name }}</p>
    </div>
  </div>
</template>
