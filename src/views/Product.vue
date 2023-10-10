<template>
  <div class="product-page">
    <div class="loading" v-if="loading">
      <div class="loading-el"></div>
    </div>
    <div class="product-page__content" v-else>
      <CurrentCard v-if="product" :data="product" />
    </div>
  </div>
</template>
<script setup>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import CurrentCard from "../components/views/product/CurrentCard.vue";
import { useProductStore } from "../store/product";
const { params } = useRoute();
const product = ref(null);
const loading = ref(true);
const storeProduct = useProductStore();
onMounted(async () => {
  loading.value = true;
  const { data } = await storeProduct.getProduct(params.id);
  product.value = data;
  loading.value = false;
});
</script>
<style lang="scss" scoped>
    .loading{
        height: 100vh;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        &-el{
            width: 60px;
            height: 60px;
            box-shadow: 2px 2px 2px rgb(77, 10, 113);
            border-radius: 50%;
            animation: loading 2s infinite linear;
        }
    }
    @keyframes loading {
        from{
            transform: rotate(0deg);
        }
        to{
            transform: rotate(360deg);
        }
    }
</style>