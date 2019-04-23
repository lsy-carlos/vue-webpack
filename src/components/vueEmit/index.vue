<template>
    <div class="vue-emit">
        <code-trans note-title="实现emit" :notes="notes"></code-trans>
    </div>
</template>
<script>
import codeTrans from 'src/common/codeTrans/index'
import notes from './data'

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
        let t = this;
        let eventList = {};
        function $on(name,fn){
            //有没有名为name的数组，没有就添加
            if(!eventList[name]){
                eventList[name] = [];
            }
            eventList[name].push(fn);
        }
        //只执行一次
        function $once(name,fn){
            let key = `${name}$once`;//加标志和$on区分
            if(!eventList[key]){
                eventList[key] = fn;
            }else{
                throw new Error(`任务队列中还存在${key}类型任务`)
            }
        }
        function $emit(){
            //转换
            let argumentArr = [...arguments];
            //保存第一个参数
            let name = argumentArr.shift();
            //eventlist里面$on的任务数组
            let onFunctions = eventList[name];
            //判断是否为$on发布
            let isNotOnFunction = !onFunctions || onFunctions.length == 0;
            //eventList里面$on的任务
            let  onceFunction = eventList[`${name}$once`];
            //判断是不是$once发布
            let isNotOnceFunction = !onceFunction || typeof onceFunction !== 'function';
            //既不是on也不是once发布 
            if(isNotOnFunction && isNotOnceFunction){
                return;
            }
            //是on发布
            if(!isNotOnFunction){
                onFunctions.forEach(fn => {
                    fn.apply(this,argumentArr);
                });
            }
            //是once发布
            if(!isNotOnceFunction){
                onceFunction.apply(this,argumentArr);
                delete eventList[`${name}$once`];
            }
        }
        $on('test',(a,b)=>{
            log('test',a,b);
        })
        $once('onceTe',()=>{
            log('oncetest',[...arguments]);
        })
        $emit('test',2,34,1)    
    },
}
</script>
