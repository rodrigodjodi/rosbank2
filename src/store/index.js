import Vue from "vue";
import Vuex from "vuex";
//* modules
import smUser from "./modules/smUser";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: { smUser },
  state: {},
  mutations: {},
  actions: {}
});
//* hot module reloading for modules: https://vuex.vuejs.org/guide/hot-reload.html
if (module.hot) {
  module.hot.accept(
    [/*"./modules/account", "./modules/transaction", */ "./modules/smUser"],
    () => {
      /*const hotAccount = require("./modules/account").default;
      const hotTransaction = require("./modules/transaction").default;*/
      const hotUser = require("./modules/smUser").default;
      store.hotUpdate({
        modules: {
          /* account: hotAccount,
          transaction: hotTransaction,*/
          user: hotUser
        }
      });
    }
  );
}
export default store;
