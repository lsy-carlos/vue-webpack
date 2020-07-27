<template>
  <div class="javascript-native">
    <code-trans note-title="Javascript-Native" :notes="notes"></code-trans>
    <div id="may-ya">
      d
    </div>
  </div>
</template>
<script>
import codeTrans from "src/common/codeTrans/index";
import { notes } from "./data";

export default {
  components: {
    codeTrans,
  },
  data() {
    return {
      notes: notes,
    };
  },
  created() {
    this.example1();
  },
  mounted() {
    this.$nextTick(function() {
      console.log("nexttick");

      let maEl = document.getElementById("may-ya");
      maEl.firstChild.nodeValue = "Some <strong>other</strong> message";
      console.log(maEl.webkitMatchesSelector("#may"));
      // maEl.scrollIntoView();
    });
  },
  methods: {
    example1() {
      const items = [
        { name: "bike", price: "100" },
        { name: "tv", price: "1200" },
        { name: "book", price: "14" },
        { name: "computer", price: "14499" },
        { name: "pen", price: "2" },
        { name: "drug", price: "34" },
      ];
      //filter:返回一个满足条件的数组
      const filterRes = items.filter((item) => item.price < 100);
      console.log(items, filterRes); //过滤出了价格小于100的内容，并且没有改变原来的items
      //map：返回内容的一个单独属性
      const mapRes = items.map((item) => item.name);
      console.log(mapRes); //["bike", "tv", "book", "computer", "pen", "drug"]
      //find:返回满足条件的内容
      const findRes = items.find((item) => item.name === "bike");
      console.log(findRes); //{name: "bike", price: "100"}
    },
  },
};
</script>

<style>
@import "./index.scss";
</style>
