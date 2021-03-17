import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/get-forcast",
    name: "Forcast",
    component: () => import("../views/Forcast.vue"),
    props: true,
  },
  {
    path: "/get-multiple-forcasts",
    name: "ForcastMultiple",
    component: () => import("../views/ForcastMultiple.vue"),
    props: true,
  },
  // {
  //   path: "*",
  //   redirect: "/",
  // },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
