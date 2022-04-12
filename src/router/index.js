import { createRouter, createWebHistory } from "vue-router";

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
      {
        path: "/theInfo",
        alias:'/',
        name: "theInfo",
        component: () => import("../views/TheInfo.vue"),
      },
      {
        path: "/collaborator",
        name: "collaborator",
        component: () => import("../views/Collaborator.vue"),
      },
      {
        path: "/segment_direction",
        name: "segment_direction",
        component: () => import("../views/Direction.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: "active-link",
});

export default router;
