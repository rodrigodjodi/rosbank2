import Vue from "vue";
import Router from "vue-router";
import Accounts from "./views/Accounts.vue";
const AccountForm = () => import("@/components/AccountForm");
const Account = () => import("@/views/Account");
Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Accounts
    },
    {
      path: "/contas",
      name: "contas",
      components: { default: Accounts, rightDrawer: AccountForm },
      meta: { title: "Contas" }
    },
    {
      path: "/contas/:idconta",
      name: "conta",
      props: true,
      components: { default: Account, rightDrawer: AccountForm },
      meta: { title: "Conta" }
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
