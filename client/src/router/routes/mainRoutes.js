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
    path: "/news",
    name: "gamesNews",
    component: () => import("@/views/NewsView.vue"),
    meta: {
      title: "News",
    },
  },
  {
    path: "/news/content/:newsId",
    name: "newsContent",
    component: () => import("@/views/NewsContentView.vue"),
    meta: {
      title: "News content",
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
