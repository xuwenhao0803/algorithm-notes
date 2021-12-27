# 基本计算器II

<a href="https://leetcode-cn.com/problems/basic-calculator-ii/" target="_blank">题目链接</a>

```
给你一个字符串表达式 s ，请你实现一个基本计算器来计算并返回它的值。

整数除法仅保留整数部分。

示例 1：
输入：s = "3+2*2"
输出：7
```

> 思路： 定义一个前置运算符，初始运算符为+，和当前数值，+，-插入到数组，* /则用最后一个值和当前值做计算

```js
var calculate = function (s) {
    let pre = '+';
    let cur = 0
    let result = []
    let tmp = s + "+"
    let arrayNumber = ['1', '2', '3', '4', '0', '5', '6', '7', '8', '9'];
    for (let i = 0; i < tmp.length; i++) {
        let str = tmp[i];
        if (arrayNumber.includes(tmp[i])) {
            cur = cur + str
        } else if (str == ' ') {
            continue;
        } else {
            if (pre === '+') {
                result.push(Number(cur))
            } else if (pre === '-') {
                result.push(-Number(cur))
            } else if (pre === '*') {
                result[result.length - 1] *= Number(cur)
            } else if (pre === '/') {
                result[result.length - 1] =parseInt((result[result.length - 1] / Number(cur)) ) || 0
            }

            cur = 0;
            pre = s[i]

        }
    }
    return result.reduce((a, b) => a + b)
};

```