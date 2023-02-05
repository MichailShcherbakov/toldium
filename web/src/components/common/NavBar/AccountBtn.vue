<script setup lang="ts">
import { UiAvatar } from "~/components/ui";
import { useCurrentUser } from "~/stores/users/useCurrentUser";
import { useGoToHomePage } from "~/router/routes/useGoToHomePage";

const { navigate, isOnHomePage } = useGoToHomePage();

function handleClick() {
  navigate();
}

const { currentUser } = useCurrentUser();
</script>

<template>
  <button
    class="relative flex flex-row items-center justify-center px-3 mb-2 select-none animate-smooth-rounded"
    :class="{
      'animate-smooth-rounded--fixed': isOnHomePage,
    }"
    @click="handleClick"
  >
    <div
      v-if="isOnHomePage"
      class="absolute top-0 left-0 flex flex-row items-center w-min h-full"
    >
      <span class="block w-1 h-10 rounded-tr rounded-br dark:bg-gray-200" />
    </div>
    <UiAvatar
      :name="currentUser?.name ?? 'Unknown'"
      :url="currentUser?.avatarURL"
      class="animate-smooth-rounded__target"
    />
  </button>
</template>
