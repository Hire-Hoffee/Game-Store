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

export default router;
