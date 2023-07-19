<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/layout/Header.vue'
import Nav from './components/layout/Nav.vue'
</script>

<template>
  <Header></Header>
  
  <section class="flex h-[calc(100vh-80px)] overflow-hidden">
    <Nav class="xl:w-60 w-40 border-r min-h-full overflow-auto"></Nav>
    <main class="flex-1 p-8 overflow-auto">
      <RouterView />
    </main>
  </section>
</template>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
