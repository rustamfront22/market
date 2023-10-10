import Index from "../views/Index.vue";
import Product from "../views/Product.vue";
import Products from "../views/Products.vue";
import Basket from "../views/Basket.vue";
import {createRouter, createWebHistory} from "vue-router";

const routes = [
    { path: '/', component: Index, name: 'index' },
    { path: '/products/:id', component: Product, name: 'product' },
    { path: '/products', component: Products, name: 'products' },
    { path: '/basket', component: Basket, name: 'basket' },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior: () => ({top: 0, behavior: 'smooth'})
})

export default router