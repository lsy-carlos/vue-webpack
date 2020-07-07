<template>
    <div>
        <div class="add-class-cool">cll</div>
        <p>-------------------------------------------------------</p>
        关于$attr和$listeners/provide和inject的使用
        <children :normalData="normalData" :attrData="attrData" :anyData="anyData" @msgUpGrand="grandPan"></children>
    </div>
</template>
<script>

import children from './children.vue'

export default {
    components:{
        children
    },
    provide:{
        provideData:'这是一个provide数据'
    },
    data() {
        return {
            normalData:"这个是props",
            attrData:"这个是$attr",
            anyData:"随便的"
        }
    },
    created(){
        this.$once('hook:beforeDestroy', () => {
            console.log('我被销毁了啊');   
        })
    },
    methods: {
        grandPan(msg){
            console.log(msg);
        }
    },
}
</script>

<style scoped>
    .add-class-cool {
        color: red;
    }
</style>