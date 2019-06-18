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
    },{
        describe:`元素遍历`,
        code:`Element&nbsp;Traversal&nbsp;API&nbsp;为&nbsp;DOM&nbsp;元素添加了以下&nbsp;5&nbsp;个属性。</br>&nbsp;childElementCount：返回子元素（不包括文本节点和注释）的个数。</br>&nbsp;firstElementChild：指向第一个子元素；firstChild&nbsp;的元素版。</br>&nbsp;lastElementChild：指向最后一个子元素；lastChild&nbsp;的元素版。</br>&nbsp;previousElementSibling：指向前一个同辈元素；previousSibling&nbsp;的元素版。</br>&nbsp;nextElementSibling：指向后一个同辈元素；nextSibling&nbsp;的元素版。</br>支持的浏览器为&nbsp;DOM&nbsp;元素添加了这些属性，利用这些元素不必担心空白文本节点，从而可以更方便地查找&nbsp;DOM&nbsp;元素了</br></br>var&nbsp;i,&nbsp;</br>&nbsp;len,&nbsp;</br>&nbsp;child&nbsp;=&nbsp;element.firstElementChild;&nbsp;</br>while(child&nbsp;!=&nbsp;element.lastElementChild){&nbsp;</br>&nbsp;processChild(child);&nbsp;<i class='grey-color'>//已知其是元素</br></i>&nbsp;child&nbsp;=&nbsp;child.nextElementSibling;&nbsp;</br>}&nbsp;`
    },{
        describe:`焦点管理`,
        code:`document.activeElement&nbsp;属性，这个</br>属性始终会引用&nbsp;DOM&nbsp;中当前获得了焦点的元素</br></br>var&nbsp;button&nbsp;=&nbsp;document.getElementById("myButton");&nbsp;</br>button.focus();&nbsp;</br>alert(document.activeElement&nbsp;===&nbsp;button);&nbsp;//true&nbsp;</br></br>document.hasFocus()方法，这个方法用于确定文档是否获得了焦点。</br>var&nbsp;button&nbsp;=&nbsp;document.getElementById("myButton");</br>button.focus();&nbsp;</br>alert(document.hasFocus());&nbsp;//true&nbsp;`
    },{
        describe:'自定义数据属性',
        code:`HTML5&nbsp;规定可以为元素添加非标准的属性，但要添加前缀&nbsp;data-，目的是为元素提供与渲染无关的</br>信息，或者提供语义信息。这些属性可以任意添加、随便命名，只要以&nbsp;data-开头即可</br></br>&lt;div&nbsp;class="btn"&nbsp;&nbsp;data-id="marbtn"&nbsp;data-date="1514"&gt;click&lt;/div&gt;</br>const&nbsp;btn&nbsp;=&nbsp;document.querySelector('.btn');</br>console.log(btn.dataset.id);//marbtn</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;console.log(btn.dataset.date);//1514`
    },{
        describe:`scrollIntoView()方法`,
        code:`scrollIntoView()可以在所有&nbsp;HTML&nbsp;元素上调用，通过滚动浏览器窗口或某个容器元素，调用</br>元素就可以出现在视口中。如果给这个方法传入&nbsp;true&nbsp;作为参数，或者不传入任何参数，那么窗口滚动</br>之后会让调用元素的顶部与视口顶部尽可能平齐。如果传入&nbsp;false&nbsp;作为参数，调用元素会尽可能全部</br>出现在视口中，（可能的话，调用元素的底部会与视口顶部平齐。）不过顶部不一定平齐，`
    },{
        describe:`ocument.readyState`,
        code:`一个文档的&nbsp;readyState&nbsp;可以是以下之一</br>loading&nbsp;/&nbsp;正在加载（document&nbsp;仍在加载）</br>interactive&nbsp;/&nbsp;可交互</br>文档已被解析，"正在加载"状态结束，但是诸如图像，样式表和框架之类的子资源仍在加载。</br>complete&nbsp;/&nbsp;完成</br>文档和所有子资源已完成加载。表示&nbsp;load&nbsp;状态的事件即将被触发。</br>当这个属性的值变化时，document 对象上的readystatechange 事件将被触发</br>document.onreadystatechange&nbsp;=&nbsp;function&nbsp;()&nbsp;{</br>&nbsp;&nbsp;if&nbsp;(document.readyState&nbsp;===&nbsp;"complete")&nbsp;{</br>&nbsp;&nbsp;&nbsp;&nbsp;<i class='grey-color'>//</br></i>&nbsp;&nbsp;}</br>}`
    }
]

export {data as notes}