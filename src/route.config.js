
const load = name => {
    return r=>require.ensure([],()=>{
        r(require(`./components/${name}/index.vue`));
    },'vue')
}
 
const routes = [
    {
        path: '/',
        redirect: '/home',
    },
    {
        path:'/home',
        component: load('home')
    }
]

export default routes 