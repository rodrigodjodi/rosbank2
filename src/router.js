import Vue from "vue";
import Router from "vue-router";
import Contas from "./views/Contas.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Contas
    },
    {
      path: "/contas",
      name: "contas",
      component: Contas
    },
    {
      path: "/login",
      name: "login",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "login" */ "./views/Login.vue")
    }
  ]
});
