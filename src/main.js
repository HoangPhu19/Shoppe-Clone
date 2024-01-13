import { createApp } from "vue";
import VueSplide from "@splidejs/vue-splide";
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./services/routers";

const pinia = createPinia();

const app = createApp(App);

app.use(VueSplide);
app.use(router);
app.use(pinia);
app.use(Toast, {
  transition: "Vue-Toastification__fade",
});

app.mount("#app");
