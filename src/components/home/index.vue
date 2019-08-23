<template>
    <div>
        <h3>{{message}}</h3>
        <button @click="goWebLearn('/learnWeb')">learn web url</button>
        <button @click="goWebLearn('/vueEmit')">订阅者模式实现vue $on $emit</button>
        <button @click="goWebLearn('/flexbox')">flex box</button>
        <button @click="goWebLearn('/javascriptnative')">原生js</button>
        <button @click="goWebLearn('/attrListeners')">vue的$attr和$listeners</button>
        <div class="css-3"></div>
    </div>
</template>

<script>
import './index.scss'

export default {
    data(){
        return{
            message:'hello vue'
        }
    },
    methods: {
        goWebLearn(path){
            this.$router.push(path);
        }
    },
    created() {
        function person(firstName, lastName, age){
            const person = {}
            person.firstName = firstName;
            person.lastName = lastName;
            person.age = age;
            return person;
        }

        const mike = new person('mike', 'grand', 23);
        console.log('<\/script>');
    },
}
</script>
