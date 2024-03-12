<script setup>
import SideBar from "./components/SideBar.vue";
</script>

<template>
  <div class="w-[1200px] h-screen mx-auto">
    <div class="w-full h-[550px] flex mt-4">
      <!-- SideBar -->
      <SideBar />

      <!-- Body -->
      <router-view />
    </div>
  </div>
</template>

<style scoped></style>
