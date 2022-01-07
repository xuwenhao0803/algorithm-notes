# 四数相加II
<a href="https://leetcode-cn.com/problems/4sum-ii/" target="_blank">题目链接</a>


```
给你四个整数数组 nums1、nums2、nums3 和 nums4 ，数组长度都是 n ，
请你计算有多少个元组 (i, j, k, l) 能满足：

0 <= i, j, k, l < n
nums1[i] + nums2[j] + nums3[k] + nums4[l] == 0

输入：nums1 = [1,2], nums2 = [-2,-1], nums3 = [-1,2], nums4 = [0,2]
输出：2
解释：
两个元组如下：
1. (0, 0, 0, 1) -> nums1[0] + nums2[0] + nums3[0] + nums4[1] = 1 + (-2) + (-1) + 2 = 0
2. (1, 1, 0, 0) -> nums1[1] + nums2[1] + nums3[0] + nums4[0] = 2 + (-1) + (-1) + 0 = 0

```

> 思路就利用map存储2个数组和的值sum，和出现的次数，然后另外两组必须和为-sum。

```js
var fourSumCount = function (nums1, nums2, nums3, nums4) {
    const map = new Map();
    let count = 0
    for (let a of nums1) {
        for (let b of nums2) {
            const sum = a + b
            map.has(sum) ? map.set(sum, map.get(sum) + 1) : map.set(sum, 1)

        }
    }
    for (let c of nums3) {
        for (let d of nums4) {
            const sum = c + d
            if (map.has(-sum)) {
                count += map.get(-sum)
            }

        }
    }
    return count
};
```