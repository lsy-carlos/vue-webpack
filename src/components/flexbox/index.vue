<template>
    <div class="flex-box">
        <flex-content v-for="item in flexList" :flex-attribute="item" :key="$index"></flex-content>
    </div>
</template>
<script>
import flexContent from './flexcontent'
import datalist from './data'
import './index.scss'

export default {
    data(){
        return {
            flexList:datalist
        }
    },
    components:{
        flexContent
    }
}
</script>
