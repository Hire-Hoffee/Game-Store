import { createRouter, createWebHistory } from "vue-router";

import mainRoutes from "./routes/mainRoutes";
import authRoutes from "./routes/authRoutes";
import userRoutes from "./routes/userRoutes";

const routes = [...mainRoutes, ...authRoutes, ...userRoutes];

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
