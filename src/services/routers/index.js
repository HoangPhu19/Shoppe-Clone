import { createRouter, createWebHistory } from "vue-router";
import RoutesAuth from "../../views/auth/services/router";
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
    path: "/profile",
    name: "Profile",
    component: () => import("../../views/user/Profile.vue"),
  },

  ...RoutesAuth,
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach(async (to) => {
  window.scrollTo(0, 0);

  if (appLocalStorage.value.userData.id) {
    if (to.name === "SignIn") {
      return (to.path = "/");
    }
  } else {
    if (to.name === "Cart" || to.name === "Profile") {
      return (to.path = "/");
    }
  }
});

export default router;
