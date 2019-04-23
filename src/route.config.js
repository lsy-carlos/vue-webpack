
const load = name => {
    return r=>require.ensure([],()=>{
        r(require(`./components/${name}/index.vue`));
    },'component')
}
 
const routes = [
    {
        path: '/',
        redirect: '/home',
    },
    {
        path:'/home',
        component: load('home')
    },
    {
        path:'/learnWeb',
        component: load('learnWeb')
    },
    {
        path:'/vueEmit',
        component:load('vueEmit')
    }
]

export default routes 