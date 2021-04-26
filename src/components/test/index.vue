<template>
  <div class="test">
    <div class="header">
      <div
        class="drag-item"
        v-for="(item, index) in new Array(4)"
        :key="index"
        @dragstart="handleDragStart"
        :data-index="index"
        :data-number="index"
        draggable
      >
        {{ item }}
      </div>
    </div>
    <div class="content" @drop="handleDrop" @dragover="handleDragOver"></div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {};
  },
  created() {
    setTimeout(() => {
      console.log("宏任务队列");
    }, 0);
    Promise.resolve().then(() => {
      console.log("微任务队列");
    });
    console.log("主任务");
    this.test();
  },
  methods: {
    test() {
      axios
        .post(
          "https://pre.mediportal.com.cn/health/admin/user/queryOrgDoctorLibrary",
          {
            name: "",
            telephone: "",
            deptIds: [],
            titles: [],
            status: "",
            pageIndex: 0,
            pageSize: 15,
          },
          {
            headers: {
              "access-token": "ddc7470ec24c4e07bede2fc7bd95106a",
            },
          }
        )
        .then((res) => {});
    },
    handleDragStart(e) {
      e.dataTransfer.setData("index", e.target.dataset.index);
    },
    handleDrop(e) {
      e.preventDefault();
      e.stopPropagation();
      const component = e.dataTransfer.getData("index");
      debugger;
    },
    handleDragOver(e) {
      debugger;
    },
  },
};
</script>

<style lang="scss" scoped>
.test {
  .header {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    .drag-item {
      width: 50px;
      height: 20px;
      line-height: 20px;
      background: #ccc;
    }
  }
  .content {
    height: 200px;
    border: 1px solid #999;
    margin-top: 20px;
  }
}
</style>
