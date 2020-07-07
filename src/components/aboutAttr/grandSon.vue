<template>
    <div>
        <p>-------------------------------------------------------</p>
        这个是孙组件
        <p>爷组件传下来的{{$attrs}}</p>
        <p>这是provide：{{provideData}}</p>
        <button @click="upMsg">上发事件</button>
        <greateGrandson v-on="$listeners"></greateGrandson>
    </div>
</template>
<script>
import greateGrandson from "./greateGrandson.vue";

export default {
    components:{
        greateGrandson
    },
    data(){
        return{

        }
    },
    inject:['provideData'],
    methods: {
        upMsg(){
            this.$emit('msgUpGrand','我是孙子')
        }
    },
}
</script>