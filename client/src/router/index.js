import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/HomeView.vue"),
  },
  {
    path: "/games/all",
    name: "allGames",
    component: () => import("../views/AllGamesView.vue"),
  },
  {
    path: "/auth/login",
    name: "login",
    component: () => import("../views/UserAuthView.vue"),
  },
  {
    path: "/user",
    name: "userAccount",
    component: () => import("../views/UserAccountView.vue"),
  },
  {
    path: "/cart",
    name: "shoppingCart",
    component: () => import("../views/ShoppingCartView.vue"),
  },
  {
    path: "/news",
    name: "gamesNews",
    component: () => import("../views/NewsView.vue"),
  },
  {
    path: "/categories",
    name: "allCategories",
    component: () => import("../views/CategoriesView.vue"),
  },
  {
    path: "/game/info",
    name: "gameInfo",
    component: () => import("../views/GameInfoView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return {
      top: 0,
    };
  },
});

export default router;
