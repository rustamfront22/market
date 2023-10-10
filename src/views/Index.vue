<template>
  <div class="home-page">
    <CarouselMain/>
    <NewProducts />
    <AllProducts />
    <CarouselFooter />
    <Partners />
  </div>
</template>
<script setup>
import CarouselMain from "../components/views/home/CarouselMain.vue";
import NewProducts from "../components/views/home/NewProducts.vue";
import AllProducts from "../components/views/home/AllProducts.vue";
import CarouselFooter from "../components/views/home/CarouselFooter.vue";
import Partners from "../components/views/home/Partners.vue";
</script>