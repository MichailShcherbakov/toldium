<script setup lang="ts">
import AttachIcon from "~/assets/icons/attach.svg?component";
import SendIcon from "~/assets/icons/send.svg?component";
import EmojIcon from "~/assets/icons/emoji.svg?component";
import MicIcon from "~/assets/icons/mic.svg?component";
import InfoIcon from "~/assets/icons/info.svg?component";
import UiInput from "~/components/ui/UiInput.vue";
import UiIconBtn from "~/components/ui/UiIconBtn.vue";
import MessageList from "./MessageList.vue";
import { useCurrentChannel } from "~/stores/channels";

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
    <div class="flex flex-row flex-shrink-0 w-auto h-min max-h-1/2 px-6 pt-6">
      <div
        class="flex flex-row flex-shrink-0 w-full h-full gap-1.5 border border-gray-200 bg-gray-50 dark:border-slate-700 dark:bg-slate-700 rounded-lg overflow-y-auto overflow-x-hidden scrollbar-thin scrollbar-thumb-slate-600 scrollbar-track-slate-700/60 scrollbar-thumb-rounded-md scrollbar-track-rounded-md scrollbar-border-2"
      >
        <div class="sticky top-0 flex flex-row items-center w-min h-min p-0.5">
          <UiIconBtn>
            <AttachIcon class="w-6 h-6" />
          </UiIconBtn>
        </div>
        <UiInput class="w-full h-min py-2.5" />
        <div class="sticky top-0 flex flex-row items-center w-min h-min p-0.5">
          <UiIconBtn>
            <EmojIcon class="w-6 h-6" />
          </UiIconBtn>
          <UiIconBtn>
            <MicIcon class="w-6 h-6" />
          </UiIconBtn>
          <UiIconBtn>
            <SendIcon class="w-6 h-6" />
          </UiIconBtn>
        </div>
      </div>
    </div>
  </div>
</template>
