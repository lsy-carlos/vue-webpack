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
        describe: 'flex-wrap属性定义，如果一条轴线排不下，如何换行',   
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
    },
    {
        title: 'flex-flow',
        describe: 'flex-flow属性是flex-direction属性和flex-wrap属性的简写形式，默认值为row nowrap。',
        liNumber: 35,
        attribute: [
            {
                name: 'column-wrap',
                describe: ''
            },
        ],
    },
    {
        title: 'justify-content',
        describe: 'justify-content属性定义了项目在主轴上的对齐方式。',
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
    },
    {
        title: 'align-items',
        describe: 'align-items属性定义项目在交叉轴上如何对齐',
        liNumber: 6,
        attribute: [
            {
                name: 'flex-start',
                describe: '交叉轴的起点对齐'
            },
            {
                name: 'flex-end',
                describe: '交叉轴的终点对齐'
            },
            {
                name: 'center',
                describe: '交叉轴的中点对齐'
            },
            {
                name: 'baseline',
                describe: ' 项目的第一行文字的基线对齐'
            },
            {
                name: 'stretch',
                describe: '（默认值）：如果项目未设置高度或设为auto，将占满整个容器的高度。'
            },
        ],
        height:true
    },
    {
        title: 'align-content',
        describe: 'align-content属性定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用。',
        liNumber: 20,
        attribute: [
            {
                name: 'flex-start',
                describe: '与交叉轴的起点对齐'
            },
            {
                name: 'flex-end',
                describe: '与交叉轴的终点对齐'
            },
            {
                name: 'center',
                describe: '与交叉轴的中点对齐'
            },
            {
                name: 'space-between',
                describe: '与交叉轴两端对齐，轴线之间的间隔平均分布'
            },
            {
                name: 'space-around',
                describe: '每根轴线两侧的间隔都相等。所以，轴线之间的间隔比轴线与边框的间隔大一倍'
            },
            {
                name: 'stretch',
                describe: '轴线占满整个交叉轴（默认值）'
            },
        ],
        height: false,
        width:true
    },
    {
        title: 'item',
        describe: '属性设置在项目上',
        liNumber: 6,
        attribute: [
            {
                name: 'order',
                describe: 'order属性定义项目的排列顺序。数值越小，排列越靠前，默认为0(3 set -1)'
            },
            {
                name: 'flex-grow',
                describe: 'flex-grow属性定义项目的放大比例，默认为0，即如果存在剩余空间，也不放大(3 set 2) ,+++++如果所有项目的flex-grow属性都为1，则它们将等分剩余空间（如果有的话）。如果一个项目的flex-grow属性为2，其他项目都为1，则前者占据的剩余空间将比其他项多一倍。'
            },
            {
                name: 'flex-basis',
                describe: 'flex-basis属性定义了在分配多余空间之前，项目占据的主轴空间（main size）。浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为auto，即项目的本来大小'
            },
            {
                name: 'flex',
                describe: 'flex属性是flex-grow, flex-shrink 和 flex-basis的简写，默认值为0 1 auto。后两个属性可选。该属性有两个快捷值：auto (1 1 auto) 和 none (0 0 auto)。建议优先使用这个属性，而不是单独写三个分离的属性，因为浏览器会推算相关值。'
            },
            {
                name: 'flex-shrink',
                describe: 'flex-shrink属性定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小。++++如果所有项目的flex-shrink属性都为1，当空间不足时，都将等比例缩小。如果一个项目的flex-shrink属性为0，其他项目都为1，则空间不足时，前者不缩小,负值对该属性无效。'
            },
            {
                name: 'align-self',
                describe: 'align-self属性允许单个项目有与其他项目不一样的对齐方式，可覆盖align-items属性。默认值为auto，表示继承父元素的align-items属性，如果没有父元素，则等同于stretch,该属性可能取6个值，除了auto，其他都与align-items属性完全一致。(auto | flex-start | flex-end | center | baseline | stretch)'
            },
        ],
        height: false
    },
]
export default datalist;