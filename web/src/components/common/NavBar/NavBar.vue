<script setup lang="ts">
import AccountBtn from "./AccountBtn.vue";
import AddChannelBtn from "./AddChannelBtn.vue";
import ChannelList from "./ChannelList.vue";
// import CategoryList from "./CategoryList.vue";
</script>

<template>
  <nav
    class="flex flex-col flex-shrink-0 h-full dark:bg-zinc-900/80 bg-gray-100 overflow-y-auto overflow-x-hidden pt-3"
  >
    <AccountBtn />
    <div class="flex flex-row items-center justify-center mb-2">
      <hr class="w-8 h-0 rounded border-t-2 dark:border-t-gray-700" />
    </div>
    <ChannelList />
    <AddChannelBtn />
  </nav>
</template>
