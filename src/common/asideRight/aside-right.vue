<template>
  <div class="aside-right-wrapper">
    <div class="close-aside" @click="isClose = !isClose">
      <span v-if="isClose"> &lt; </span>
      <span v-else> &gt; </span>
    </div>
    <ul class="btn-route-list" v-show="!isClose">
      <li
        class="list-item"
        :class="{ 'list-item-active': item.path == nowPath }"
        v-for="(item, index) in routeArr"
        :key="index"
        v-show="item.meta"
      >
        <router-link :to="item.path" v-if="item.meta">{{
          item.meta.title
        }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import routes from "src/router/route.config.js";

export default {
  name: "aside-right",
  data() {
    return {
      routeArr: [],
      isClose: false,
      nowPath: "",
    };
  },
  created() {
    this.routeArr = routes.slice(0);
    this.nowPath = this.$store.getters.routerPath;
    console.log(this.$store.getters.routerPath);
  },
};
</script>

<style lang="scss" scoped>
.aside-right-wrapper {
  background-color: #fff;
  position: fixed;
  height: calc(100vh - 40px);
  overflow-y: auto;
  right: 0;
  top: 15px;
  padding: 20px 25px 0 35px;
  border: 1px solid #aaa;
  border-radius: 5px;
  .close-aside {
    width: 26px;
    height: 26px;
    font-size: 20px;
    color: #fff;
    text-align: center;
    line-height: 24px;
    position: absolute;
    top: 50%;
    left: 3px;
    margin-top: -13px;
    cursor: pointer;
    background: #aaa;
    border-radius: 2px;
  }
  .btn-route-list {
    transition: all 0.8 linear;
    padding-bottom: 20px;
    .list-item {
      background-color: rgba($color: #999, $alpha: 0.1);
      padding: 7px 10px;
      border: 1px solid #ddd;
      border-radius: 4px;
      margin-bottom: 15px;
      a {
        display: inline-block;
        width: 100%;
        height: 100%;
      }
    }
    .list-item-active {
      background: linear-gradient(90deg, #55e7fc, #0162c8);
    }
  }
}
</style>
