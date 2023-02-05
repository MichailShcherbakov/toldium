<script setup lang="ts">
import { useCurrentChannelMembers } from "~/stores/members/useCurrentChannelMembers";
import ChannelMemberListItem from "./ChannelMemberListItem.vue";

const { members } = useCurrentChannelMembers();
</script>

<template>
  <ul
    class="flex flex-col px-3 py-1 gap-1 overflow-y-auto overflow-x-hidden scrollbar-thin scrollbar-thumb-slate-600 scrollbar-track-slate-700/60 scrollbar-thumb-rounded-md scrollbar-track-rounded-md scrollbar-border-2"
  >
    <li
      v-for="member in members"
      :key="member.id"
      class="flex flex-row w-full h-min"
    >
      <ChannelMemberListItem :member="member" />
    </li>
  </ul>
</template>
