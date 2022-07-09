const authRoutes = [
  {
    path: "/auth/registration",
    name: "registration",
    component: () => import("@/views/authViews/UserRegistrationView.vue"),
  },
  {
    path: "/auth/login",
    name: "login",
    component: () => import("@/views/authViews/UserLoginView.vue"),
  },
  {
    path: "/auth/logout",
    name: "logout",
    component: () => import("@/views/authViews/UserLogoutView.vue"),
  },
];

export default authRoutes;
