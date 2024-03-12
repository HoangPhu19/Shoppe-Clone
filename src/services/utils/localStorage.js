import { computed } from "vue";
import { useStorage } from "@vueuse/core";

export const appLocalStorage = useStorage(
  "AppLocalStorage",
  { accessToken: "", userData: {}, cart: [], order: [] },
  localStorage,
  { mergeDefaults: true }
);

export const userData = computed(() =>
  isLogin.value ? appLocalStorage.value.userData : {}
);

export const accessToken = computed(() => appLocalStorage.value.accessToken);

export const cart = computed(() =>
  isLogin.value ? appLocalStorage.value.cart : []
);

export const order = computed(() =>
  isLogin.value ? appLocalStorage.value.order : []
);

export const isLogin = computed(() =>
  appLocalStorage.value.userData.id ? true : false
);
