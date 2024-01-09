import { createRouter, createWebHistory } from "vue-router";
import RoutesAuth from "../../views/auth/services/router";

const routes = [
  {
    path: "/",
    name: "HomePage",
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

export default router;
