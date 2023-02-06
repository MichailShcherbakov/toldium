<script setup lang="ts">
import CategoryListItem from "../categories/CategoryListItem.vue";
import ChatsIcon from "~/assets/icons/chats.svg?component";
import UnreadIcon from "~/assets/icons/unread.svg?component";
import PersonIcon from "~/assets/icons/person.svg?component";
import OtherIcon from "~/assets/icons/other.svg?component";
import BotIcon from "~/assets/icons/bot.svg?component";
import SettingsIcon from "~/assets/icons/settings.svg?component";
import EditIcon from "~/assets/icons/edit.svg?component";

const unread = 5;
</script>

<template>
  <div class="px-2 py-6 flex flex-col w-full h-full justify-between gap-2">
    <ul
      class="flex flex-col w-full h-full items-center overflow-y-auto overflow-x-hidden gap-2"
    >
      <li>
        <CategoryListItem label="All chats" :unread="unread" :isActive="true">
          <template #icon>
            <ChatsIcon />
          </template>
        </CategoryListItem>
      </li>
      <li>
        <CategoryListItem label="Unread" :unread="unread">
          <template #icon>
            <UnreadIcon />
          </template>
        </CategoryListItem>
      </li>
      <li>
        <CategoryListItem label="Personal" :unread="unread">
          <template #icon>
            <PersonIcon />
          </template>
        </CategoryListItem>
      </li>
      <li>
        <CategoryListItem label="Bots" :unread="unread">
          <template #icon>
            <BotIcon />
          </template>
        </CategoryListItem>
      </li>
      <li>
        <CategoryListItem label="Others" :unread="unread">
          <template #icon>
            <OtherIcon />
          </template>
        </CategoryListItem>
      </li>
      <li>
        <CategoryListItem label="Edit" :unread="unread">
          <template #icon>
            <EditIcon />
          </template>
        </CategoryListItem>
      </li>
    </ul>
    <CategoryListItem label="Settings" :unread="unread">
      <template #icon>
        <SettingsIcon />
      </template>
    </CategoryListItem>
  </div>
</template>
