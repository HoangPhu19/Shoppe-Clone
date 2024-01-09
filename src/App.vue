<script setup>
import AppHeader from "./AppHeader.vue";
</script>

<template>
  <AppHeader />

  <router-view />
</template>

<style>
body {
  margin: 0;
  padding: 0;
  font-family: "Helvetica Neue", Helvetica, Arial, 文泉驛正黑,
    "WenQuanYi Zen Hei", "Hiragino Sans GB", "儷黑 Pro", "LiHei Pro", "Heiti TC",
    微軟正黑體, "Microsoft JhengHei UI", "Microsoft JhengHei", sans-serif;
  background-color: #f5f5f5;
}
</style>
