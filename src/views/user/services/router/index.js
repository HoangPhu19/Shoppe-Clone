export default [
  {
    path: "account",
    name: "Account",
    component: () => import("../../views/account/Account.vue"),
    children: [
      {
        path: "profile",
        name: "Profile",
        component: () => import("../../views/account/views/Profile.vue"),
      },

      {
        path: "address",
        name: "Address",
        component: () => import("../../views/account/views/Address.vue"),
      },
    ],
  },
  {
    path: "purchase",
    name: "Purchase",
    component: () => import("../../views/Purchase.vue"),
  },
  {
    path: "voucher",
    name: "Voucher",
    component: () => import("../../views/Voucher.vue"),
  },
  {
    path: "coin",
    name: "Coin",
    component: () => import("../../views/Coin.vue"),
  },
  {
    path: "notifications",
    name: "Notifications",
    component: () => import("../../views/Notification.vue"),
  },
];
