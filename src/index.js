import Vue from "vue";
import VueRouter from "vue-router";
import App from "./app";
import routes from "./route.config";
import "src/common/reset.scss";
import VConsole from "vconsole";

// new VConsole();

Vue.use(VueRouter);

window.log = console.log.bind(null);

const router = new VueRouter({
  routes,
});

router.beforeEach((to, from, next) => {
  console.log("beforeEach");

  next();
});

router.beforeResolve((to, from, next) => {
  console.log("beforeResolve");

  next();
});

new Vue({
  el: "#app",
  router: router,
  render: (h) => h(App),
});
