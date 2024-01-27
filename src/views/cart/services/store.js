import { defineStore } from "pinia";
import { appLocalStorage } from "../../../services/utils/localStorage";

export const StoreApp = defineStore("StoreApp", {
  state: () => ({}),
  getters: {},
  actions: {
    actionAddToCart(product) {
      const existingProduct = appLocalStorage.value.cart.find(
        (item) => item.id === product.id
      );

      if (existingProduct) {
        existingProduct.quantity += product.quantity;
      } else {
        appLocalStorage.value.cart.push(product);
      }
    },
    actionRemoveCart(productID) {
      appLocalStorage.value.cart = appLocalStorage.value.cart.filter(
        (item) => item.id !== productID
      );
    },
  },
});
