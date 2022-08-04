const mainRoutes = [
  {
    path: "/",
    name: "home",
    component: () => import("@/views/HomeView.vue"),
    meta: {
      title: "Home",
    },
  },
  {
    path: "/games",
    name: "allGames",
    component: () => import("@/views/AllGamesView.vue"),
    meta: {
      title: "All Games",
    },
  },
  {
    path: "/user",
    name: "userAccount",
    component: () => import("@/views/UserAccountView.vue"),
    meta: {
      title: "Account",
    },
  },
  {
    path: "/cart",
    name: "shoppingCart",
    component: () => import("@/views/ShoppingCartView.vue"),
    meta: {
      title: "Cart",
    },
  },
  {
    path: "/news",
    name: "gamesNews",
    component: () => import("@/views/NewsView.vue"),
    meta: {
      title: "News",
    },
  },
  {
    path: "/categories",
    name: "allCategories",
    component: () => import("@/views/CategoriesView.vue"),
    meta: {
      title: "Categories",
    },
  },
  {
    path: "/games/:title",
    name: "gameInfo",
    component: () => import("@/views/GameInfoView.vue"),
    meta: {
      title: "Game Info",
    },
  },
  {
    path: "/about",
    name: "aboutPage",
    component: () => import("@/views/AboutView.vue"),
    meta: {
      title: "About",
    },
  },
];

export default mainRoutes;
