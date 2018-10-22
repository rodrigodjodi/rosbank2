import Vue from "vue";
import Vuex from "vuex";
//* modules
import smUser from "./modules/smUser";
import smAccounts from "./modules/smAccounts";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: { smUser, smAccounts },
  state: {},
  mutations: {},
  actions: {}
});
//* hot module reloading for modules: https://vuex.vuejs.org/guide/hot-reload.html
if (module.hot) {
  module.hot.accept(
    ["./modules/smAccounts", /*"./modules/transaction", */ "./modules/smUser"],
    () => {
      const hotAccount = require("./modules/smAccounts").default;
      //const hotTransaction = require("./modules/transaction").default;*/
      const hotUser = require("./modules/smUser").default;
      store.hotUpdate({
        modules: {
          account: hotAccount,
          //transaction: hotTransaction,
          user: hotUser
        }
      });
    }
  );
}
export default store;
