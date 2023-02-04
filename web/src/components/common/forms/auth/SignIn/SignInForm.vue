<script setup lang="ts">
import AuthInput from "../components/AuthInput.vue";
import AuthLink from "../components/AuthLink.vue";
import AuthBtn from "../components/AuthBtn.vue";
import { useSignIn } from "~/stores/auth/useSignIn";
import { ref } from "vue";

const email = ref("");
const password = ref("");

const { signIn, loading } = useSignIn();

function handleAuthFormSubmit() {
  signIn({
    email: email.value,
    password: password.value,
  });
}
</script>

<template>
  <form
    class="flex flex-col w-120 h-min dark:bg-slate-700 p-8 z-20 rounded-md shadow-lg gap-3"
    @submit.prevent="handleAuthFormSubmit"
  >
    <div class="flex flex-col w-full items-center gap-2">
      <p class="text-xl dark:text-gray-100">Welcome back!</p>
      <p class="text-base dark:text-gray-400">We're exited to see you again!</p>
    </div>
    <div class="flex flex-col w-full gap-4">
      <AuthInput v-model="email" label="Email" />
      <div class="flex flex-col gap-1">
        <AuthInput v-model="password" label="Password" secure />
        <AuthLink label="Forgot your password?" href="" class="text-sm" />
      </div>
      <div class="flex flex-col gap-2">
        <AuthBtn type="submit" label="Sing In" :loading="loading" />
        <div class="flex flex-row items-center gap-1">
          <p class="text-sm text-gray-400 font-medium">Need an account?</p>
          <AuthLink label="Register" href="" class="text-sm" />
        </div>
      </div>
    </div>
  </form>
</template>
