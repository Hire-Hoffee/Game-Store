const errorRoutes = [
  {
    path: "/not_found",
    name: "notFound",
    component: () => import("@/views/notFound.vue"),
    meta: {
      title: "Page not found",
    },
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: { name: "notFound" },
  },
];

export default errorRoutes;
