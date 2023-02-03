<script setup lang="ts">
import SignInIllustration from "~/assets/illustrations/sign-in.svg?component";
import SignUpForm from "~/components/common/forms/auth/SignUp/SignUpForm.vue";
</script>

<template>
  <main class="relative w-screen h-screen dark:bg-slate-800">
    <SignInIllustration class="absolute top-0 left-0 w-full h-full" />
    <div class="flex flex-row items-center justify-center w-full h-full">
      <SignUpForm />
    </div>
  </main>
</template>
