import { defineStore } from "pinia";
import axios from "axios";

// You can name the return value of `defineStore()` anything you want,
// but it's best to use the name of the store and surround it with `use`
// and `Store` (e.g. `useUserStore`, `useCartStore`, `useProductStore`)
// the first argument is a unique id of the store across your application
export const useProductStore = defineStore("product", () => {
  const getProducts = async (args) => {
    return await axios.get("https://dummyjson.com/products", { params: args });
  };
  const getProductsByCategory = async (category, args) => {
    return await axios.get("https://dummyjson.com/products/category/" + category, { params: args });
  };
  const getProduct = async (id) => {
    return await axios.get("https://dummyjson.com/products/" + id);
  };
  const getCategories = async () => {
    return await axios.get("https://dummyjson.com/products/categories");
  };
  return { getProducts, getProduct, getCategories, getProductsByCategory };
});
