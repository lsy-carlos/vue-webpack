<template>
    <div class="javascript-native">
        <code-trans note-title="Javascript-Native" :notes="notes"></code-trans>
        <div id="may-ya">
            d
        </div>
    </div>
</template>
<script>
import codeTrans from 'src/common/codeTrans/index'
import {notes} from './data'

export default {
    components:{
        codeTrans
    },
    data() {
        return {
            notes:notes
        }
    },
    created() {
          
    },
    mounted() {
        this.$nextTick(function(){
            let maEl = document.getElementById("may-ya");
            maEl.firstChild.nodeValue = 'Some <strong>other</strong> message';
            let attr = document.createAttribute('data-id');
            attr.nodeValue = 'this-common';
            maEl.setAttributeNode(attr);
        })
    },
}
</script>
