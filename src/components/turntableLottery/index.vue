<template>
<Page>
    <div class="turntable-lottery-wrapper" id="turntable-lottery-wrapper">
        <div class="have-chance">
            恭喜您，获得<span class="red-color">1</span>次抽奖机会
        </div>
        <div class="tip">
            活动期间每天可获得一次抽奖机会
        </div>
        <div class="turntable-wrapper" id="turntable-wrapper">
            <div class="turntable-bg">
                <canvas class="canvas-turntable" id="turntable" width="260" height="260"></canvas>
            </div>
            <button class="btn-turntable" :disabled="canNot" @click="prizeStart"></button>
        </div>
        <div class="two-btn clearfix">
            <button class="pull-left">我的卡片</button>
            <button class="pull-right">医生故事</button>
        </div>
        <div class="win-prize-list">
            <div class="list-wrapper">
                <div class="surplus-line"></div>
                 <div class="title"></div>
                <div class="list-box">
                    <ul class="prize-list">
                        <li v-for="(item,index) in prizeUsers" :key="index" class="prize-list-item">
                            <i class="list-left">{{item.name}}</i>
                            {{item.time | dateFormatFilter}}
                            <i class="list-right">{{item.prize}}</i>
                        </li>
                    </ul>
                </div>
            </div>
        </div> 
        <div class="my-prize">
            <button>我的中奖纪录</button>
        </div>
    </div>
</Page>
</template>
<script>
import http from '@/http'
import './index.scss'
import { dateFormatFilter} from '@/utils';

export default {
    data() {
        return{
            canNot:false,//是否能点击抽奖按钮
            rotaDeg:0,//点击抽奖后旋转的角度
            prizes:['苏泊尔电饭煲马1','苏泊尔电饭煲2','苏泊尔电饭3','苏泊尔电饭煲马4','苏泊尔电饭煲马5','苏泊尔电饭煲马6',],//奖品的名字
            prizeUsers:[],//流动展示的中奖人员
        }
    },
    created() {
        let t = this;
        this.$nextTick(()=>{
            t.turntableDraw(6);
        })
    },
    methods: {
        turntableDraw(num){
            var t = this;
            var listPrize = [];
            var userList = 11;//多少个中奖用户
            for (let i = 0; i < userList; i++) {
                t.prizeUsers.push({
                    name:`陈晨${i}`,
                    time:new Date().getTime(),
                    prize:'一等奖'
                })
            }
            t.prizes.forEach((val)=>{ //奖品超过4个字换行
                let list = [];
                if(val.length>4){
                    list.push(val.slice(0,4));
                    list.push(val.slice(4));
                }
                listPrize.push(list);
            })
            if(userList>10){
                 var wrapper = document.getElementById('turntable-lottery-wrapper');
                var elUser =  wrapper.querySelector('.prize-list');
                elUser.style.animation = `translatefresh ${userList+9}s infinite linear`;//设置动画
                let iStyle = document.styleSheets[0];//样式表
                iStyle.insertRule(`@keyframes translatefresh {from { transform: translateY(300px) }to {transform: translateY(-${userList*30}px)}}`,0);//插入动态动画设置
            }
           
            var c=document.getElementById("turntable"),
                ele = document.getElementById("turntable-wrapper");
            var ctx=c.getContext("2d");
            var twoC = false;//两个谢谢参与
            if(num%2 == 0){ 
                num += 2;
                twoC = true;
            }else{
                num += 1;
            }
            var turnNum = 1 / num,
                prizeItems = document.createElement('ul'), // 奖项容器
                html = [], // 奖项
                rotateDeg = 360 / num / 2 + 90, // 扇形回转角度
                container = ele.querySelector('.turntable-bg');
            function iHtml(index){ //设置具体的奖品
                if(listPrize[index].length>1){
                    html.push(`</br><i>${listPrize[index][0]}</i>`);
                    html.push(`</br><i>${listPrize[index][1]}</i>`);
                }else{
                    html.push(`</br><i>${listPrize[index][0]}</i>`);
                }
            }
            for (let i = 0; i < num; i++) {
                // 保存当前状态
                ctx.save();
                // 开始一条新路径
                ctx.beginPath();
                // 位移到圆心，下面需要围绕圆心旋转
                ctx.translate(130, 130);
                // 从(0, 0)坐标开始定义一条新的子路径
                ctx.moveTo(0, 0);
                // 旋转弧度,需将角度转换为弧度,使用 degrees * Math.PI/180 公式进行计算。
                ctx.rotate((360 / num * i - rotateDeg) * Math.PI / 180);
                // 绘制圆弧
                ctx.arc(0, 0, 130, 0,  2 * Math.PI / num, false);
                if (i % 2 == 0) {
                    ctx.fillStyle = '#ECCC95';
                }else{
                    ctx.fillStyle = '#E6C58D';
                }
                // 填充扇形
                ctx.fill();
                ctx.fillStyle = "purple";               //设置填充颜色为紫色
                ctx.fillStyle = "purple";               //设置填充颜色为紫色
                ctx.font = '20px "微软雅黑"';           //设置字体               
                //ctx.strokeText( "left", 450, 400 );
                ctx.fillText( i, 50, 20 );        //填充文字
                // 恢复前一个状态
                ctx.restore();
                // 奖项列表
                html.push('<li class="gb-turntable-item"> <span style="');
                html.push('transform: rotate(' + i * turnNum + 'turn)">');
                if(i == 0){ //第一个扇型
                    html.push('谢谢参与');
                }else if(i+1 <= num/2){ //前一半的扇型
                    html.push(t.numToZn(i)+'等奖');
                    iHtml(i-1);
                    
                }else if(i+1 == (num/2+1) && twoC){//中间的
                    html.push('谢谢参与');
                }else if(i+1 == (num/2+1) && !twoC){//中间的
                    html.push(t.numToZn(i)+'等奖');
                    iHtml(i-1);
                }else if(i+1>(num/2+1) && !twoC){//后半部分扇型
                    html.push(t.numToZn(i)+'等奖');
                    iHtml(i-1);
                }else if(i+1>(num/2+1) && twoC){
                    html.push(t.numToZn(i-1)+'等奖');
                    iHtml(i-2);
                }
                html.push('</span> </li>');//结束标签
                if ((i + 1) === num) {
                    prizeItems.className = 'gb-turntalbe-list';
                    container.appendChild(prizeItems);
                    prizeItems.innerHTML = html.join('');
                }
            }
            t.rotaDeg = 360*10-(360 / num)*2;
        },
        numToZn(index){
            let zn = ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十']
            return zn[index-1];
        },
        prizeStart(){
            var ele = document.getElementById("turntable-wrapper");
            var container = ele.querySelector('.turntable-bg');
            container.style.transform = 'rotate(' + this.rotaDeg + 'deg)';
        }
    },
    filters: {
        dateFormatFilter(value) {
            return dateFormatFilter(value, 'yyyy.MM.dd HH:mm');
        },
    },
};
</script>
