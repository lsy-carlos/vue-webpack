let datalist = [
    {
        title:'flex-direction',
        describe:'属性决定主轴的方向（即项目的排列方向）',
        liNumber:3,
        attribute: [
            {
                name: 'row',
                describe:'主轴为水平方向，起点在左端。'
            },{
                name: 'row-reverse',
                describe: '主轴为水平方向，起点在右端。'
            }, {
                name: 'column',
                describe: '主轴为垂直方向，起点在上沿。'
            }, {
                name: 'column-reverse',
                describe: '主轴为垂直方向，起点在下沿。'
            }
        ]
    },{
        title: 'flex-wrap',
        liNumber: 35,
        attribute: [
            {
                name: 'nowrap',
                describe: '（默认）：不换行'
            },
            {
                name: 'wrap',
                describe: '换行，第一行在上方'
            },
            {
                name: 'wrap-reverse',
                describe: '换行，第一行在下方'
            },
        ],
        describe: 'flex-wrap属性定义，如果一条轴线排不下，如何换行',   
    },
    {
        title: 'flex-flow',
        liNumber: 35,
        attribute: [
            {
                name: 'column-wrap',
                describe: ''
            },
        ],
        describe: 'flex-flow属性是flex-direction属性和flex-wrap属性的简写形式，默认值为row nowrap。',
    },
    {
        title: 'justify-content',
        liNumber: 6,
        attribute: [
            {
                name: 'flex-start',
                describe: '（默认值）：左对齐'
            },
            {
                name: 'flex-end',
                describe: '右对齐'
            },
            {
                name: 'center',
                describe: '两端对齐，项目之间的间隔都相等。'
            },
            {
                name: 'space-around',
                describe: '每个项目两侧的间隔相等。所以，项目之间的间隔比项目与边框的间隔大一倍'
            }, 
            {
                name: 'space-between',
                describe: '两端对齐，项目之间的间隔都相等'
            },
            {
                name: 'space-evenly',
                describe: '每个项目两侧的间隔及项目与边框相等'
            },
        ],
        describe: 'justify-content属性定义了项目在主轴上的对齐方式。',
    },
]
export default datalist;