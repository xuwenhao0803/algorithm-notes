# 删除链表的倒数第 N 个结点
<a href="https://leetcode-cn.com/problems/remove-nth-node-from-end-of-list/" target="_blank">题目链接</a>

<div>给你一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。</div>
<div><img src="https://assets.leetcode.com/uploads/2020/10/03/remove_ex1.jpg"/></div>

```
输入：head = [1,2,3,4,5], n = 2
输出：[1,2,3,5]
 
```

> 利用快慢指针，快指针先走n步，如果链表为null了说明超出链表范围则返回next.next。然后快慢指针一起走
> ，快指针走到最后，慢指针的下个节点就是要删除的节点所以慢指针next.next就可以将其删除

```js
var removeNthFromEnd = function (head, n) {

    let result = new ListNode(0, head)
    let p = head
    let p1 = head
    while (n--) {
        p = p.next
    }
    if (!p) {
        return result.next.next
    }

    while (p.next) {
        p = p.next
        p1 = p1.next
    }
    p1.next = p1.next.next

    return  result.next
};
```