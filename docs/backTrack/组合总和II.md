# 组合总和 II
<a href="https://leetcode-cn.com/problems/combination-sum-ii/" target="_blank">题目链接</a>

```
给定一个候选人编号的集合 candidates 和一个目标数 target ，找出 candidates 中
所有可以使数字和为 target 的组合。
candidates 中的每个数字在每个组合中只能使用 一次 。

注意：解集不能包含重复的组合。 

输入: candidates = [10,1,2,7,6,1,5], target = 8,
输出:
[
[1,1,6],
[1,2,5],
[1,7],
[2,6]
]

```

> 思路: 该问题不能包含重复的组合所以，先要做一个排序，在同一层的情况下要跳过重复选择的数


```js
var combinationSum2 = function (candidates, target) {
    const result = []
    candidates.sort((a, b) => a - b)
    const dfs = (start, arr, sum) => {
        if (sum === target) {
            result.push(arr.slice())
            return
        }
        if (sum > target) return

        for (let i = start; i < candidates.length; i++) {
            if (i - 1 >= start && candidates[i] === candidates[i - 1]) continue//在同一层的情况下要跳过重复选择的数
            arr.push(candidates[i])
            dfs(i + 1, arr, sum + candidates[i])
            arr.pop()
        }


    }
    dfs(0, [], 0)
    return result

};
```
