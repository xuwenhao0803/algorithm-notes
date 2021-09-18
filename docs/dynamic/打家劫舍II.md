# 打家劫舍II
<a href="https://leetcode-cn.com/problems/house-robber-ii/" target="_blank">题目链接</a>
```
你是一个专业的小偷，计划偷窃沿街的房屋，每间房内都藏有一定的现金。这个地方所有的房屋都
 围成一圈 ，这意味着第一个房屋和最后一个房屋是紧挨着的。同时，相邻的房屋装有相互连通的防盗系统，
 如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警 。
给定一个代表每个房屋存放金额的非负整数数组，计算你 在不触动警报装置的情况下 ，今晚能够偷窃到的最高金额。
>示例
输入：nums = [2,3,2]
输出：3
解释：你不能先偷窃 1 号房屋（金额 = 2），然后偷窃 3 号房屋（金额 = 2）, 因为他们是相邻的。
```
思路：和上一题一样因为不能同时取最后一个和第一个。所以可以推断出能偷到最大的金额为数组nums.slice(1)和nums.slice(0,nums.length-1)中的最大值

```js
var rob = function (nums) {
   if(nums.length==1)return nums[0];
    const arr1 = nums.slice(1);
    const arr2 = nums.slice(0, nums.length - 1)
    const sumAmount = (arr) => {
        const tmp = new Array(arr.length).fill(0);
        //确定basecase
        tmp[0] = arr[0];
        tmp[1] = Math.max(arr[0], arr[1]);
        for (let i = 2; i < arr.length; i++) {
            tmp[i] = Math.max(tmp[i - 1], arr[i] + tmp[i - 2]);
        }
        return tmp[arr.length - 1]
    }
    return Math.max(sumAmount(arr1), sumAmount(arr2))
};


```