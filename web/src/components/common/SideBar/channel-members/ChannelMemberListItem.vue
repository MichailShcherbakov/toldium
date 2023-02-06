<script setup lang="ts">
import { UiAvatar } from "~/components/ui";
import type { GetMembersByChannelIdQuery } from "~/gql/graphql";

defineProps<{
  member: NonNullable<GetMembersByChannelIdQuery["getMembersByChannelId"][0]>;
}>();
</script>

<template>
  <button
    class="flex flex-row flex-1 items-center w-full h-14 px-2 rounded gap-3 select-none cursor-pointer hover:bg-gray-100 hover:dark:bg-slate-700/40 focus:ring-2 ring-offset-1 ui-ring overflow-hidden"
  >
    <UiAvatar :name="member.user.name" :url="member.user.avatarURL" size="sm" />
    <div
      class="relative flex flex-col w-full h-full overflow-hidden justify-center gap-1"
    >
      <div class="flex flex-row w-full overflow-hidden items-center gap-1">
        <p
          class="w-full text-sm text-left font-semibold text-gray-800 dark:text-gray-200 truncate"
        >
          {{ member.user.name }}
        </p>
      </div>
    </div>
  </button>
</template>
