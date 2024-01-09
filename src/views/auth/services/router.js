export default [
  {
    path: "/SignIn",
    name: "SignIn",
    component: () => import("../SignIn.vue"),
  },
  {
    path: "/SignUp",
    name: "SignUp",
    component: () => import("../SignUp.vue"),
  },
];
