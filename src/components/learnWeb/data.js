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

export default note;