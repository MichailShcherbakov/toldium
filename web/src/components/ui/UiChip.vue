<template>
  <div
    class="flex flex-row flex-shrink-0 flex-grow-0 rounded-xl border-3 border-white bg-blue-300 dark:border-gray-800/40 dark:bg-blue-600 px-1 py"
  >
    <span class="text-xs text-white">{{ label }}</span>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  label: string | number;
}>();
</script>
