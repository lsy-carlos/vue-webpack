const load = (name) => {
  return (r) =>
    require.ensure(
      [],
      () => {
        r(require(`src/components/${name}/index.vue`));
      },
      "component"
    );
};

const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    component: load("home"),
    meta: { title: "首页" },
  },
  {
    path: "/learnWeb",
    component: load("learnWeb"),
    meta: { title: "学习web" },
  },
  {
    path: "/vueEmit",
    component: load("vueEmit"),
    meta: { title: "vue的emit" },
  },
  {
    path: "/flexbox",
    component: load("flexbox"),
    meta: { title: "学习flexbox" },
  },
  {
    path: "/javascriptnative",
    component: load("javascriptNative"),
    meta: { title: "原生js" },
  },
  {
    path: "/attrListeners",
    component: load("aboutAttr"),
    meta: { title: "关于vue的$attr和$listeners、provide和inject" },
    children: [
      {
        path: "/routerChildren",
        name: "routerChildren",
        component: () => import("src/components/aboutAttr/routerChildren.vue"),
        caseSensitive: false,
      },
    ],
  },
  {
    path: "/designPattern",
    component: load("designPattern"),
    meta: { title: "发布订阅模式" },
  },
  {
    path: "/curry",
    component: load("curry"),
    meta: { title: "函数柯里化" },
  },
  {
    path: "/slotTry",
    component: load("slotTry"),
    meta: { title: "学习vue插槽" },
  },
  {
    path: "/cssShow",
    component: load("cssShow"),
    meta: { title: "酷炫css" },
  },
  {
    path: "/learnRegExp",
    component: load("learnRegExp"),
    meta: { title: "学习正则" },
  },
  {
    path: "/promiseDemo",
    component: load("promiseDemo"),
    meta: { title: "手写Promise" },
  },
  {
    path: "/learnES6",
    component: load("learnES6"),
    meta: { title: "学习es6" },
  },
  {
    path: "/algorithm",
    component: load("algorithm"),
    meta: { title: "算法" },
  },
  {
    path: "/test",
    component: load("test"),
    meta: { title: "测试页" },
  },
];

export default routes;
