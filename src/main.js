import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import "./index.css";
import "./assets/styles/_styles.scss";
import router from "./router/index.js";
import axios from "axios";
import VueAxios from "vue-axios";
const app = createApp(App);
const pinia = createPinia();
app.use(router);
app.use(pinia);
app.use(VueAxios, axios);

app.mount("#app");
