<template>
  <div>
    正则
    <aside-right></aside-right>
  </div>
</template>
<script>
export default {
  created() {
    this.example5();
  },
  methods: {
    example1() {
      let infor = `
        #1 name bryce #
        #2 age  18 #
        #3 sex man # maybe
        #4 height 180 #
    `;
      //m模式可以把多行分成单行一行一行的匹配，和s模式对立
      let result = infor.match(/#\d+.+#/gm);
      result = result.map((val) => {
        val = val.replace(/#\d+\s+/, "").replace(/\s+#/, "");
        let [arrt, value] = val.split(/\s+/);
        return { arrt, value };
      });
      console.log(result);
    },
    example2() {
      let string = "张三：13age+李四：15age.";
      console.log(string.match(/\p{sc=Han}+/gu)); //["张三", "李四"]
      console.log(string.match(/[.+]/g)); //["张三", "李四"]
    },
    example3() {
      //匹配5到8位数字、字母的密码，并且必须包含至少一个数字，一个大写字母
      let pwd = "wQwww111";
      const regs = [/^[a-z0-9]{5,8}$/i, /[A-Z]/, /[0-9]/];
      console.log(
        regs.every((val) => {
          return val.test(pwd);
        })
      );
    },
    example4() {
      //元子组别名   不可用！！！
      let str = "<h4>studty reg</h4>";
      let reg = /<(h[1-4])>([\s\S]+)<\/\1>/i; //\1就是代表(h[1-4])元子组
      console.log(str.replace(reg, "text:$2")); //text:studty reg
      //如果元子组多了就用\1\2...这样的就不方便，所以要给元子组取别名
      let str1 = "<h4>studty reg</h4>";
      let reg1 = /<(h[1-4])>(?<text>[\s\S]+)<\/\1>/g;
      console.log(str.replace(reg, "text:$text")); //不可用！！！
    },
    example5() {
      //断言 ?= reg 表达式后面等于reg表达式的才匹配
      //找到价格并且统一价格的格式 数字加两位小数
      let price = "1000$ 4份的龙虾套餐,98.00¥ 1份的蛋炒饭套餐";
      let reg = /(\d+)(\.\d{2})?(?=[\$\¥])/gi;
      price = price.replace(reg, (val, ...args) => {
        let priceNumber = args[1] ? val : val + ".00";
        return priceNumber;
      });
      console.log(price);
      //找到字符串中的网址换成www.google.com
      let htmla = "<a href='www.biying.com'>必应</a>";
      const regUrl = /(?<=href=(['"]))([\s\S]+)(?=\1)/gi; //这里的第一个括号是断言，断言里面的括号才是第一个匹配组，也就是['"],所以后面的(?=\1)表示后面接着'或"
      htmla = htmla.replace(regUrl, (val, ...args) => {
        console.log(val, args);
        return "www.google.com";
      });
      console.log(htmla); //<a href='www.google.com'>必应</a>

      //手机号码保密处理
      let phone = "12198760897";
      let regPhone = /(?<=\d{3})(\d{4})(?=\d{4})/gi;
      phone = phone.replace(regPhone, "*".repeat(4));
      console.log(phone); //121****0897
    },
  },
};
</script>
