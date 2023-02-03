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
      <p class="text-xl dark:text-gray-100">Create an Account</p>
    </div>
    <div class="flex flex-col w-full gap-4">
      <AuthInput label="Email" />
      <AuthInput label="Username" />
      <AuthInput label="Password" secure />
      <AuthInput label="Repeat password" secure />
      <div class="flex flex-col gap-3">
        <AuthBtn label="Sing Up" />
        <AuthLink label="Already have an account?" href="" class="text-sm" />
        <p class="text-xs text-gray-400 font-medium">
          By registering, you agree to
          <AuthLink label="Terms of Service" href="" /> and
          <AuthLink label="Privacy Policy" href="" />
        </p>
      </div>
    </div>
  </div>
</template>
