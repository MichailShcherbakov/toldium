<script setup lang="ts">
import UiLoading from "~/components/ui/UiSpinner.vue";

defineProps<{
  label: string;
  loading?: boolean;
}>();
</script>

<template>
  <button
    class="bg-blue-600 text-gray-100 rounded-sm flex flex-row items-center justify-center gap-2 h-10 hover:bg-blue-600/90 focus:ring-2 ring-offset-2 ring-offset-slate-700 ring-blue-600"
    :class="{
      'cursor-not-allowed bg-slate-800 hover:dark:bg-slate-800': loading,
    }"
  >
    <UiLoading
      v-if="loading"
      size="xs"
      bg-class="dark:text-slate-900"
      main-class="dark:text-slate-500"
    />
    <p v-if="!loading">{{ label }}</p>
  </button>
</template>
