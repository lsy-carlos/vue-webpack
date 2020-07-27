export function dateFormatFilter(dat, fmt = "yyyy-MM-dd hh:mm:ss") {
  if (!dat) {
    return "";
  }
  let _date = new Date(dat);
  let fmtObj = {
    "y+": _date.getFullYear(),
    "M+": _date.getMonth() + 1,
    "d+": _date.getDate(),
    "h+": String(_date.getHours()).padStart(2, "0"),
    "m+": String(_date.getMinutes()).padStart(2, "0"),
    "s+": String(_date.getSeconds()).padStart(2, "0"),
  };
  Object.keys(fmtObj).forEach((val) => {
    fmt = fmt.replace(new RegExp(val), fmtObj[val]);
  });
  return fmt;
}

export function debounce(fn, delay, context) {
  let timer;
  return (...mal) => {
    if (timer) {
      //上一个定时器的函数还没有执行，则在重刷一个定时器
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fn.apply(context, mal);
    }, delay);
  };
}
//过了delay时间执行第一次
export function throttle(fn, delay, immediately = false, context) {
  let thflag = false;
  return () => {
    if (immediately) {
      //先立即执行一次
      immediately = false;
      fn.call(context);
    }
    if (thflag) {
      return;
    }
    thflag = true;
    setTimeout(() => {
      fn.call(context);
      thflag = false;
    }, delay);
  };
}

window.onscroll = throttle(
  () => {
    console.log("正在节流");
  },
  1000,
  true,
  this
);
