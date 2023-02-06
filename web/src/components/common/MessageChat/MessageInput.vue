<script setup lang="ts">
import AttachIcon from "~/assets/icons/attach.svg?component";
import SendIcon from "~/assets/icons/send.svg?component";
import EmojiIcon from "~/assets/icons/emoji.svg?component";
import MicIcon from "~/assets/icons/mic.svg?component";
import UiInput from "~/components/ui/UiInput.vue";
import UiIconBtn from "~/components/ui/UiIconBtn.vue";
import { ref } from "vue";
import { useSendMessage } from "~/stores/messages/useSendMessage";

const { sendMessage } = useSendMessage();

const content = ref("");

function handleSubmit() {
  sendMessage(content.value);
}
</script>

<template>
  <form
    class="flex flex-row flex-shrink-0 w-auto h-min max-h-1/2 px-6 pt-6"
    @submit.prevent="handleSubmit"
  >
    <div
      class="flex flex-row flex-shrink-0 w-full h-full px-2 gap-2 border border-gray-200 bg-gray-50 dark:border-slate-700 dark:bg-slate-700 rounded-lg overflow-y-auto overflow-x-hidden scrollbar-thin scrollbar-thumb-slate-600 scrollbar-track-slate-700/60 scrollbar-thumb-rounded-md scrollbar-track-rounded-md scrollbar-border-2"
    >
      <div class="sticky top-0 flex flex-row items-center w-min h-min p-0.5">
        <UiIconBtn
          class="dark:text-gray-200 hover:dark:bg-slate-600/80 active:dark:bg-slate-600"
        >
          <AttachIcon class="w-6 h-6 dark:text-gray-200" />
        </UiIconBtn>
      </div>
      <UiInput v-model="content" class="w-full h-min py-2.5" />
      <div class="sticky top-0 flex flex-row items-center w-min h-min p-0.5">
        <UiIconBtn
          class="dark:text-gray-200 hover:dark:bg-slate-600/80 active:dark:bg-slate-600"
        >
          <EmojiIcon class="w-6 h-6" />
        </UiIconBtn>
        <UiIconBtn
          class="dark:text-gray-200 hover:dark:bg-slate-600/80 active:dark:bg-slate-600"
        >
          <MicIcon class="w-6 h-6 dark:text-gray-200" />
        </UiIconBtn>
        <UiIconBtn
          type="submit"
          class="dark:text-gray-200 hover:dark:bg-slate-600/80 active:dark:bg-slate-600"
        >
          <SendIcon class="w-6 h-6 dark:text-gray-200" />
        </UiIconBtn>
      </div>
    </div>
  </form>
</template>
