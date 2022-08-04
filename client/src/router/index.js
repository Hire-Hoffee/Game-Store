import { createRouter, createWebHistory } from "vue-router";

import mainRoutes from "./mainRoutes";
import authRoutes from "./authRoutes";

const routes = [...mainRoutes, ...authRoutes];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return {
      top: 0,
    };
  },
});

router.beforeEach((to, from, next) => {
  if (to.params.gameTitle) {
    document.title = `${import.meta.env.VITE_VUE_APP_TITLE} - ${
      to.params.gameTitle
    }`;
  } else if (to.meta.title) {
    document.title = `${import.meta.env.VITE_VUE_APP_TITLE} - ${to.meta.title}`;
  }

  next();
});

export default router;
