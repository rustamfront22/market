<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__content">
        <RouterLink to="/">
          <Icon icon="ph:meta-logo-bold" />
        </RouterLink>
        <nav class="footer__navbar">
          <!-- <h3>Категории</h3> -->
          <div class="footer__navbar-list">
            <Category />
          </div>
        </nav>

        <div class="footer__cart">
          <ul>
            <h3 class="font-rubik text-1xl mb-4">Магазин</h3>
            <li><RouterLink :to="{ name: 'index' }">Главная</RouterLink></li>
            <li><RouterLink :to="{ name: 'products' }">Каталог</RouterLink></li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>
<script setup>
import { Icon } from "@iconify/vue";
import Category from "../views/product/Category.vue";
</script>