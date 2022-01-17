# 前 K 个高频元素

<a href="https://leetcode-cn.com/problems/top-k-frequent-elements/" target="_blank">题目链接</a>
<div>
给你一个整数数组 nums 和一个整数 k ，请你返回其中出现频率前 k 高的元素。你可以按 任意顺序 返回答案。
</div>
```
输入: nums = [1,1,1,2,2,3], k = 2
输出: [1,2]
```

> 遇到前K个元素可以用堆的数据结构来做，降低时间复杂度，nlgk



```js
class MineHeap {

    constructor() {
        this.heap = []
    }
    size() {
        return this.heap.length
    }
    swap(a, b) {
        const tmp = this.heap[a]
        this.heap[a] = this.heap[b]
        this.heap[b] = tmp
    }
    shiftup(index) {
        if (index <= 0) return
        const parentIndex = Math.floor((index - 1) / 2)
        if (this.heap[parentIndex] && this.heap[index] && this.heap[parentIndex].value > this.heap[index].value) {
            this.swap(parentIndex, index)
            this.shiftup(parentIndex)
        }

    }
    shiftdown(index) {
        const left = index * 2 + 1
        const right = index * 2 + 2
        if (this.heap[index] && this.heap[left] && this.heap[index].value > this.heap[left].value) {
            this.swap(left, index)
            this.shiftdown(left)
        }
        if (this.heap[index] && this.heap[right] && this.heap[index].value > this.heap[right].value) {
            this.swap(right, index)
            this.shiftdown(right)
        }

    }
    push(val) {
        this.heap.push(val)
        this.shiftup(this.heap.length - 1)
    }
    pop() {
        this.heap[0] = this.heap.pop()
        this.shiftdown(0)
    }

    peek() {
        return this.heap
    }

}
var topKFrequent = function (nums, k) {
    const mp = {}
    for (let i = 0; i < nums.length; i++) {
        const key = nums[i]
        if (mp[key]) {
            mp[key] = mp[key] + 1
        } else {
            mp[key] = 1
        }
    }
    const min = new MineHeap()
    Object.keys(mp).forEach(item => {
        min.push({ key: item, value: mp[item] })
        if (min.size() > k) {
            min.pop()
        }
    })
    return min.peek().map(item => item.key)

};
```