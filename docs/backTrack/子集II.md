# 子集II
<a href="https://leetcode-cn.com/problems/subsets-ii/" target="_blank">题目链接</a>

```
给你一个整数数组 nums ，其中可能包含重复元素，请你返回该数组所有可能的子集（幂集）。

解集 不能 包含重复的子集。返回的解集中，子集可以按 任意顺序 排列。

示例 1：

输入：nums = [1,2,2]
输出：[[],[1],[1,2],[1,2,2],[2],[2,2]]

```



> 思路: 涉及到重复元素需要排序之后再取值，然后去重


```js
var subsetsWithDup = function (nums) {
    nums.sort((a, b) => a - b)
    const result = []
    const set = new Set()//使用set数据结构来去重
    const backTrack = (index, arr, select) => {
        if (index === nums.length) {
            const tmp = arr.slice();
            const str=tmp.toString();//array.toString()存入数组中
            if (!set.has(str)) {
                result.push(tmp)
            }
            set.add(str)
            return
        }

        arr.push(nums[index])
        backTrack(index + 1, arr, true)
        arr.pop()
        backTrack(index + 1, arr, false)
    }

    backTrack(0, [], false)

    return result
};
```
