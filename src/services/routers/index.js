import { createRouter, createWebHistory } from "vue-router";
import RoutesAuth from "../../views/auth/services/router";
import RoutesUser from "../../views/user/services/router";
import { isLogin, appLocalStorage } from "../utils/localStorage";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../../views/home/Home.vue"),
  },
  {
    path: "/product-details",
    name: "ProductDetails",
    component: () => import("../../views/product/ProductDetails.vue"),
  },
  {
    path: "/cart",
    name: "Cart",
    component: () => import("../../views/cart/Cart.vue"),
  },
  {
    path: "/checkout",
    name: "Checkout",
    component: () => import("../../views/cart/Checkout.vue"),
  },
  {
    path: "/user",
    name: "User",
    component: () => import("../../views/user/User.vue"),
    children: [...RoutesUser],
  },

  ...RoutesAuth,
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach(async (to) => {
  window.scrollTo(0, 0);

  if (appLocalStorage.value.accessToken) {
    if (to.name === "SignIn") {
      return (to.path = "/");
    } else if (to.name === "User" || to.name === "Account") {
      return (to.path = "/user/account/profile");
    }
  } else {
    if (
      to.name === "Cart" ||
      to.name === "User" ||
      to.name === "Account" ||
      to.name === "Checkout"
    ) {
      return (to.path = "/");
    }
  }
});

export default router;
