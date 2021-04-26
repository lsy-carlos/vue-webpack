import Vue from "vue";
import VueRouter from "vue-router";
import App from "./app";
import routes from "src/router/route.config";
import store from "src/store/index";
import "src/common/reset.scss";
import AsideRight from "src/common/asideRight/index";
import VConsole from "vconsole";

// new VConsole();

Vue.use(VueRouter);
Vue.use(AsideRight);

window.log = console.log.bind(null);

const router = new VueRouter({
  routes,
});
router.beforeEach((to, from, next) => {
  console.log("beforeEach");

  document.title = to.meta.title;
  if (to.path == "/learnWeb") {
    next("/vueEmit");
  } else {
  }
  next();
});

router.beforeResolve((to, from, next) => {
  console.log("beforeResolve");
  store.commit("set_state_common", { routerPath: to.path });
  next();
});

new Vue({
  el: "#app",
  router: router,
  store,
  render: (h) => h(App),
});
