<template>
  <div class="">
    <baseLayout>
      <div slot="header">
        这个是重写之后的header
      </div>
    </baseLayout>
    <aside-right></aside-right>
  </div>
</template>

<script>
import baseLayout from "./baseLayout.vue";

export default {
  components: {
    baseLayout,
  },
  created() {
    function dateFormate(dt, fmt = "yyyy-MM-dd HH:mm:ss") {
      if (!dt || dt == "" || dt == 0) {
        return "";
      }

      dt = new Date(+dt);
      var o = {
        "M+": dt.getMonth() + 1,
        "d+": dt.getDate(),
        "h+": dt.getHours() % 12 == 0 ? 12 : dt.getHours() % 12,
        "H+": dt.getHours(),
        "m+": dt.getMinutes(),
        "s+": dt.getSeconds(),
        "q+": Math.floor((dt.getMonth() + 3) / 3),
        S: dt.getMilliseconds(),
      };

      if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(
          RegExp.$1,
          (dt.getFullYear() + "").substr(4 - RegExp.$1.length)
        );
      }

      for (var k in o) {
        if (new RegExp("(" + k + ")").test(fmt)) {
          fmt = fmt.replace(
            RegExp.$1,
            RegExp.$1.length == 1
              ? o[k]
              : ("00" + o[k]).substr(("" + o[k]).length)
          );
        }
      }

      return fmt;
    }
    dateFormate(new Date().getTime(), "yyyy-MM-dd HH:mm:ss q");
  },
};
</script>
