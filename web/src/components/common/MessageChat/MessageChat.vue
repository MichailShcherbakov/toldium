<script setup lang="ts">
import InfoIcon from "~/assets/icons/info.svg?component";
import UiIconBtn from "~/components/ui/UiIconBtn.vue";
import MessageList from "./MessageList.vue";
import MessageInput from "./MessageInput.vue";
import ChatHeader from "../chat/ChatHeader.vue";
</script>

<template>
  <div class="flex flex-col flex-1 overflow-x-hidden overflow-y-auto">
    <ChatHeader />
    <MessageList />
    <MessageInput />
  </div>
</template>
