
const load = name => {
    return r=>require.ensure([],()=>{
        r(require(`./components/${name}.vue`));
    },'vue')
}

export default routes = [
    {
        path: '/',
        component:load('home')
    }
]