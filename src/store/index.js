import Vue from "vue";
import Vuex from "vuex";
import stores from "./stores.js";

Vue.use(Vuex);

const store = new Vuex.Store(stores);

export default store;
