<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
  name: string;
  url?: string | null;
  size?: AvatarSize;
}>();

type AvatarSize = "xs" | "sm" | "md" | "lg" | "xl";

const SIZES: Record<AvatarSize, string> = {
  xs: "w-8 h-8",
  sm: "w-10 h-10",
  md: "w-12 h-12",
  lg: "w-14 h-14",
  xl: "w-16 h-16",
};

const firstLetter = computed(() => props.name.at(0)?.toUpperCase());
const sizeClass = computed(() => SIZES[props.size ?? "md"]);
</script>

<template>
  <div
    class="flex flex-row flex-shrink-0 flex-grow-0 items-center justify-center cursor-pointer bg-blue-200 focus:ring-2 ring-offset-2 ui-ring overflow-hidden rounded-full"
    :class="sizeClass"
  >
    <img
      v-if="url"
      alt="avatar"
      :src="url"
      class="select-none"
      draggable="false"
    />
    <p v-else class="font-bold text-blue-600">{{ firstLetter }}</p>
  </div>
</template>
