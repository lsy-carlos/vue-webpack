<template>
    <div class="javascript-native">
        <code-trans note-title="Javascript-Native" :notes="notes"></code-trans>
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
        console.log(window.navigator.plugins);
    },
}
</script>
