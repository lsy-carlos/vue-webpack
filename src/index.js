import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './app'
import routes from './route.config'

Vue.use(VueRouter);


const router = new VueRouter({
    routes
})

new Vue({
    el: "#app",
    router: router,
    render: h => h(App)
})

