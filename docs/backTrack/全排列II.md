# 全排列II
<a href="https://leetcode-cn.com/problems/permutations-ii/" target="_blank">题目链接</a>

```
给定一个可包含重复数字的序列 nums ，按任意顺序 返回所有不重复的全排列。

示例 1：

输入：nums = [1,1,2]
输出：
[[1,1,2],
 [1,2,1],
 [2,1,1]]

```



> 思路: 穷举回溯，创建一个数组来代表选取过的元素，set用来去重


```js

var permuteUnique = function (nums) {
    const result = []
    const set = new Set()
    const backTrack = (arr, reamin) => {
        if (arr.length === nums.length) {
            const str = arr.toString()
            if (!set.has(str)) {
                result.push(arr.slice())
                set.add(str)
            }
            return
        }
        for (let i = 0; i < nums.length; i++) {
            if (reamin[i]) continue;
            reamin[i] = true
            arr.push(nums[i])
            backTrack(arr, reamin)
            arr.pop()
            reamin[i] = false
        }
    }
    backTrack([], new Array(nums.length).fill(false))
    return result
};

```
