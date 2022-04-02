import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "main",
    component: () => import("../views/MainPage.vue"),
    children: [
      {
        path: "/quality_management",
        name: "quality_management",
        component: () => import("../views/About.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  linkActiveClass: "active-link",
});

export default router;
