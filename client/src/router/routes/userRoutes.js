import { isUserAuth } from "../navigationGuards";

const userRoutes = [
  {
    path: "/user/account",
    name: "userAccount",
    component: () => import("@/views/userViews/UserAccountView.vue"),
    meta: {
      title: "Account",
    },
    beforeEnter: isUserAuth,
  },
  {
    path: "/user/cart",
    name: "shoppingCart",
    component: () => import("@/views/userViews/ShoppingCartView.vue"),
    meta: {
      title: "Cart",
    },
    beforeEnter: isUserAuth,
  },
];

export default userRoutes;
