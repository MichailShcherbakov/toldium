<script setup lang="ts">
import { computed } from "vue";
import { useChannelStore } from "~/stores/channels/useCurrentChannel";
import { useGoToChannelPage } from "~/router/routes/useGoToChannelPage";
import ChannelListItem from "../channels/ChannelListItem.vue";
import { useChannels } from "~/stores/channels/useChannels";
import { ChannelKindEnum } from "~/gql/graphql";

const { channels } = useChannels();
const channelStore = useChannelStore();

const pubChannels = computed(() =>
  channels.value.filter(
    (channel) =>
      channel.kind === ChannelKindEnum.Group ||
      channel.kind === ChannelKindEnum.Public,
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
        :isActive="channel.id === channelStore.currentChannelId"
        @click="handlerChannelListItemClick(channel.id)"
      />
    </li>
  </ul>
</template>
