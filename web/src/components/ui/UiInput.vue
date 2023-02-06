<script setup lang="ts">
defineProps<{
  modelValue: string;
}>();

const emit = defineEmits(["update:modelValue"]);

function handleBlur(e: FocusEvent) {
  emit("update:modelValue", (e.target as any).innerText);
}

function handleEnterKeyDown(e: KeyboardEvent) {
  const target = e.target as HTMLElement;

  emit("update:modelValue", target.innerText);

  let parent = target.parentElement;

  while (parent) {
    if (parent.tagName === "FORM") {
      parent.dispatchEvent(
        new Event("submit", { cancelable: true, bubbles: true }),
      );
      break;
    }

    parent = parent.parentElement;
  }
}
</script>

<template>
  <div class="flex flex-row w-full h-full">
    <div
      role="textbox"
      contenteditable="true"
      autocorrect="off"
      spellcheck="true"
      class="flex flex-row w-full h-min items-start text-left resize-none outline-none select-text break-words text-black dark:text-white"
      tabindex="0"
      style="word-break: break-word; white-space: break-spaces"
      @blur="handleBlur"
      @keydown.enter.prevent="handleEnterKeyDown"
    >
      {{ modelValue }}
    </div>
  </div>
</template>
