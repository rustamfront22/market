<template>
  <header class="header">
    <div class="container">
      <div class="header__content">
        <RouterLink to="/">
          <Icon icon="ph:meta-logo-bold" />
        </RouterLink>
        <nav class="header__navbar">
          <ul>
            <li><RouterLink :to="{ name: 'index' }">Главная</RouterLink></li>
            <li><RouterLink :to="{ name: 'products' }">Каталог</RouterLink></li>
          </ul>
        </nav>
        <div class="header__cart">
          <router-link :to="{ name: 'basket' }">
            <button>
              <span>{{cart.length}}</span>
              <Icon icon="fluent:cart-24-regular" />
            </button>
          </router-link>
        </div>
      </div>
    </div>
  </header>
</template>
<script setup>
import { Icon } from "@iconify/vue";
import {useCartStore} from "@/store/cart.js";
import {storeToRefs} from "pinia";
const cartStore = useCartStore();
const { cart } = storeToRefs(cartStore);
</script>