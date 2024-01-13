export default [
  {
    path: "/sign-in",
    name: "SignIn",
    component: () => import("../SignIn.vue"),
  },
  {
    path: "/sign-up",
    name: "SignUp",
    component: () => import("../SignUp.vue"),
  },
];
