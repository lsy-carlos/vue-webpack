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
                }
            ]
        },
        {
            name: 'CSS',
            url: [
                {
                    link: 'https://juejin.im/post/5cb45a06f265da03474df54e',
                    describe: ' 9 个 CSS 技巧'
                }
            ]
        }
    ];
export {note,data};