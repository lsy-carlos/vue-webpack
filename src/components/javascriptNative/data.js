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
    }
]

export {data as notes}