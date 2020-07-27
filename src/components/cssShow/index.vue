<template>
  <div class="css-wrapper">
    <a class="a-btn" @click="btnClick($event)">button1</a>
    <a class="a-btn" @click="btnClick($event)">button2</a>
  </div>
</template>

<script>
import "./index.scss";

export default {
  data() {
    return {};
  },
  methods: {
    btnClick(e) {
      let x = e.clientX - e.target.offsetLeft;
      let y = e.clientY - e.target.offsetTop;

      let ripples = document.createElement("span");
      ripples.style.left = x + "px";
      ripples.style.top = y + "px";

      e.target.appendChild(ripples);
      setTimeout(() => {
        ripples.remove();
      }, 1000);
    },
  },
};
</script>
