<template>
    <div class="aside-right-wrapper">
        <ul class="btn-route-list">
            <li class="list-item" v-for="(item,index) in routeArr" :key="index" v-show="item.meta">
                <router-link :to="item.path" v-if="item.meta">{{ item.meta.title}}</router-link>
            </li>
        </ul>
    </div>
</template>

<script>

import routes from 'src/route.config.js'

export default{
    name:'aside-right',
    data(){
        return {
            routeArr:[]
        }
    },
    created(){
        this.routeArr = routes.slice(0);
    }
}
</script>

<style lang="scss" scoped>
    .aside-right-wrapper{
        position: fixed;
        height: 100vh;
        overflow-y: auto;
        right:0;
        top:15px;
        .btn-route-list{
            padding: 20px 25px;
            border: 1px solid #aaa;
            background-color: rgba($color: #999, $alpha: 0.1);
            .list-item{
                padding: 7px 10px;
                border: 1px solid #ddd;
                border-radius: 4px;
                margin-bottom: 15px;
            }
        }
    }
</style>