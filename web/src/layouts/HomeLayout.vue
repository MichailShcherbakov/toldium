<script setup lang="ts">
import MessageChat from "~/components/common/MessageChat/MessageChat.vue";
import NavBar from "~/components/common/NavBar/NavBar.vue";
import SideBar from "~/components/common/SideBar/SideBar.vue";
import { useCurrentChannel } from "~/stores/channels";

const { currentChannel } = useCurrentChannel();
</script>

<template>
  <main
    class="flex flex-row w-screen h-screen bg-white dark:bg-slate-900/90 overflow-hidden"
  >
    <NavBar />
    <SideBar />
    <MessageChat v-if="currentChannel" />
  </main>
</template>

<style lang="scss"></style>
