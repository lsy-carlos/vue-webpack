
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
    },
    {
        path:'/flexbox',
        component:load('flexbox')
    },{
        path:'/javascriptnative',
        component:load('javascriptNative')
    },{
        path: '/attrListeners',
        component: load('aboutAttr')
    },{
        path: '/designPattern',
        component: load('designPattern')
    },{
        path: '/curry',
        component: load('curry')
    }
    
]

export default routes 