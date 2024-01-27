import { computed } from "vue";
import { useStorage } from "@vueuse/core";

export const appLocalStorage = useStorage(
  "AppLocalStorage",
  { accessToken: "", userData: {}, cart: [] },
  localStorage,
  { mergeDefaults: true }
);

export const userData = computed(() =>
  isLogin.value ? appLocalStorage.value.userData : undefined
);

export const accessToken = computed(() => appLocalStorage.value.accessToken);

export const cart = computed(() =>
  isLogin.value ? appLocalStorage.value.cart : []
);

export const isLogin = computed(() =>
  appLocalStorage.value.userData.id ? true : false
);
