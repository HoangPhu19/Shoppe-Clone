import { createRouter, createWebHistory } from "vue-router";
import RoutesAuth from "../../views/auth/services/router";
import { isLogin } from "../utils";

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

  ...RoutesAuth,
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach(async (to) => {
  window.scrollTo(0, 0);

  if (isLogin) {
    if (to.name === "SignIn") {
      return { name: "Home" };
    } else {
      return;
    }
  }

  return;
});

export default router;
