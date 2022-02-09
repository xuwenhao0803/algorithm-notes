# 组合总和 III
<a href="https://leetcode-cn.com/problems/combination-sum-iii/" target="_blank">题目链接</a>

```
找出所有相加之和为 n 的 k 个数的组合。组合中只允许含有 1 - 9 的正整数，
并且每种组合中不存在重复的数字。

说明：

所有数字都是正整数。
解集不能包含重复的组合。 
示例 1:

输入: k = 3, n = 7
输出: [[1,2,4]]
```



> 思路: 组合问题会想到穷举，穷举有两种一种使用动态规划还有一种是回溯，但是该问题用动态规划并不好表示


```js
var combinationSum3 = function (k, n) {
    const result = []
    const dfs = (start, arr, sum) => {
        if (arr.length === k && sum === n) {
            result.push(arr.slice())//记得浅拷贝不然结果为空
            return
        }

        for (let i = start; i <= 9; i++) {
            arr.push(i)
            dfs(i + 1, arr, sum + i)
            arr.pop(i)//剪枝
        }
    }
    dfs(1, [], 0)
    return result
};
```
