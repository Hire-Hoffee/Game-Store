const authRoutes = [
  // {
  //   path: "/auth/registration",
  //   name: "registration",
  //   component: () => import("@/views/UserAuthView.vue"),
  // },
  {
    path: "/auth/login",
    name: "login",
    component: () => import("@/views/UserAuthView.vue"),
  },
  // {
  //   path: "/auth/logout",
  //   name: "logout",
  //   component: () => import("@/views/UserAuthView.vue"),
  // },
];

export default authRoutes;
