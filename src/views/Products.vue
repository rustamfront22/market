<template>
  <div class="products-page">
    <div class="container">
      <div class="products-page__content">
        <Category />
        <div class="products-page__list">
          <Card v-for="data in products" :data="data" :key="data.id" />
        </div>
      </div>
    </div>
  </div>
  <Partners />
</template>
<script setup>
import AllProducts from "@/components/views/home/AllProducts.vue";
import { onMounted, ref } from "vue";
import Partners from "../components/views/home/Partners.vue";
import Category from "../components/views/product/Category.vue";
import { useProductStore } from "../store/product";
import Card from "../components/views/product/Card.vue";
import { onBeforeRouteUpdate } from "vue-router";
const storeProduct = useProductStore();
const products = ref(null);
const skip = ref(0);
const limit = ref(12);
const total = ref(null);
onBeforeRouteUpdate(async (to) => {
  skip.value = 0
  limit.value = 12
  total.value = null
  const { data } = await storeProduct.getProductsByCategory(to.query.cat, {
    limit: limit.value,
    skip: skip.value,
  });
  total.value = data.total;
  products.value = data.products;
})
onMounted(async () => {
  const { data } = await storeProduct.getProducts({
    limit: limit.value,
    skip: skip.value,
  });
  total.value = data.total;
  products.value = data.products;
});
</script>