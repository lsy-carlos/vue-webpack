<template>
  <div>
    <h3>{{ message }}</h3>
    <button @click="goWebLearn('/learnWeb')">learn web url</button>
    <button @click="goWebLearn('/vueEmit')">订阅者模式实现vue $on $emit</button>
    <button @click="goWebLearn('/flexbox')">flex box</button>
    <button @click="goWebLearn('/javascriptnative')">原生js</button>
    <button @click="goWebLearn('/attrListeners')">
      vue的$attr和$listeners
    </button>
    <button @click="goWebLearn('/designPattern')">订阅模式</button>
    <button @click="goWebLearn('/curry')">柯里化</button>
    <button @click="goWebLearn('/slotTry')">slot</button>
    <div id="test-click">test-click</div>
    <div class="css-3"></div>
    <!-- <curry></curry> -->
    <input type="text" v-model.number="count" />
    <div>{{ showCount() }}</div>
    <button @click="countAdd()">addCount</button>
    <button @click="testDebounce('jj', 'jdhhd', 'jjjhhjgu')">测试去抖</button>
    <aside-right></aside-right>
  </div>
</template>

<script>
import "./index.scss";
import curry from "../curry/index";
import { dateFormatFilter, debounce } from "src/utils/index.js";

export default {
  components: {
    curry,
  },
  data() {
    return {
      message: "hello vue",
      messageInput: "",
      queryTest: "",
      count: 1,
    };
  },
  created() {
    /* console.log(dateFormatFilter(new Date().getTime(), "yyyy-MM-dd hh:mm"));
    if (this.$route.query.set_i) {
      sessionStorage.setItem("test", "this is test");
    }
    var obj = { name: "Smiley" };
    var greeting = function(str, lang) {
      this.value = "greetingValue";
      console.log("Welcome " + this.name + " to " + str + " in " + lang);
    };
    var objGreeting = greeting.bind(obj, "the world");

    objGreeting("JS"); */
    /*  this.$nextTick(() => {
            var EventTarget = function() {
                this._listener = {};
            };

            EventTarget.prototype = {
                constructor: this,
                addEvent: function(type, fn) {
                    if (typeof type === "string" && typeof fn === "function") {
                        if (typeof this._listener[type] === "undefined") {
                            this._listener[type] = [fn];
                        } else {
                            this._listener[type].push(fn);
                        }
                    }
                    return this;
                },
                addEvents: function(obj) {
                    obj = typeof obj === "object" ? obj : {};
                    var type;
                    for (type in obj) {
                        if (type && typeof obj[type] === "function") {
                            this.addEvent(type, obj[type]);
                        }
                    }
                    return this;
                },
                fireEvent: function(type) {
                    if (type && this._listener[type]) {
                        var events = {
                            type: type,
                            target: this
                        };

                        for (
                            var length = this._listener[type].length, start = 0;
                            start < length;
                            start += 1
                        ) {
                            this._listener[type][start].call(this, events);
                        }
                    }
                    return this;
                },
                fireEvents: function(array) {
                    if (array instanceof Array) {
                        for (
                            var i = 0, length = array.length;
                            i < length;
                            i += 1
                        ) {
                            this.fireEvent(array[i]);
                        }
                    }
                    return this;
                },
                removeEvent: function(type, key) {
                    var listeners = this._listener[type];
                    if (listeners instanceof Array) {
                        if (typeof key === "function") {
                            for (
                                var i = 0, length = listeners.length;
                                i < length;
                                i += 1
                            ) {
                                if (listeners[i] === key) {
                                    listeners.splice(i, 1);
                                    break;
                                }
                            }
                        } else if (key instanceof Array) {
                            for (
                                var lis = 0, lenkey = key.length;
                                lis < lenkey;
                                lis += 1
                            ) {
                                this.removeEvent(type, key[lenkey]);
                            }
                        } else {
                            delete this._listener[type];
                        }
                    }
                    return this;
                },
                removeEvents: function(params) {
                    if (params instanceof Array) {
                        for (
                            var i = 0, length = params.length;
                            i < length;
                            i += 1
                        ) {
                            this.removeEvent(params[i]);
                        }
                    } else if (typeof params === "object") {
                        for (var type in params) {
                            this.removeEvent(type, params[type]);
                        }
                    }
                    return this;
                }
            };
        }); */
  },
  methods: {
    goWebLearn(path) {
      this.$router.push(path);
    },
    countAdd() {
      this.count++;
    },
    showCount() {
      return Date.now() + `__${this.count}`;
    },
    testDebounce: debounce(
      (...mal) => {
        console.log(mal);
      },
      1000,
      this
    ),
  },
};
</script>
