import { computed } from "vue";
import { useStorage } from "@vueuse/core";

export const appLocalStorage = useStorage(
  "AppLocalStorage",
  { accessToken: "", userData: {} },
  localStorage,
  { mergeDefaults: true }
);

export const userData = computed(() =>
  appLocalStorage.value.userData.id ? appLocalStorage.value.userData : undefined
);

export const accessToken = computed(() => appLocalStorage.value.accessToken);

export const isLogin = appLocalStorage.value.userData.id ? true : false;
