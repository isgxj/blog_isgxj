<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <nav class="p-8">
    <RouterLink to="/" class="flex justify-center items-center w-full h-14">总览</RouterLink>
    <RouterLink to="/" class="flex justify-center items-center w-full h-14">文章</RouterLink>
    <RouterLink to="/" class="flex justify-center items-center w-full h-14">页面</RouterLink>
    <RouterLink to="/" class="flex justify-center items-center w-full h-14">总览</RouterLink>
    <RouterLink to="/" class="flex justify-center items-center w-full h-14">文章</RouterLink>
    <RouterLink to="/" class="flex justify-center items-center w-full h-14">页面</RouterLink>
  </nav>
</template>

<style lang="less">

</style>
