import { isUserAuth } from "../navigationGuards";

const authRoutes = [
  {
    path: "/auth/registration",
    name: "registration",
    component: () => import("@/views/authViews/UserRegistrationView.vue"),
    meta: {
      title: "Sign up",
    },
  },
  {
    path: "/auth/login",
    name: "login",
    component: () => import("@/views/authViews/UserLoginView.vue"),
    meta: {
      title: "Sign in",
    },
  },
  {
    path: "/auth/logout",
    name: "logout",
    component: () => import("@/views/authViews/UserLogoutView.vue"),
    meta: {
      title: "Sign out",
    },
    beforeEnter: isUserAuth,
  },
];

export default authRoutes;
