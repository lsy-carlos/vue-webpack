<template>
    <div>
        <h3>{{message}}</h3>
        <button @click="goWebLearn('/learnWeb')">learn web url</button>
        <button @click="goWebLearn('/vueEmit')">订阅者模式实现vue $on $emit</button>
    </div>
</template>

<script>
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
}
</script>
