<template>
    <div class="learn-web">
        <div>
            <p>url</p>
            <ul>
                <li v-for="item in urlList">
                    <a :href="item.url">{{item.name}}</a>
                </li>
            </ul>
        </div>
        <code-trans note-title="by note" :notes="notes"></code-trans>
    </div>
</template>
<script>
import note from './data'
import './index.scss'
import codeTrans from 'src/common/codeTrans/index'

export default {
    components:{
        codeTrans
    },
    data(){
        return {
            urlList:[
                {
                    name:'vue-router',
                    url:'https://router.vuejs.org/zh/installation.html'
                },
                {
                    name:'输入url到页面展示发生了什么？',
                    url:'https://segmentfault.com/a/1190000013662126?utm_source=index-hottest#articleHeader9'
                },
                {
                    name:'web安全',
                    url:'https://www.cnblogs.com/yzycoder/p/5741507.html'
                },
            ],
            reason:'',
            transReason:'',
            notes:note
        }
    },
    created() {
       function changeArr(arr) {
            arr.map(val=>val*2);
        }
        let a = [1,2,3];
       log(a.map(val=>val*2));
        log(a)
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

