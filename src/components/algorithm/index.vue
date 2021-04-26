<template>
  <div>
    <aside-right></aside-right>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {},
  methods: {
    //链表
    example1() {
      function Node(val) {
        this.val = val;
        this.next = null;
      }
      function find(item) {
        var currNode = this.head;
        while (currNode.val != item) {
          currNode = currNode.next;
        }
        return currNode;
      }
      function insert(val, item) {
        var newNode = new Node(val);
        var currNode = this.find(item);
        newNode.next = currNode.next;
        currNode.next = newNode;
      }
      //链表类
      function LNodeList() {
        this.head = new Node("head");
        this.find = find;
        this.insert = insert;
      }
      var l1 = new LNodeList();
      l1.insert(3, "head");
      l1.insert(4, 3);
      l1.insert(7, 4);
      var l2 = new LNodeList();
      l2.insert(2, "head");
      l2.insert(6, 2);
      l2.insert(1, 6);
      var addTwoNumbers = function(l1, l2) {
        let node = new Node("head");
        let temp = node; //哑结点
        let add = 0; //是否进一
        let sum = 0; //新链表当前未取余的值 = 链表1值 + 链表2值 + add;

        //遍历，直到最长的都为空
        while (l1 || l2) {
          debugger;
          sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + add;
          temp.next = new Node(sum % 10); //取余则为新链表的值
          temp = temp.next;
          add = sum >= 10 ? 1 : 0;
          l1 && (l1 = l1.next);
          l2 && (l2 = l2.next);
        }
        add && (temp.next = new Node(add));
        return node.next;
      };
      console.log(addTwoNumbers(l1.head.next, l2.head.next));
    },
    //
  },
};
</script>
