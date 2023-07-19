<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <div class="flex flex-wrap xl:-m-4 -m-2">
    <div v-for="(item, index) in 5" :key="index" class="lg:w-1/5 w-1/3 h-32 xl:p-4 p-2">
      <div class="h-full flex justify-between items-center xl:px-6 px-4 border">
        <div>
          <div>100</div>
          <div>文章</div>
        </div>
        <img class="w-14 h-auto" src="https://cdn.caixingxing.com/runtime/prod/user_face/3?ts=1681206835" alt="">
      </div>
    </div>
  </div>

  <div class="flex flex-wrap mt-10">
    <div class="2xl:w-[44%] 2xl:mb-0 mb-8 w-[100%]">
      <div class="border">
        <div class="h-14 ps-6 flex items-center border-b">浏览数据</div>
        <div class="h-96"></div>
      </div>
    </div>

    <div class="2xl:w-[28%] 2xl:ps-8 ps-0 w-1/2">
      <div class="border">
        <div class="h-14 ps-6 flex items-center border-b">最新文章</div>
        <div class="h-96"></div>
      </div>
    </div>

    <div class="2xl:w-[28%] ps-8 w-1/2">
      <div class="border">
        <div class="h-14 ps-6 flex items-center border-b">最新评论</div>
        <div class="h-96"></div>
      </div>
    </div>
  </div>
</template>
