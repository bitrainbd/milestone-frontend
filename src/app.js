import { createApp } from 'vue'
import { createPinia } from "pinia";
import './style.css'
import router from "./router";
import App from './App.vue'
import ElementPlus from "element-plus";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
import 'skeleton-screen-css'
import 'https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.3/js/bootstrap.bundle.min.js'

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

const app = createApp(App);
app.use(router);
app.use(pinia);
app.use(ElementPlus);

app.config.globalProperties.$filters = {
  currencySymbol(value) {
    return "৳" + value.toLocaleString();
  },

  makeImagePath(img) {
    return import.meta.env.VITE_API_URL + "/" + img;
  },

  textShort(text, size) {
    if (!text) return "";
    text = text.toString();

    if (text.length <= size) {
      return text;
    }
    return text.substr(0, size) + "...";
  },
};

app.mount("#app");
