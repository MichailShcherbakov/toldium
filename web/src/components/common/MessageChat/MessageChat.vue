<script setup lang="ts">
import InfoIcon from "~/assets/icons/info.svg?component";
import UiIconBtn from "~/components/ui/UiIconBtn.vue";
import MessageList from "./MessageList.vue";
import { useCurrentChannel } from "~/stores/channels/useCurrentChannel";
import MessageInput from "./MessageInput.vue";

const { currentChannel } = useCurrentChannel();
</script>

<template>
  <div class="flex flex-col flex-1 py-6 overflow-x-hidden overflow-y-auto">
    <div
      class="flex flex-row flex-shrink-0 items-center justify-between h-14 px-6"
    >
      <div class="flex flex-row items-center">
        <p class="text-base font-medium mr-1.5 dark:text-white">
          {{ currentChannel?.name }}
        </p>
        <p class="text-base text-gray-400 dark:text-slate-500">
          was online today at 15:30 using iPhone
        </p>
      </div>
      <div class="flex flex-row items-center">
        <UiIconBtn>
          <InfoIcon class="w-7 h-7" />
        </UiIconBtn>
      </div>
    </div>
    <MessageList class="px-6" />
    <MessageInput />
  </div>
</template>
