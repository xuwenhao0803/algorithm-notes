# 删除链表的倒数第 N 个结点

<a href="https://leetcode-cn.com/problems/remove-nth-node-from-end-of-list/" target="_blank">题目链接</a>

```
给你一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。
```
<img src="https://assets.leetcode.com/uploads/2020/10/03/remove_ex1.jpg"/>
<div>思路：定义两个指针先让快指针走倒数第n个距离，然后一起走等到快指针走到头之后，删除慢指针的下一节点</div>


```js
var removeNthFromEnd = function (head, n) {
let pre=new ListNode(-1,head);//创建一个节点指向头节点
let fast,slow;
fast=slow=head;
while(n--){
fast=fast.next;
}
if(!fast){//存在倒数的节点已经是其数组长度
    return pre.next.next
}
while(fast.next){
    fast=fast.next
    slow=slow.next
}
slow.next=slow.next.next;
return pre.next;
}
```