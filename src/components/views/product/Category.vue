<template>
    <div class="category category-list">
        <h3 class="font-rubik text-1xl mb-4 ">Категории</h3>
        <ul class="grid gap-3 ">
            <li v-for="(cat, key) in categories" :key="key" class="capitalize cursor-pointer" @click="changeHandle(cat)">
                {{ cat.replaceAll('-', ' ') }}
            </li>
        </ul>
    </div>
</template> 
<script setup> 
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import { useProductStore } from "../../../store/product";
const storeProduct = useProductStore()
const categories = ref(null)
const {push} = useRouter()
onMounted(async () => {
    const { data } = await storeProduct.getCategories();
    categories.value = data
})
const changeHandle = (cat) => {
    push({name: 'products', query: {cat}})
}
</script>