# 三数之和

<a href="https://leetcode-cn.com/problems/3sum/" target="_blank">题目链接</a>
<div>给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有和为 0 且不重复的三元组。</div>
```
输入：nums = [-1,0,1,2,-1,-4]
输出：[[-1,-1,2],[-1,0,1]]
```
>思路是，首先对数组进行排序，定义两个指针分别头尾节点，遍历节点从第二个位置开始，当存在：left+i+right===0则加入结果集合。还有需要跳过重复的值。

```js
var threeSum = function (nums) {
    const result = [];
    const len = nums.length;
    nums.sort((a, b) => a - b);//将数组从小到大排序
    let i = 0;
    while (i < len - 2) {//第一层遍历开始节点的位置
        let first = i + 1;
        let last = len - 1;3
        if (nums[i] > 0) break;
        while (first < last) {//第二层遍历移动开始和结束的指针，跳过重复项
            if (nums[i] * nums[last] > 0) break;
            let values = nums[i] + nums[first] + nums[last];
            if (values === 0) {
                result.push([nums[i],nums[first],nums[last]])
            }
            if (values > 0) {
                while (nums[last] === nums[--last]) { }
            } else {
                while (nums[first] === nums[++first]) { }
            }
        }
        while (nums[i] === nums[++i]) { }
    }
    return result
};
```