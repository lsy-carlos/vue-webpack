<template>
    <div class="box">
        <h3>{{flexAttribute.describe}}</h3>
        <div v-for="liItem in flexAttribute.attribute">
            <p>
                {{title}}-->{{liItem.name}} : <span class="describe-item">{{liItem.describe}}</span>
            </p>
            <ul :class="['flex-wrapper',`${title}-${liItem.name}`]">
                <li v-for="(item,index) in liList" 
                :class="['flex-li','flex-number-'+index]"
                :style="{height:flexAttribute.height?`${(index+1)*20}px`:'',width:flexAttribute.width?`${(index+1)*5}px`:''}"
                >{{index}}</li>
            </ul>
        </div>
        <p class="line"></p>
    </div>
</template>
<script>
export default {
    props:{
        flexAttribute:Object,
    },
    data() {
        return {
            
        }
    },
    computed: {
        liList:function(){
            return new Array(this.flexAttribute.liNumber);
        },
        title:function() {
            return this.flexAttribute.title
        }
    },
    created() {
        console.log(this.flexAttribute);
    },
}
</script>
