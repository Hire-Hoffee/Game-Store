import { createRouter, createWebHistory } from "vue-router"

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/HomeView.vue"),
  },
  {
    path: "/games/all",
    name: "all_games",
    component: () => import("../views/AllGamesView.vue"),
  },
  {
    path: "/auth/login",
    name: "login",
    component: () => import("../views/UserAuthView.vue"),
  },
  {
    path: "/user",
    name: "user_account",
    component: () => import("../views/UserAccountView.vue"),
  },
  {
    path: "/cart",
    name: "shopping_cart",
    component: () => import("../views/ShoppingCartView.vue"),
  },
  {
    path: "/news",
    name: "games_news",
    component: () => import("../views/NewsView.vue"),
  },
  {
    path: "/categories",
    name: "all_categories",
    component: () => import("../views/CategoriesView.vue"),
  },
  {
    path: "/game/info",
    name: "game_info",
    component: () => import("../views/GameInfoView.vue"),
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior (to, from, savedPosition) {
    return {
      top: 0
    }
  }
})

export default router
