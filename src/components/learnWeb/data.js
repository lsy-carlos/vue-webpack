let note = [
    {
        describe:'过滤数组使用forEach(不改变原数组)',
        code: `function&nbsp;filterArr(arr)&nbsp;{</br>&nbsp;&nbsp;&nbsp;&nbsp;arr.forEach(element&nbsp;=>&nbsp;{</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return&nbsp;element&nbsp;<&nbsp;10</br>&nbsp;&nbsp;&nbsp;&nbsp;});</br>}`
    },
    {
        describe:'改变数组中的每个值使用map(不改变原数组)',
        code:'function&nbsp;changeArr(arr)&nbsp;{</br>&nbsp;&nbsp;&nbsp;&nbsp;arr.map(val=>val*2);</br>}'
    }
]
let data=[
        {
            name:'Vue',
            url:[
                {
                    link: 'https://router.vuejs.org/zh/installation.html',
                    describe:'vue-router官方网址'
                },{
                    link:'http://hcysun.me',
                    describe:'vue技术内幕'
                }
            ],
        },
        {
            name:'输入url到页面展示',
            url:[
                {
                    link: 'https://segmentfault.com/a/1190000013662126?utm_source=index-hottest#articleHeader9',
                    describe:'输入url到页面展示发生了什么？'
                }
            ],
        },
        {
            name:'web安全',
            url:[
                {
                    link: 'https://www.cnblogs.com/yzycoder/p/5741507.html',
                    describe:'web安全知多少'
                }
            ],
        },
        {
            name:'模块化',
            url:[
                {
                    link:'https://juejin.im/post/5ccf0c5d6fb9a03203619874',
                    describe:'前端为什么需要模块化开发'
                },
                {
                    link: 'https://juejin.im/post/5ccf98eae51d453a4a357e4a',
                    describe: '这几个概念你可能还是没搞清require、import和export'
                }
            ]
        },
        {
            name: 'CSS',
            url: [
                {
                    link: 'https://juejin.im/post/5cb45a06f265da03474df54e',
                    describe: ' 9 个 CSS 技巧'
                },{
                    link:'https://segmentfault.com/a/1190000018677177',
                    describe:'理解 CSS 布局和 BFC'
                }
            ]
        },
        {
            name: '面试',
            url: [
                {
                    link: 'https://juejin.im/post/5cd0bdfc6fb9a031f10ca08c',
                    describe: ' 高级前端工程师面试必备'
                },{
                    link: 'https://juejin.im/post/5cd0c0e851882518ef446caa',
                    describe: ' 高阶函数'
                },{
                    link:'https://github.com/airuikun/Weekly-FE-Interview',
                    describe:'每天周十道前端大厂面试题'
                },{
                    link: 'https://juejin.im/post/5ce4171ff265da1bd04eb4f3',
                    describe: '2019 前端面试 | 知其然，并知其所以然'
                },{
                    link: 'https://juejin.im/post/5d05ca79f265da1bc75237ea',
                    describe: '2019 面试系列 - 简历'
                }
            ]
        },
        {
            name: 'es6',
            url: [
                {
                    link: 'https://juejin.im/entry/5cd0dd9ef265da03ac0d2034',
                    describe: '5种应该避免使用箭头函数的情况'
                },{
                    link:'https://juejin.im/post/5cec8a475188255816489878',
                    describe:'通过一些例子深入了解 JavaScript 的 Async 和 Await'
                }
            ]
        },
        {
            name: '其他',
            url: [
                {
                    link: 'https://www.cnblogs.com/geek6/p/3951677.html',
                    describe: '23种设计模式全解析'
                },{
                    link:'https://juejin.im/post/5cd15712e51d453a393af4c5',
                    describe:'Chrome运行时性能瓶颈分析'
                },{
                    link:'http://www.ym4j.com/',
                    describe:'源码世界'
                },{
                    link:'https://github.com/qq449245884/xiaozhi',
                    describe:'文章集合'
                },{
                    link:'https://juejin.im/post/5d07a51b5188254dd63c21ce',
                    describe:'说说 JavaScript 中函数的防抖 (Debounce) 与节流 (Throttle)'
                },{
                    link:'https://juejin.im/post/5d003f51e51d454fbe24a661',
                    describe:'前端工作学习相关网站收集整理'
                },{
                    link: 'https://blog.csdn.net/sinat_22209293/article/details/79101546',
                    describe: '前端开发里的设计模式'
                }
            ]
        }
    ];
export {note,data};