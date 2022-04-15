import Vue from "vue";
import Vuex from "vuex";
import counter from "./modules/counter";
import * as mutations from "./mutations";
import * as getters from "./getters";
import * as actions from "./actions";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    value : 10
  },
  getters,
  mutations,
  actions,
  modules : {
    counter
  }
});
