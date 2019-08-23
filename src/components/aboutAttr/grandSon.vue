<template>
    <div>
        <p>-------------------------------------------------------</p>
        这个是孙组件
        <p>爷组件传下来的{{$attrs}}</p>
        <button @click="upMsg">上发事件</button>
    </div>
</template>
<script>
export default {
    data(){
        return{

        }
    },
    methods: {
        upMsg(){
            this.$emit('msgUpGrand')
        }
    },
}
</script>