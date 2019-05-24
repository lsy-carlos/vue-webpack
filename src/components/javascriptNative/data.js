let data = [
    {
        describe:`尝试访问未声明的变量会抛出错误，但是通过查询 window 对象，可以知
道某个可能未声明的变量是否存在:`,
        code:`//这里会抛出错误，因为&nbsp;oldValue&nbsp;未定义</br>var&nbsp;newValue&nbsp;=&nbsp;oldValue;&nbsp;</br><i class='grey-color'>//这里不会抛出错误，因为这是一次属性查询</br></i>//newValue&nbsp;的值是&nbsp;undefined&nbsp;</br>var&nbsp;newValue&nbsp;=&nbsp;window.oldValue;&nbsp;`
    },{
        describe:`节点类型由在 Node 类型中定义的下列
12 个数值常量来表示，任何节点类型必居其一:`,
        code:`Node.ELEMENT_NODE(1)；</br>Node.ATTRIBUTE_NODE(2)；</br>Node.TEXT_NODE(3)；</br>Node.CDATA_SECTION_NODE(4)；</br>Node.ENTITY_REFERENCE_NODE(5)；Node.ENTITY_NODE(6)；</br>Node.PROCESSING_INSTRUCTION_NODE(7)；</br>Node.COMMENT_NODE(8)；</br>Node.DOCUMENT_NODE(9)；</br>Node.DOCUMENT_TYPE_NODE(10)；</br>Node.DOCUMENT_FRAGMENT_NODE(11)；</br>Node.NOTATION_NODE(12)。</br>if&nbsp;(someNode.nodeType&nbsp;==&nbsp;1){&nbsp;<i class='grey-color'>//适用于所有浏览器</br></i>&nbsp;alert("Node&nbsp;is&nbsp;an&nbsp;element.");&nbsp;</br>}&nbsp;`
    },{
        describe:`appendChild()`,
        code:`如果传入到&nbsp;appendChild()中的节点已经是文档的一部分了，那结果就是将该节点从原来的位置&nbsp;转移到新位置</br>//someNode&nbsp;有多个子节点</br>var&nbsp;returnedNode&nbsp;=&nbsp;someNode.appendChild(someNode.firstChild);&nbsp;</br>alert(returnedNode&nbsp;==&nbsp;someNode.firstChild);&nbsp;//false&nbsp;</br>alert(returnedNode&nbsp;==&nbsp;someNode.lastChild);&nbsp;//true`
    },{
        describe:`normalize()`,
        code:`这个方法唯一的作用就是处理文档树中的文本节点。</br>由于解析器的实现或&nbsp;DOM&nbsp;操作等原因，可能会出现文本节点不包含文本，或者接连出现两个文本节点</br>的情况。当在某个节点上调用这个方法时，就会在该节点的后代节点中查找上述两种情况。如果找到了</br>空文本节点，则删除它；如果找到相邻的文本节点，则将它们合并为一个文本节点。`
    },{
        describe:`documentElement`,
        code:`&lt;html&gt;&nbsp;</br>&nbsp;&lt;body&gt;&nbsp;</br>&nbsp;</br>&nbsp;&lt;/body&gt;&nbsp;</br>&lt;/html&gt;&nbsp;</br>var&nbsp;html&nbsp;=&nbsp;document.documentElement;&nbsp;<i class='grey-color'>//取得对&lt;html&gt;的引用</br></i>alert(html&nbsp;===&nbsp;document.childNodes[0]);&nbsp;//true&nbsp;</br>alert(html&nbsp;===&nbsp;document.firstChild);&nbsp;//true&nbsp;</br>这个例子说明，documentElement、firstChild&nbsp;和&nbsp;childNodes[0]的值相同，都指向&lt;html&gt;</br>元素`
    },{
        describe:`attributes 属性`,
        code:`&lt;div&nbsp;id="my-attribute-learn"&gt;</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Element&nbsp;类型是使用&nbsp;attributes&nbsp;属性的唯一一个&nbsp;DOM&nbsp;节点类型。attributes&nbsp;属性中包含一个</br>&lt;/div&gt;</br></br></br>getNamedItem(name)：返回&nbsp;nodeName&nbsp;属性等于&nbsp;name&nbsp;的节点；</br>removeNamedItem(name)：从列表中移除&nbsp;nodeName&nbsp;属性等于&nbsp;name&nbsp;的节点；</br>setNamedItem(node)：向列表中添加节点，以节点的&nbsp;nodeName&nbsp;属性为索引；</br>item(pos)：返回位于数字&nbsp;pos&nbsp;位置处的节点。</br></br>let&nbsp;myLear&nbsp;=&nbsp;document.getElementById('my-attribute-learn');</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;myLear.attributes.getNamedItem('id');//id&nbsp;=&nbsp;'my-attribute-learn'</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;myLear.attributes.getNamedItem('id').nodeValue;//my-attribute-learn</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class='grey-color'>//等价于</br></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;myLear.attributes['id'].nodeValue;&nbsp;`
    },{
        describe:`setAttributeNode()方法`,
        code:`为了将新创建的特性添加到</br>元素中，必须使用元素的&nbsp;setAttributeNode()方法。</br></br>let&nbsp;attr&nbsp;=&nbsp;document.createAttribute('data-id');</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;attr.nodeValue&nbsp;=&nbsp;'this-common';</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;maEl.setAttributeNode(attr);`
    },{
        describe:`querySelector()方法`,
        code:`//取得&nbsp;body&nbsp;元素</br>var&nbsp;body&nbsp;=&nbsp;document.querySelector("body");&nbsp;</br>//取得&nbsp;ID&nbsp;为"myDiv"的元素</br>var&nbsp;myDiv&nbsp;=&nbsp;document.querySelector("#myDiv");&nbsp;</br><i class='grey-color'>//取得类为"selected"的第一个元素</br></i>var&nbsp;selected&nbsp;=&nbsp;document.querySelector(".selected");&nbsp;</br>//取得类为"button"的第一个图像元素</br>var&nbsp;img&nbsp;=&nbsp;document.body.querySelector("img.button");`
    }
]

export {data as notes}