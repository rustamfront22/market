<template>
  <div class="products__new">
    <div class="container">
      <div class="title flex justify-between mb-8">
        Новинки
        <div class="products__carousel">
          <div class="products__carousel-navigation flex justify-center gap-3">
            <button class="btn btn-secondary" @click.prevent="leftHandle"><Icon icon="fluent:arrow-up-16-filled" :rotate="3" /></button>
            <button class="btn btn-secondary" @click.prevent="rightHandle"><Icon icon="fluent:arrow-up-16-filled" :rotate="1" /></button>
          </div>
        </div>
      </div>
      <carousel ref="slider" :items-to-show="1" :itemsToScroll="1.5" :mouseDrag="true" :touchDrag="true"   :breakpoints="breakpoints">
        <slide v-for="data in products" :key="data.id">
          <Card :data="data"/>
        </slide>
      </carousel>

    </div>
  </div>
</template>
<script setup>
import Card from "../product/Card.vue";
import {useProductStore} from "../../../store/product.js";
import {onMounted, ref} from "vue";
import { Carousel, Slide, Navigation } from 'vue3-carousel'
import {Icon} from "@iconify/vue";

const storeProduct = useProductStore()
const slider = ref(null)
const products = ref(null)
const breakpoints = ref({
  640: {
    itemsToShow: 1,
  },
  768: {
    itemsToShow: 2,
  },
  1280: {
    itemsToShow: 3,
  },
  1536: {
    itemsToShow: 4,
  },
},)
onMounted(async () => {
  const {data} = await storeProduct.getProducts({limit: 10})
  products.value = data.products
})
const leftHandle = () => {
  slider.value.prev()
}
const rightHandle = () => {
  slider.value.next()
}
</script>