<template>
    <div class="code-trans">
        <div>
            <p>{{noteTitle}}</p>
            <ul>
                <li v-for="item in notes">
                    <p>{{item.describe}}</p>
                    <span class="code-model" v-html="item.code"></span>
                </li>
            </ul>
        </div>
        <textarea cols="30" rows="10" @change="inputText()" v-model="reason"></textarea>
        <textarea cols="30" rows="10" v-model="transReason"></textarea>
    </div>
</template>
<script>
import './index.scss'

export default {
    props:{
       noteTitle:String,
       notes:Array
    },
    data() {
        return {
            reason:'',
            transReason:'',
        }
    },
    methods: {
        inputText(){
            log(this.reason)
            this.transReason = this.reason;
            this.transReason = this.transReason.replace(/\n|\r/g,'</br>');
            this.transReason = this.transReason.replace(/\s/g,'&nbsp;');
            this.transReason = this.transReason.replace(/^[\/\/]?[\n|\r]$/g,'这是一个注释')
            this.transReason = this.transReason.replace(/(\/{2}[^\<\/br\>]*\<\/br\>)/g,"<i class='grey-color'>$&</i>")
        }
    },
}
</script>