<script setup lang="ts">
import NavBar from "~/components/common/NavBar/NavBar.vue";
import SideBar from "~/components/common/SideBar/SideBar.vue";
</script>

<template>
  <main
    class="flex flex-row w-screen h-screen bg-white dark:bg-midnight-100 overflow-hidden"
  >
    <NavBar />
    <slot name="sidebar">
      <SideBar />
    </slot>
    <slot />
  </main>
</template>

<style lang="scss"></style>
