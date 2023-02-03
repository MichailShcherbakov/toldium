<script setup lang="ts">
import SignInIllustration from "~/assets/illustrations/sign-in.svg?component";
</script>

<template>
  <main class="relative w-screen h-screen dark:bg-blue-600/80">
    <SignInIllustration class="absolute top-0 left-0 w-full h-full" />
    <div class="flex flex-row items-center justify-center w-full h-full">
      <slot />
    </div>
  </main>
</template>

<style lang="scss"></style>
