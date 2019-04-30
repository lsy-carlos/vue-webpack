import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './app'
import routes from './route.config'
import 'src/common/reset.scss'

Vue.use(VueRouter);

window.log = console.log.bind(null)

const router = new VueRouter({
    routes
})

new Vue({
    el: "#app",
    router: router,
    render: h => h(App)
})

