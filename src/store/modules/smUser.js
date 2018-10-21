import firebase from "@firebase/app";
import "@firebase/auth";
import { provider } from "../../main";

const smUser = {
  namespaced: true,
  state: {
    user: null,
    tokens: null
  },
  mutations: {
    SET_USER(state, payload) {
      state.user = payload;
    },
    SET_TOKENS(state, payload) {
      state.tokens = payload;
    }
  },
  actions: {
    handleSignIn() {
      firebase.auth().signInWithRedirect(provider);
    },
    handleSignOut() {
      firebase.auth().signOut();
    }
  }
};

export default smUser;
