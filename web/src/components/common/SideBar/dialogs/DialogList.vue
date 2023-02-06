<script setup lang="ts">
import { computed } from "vue";
import { ChannelKindEnum } from "~/gql/graphql";
import { useChannels } from "~/stores/channels/useChannels";
import ChannelListItem from "./DialogListItem.vue";

const { channels } = useChannels();
const dialogs = computed(() =>
  channels.value.filter((channel) => channel.kind === ChannelKindEnum.Dialog),
);
</script>

<template>
  <ul
    class="flex flex-col px-3 py-1 gap-1 overflow-y-auto overflow-x-hidden scrollbar-thin scrollbar-thumb-slate-600 scrollbar-track-slate-700/60 scrollbar-thumb-rounded-md scrollbar-track-rounded-md scrollbar-border-2"
  >
    <li
      v-for="dialog in dialogs"
      :key="dialog.id"
      class="flex flex-row w-full h-min"
    >
      <ChannelListItem :channel="dialog" />
    </li>
  </ul>
</template>
