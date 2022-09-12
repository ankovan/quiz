import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/:id",
    name: "quiz",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/QuizView.vue"),
  },
  {
    path: "/quizmaker",
    name: "quizmaker",
    component: () => import("../views/QuizMaker.vue"),
  },
  {
    path: "/myquizes",
    name: "myquizes",
    component: () => import("../views/UserQuizes.vue"),
  },
  {
    path: "/myquizes/:id",
    name: "editmyquiz",
    component: () => import("../views/QuizMaker.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
