<template>
    <div class="">
        <p>这是个玄孙组件</p>
        <button @click="test()">玄孙出击</button>
    </div>
</template>

<script>
    export default{
        methods:{
            test(){
                this.$emit('msgUpGrand','我是玄孙')
            }
        }
    }
</script>