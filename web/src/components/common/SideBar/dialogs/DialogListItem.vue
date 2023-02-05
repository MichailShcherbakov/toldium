<script setup lang="ts">
import { computed } from "vue";
import { UiAvatar, UiChip } from "~/components/ui";
import { useGoToHomeChannelPage } from "~/router/routes/useGoToHomeChannelPage";
import { useCurrentChannel, type Channel } from "~/stores/channels";
import { useCurrentUser } from "~/stores/users/useCurrentUser";
import { getRelativeTime } from "../helpers/getRelativeTime";

const props = defineProps<{
  channel: Channel;
}>();

const { navigate } = useGoToHomeChannelPage();
const { currentUserId } = useCurrentUser();
const { currentChannelId } = useCurrentChannel();

const isActive = computed(() => props.channel.id === currentChannelId.value);

const messageTime = computed(() =>
  props.channel.lastMessage
    ? getRelativeTime(new Date(props.channel.lastMessage.createdAt))
    : null,
);

const senderName = computed(() =>
  props.channel.lastMessage?.member?.user?.id === currentUserId.value
    ? "You"
    : null,
);

function handleClick() {
  navigate(props.channel.id);
}
</script>

<template>
  <button
    class="flex flex-row flex-1 items-center w-full h-16 px-3 rounded gap-3 select-none cursor-pointer hover:bg-gray-100 hover:dark:bg-slate-700/40 focus:ring-2 ring-offset-1 ui-ring overflow-hidden"
    :class="{ 'dark:bg-slate-700/70 hover:dark:bg-slate-700/70': isActive }"
    @click="handleClick"
  >
    <UiAvatar :name="channel.name" :url="channel.avatarURL" size="md" />
    <div
      class="relative flex flex-col w-full h-full overflow-hidden justify-center gap-0.5"
    >
      <div class="flex flex-row w-full overflow-hidden items-center gap-1">
        <p
          class="w-full text-sm text-left font-semibold text-gray-800 dark:text-gray-200 truncate"
        >
          {{ channel.name }}
        </p>
        <p
          v-if="channel.lastMessage"
          class="min-w-min text-sm text-left font-medium text-gray-500 truncate"
        >
          {{ messageTime }}
        </p>
      </div>
      <div
        v-if="channel.lastMessage"
        class="flex flex-row items-center overflow-hidden w-full gap-1"
      >
        <p
          v-if="senderName"
          class="text-left text-sm font-medium text-gray-500 truncate min-w-min"
        >
          {{ senderName }}:
        </p>
        <p class="w-full text-left text-sm font-medium text-gray-400 truncate">
          {{ channel.lastMessage?.content }}
        </p>
        <div class="flex flex-row-reverse items-center gap-1">
          <!-- <UiChip v-if="channel.unread" :label="channel.unread.toString()" /> -->
          <UiChip label="48" />
        </div>
      </div>
    </div>
  </button>
</template>
