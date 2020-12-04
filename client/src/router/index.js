import Vue from "vue";
import VueRouter from "vue-router";
import { authGuard } from "../auth/authGuard";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Dashboard.vue"),
    beforeEnter: authGuard,
  },
  {
    path: "/mydata",
    name: "MyData",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../components/ExistingUserForm.vue"
      ),
    beforeEnter: authGuard,
  },
  {
    path: "/riskgraph/:id",
    name: "RiskGraph",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../components/partials/RiskGraph.vue"
      ),
  },
  // {
  //   path: "/newuserform/",
  //   name: "NewUserform",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../components/NewUserForm.vue"),
  // },

  /* no longer using settings or profile so will comment this out */
  
  /*{
    path: "/settings",
    name: "Settings",
    component: () => import("../views/Settings.vue"),
  },

  {
    path: "/profile",
    name: "Profile",
    component: () => import("../views/Profile.vue"),
  },*/
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
