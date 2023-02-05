<script setup lang="ts">
import { computed } from "vue";
import { ChannelKind, useChannels, useCurrentChannel } from "~/stores/channels";
import { useGoToChannelPage } from "~/router/routes/useGoToChannelPage";
import ChannelListItem from "./ChannelListItem.vue";

const { channels } = useChannels();
const { currentChannelId } = useCurrentChannel();

const pubChannels = computed(() =>
  channels.value.filter(
    (channel) =>
      channel.kind === ChannelKind.GROUP || channel.kind === ChannelKind.PUBLIC,
  ),
);

const { navigate } = useGoToChannelPage();

const handlerChannelListItemClick = (channelId: string) => {
  navigate(channelId);
};
</script>

<template>
  <ul>
    <li v-for="channel in pubChannels" :key="channel.id">
      <ChannelListItem
        :channel="channel"
        :isActive="channel.id === currentChannelId"
        @click="handlerChannelListItemClick(channel.id)"
      />
    </li>
  </ul>
</template>
