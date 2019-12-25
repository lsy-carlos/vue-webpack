<template>
    <div class="design-pattern">
        <h2>观察者模式（Observer Pattern）</h2>
        <p>
            观察者模式定义了对象间的一种一对多的依赖关系，当一个对象的状态发生改变时，所有依赖于它的对象都将得到通知，并自动更新。观察者模式属于行为型模式，行为型模式关注的是对象之间的通讯，观察者模式就是观察者和被观察者之间的通讯。<br/>
        </p>
        <p>
            观察者模式有一个别名叫“发布-订阅模式”，或者说是“订阅-发布模式”，订阅者和订阅目标是联系在一起的，当订阅目标发生改变时，逐个通知订阅者。我们可以用报纸期刊的订阅来形象的说明，当你订阅了一份报纸，每天都会有一份最新的报纸送到你手上，有多少人订阅报纸，报社就会发多少份报纸，报社和订报纸的客户就是上面文章开头所说的“一对多”的依赖关系。<br/>
        </p>
        <h2>发布订阅模式（Pub-Sub Pattern）</h2>
        <p>
            其实24种基本的设计模式中并没有发布订阅模式，上面也说了，他只是观察者模式的一个别称。

            但是经过时间的沉淀，似乎他已经强大了起来，已经独立于观察者模式，成为另外一种不同的设计模式。<br/>

            
        </p>
        <p>
            在现在的发布订阅模式中，称为发布者的消息发送者不会将消息直接发送给订阅者，这意味着发布者和订阅者不知道彼此的存在。在发布者和订阅者之间存在第三个组件，称为消息代理或调度中心或中间件，它维持着发布者和订阅者之间的联系，过滤所有发布者传入的消息并相应地分发它们给订阅者。
        </p>
        <p>
            举一个例子，你在微博上关注了A，同时其他很多人也关注了A，那么当A发布动态的时候，微博就会为你们推送这条动态。A就是发布者，你是订阅者，微博就是调度中心，你和A是没有直接的消息往来的，全是通过微博来协调的（你的关注，A的发布动态）。<br/>
        </p>
    </div>
</template>
<script>
import './index.scss'

export default {
    data(){
        return{

        }
    },
    created() {
        //有一家猎人工会，其中每个猎人都具有发布任务(publish)，订阅任务(subscribe)的功能
        //他们都有一个订阅列表来记录谁订阅了自己
        //定义一个猎人类
        //包括姓名，级别，订阅列表
        function Hunter(name, level){
            this.name = name
            this.level = level
            this.list = []
        }
        Hunter.prototype.publish = function (money){
            console.log(this.level + '猎人' + this.name + '寻求帮助')
            this.list.forEach(function(item, index){
                item(money)
            })
        }
        Hunter.prototype.subscribe = function (targrt, fn){
            console.log(this.level + '猎人' + this.name + '订阅了' + targrt.name)
            targrt.list.push(fn)
        }
        
        //猎人工会走来了几个猎人
        let hunterMing = new Hunter('小明', '黄金')
        let hunterJin = new Hunter('小金', '白银')
        let hunterZhang = new Hunter('小张', '黄金')
        let hunterPeter = new Hunter('Peter', '青铜')
        
        //Peter等级较低，可能需要帮助，所以小明，小金，小张都订阅了Peter
        hunterMing.subscribe(hunterPeter, function(money){
            console.log('小明表示：' + (money > 200 ? '' : '暂时很忙，不能') + '给予帮助')
        })
        hunterJin.subscribe(hunterPeter, function(){
            console.log('小金表示：给予帮助')
        })
        hunterZhang.subscribe(hunterPeter, function(){
            console.log('小金表示：给予帮助')
        })
        
        //Peter遇到困难，赏金198寻求帮助
        hunterPeter.publish(198)
        
        //猎人们(观察者)关联他们感兴趣的猎人(目标对象)，如Peter，当Peter有困难时，会自动通知给他们（观察者）
    },
    mounted() {
        //定义一家猎人工会
        //主要功能包括任务发布大厅(topics)，以及订阅任务(subscribe)，发布任务(publish)
        let HunterUnion = {
            type: 'hunt',
            topics: Object.create(null),
            subscribe: function (topic, fn){
                if(!this.topics[topic]){
                    this.topics[topic] = [];  
                }
                this.topics[topic].push(fn);
            },
            publish: function (topic, money){
                if(!this.topics[topic])
                    return;
                for(let fn of this.topics[topic]){
                    fn(money)
                }
            }
        }
        
        //定义一个猎人类
        //包括姓名，级别
        function Hunter(name, level){
            this.name = name
            this.level = level
        }
        //猎人可在猎人工会发布订阅任务
        Hunter.prototype.subscribe = function (topic, fn){
            console.log(this.level + '猎人' + this.name + '订阅了狩猎' + topic + '的任务')
            HunterUnion.subscribe(topic, fn)
        }
        Hunter.prototype.publish = function (topic, money){
            console.log(this.level + '猎人' + this.name + '发布了狩猎' + topic + '的任务')
            HunterUnion.publish(topic, money)
        }
        
        //猎人工会走来了几个猎人
        let hunterMing = new Hunter('小明', '黄金')
        let hunterJin = new Hunter('小金', '白银')
        let hunterZhang = new Hunter('小张', '黄金')
        let hunterPeter = new Hunter('Peter', '青铜')
        
        //小明，小金，小张分别订阅了狩猎tiger的任务
        hunterMing.subscribe('tiger', function(money){
            console.log('小明表示：' + (money > 200 ? '' : '不') + '接取任务')
        })
        hunterJin.subscribe('tiger', function(money){
            console.log('小金表示：接取任务')
        })
        hunterZhang.subscribe('tiger', function(money){
            console.log('小张表示：接取任务')
        })
        //Peter订阅了狩猎sheep的任务
        hunterPeter.subscribe('sheep', function(money){
            console.log('Peter表示：接取任务')
        })
        
        //Peter发布了狩猎tiger的任务
        hunterPeter.publish('tiger', 198)
        
        //猎人们发布(发布者)或订阅(观察者/订阅者)任务都是通过猎人工会(调度中心)关联起来的，他们没有直接的交流。
    },
}
</script>