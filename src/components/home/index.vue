<template>
    <div>
        <h3>{{message}}</h3>
        <button @click="goWebLearn('/learnWeb')">learn web url</button>
        <button @click="goWebLearn('/vueEmit')">订阅者模式实现vue $on $emit</button>
        <button @click="goWebLearn('/flexbox')">flex box</button>
        <button @click="goWebLearn('/javascriptnative')">原生js</button>
        <button @click="goWebLearn('/attrListeners')">vue的$attr和$listeners</button>
        <div class="css-3"></div>
    </div>
</template>

<script>
import './index.scss'

export default {
    data(){
        return{
            message:'hello vue'
        }
    },
    methods: {
        goWebLearn(path){
            this.$router.push(path);
        }
    },
    created() {
       let aSet = new Set([['lsg',24],['lyf',23]]);
       let aMap = new Map(aSet);

        var person = {
            fullName:function(txt){
                console.log(txt+this.firstName+"."+this.lastName);
                
            }
        }
        var per1 = {
            firstName:'nigula',
            lastName:'zhaosi'
        }
        Function.prototype.myOwnCall = function(context) {
            debugger
            context = context || window;
            var uniqueID = "00" + Math.random();
            while (context.hasOwnProperty(uniqueID)) {
                uniqueID = "00" + Math.random();
            }
            context[uniqueID] = this;

            var args = [];
            for (var i = 1; i < arguments.length; i++) {  
                args.push("arguments[" + i + "]");
            }
            var result = eval("context[uniqueID](" + args + ")");
            delete context[uniqueID];
            return result;
        }
        person.fullName.myOwnCall(per1,"laji,")
    },
}
</script>
