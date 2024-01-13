import { defineStore } from "pinia";
export { StoreAuth } from "../../views/auth/services/store";

export const StoreApp = defineStore("StoreApp", {
  state: () => ({ cart: [] }),
  getters: {
    getterCarts: (state) => state.cart,
  },
  actions: {
    actionAddToCart(product) {
      const existingProduct = this.cart.find((item) => item.id === product.id);

      if (existingProduct) {
        const existingProduct = this.cart.find(
          (item) => item.id === product.id
        );

        if (existingProduct) {
          existingProduct.quantity += product.quantity;
        }
      } else {
        this.cart.push(product);
      }
    },
    actionRemoveCart(productID) {
      this.cart = this.cart.filter((item) => item.id !== productID);
    },
  },
});
