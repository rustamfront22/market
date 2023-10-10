<template>
  <RouterLink
    :to="{name: 'product', params: {id: data.id}}"
    class="product__card"
  >
    <div class="product__card-img">
      <img :src="data.thumbnail" alt="" />
      <div class="sale">-{{ data.discountPercentage.toFixed() }}%</div>
    </div>
    <div class="product__card-category ">{{ data.category.replaceAll('-', ' ') }}</div>
    <div class="product__card-name">
      {{ data.title }}
    </div>
    <div class="product__card-price">
      {{ data.price - ((data.price * data.discountPercentage) / 100).toFixed()}}$ -
      <div class="product__card-discount">
         <s>{{ data.price }}$</s>
      </div>
    </div>
    <div class="product__card-stock">
      In stock: {{data.stock}}
    </div>
    <div class="product__card-btn">
      <button
        class="btn btn-primary"
        v-if="!cart.filter((e) => e.id === data.id).length"
        @click.prevent="cartStore.setCart(data)"
        
      >
        <Icon icon="fluent:cart-16-regular" />
        В корзину
      </button>
      <div class="product__card-count" v-else @click.prevent>
        <button
            class="btn btn-primary"
            @click.prevent="cartStore.setCount(data, '-')"
        >
          <Icon icon="uil:minus" />
        </button>
        <input type="number" v-model="cart.filter((e) => e.id === data.id)[0].count" @input="inputHandle">
        <button
            class="btn btn-primary"
            @click.prevent="cartStore.setCount(data, '+')"
        >
          <Icon icon="uil:plus" />
        </button>
        <button
            class="btn btn-primary"
            @click.prevent="cartStore.deleteCart(data)"
        >
          <Icon icon="fluent:cart-16-regular" />
          Удалить
        </button>
      </div>

    </div>
  </RouterLink>
</template>
<script setup>
import { Icon } from "@iconify/vue";
import { useCartStore } from "@/store/cart.js";
import { storeToRefs } from "pinia";
const props = defineProps(["data"]);
const cartStore = useCartStore();
const { cart } = storeToRefs(cartStore);

const inputHandle = ({target}) => {
  if (target.value > props.data.stock){
    target.value = props.data.stock
  }
}
</script>