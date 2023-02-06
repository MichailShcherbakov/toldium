<script setup lang="ts">
import MessageChat from "~/components/common/MessageChat/MessageChat.vue";
import MainLayout from "~/layouts/MainLayout.vue";
import SideBar from "~/components/common/SideBar/SideBar.vue";
import SideBarTitle from "~/components/common/SideBar/SideBarTitle.vue";
import SideBarSubTitle from "~/components/common/SideBar/SideBarSubTitle.vue";
import ChannelMemberList from "~/components/common/SideBar/channel-members/ChannelMemberList.vue";
import { useCurrentChannel } from "~/stores/channels/useCurrentChannel";
import { ChannelKindEnum } from "~/gql/graphql";

const { currentChannel } = useCurrentChannel();

const kind: Record<ChannelKindEnum, string> = {
  [ChannelKindEnum.Dialog]: "Dialog",
  [ChannelKindEnum.Group]: "Group",
  [ChannelKindEnum.Public]: "Channel",
};
</script>

<template>
  <MainLayout>
    <template #sidebar>
      <SideBar>
        <SideBarTitle>
          {{ kind[currentChannel?.kind ?? ChannelKindEnum.Public] }}
          Members</SideBarTitle
        >
        <SideBarSubTitle> ONLINE - 16 </SideBarSubTitle>
        <ChannelMemberList />
        <SideBarSubTitle> OFFLINE - 45 </SideBarSubTitle>
        <ChannelMemberList />
      </SideBar>
    </template>
    <MessageChat />
  </MainLayout>
</template>
