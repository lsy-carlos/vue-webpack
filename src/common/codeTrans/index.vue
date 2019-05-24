<template>
    <div class="code-trans">
        <div>
            <p>{{theNoteTitle}}</p>
            <ul>
                <li v-for="item in theNotes">
                    <p class="describe">{{item.describe}}</p>
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
            theNoteTitle:this.noteTitle,
            theNotes:this.notes,
            newDescribe:''
        }
    },
    methods: {
        inputText(){
            log(this.reason)
            this.transReason = this.reason;
            this.transReason = this.transReason.replace(/\</g,'&lt;');
            this.transReason = this.transReason.replace(/\>/g,'&gt;');
            this.transReason = this.transReason.replace(/\n|\r/g,'</br>');//换行
            this.transReason = this.transReason.replace(/\s/g,'&nbsp;');//空格
            this.transReason = this.transReason.replace(/^[\/\/]?[\n|\r]$/g,'这是一个注释')
            this.transReason = this.transReason.replace(/(\/{2}[^\<\/br\>]*\<\/br\>)/g,"<i class='grey-color'>$&</i>")//注释置灰
        }
    },
}
</script>