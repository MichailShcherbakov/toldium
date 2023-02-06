<script setup lang="ts">
import MainLayout from "~/layouts/MainLayout.vue";
import SideBar from "~/components/common/SideBar/SideBar.vue";
import SideBarTitle from "~/components/common/SideBar/SideBarTitle.vue";
import DialogList from "~/components/common/SideBar/dialogs/DialogList.vue";
import MessageChat from "~/components/common/MessageChat/MessageChat.vue";
import { useChannelStore } from "~/stores/channels/useCurrentChannel";

const channelStore = useChannelStore();
</script>

<template>
  <MainLayout>
    <template #sidebar>
      <SideBar>
        <SideBarTitle>Direct Messages</SideBarTitle>
        <DialogList />
      </SideBar>
    </template>
    <MessageChat v-if="channelStore.currentChannelId" />
  </MainLayout>
</template>
