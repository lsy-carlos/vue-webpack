<template>
    <div>
        <h3>{{message}}</h3>
        <button @click="goWebLearn('/learnWeb')">learn web url</button>
        <button @click="goWebLearn('/vueEmit')">订阅者模式实现vue $on $emit</button>
        <button @click="goWebLearn('/flexbox')">flex box</button>
        <button @click="goWebLearn('/javascriptnative')">原生js</button>
        <button @click="goWebLearn('/attrListeners')">vue的$attr和$listeners</button>
        <button @click="goWebLearn('/designPattern')">订阅模式</button>
        <div class="css-3"></div>
    </div>
</template>

<script>
import "./index.scss";

export default {
    data() {
        return {
            message: "hello vue",
            messageInput:''
        };
    },
    methods: {
        goWebLearn(path) {
            this.$router.push(path);
        }
    },
    created() {
        this.$nextTick(() => {
            let aSet = new Set([["lsg", 24], ["lyf", 23]]);
            let aMap = new Map(aSet);
            let Div = document.querySelector(".css-3");
            let message = SaferHTML`<p>${this.messageInput} has sent you a message.</p>`;

            function SaferHTML(templateData) {
                let s = templateData[0];
                for (let i = 1; i < arguments.length; i++) {
                    let arg = String(arguments[i]);

                    // Escape special characters in the substitution.
                    s += arg
                        .replace(/&/g, "&amp;")
                        .replace(/</g, "&lt;")
                        .replace(/>/g, "&gt;");

                    // Don't escape special characters in the template.
                    s += templateData[i];
                }
                return s;
            }
        });
    }
};
</script>
