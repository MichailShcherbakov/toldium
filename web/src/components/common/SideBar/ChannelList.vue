<script setup lang="ts">
import { useChannels } from "~/stores/channels";
import ChannelListItem from "./ChannelListItem.vue";

const { channels } = useChannels();
</script>

<template>
  <ul
    class="flex flex-col px-3 py-1 gap-1 overflow-y-auto overflow-x-hidden scrollbar-thin scrollbar-thumb-slate-600 scrollbar-track-slate-700/60 scrollbar-thumb-rounded-md scrollbar-track-rounded-md scrollbar-border-2"
  >
    <li
      v-for="channel in channels"
      :key="channel.id"
      class="flex flex-row w-full h-min"
    >
      <ChannelListItem :channel="channel" />
    </li>
  </ul>
</template>
