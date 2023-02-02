<script setup lang="ts">
import { computed } from "vue";
import { UiAvatar, UiChip } from "~/components/ui";
import { useCurrentChannel } from "~/stores/channels";
import { ChannelKind, type Channel } from "~/stores/channels/type";
import { useCurrentUser } from "~/stores/users/useCurrentUser";
import { getRelativeTime } from "./helpers/getRelativeTime";
import PublicIcon from "~/assets/icons/public.svg?component";
import GroupIcon from "~/assets/icons/group.svg?component";

const props = defineProps<{
  channel: Channel;
}>();

const { currentUserId } = useCurrentUser();
const { currentChannelId, setCurrentChannelId } = useCurrentChannel();

const isActive = computed(() => props.channel.id === currentChannelId.value);

const messageTime = computed(() =>
  props.channel.lastMessage
    ? getRelativeTime(new Date(props.channel.lastMessage.createdAt))
    : null,
);

const senderName = computed(() =>
  props.channel.lastMessage?.member?.user?.id === currentUserId.value
    ? "You"
    : props.channel.lastMessage?.member?.user?.name,
);

function onClick() {
  setCurrentChannelId(props.channel.id);
}
</script>

<template>
  <button
    class="flex flex-row flex-1 items-center w-full h-20 px-3 rounded-lg gap-4 select-none cursor-pointer hover:bg-gray-100 hover:dark:bg-slate-700/40 focus:ring-2 ring-offset-1 ui-ring overflow-hidden"
    :class="{ 'dark:bg-slate-700/70 hover:dark:bg-slate-700/70': isActive }"
    @click="onClick"
  >
    <UiAvatar :name="channel.name" :url="channel.avatarURL" />
    <div
      class="relative flex flex-col w-full h-full overflow-hidden justify-center"
    >
      <div class="flex flex-row w-full overflow-hidden items-center gap-1">
        <PublicIcon
          v-if="props.channel.kind === ChannelKind.PUBLIC"
          class="flex flex-shrink-0 w-4 h-4 text-gray-200"
        />
        <GroupIcon
          v-else-if="props.channel.kind === ChannelKind.GROUP"
          class="flex flex-shrink-0 w-4 h-4 text-gray-200"
        />
        <p
          class="w-full text-sm text-left font-semibold text-gray-800 dark:text-gray-200 truncate"
        >
          {{ channel.name }}
        </p>
        <p
          class="min-w-min text-sm text-left font-medium text-gray-500 truncate"
        >
          {{ messageTime }}
        </p>
      </div>
      <div class="flex flex-col">
        <p
          class="text-left text-sm font-medium text-gray-200 truncate w-3/4 min-h-min"
        >
          {{ senderName }}
        </p>
        <div class="flex flex-row items-center overflow-hidden w-full gap-1">
          <p
            class="w-full text-left text-sm font-medium text-gray-500 truncate"
          >
            {{ channel.lastMessage?.content }}
          </p>
          <div class="flex flex-row-reverse items-center gap-1">
            <!-- <UiChip v-if="channel.unread" :label="channel.unread.toString()" /> -->
            <UiChip label="48" />
          </div>
        </div>
      </div>
    </div>
  </button>
</template>
