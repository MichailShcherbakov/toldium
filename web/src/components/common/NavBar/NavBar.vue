<script setup lang="ts">
import AccountBtn from "./AccountBtn.vue";
import AddChannelBtn from "./channels/AddChannelBtn.vue";
import ChannelList from "./channels/ChannelList.vue";
</script>

<template>
  <nav
    class="flex flex-col flex-shrink-0 h-full dark:bg-midnight-900 bg-gray-100 overflow-y-auto overflow-x-hidden pt-3"
  >
    <AccountBtn />
    <div class="flex flex-row items-center justify-center mb-2">
      <hr class="w-8 h-0 rounded border-t-2 dark:border-t-gray-700" />
    </div>
    <ChannelList />
    <AddChannelBtn />
  </nav>
</template>
