<script setup lang="ts">
defineProps<{
  label: string;
  modelValue: string;
  required?: boolean;
  secure?: boolean;
}>();

defineEmits(["update:modelValue"]);
</script>

<template>
  <div class="flex flex-col w-full gap-2">
    <div class="flex flex-row w-full items-center">
      <p class="text-xs font-bold dark:text-gray-300 uppercase">{{ label }}</p>
      <span v-if="required" class="text-xs dark:text-red-500 uppercase ml-1">
        *
      </span>
    </div>
    <input
      :type="secure ? 'password' : 'text'"
      :value="modelValue"
      @input="$emit('update:modelValue', ($event.target as any)?.value)"
      class="p-3 rounded-sm h-10 outline-none dark:bg-gray-800 dark:text-gray-100"
    />
  </div>
</template>
