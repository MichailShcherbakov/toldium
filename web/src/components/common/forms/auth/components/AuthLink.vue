<script setup lang="ts">
defineProps<{
  label: string;
  href: string;
}>();
</script>

<template>
  <a
    :href="href"
    class="w-min h-min truncate text-blue-400 font-medium cursor-pointer hover:text-blue-500"
  >
    {{ label }}
  </a>
</template>
