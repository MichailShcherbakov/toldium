<script setup lang="ts">
import AuthInput from "../components/AuthInput.vue";
import AuthLink from "../components/AuthLink.vue";
import AuthBtn from "../components/AuthBtn.vue";
</script>

<template>
  <div
    class="flex flex-col w-120 h-min dark:bg-slate-700 p-8 z-20 rounded-md shadow-lg gap-3"
  >
    <div class="flex flex-col w-full items-center gap-2">
      <p class="text-xl dark:text-gray-100">Welcome back!</p>
      <p class="text-base dark:text-gray-400">We're exited to see you again!</p>
    </div>
    <div class="flex flex-col w-full gap-4">
      <AuthInput label="Email" />
      <div class="flex flex-col gap-1">
        <AuthInput label="Password" secure />
        <AuthLink label="Forgot your password?" href="" class="text-sm" />
      </div>
      <div class="flex flex-col gap-2">
        <AuthBtn label="Sing In" />
        <div class="flex flex-row items-center gap-1">
          <p class="text-sm text-gray-400 font-medium">Need an account?</p>
          <AuthLink label="Register" href="" class="text-sm" />
        </div>
      </div>
    </div>
  </div>
</template>
