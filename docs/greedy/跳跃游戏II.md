# 跳跃游戏II
<a href="https://leetcode-cn.com/problems/jump-game-ii/" target="_blank">题目链接</a>

```
给你一个非负整数数组 nums ，你最初位于数组的第一个位置。

数组中的每个元素代表你在该位置可以跳跃的最大长度。

你的目标是使用最少的跳跃次数到达数组的最后一个位置。

假设你总是可以到达数组的最后一个位置。

输入: nums = [2,3,1,1,4]
输出: 2
解释: 跳到最后一个位置的最小跳跃数是 2。
     从下标为 0 跳到下标为 1 的位置，跳 1 步，然后跳 3 步到达数组的最后一个位置。
```

- 可以使用贪心或者动态规划，贪心是特殊的动态规划

贪心：

```js
var jump = function (nums) {

    let step = 0;
    let index = 0;
    let max = 0;

    for (let i = 0; i < nums.length - 1; i++) {
        max = Math.max(max, nums[i] + i)//求出当前能走的最大距离
        if (index === i) {//当下标为最大位置时步长+1
            step++
            index = max
        }
        if (index >= nums.length - 1) {
            break
        }
    }
    return step
};

```

动态规划

```js


```