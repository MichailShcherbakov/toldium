<script setup lang="ts">
defineProps<{
  label: string;
}>();
</script>

<template>
  <button
    class="bg-blue-600 text-gray-100 rounded-sm h-10 hover:bg-blue-600/90 focus:ring-2 ring-offset-2 ring-offset-slate-700 ring-blue-600"
  >
    {{ label }}
  </button>
</template>
