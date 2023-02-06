<script setup lang="ts">
import { computed } from "vue";
import { useCurrentChannelMessages } from "~/stores/messages/useCurrentChannelMessages";
import MessageListItem from "./MessageListItem.vue";
import _ from "lodash";
import { isAtFiveMinutesPeriod } from "./helpers/getRelativeTime";

const { messages } = useCurrentChannelMessages();

const messageGroups = computed(() => {
  let rootMessage = null;

  const groupedMessages = [];

  for (const message of messages.value) {
    const isGrouped = Boolean(
      rootMessage &&
        rootMessage.member.id === message.member.id &&
        isAtFiveMinutesPeriod(
          new Date(rootMessage.createdAt),
          new Date(message.createdAt),
        ),
    );

    groupedMessages.push({
      message,
      isGrouped,
    });

    if (!isGrouped) {
      rootMessage = message;
    }
  }

  return _.orderBy(
    groupedMessages,
    [(msg) => new Date(msg.message.createdAt).getTime()],
    ["desc"],
  );
});
</script>

<template>
  <ul
    class="flex flex-col-reverse flex-1 overflow-x-hidden overflow-y-auto scroller"
  >
    <li
      v-for="{ message, isGrouped } in messageGroups"
      :key="message.id"
      class="flex flex-row w-full h-min"
    >
      <MessageListItem :message="message" :onlyContent="isGrouped" />
    </li>
  </ul>
</template>
