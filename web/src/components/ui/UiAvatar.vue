<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
  name: string;
  url?: string | null;
  size?: "md" | "sm";
}>();

const firstLetter = computed(() => props.name.at(0)?.toUpperCase());
</script>

<template>
  <button
    class="flex flex-row flex-shrink-0 flex-grow-0 items-center justify-center cursor-pointer bg-blue-200 rounded-full focus:ring-2 ring-offset-2 ui-ring"
    :class="{ 'w-14 h-14': !size || size === 'md', 'w-10 h-10': size === 'sm' }"
  >
    <img
      v-if="url"
      alt="avatar"
      :src="url"
      class="rounded-full select-none"
      draggable="false"
    />
    <p v-else class="font-bold text-blue-600">{{ firstLetter }}</p>
  </button>
</template>
