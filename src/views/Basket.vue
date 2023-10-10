<template>
  <div class="basket pt-3">
    <div class="container">
      <div class="title mb-4">Козрина</div>
      <div class="basket__content" v-if="data.length">
        <div class="basket__list">
          <RouterLink class="basket__item" :to="{name: 'product', params: {id: item.id} }" v-for="item in data" :key="item.name">
            <div class="basket__item-img">
              <img :src="item.thumbnail" alt="" />
            </div>
            <div class="basket__item-info">
              <div class="basket__item-name">
                {{ item.title }}
              </div>
              <div class="basket__item-price">
                {{ item.price - ((item.price * item.discountPercentage) / 100).toFixed() }}$
                <div class="basket__item-discount">
                  <s>{{ item.price }}$</s>
                </div>
              </div>
            </div>
            <div class="product__card-count" @click.prevent>
              <button
                  class="btn btn-secondary"
                  @click.prevent="cartStore.setCount(item, '-')"
              >
                <Icon icon="uil:minus" />
              </button>
              <input type="number" v-model="item.count" @input="inputHandle">
              <button
                  class="btn btn-secondary"
                  @click.prevent="cartStore.setCount(item, '+')"
              >
                <Icon icon="uil:plus" />
              </button>
            </div>
            <div class="basket__item-btn">
              <button class="btn btn-secondary" @click.prevent="cartStore.deleteCart(item)">
                <Icon icon="material-symbols:delete-outline" />
              </button>
            </div>
          </RouterLink>
        </div>
        <div class="basket__info">
          <p>Количество</p>
          <span>{{ data.reduce((a,b) => a + b.count, 0).toLocaleString() }}</span>
          <p>Итоговая стоимость</p>
          <span>{{ data.reduce((a,b) => a + (b.price * b.count), 0).toLocaleString() }} $</span>
        </div>
      </div>

      <div v-else class="basket__empty">
        <Icon icon="raphael:cart" />
        <h2 class="title">This cart empty</h2>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Icon } from "@iconify/vue";
import { reactive, ref, computed } from "vue";
import {useCartStore} from "@/store/cart.js";
import {storeToRefs} from "pinia";
const cartStore = useCartStore();
const { cart:data } = storeToRefs(cartStore);

const inputHandle = ({target}) => {
  if (target.value > props.data.stock){
    target.value = props.data.stock
  }
}
</script>
