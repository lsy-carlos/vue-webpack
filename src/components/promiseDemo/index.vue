<template>
  <div>
    <aside-right></aside-right>
  </div>
</template>
<script>
import MyPromise from "./promise.js";
export default {
  data() {
    return {};
  },
  created() {
    let p = new MyPromise((resolve, reject) => {
      setTimeout(() => {
        reject("延迟执行");
        console.log("异步中的同步。。");
      }, 1000);
    })
      .then(
        (res) => {
          console.log("---------------");
          console.log(res);
          return "im fine";
        },
        (err) => {
          console.log("xxxxxxxxxxxx");
          console.log(err);
        }
      )
      .then(
        (res) => {
          console.log(`2:${res}`);
        },
        (err) => {
          console.log(`2:${err}`);
        }
      )
      .then(
        (res) => {
          console.log(`3:${res}`);
        },
        (err) => {
          console.log(`3:${err}`);
        }
      );
    console.log("同步中。。");
  },
};
</script>
