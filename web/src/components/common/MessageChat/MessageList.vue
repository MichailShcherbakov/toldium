<script setup lang="ts">
import { computed } from "vue";
import { useCurrentChannelMessages } from "~/stores/messages/useCurrentChannelMessages";
import MessageListItem from "./MessageListItem.vue";

const { messages } = useCurrentChannelMessages();

const groupedMessages = computed(() => {
  let msgs = [...messages.value];

  if (!msgs.length) return [];

  let currentMessageMemberId = null;
  const groupedMessages = [];

  for (const message of msgs) {
    const isGrouped = currentMessageMemberId === message.member?.id;

    groupedMessages.push({
      message,
      isGrouped,
    });

    currentMessageMemberId = message.member?.id;
  }

  return groupedMessages.sort(
    (a, b) =>
      new Date(b.message.createdAt).getTime() -
      new Date(a.message.createdAt).getTime(),
  );
});
</script>

<template>
  <ul
    class="flex flex-col-reverse flex-1 mx-1 gap-4 overflow-x-hidden overflow-y-auto scrollbar-thin scrollbar-thumb-slate-600 scrollbar-track-slate-700/60 scrollbar-thumb-rounded-md scrollbar-track-rounded-md"
  >
    <li
      v-for="{ message, isGrouped } in groupedMessages"
      :key="message.id"
      class="flex flex-row w-full h-min"
    >
      <MessageListItem :message="message" :onlyContent="isGrouped" />
    </li>
  </ul>
</template>
