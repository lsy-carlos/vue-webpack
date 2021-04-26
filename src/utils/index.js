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
  let timer = null;
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
//节流
export function throttle(fn, delay) {
  if (typeof fn !== "function") {
    return;
  }
  let timer = null;
  return function() {
    const _this = this;
    if (!timer) {
      timer = setTimeout(() => {
        fn.apply(_this, [...arguments]);
        timer = null;
      }, delay);
    }
  };
}
export function deepClone(values) {
  let copy = null;
  if (values === null || typeof values !== "object") {
    return values;
  }
  if (values instanceof Date) {
    copy = new Date();
    copy.setTime(values.getTime());
    return copy;
  }
  if (values instanceof Array) {
    copy = [];
    for (let i = 0, len = values.length; i < len; i++) {
      copy[i] = deepClone(values[i]);
    }
    return copy;
  }
  if (values instanceof Object) {
    copy = {};
    for (let attr in values) {
      if (values.hasOwnProperty(attr)) {
        copy[attr] = deepClone(values[attr]);
      }
      return copy;
    }
  }
}
