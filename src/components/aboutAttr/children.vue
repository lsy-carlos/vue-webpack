<template>
  <div>
    <p>-------------------------------------------------------</p>
    这部分是children
    <p>正常的props：{{ normalData }}</p>
    <p>$attr：{{ $attrs }}</p>
    <grand-son v-bind="$attrs" v-on="$listeners"></grand-son>
  </div>
</template>
<script>
import grandSon from "./grandSon.vue";

export default {
  props: ["normalData"],
  components: {
    grandSon,
  },
  data() {
    return {};
  },
  created() {
    console.log(this.$attrs);
  },
};
</script>
