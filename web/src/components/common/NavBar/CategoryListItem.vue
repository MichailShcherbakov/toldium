<script setup lang="ts">
import { UiChip } from "~/components/ui";

defineProps<{
  label: string;
  unread?: number;
  isActive?: boolean;
}>();
</script>

<template>
  <button
    class="flex flex-col w-20 h-16 full items-center justify-center gap-1 rounded hover:dark:bg-slate-700/40"
    :class="{ 'dark:bg-slate-700/70 hover:dark:bg-slate-700/70': isActive }"
  >
    <div
      class="category-list-item__icon dark:text-slate-400 relative"
      :class="{ 'dark:text-gray-200': isActive }"
    >
      <UiChip
        v-if="unread"
        :label="unread.toString()"
        class="absolute -top-1 -right-2"
      />
      <slot name="icon" />
    </div>
    <span
      class="text-sm text-slate-400"
      :class="{ 'dark:text-gray-200': isActive }"
    >
      {{ label }}
    </span>
  </button>
</template>

<style lang="scss">
.category-list-item__icon > svg {
  @apply w-6 h-6;
}
</style>
