import { createRouter, createWebHistory } from "vue-router";
// import store from "@/store/store"

import HomeView from "../views/user/DogHome";
const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  
  {
    path: "/about",
    name: "about",
    component: () => import("../views/user/AboutDog.vue"),
  },
  {
    path: "/store",
    name: "store",
    component: () => import("../views/user/DogStore.vue"),
  },
  { 
      path: "/dog/:id/:id2",
      name: "Dog Detail",
      component: () => import("../views/user/DogDetail.vue"),
  },
  {
    path: "/checkout",
    name: "checkout",
    component: () => import("../views/user/DogCheckout.vue"),
  },
  {
    path: "/cart",
    name: "cartitem",
    component: () => import("../views/user/DogCart.vue"),
  },

];


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
});


export default router;
