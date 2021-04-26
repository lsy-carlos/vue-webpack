<template>
  <div>
    <aside-right></aside-right>
  </div>
</template>

<script>
import "./index.scss";

export default {
  created() {
    this.example1();
  },
  methods: {
    example1() {
      const pipe = function(value, fnObj) {
        let funcSatck = [];
        let oproxy = new Proxy(
          {},
          {
            get(pipeObject, fnName) {
              //每次获取属性（pipe(3, fnObj).double）的时候都要走这个方法
              if (fnName === "get") {
                //如果属性名是get则遍历方法集中的方法，把得到的结果返回给下个方法作为参数使用
                return funcSatck.reduce((val, fn) => {
                  return fn(val);
                }, value);
              }
              //如果要访问的属性fnName是不是get那就包方法对象的方法推入方法集中
              funcSatck.push(fnObj[fnName]);
              return oproxy;
            },
          }
        );
        return oproxy;
      };
      const fnObj = {
        double: (n) => n * 2,
        pow: (n) => n * n,
        reverseInt: (n) =>
          n
            .toString()
            .split("")
            .reverse()
            .join("") | 0,
      };
      console.log(pipe(3, fnObj).double.pow.reverseInt.get);
    },
  },
};
</script>
