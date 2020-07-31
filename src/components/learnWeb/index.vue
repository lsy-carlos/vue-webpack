<template>
  <div class="learn-web">
    <div>
      <h1 v-pre>url</h1>
      <ul class="lean-wrapper">
        <li v-for="item in urlList" class="wrapper-li" :key="item.name">
          <h3>{{ item.name }}</h3>
          <ul class="learn-inner">
            <li v-for="url in item.url" :key="url.link">
              <a :href="url.link" target="_blank">{{ url.describe }}</a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <code-trans note-title="by note" :notes="notes"></code-trans>
    <aside-right></aside-right>
  </div>
</template>
<script>
import { note, data } from "./data";
import "./index.scss";
import codeTrans from "src/common/codeTrans/index";

export default {
  components: {
    codeTrans,
  },
  data() {
    return {
      urlList: data,
      reason: "",
      transReason: "",
      notes: note,
    };
  },
  created() {
    function timeout(ms) {
      return new Promise((resolve, reject) => {
        setTimeout(resolve, ms, "done");
      });
    }

    function add() {
      // 第一次执行时，定义一个数组专门用来存储所有的参数
      var _args = Array.prototype.slice.call(arguments);

      // 在内部声明一个函数，利用闭包的特性保存_args并收集所有的参数值
      var _adder = function() {
        _args.push(...arguments);
        return _adder;
      };

      // 利用toString隐式转换的特性，当最后执行时隐式转换，并计算最终的值返回
      _adder.toString = function() {
        return _args;
      };
      return _adder;
    }
    console.log(add(1)(2)(3));
  },
  methods: {
    inputText() {
      log(this.reason);
      this.transReason = this.reason;
      this.transReason = this.transReason.replace(/\n|\r/g, "</br>");
      this.transReason = this.transReason.replace(/\s/g, "&nbsp;");
    },
  },
};
</script>
