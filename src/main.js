import "@babel/polyfill";
import Vue from "vue";
import "./plugins/vuetify";
import App from "./App.vue";
import router from "./router";
import store from "./store/";
import "./registerServiceWorker";
import "roboto-fontface/css/roboto/roboto-fontface.css";
import "material-design-icons-iconfont/dist/material-design-icons.css";
Vue.config.productionTip = false;
import money from "@/assets/v-money";
Vue.use(money);
import firebase from "@firebase/app";
import "@firebase/auth";
import "@firebase/firestore";
const config = {
  //TODO: pass to environment variables
  apiKey: "AIzaSyCAsXpFCFSJW3WVVCYpR16-dGkWbLOX6AA",
  authDomain: "rosbank-d6246.firebaseapp.com",
  databaseURL: "https://rosbank-d6246.firebaseio.com",
  projectId: "rosbank-d6246",
  storageBucket: "rosbank-d6246.appspot.com",
  messagingSenderId: "354149397702"
};
firebase.initializeApp(config);
export const provider = new firebase.auth.GoogleAuthProvider();
let app;
firebase.auth().onAuthStateChanged(function(user) {
  if (!app) {
    /* eslint-disable no-new */
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount("#app");
  }
  if (user) {
    store.commit("smUser/SET_USER", user);
    router.replace("contas");
  } else {
    store.commit("smUser/SET_USER", null);
    router.replace("/login");
  }
});
export const db = firebase.firestore();
const settings = { timestampsInSnapshots: true };
db.settings(settings);
