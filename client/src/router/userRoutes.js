const userRoutes = [
  {
    path: "/user",
    name: "userAccount",
    component: () => import("@/views/userViews/UserAccountView.vue"),
    meta: {
      title: "Account",
    },
  },
  {
    path: "/cart",
    name: "shoppingCart",
    component: () => import("@/views/userViews/ShoppingCartView.vue"),
    meta: {
      title: "Cart",
    },
  },
];

export default userRoutes;
