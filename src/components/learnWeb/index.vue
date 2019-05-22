<template>
    <div class="learn-web">
        <div>
            <h1 v-pre>url</h1>
            <ul class="lean-wrapper">
                <li v-for="item in urlList" class="wrapper-li">
                    <h3>{{item.name}}</h3>
                    <ul class="learn-inner">
                        <li v-for="url in item.url">
                            <a :href="url.link" target="_blank">{{url.describe}}</a>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
        <code-trans note-title="by note" :notes="notes"></code-trans>
    </div>
</template>
<script>
import {note,data} from './data'
import './index.scss'
import codeTrans from 'src/common/codeTrans/index'

export default {
    components:{
        codeTrans
    },
    data(){
        return {
            urlList:data,
            reason:'',
            transReason:'',
            notes:note
        }
    },
    created() {    
       
        function timeout(ms) {
            return new Promise((resolve, reject) => {
                setTimeout(resolve, ms, 'done');
            });
        }

        timeout(100).then((value) => {
            console.log(value);
        });


    },  
    methods: {
        inputText(){
            log(this.reason)    
            this.transReason = this.reason;
            this.transReason = this.transReason.replace(/\n|\r/g,'</br>');
            this.transReason = this.transReason.replace(/\s/g,'&nbsp;');
        }
    },
}
</script>

