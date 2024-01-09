import { createStore } from "vuex";

export default createStore({
  state: {
    registeredInUser: [],
    loggedInUser: null,
    cart: [],
  },
  mutations: {
    setRegUser(state, userInfo) {
      state.registeredInUser.push(userInfo);
    },
    setLogUser(state, userInfo) {
      state.loggedInUser = userInfo;
    },
    logout(state) {
      state.loggedInUser = null;
    },
    AddToCart(state, product) {
      state.cart.push(product);
    },
    addQuantity(state, product) {
      const existingProduct = state.cart.find((item) => item.id === product.id);

      if (existingProduct) {
        existingProduct.quantity += product.quantity;
      }
    },
    removeFromCart(state, productID) {
      state.cart = state.cart.filter((item) => item.id !== productID);
    },
  },
  actions: {
    setRegUser({ commit }, userInfo) {
      commit("setRegUser", userInfo);
    },
    setLogUser({ commit }, userInfo) {
      commit("setLogUser", userInfo);
    },
    logout({ commit }) {
      commit("logout");
    },
    AddToCart({ commit, state }, product) {
      const existingProduct = state.cart.find((item) => item.id === product.id);

      if (existingProduct) {
        commit("addQuantity", product);
      } else {
        commit("AddToCart", product);
      }
    },
  },
  getters: {
    getRegUser: (state) => state.registeredInUser,

    getLogUser: (state) => state.loggedInUser,

    getProductInCart: (state) => state.cart,
  },
});
