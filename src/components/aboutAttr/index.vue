<template>
  <div>
    <div class="add-class-cool">cll</div>
    <p>-------------------------------------------------------</p>
    关于$attr和$listeners/provide和inject的使用
    <children
      :normalData="normalData"
      :attrData="attrData"
      :anyData="anyData"
      @msgUpGrand="grandPan"
    ></children>
    <curry></curry>
    <button @click="goChildrenRouter()">子路由</button>
    <aside-right></aside-right>
    <router-view></router-view>
  </div>
</template>
<script>
import children from "./children.vue";
import curry from "../curry/index";

export default {
  components: {
    children,
    curry,
  },
  provide: {
    provideData: "这是一个provide数据",
  },
  data() {
    return {
      normalData: "这个是props",
      attrData: "这个是$attr",
      anyData: "随便的",
    };
  },
  created() {
    this.$once("hook:beforeDestroy", () => {
      console.log("我被销毁了啊");
    });
  },
  methods: {
    grandPan(msg) {
      console.log(msg);
    },
    goChildrenRouter() {
      this.$router.push({ path: "routerchildren" });
    },
  },
};
</script>

<style scoped>
.add-class-cool {
  color: red;
}
</style>
