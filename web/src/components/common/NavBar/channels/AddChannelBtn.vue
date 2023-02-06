<script setup lang="ts">
import AddIcon from "~/assets/icons/add.svg?component";
</script>

<template>
  <button
    class="relative flex flex-row items-center justify-center px-3 py-1 select-none animate-smooth-rounded"
  >
    <div
      class="flex flex-row items-center justify-center w-12 h-12 dark:bg-midnight-100 animate-smooth-rounded__target"
    >
      <AddIcon class="w-8 h-8 dark:text-blue-600" />
    </div>
  </button>
</template>
