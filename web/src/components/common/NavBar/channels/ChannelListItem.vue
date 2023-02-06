<script setup lang="ts">
import { computed } from "vue";
import { UiAvatar, UiChip } from "~/components/ui";
import type { GetChannelsQuery } from "~/gql/graphql";
import { preventOverflow } from "../helpers";

const props = defineProps<{
  channel: NonNullable<GetChannelsQuery["getChannels"][0]>;
  isActive?: boolean;
}>();

const unread = computed(() => preventOverflow(props.channel.unread, 6, 999999));
</script>

<template>
  <button
    class="relative flex flex-row items-center justify-center px-3 mb-2 select-none animate-smooth-rounded"
    :class="{
      'animate-smooth-rounded--fixed': isActive,
    }"
  >
    <div
      v-if="isActive"
      class="absolute top-0 left-0 flex flex-row items-center w-min h-full"
    >
      <span class="block w-1 h-10 rounded-tr rounded-br dark:bg-gray-200" />
    </div>
    <UiAvatar
      :name="channel.name"
      :url="channel.avatarURL"
      class="animate-smooth-rounded__target"
    />
    <UiChip v-if="unread" :label="unread" class="absolute -bottom-1 right-2" />
  </button>
</template>
