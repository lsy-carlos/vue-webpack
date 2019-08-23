<template>
    <div>
        <p>-------------------------------------------------------</p>
        关于$attr和$listeners的使用
        <children :normalData="normalData" :attrData="attrData" :anyData="anyData" @msgUpGrand="grandPan"></children>
    </div>
</template>
<script>

import children from './children.vue'

export default {
    components:{
        children
    },
    data() {
        return {
            normalData:"这个是props",
            attrData:"这个是$attr",
            anyData:"随便的"
        }
    },
    methods: {
        grandPan(){
            console.log('从孙组件调用了哦');
        }
    },
}
</script>