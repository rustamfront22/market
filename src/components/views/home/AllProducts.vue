<template>
  <div class="products__all" >
    <div class="container">
      <div class="title mb-8">Все товары</div>
      <div class="products__content">
        <Card v-for="data in products" :data="data" :key="data.id"/>
      </div>
      <button class="btn btn-secondary mx-auto mt-10" v-if="(skip + limit) < total" @click.prevent="moreProducts">
        <Icon icon="mingcute:down-line" />
        Show more
      </button>
    </div>
  </div>
</template>

<script setup>
import Card from "../product/Card.vue";
import {useProductStore} from "@/store/product.js";
import {onMounted, ref} from "vue";

import {useCartStore} from "@/store/cart.js";
import {storeToRefs} from "pinia";
import {Icon} from "@iconify/vue";
const cartStore = useCartStore()
const {cart} = storeToRefs(cartStore)

const storeProduct = useProductStore()
const products = ref(null)
const skip = ref(0)
const limit = ref(12)
const total = ref(null)
onMounted(async () => {
  const {data} = await storeProduct.getProducts({limit: limit.value, skip: skip.value})
  total.value = data.total
  products.value = data.products
})
const moreProducts = async () => {
  skip.value += limit.value
  const {data} = await storeProduct.getProducts({limit: limit.value, skip: skip.value})
  products.value = [...products.value, ...data.products]
}
</script>