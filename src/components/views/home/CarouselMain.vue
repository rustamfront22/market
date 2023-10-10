<template>
  
  <carousel :items-to-show="1" :autoplay="3500" :wrap-around="true">
    <slide :key="1">
      <img src="@/assets/img/slider/slide-1.png" alt="">
    </slide>
    <slide :key="2">
      <img src="@/assets/img/slider/slide-2.png" alt="">
    </slide>
    <slide :key="3">
      <img src="@/assets/img/slider/slide-3.png" alt="">
    </slide>
    <slide :key="4">
      <img src="@/assets/img/slider/slide-4.png" alt="">
    </slide>
    <template #addons>
      <pagination />
    </template>
  </carousel>
</template>
<script setup>
import { Carousel, Slide, Pagination } from 'vue3-carousel'
</script>