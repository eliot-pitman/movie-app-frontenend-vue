import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import CreateMovie from "../views/CreateMovie.vue";
import ShowMovie from "../views/ShowMovie.vue";
import IndexActors from "../views/IndexActors.vue";
import ShowActor from "../views/ShowActor.vue";
import SignUp from "../views/SignUp.vue";
import LogIn from "../views/LogIn.vue";
import LogOut from "../views/LogOut.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/movie",
    name: "CreateMovie",
    component: CreateMovie,
  },
  {
    path: "/movie/:id",
    name: "ShowMovie",
    component: ShowMovie,
  },
  {
    path: "/actors",
    name: "IndexActors",
    component: IndexActors,
  },
  {
    path: "/actors/:id",
    name: "ShowActor",
    component: ShowActor,
  },
  {
    path: "/SignUp",
    name: "SignUp",
    component: SignUp,
  },
  {
    path: "/LogIn",
    name: "LogIn",
    component: LogIn,
  },
  {
    path: "/LogOut",
    name: "LogOut",
    component: LogOut,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
