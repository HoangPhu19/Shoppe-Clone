import { createApp } from "vue";
import VueSplide from "@splidejs/vue-splide";
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

import App from "./App.vue";
import router from "./services/routers";
import store from "./services/stores";

const app = createApp(App);

app.use(VueSplide);
app.use(router);
app.use(store);
app.use(Toast, {
  transition: "Vue-Toastification__fade",
});

app.mount("#app");
