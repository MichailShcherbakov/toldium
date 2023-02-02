<script setup lang="ts">
import { ref } from "vue";
import { UiAvatar } from "~/components/ui";
import type { Message } from "~/stores/messages/type";
import { getRelativeTime } from "./helpers/getRelativeTime";

const props = defineProps<{
  message: Message;
  onlyContent?: boolean;
}>();

const showHidden = ref(false);
const messageTime = getRelativeTime(new Date(props.message.createdAt));

const OnPointerEnter = () => {
  showHidden.value = true;
};
const OnPointerLeave = () => {
  showHidden.value = false;
};
</script>

<template>
  <div
    class="flex flex-col w-full h-min"
    @pointerenter="OnPointerEnter"
    @pointerleave="OnPointerLeave"
  >
    <div class="flex flex-row w-full gap-4">
      <div class="flex flex-row flex-shrink-0 w-10 justify-end">
        <UiAvatar
          v-if="!onlyContent"
          :name="message.member?.user?.name ?? 'Unknown'"
          :url="message.member?.user?.avatarURL"
          size="sm"
        />
        <p
          v-if="onlyContent && showHidden"
          class="text-xs dark:text-gray-500 py-0.5"
        >
          {{ messageTime }}
        </p>
      </div>
      <div class="flex flex-col w-full overflow-hidden">
        <div
          v-if="!onlyContent"
          class="flex flex-row items-baseline w-full gap-2"
        >
          <p class="text-md font-medium dark:text-gray-400">
            {{ message.member?.user?.name }}
          </p>
          <p class="text-xs dark:text-gray-500">
            {{ messageTime }}
          </p>
        </div>
        <p class="w-full text-sm font-base dark:text-gray-100 break-words">
          {{ message.member?.user?.name }}
          {{ " " }}
          {{ message.createdAt }}
        </p>
      </div>
    </div>
  </div>
</template>
