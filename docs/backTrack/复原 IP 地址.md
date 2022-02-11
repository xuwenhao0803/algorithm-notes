# 复原 IP 地址
<a href="https://leetcode-cn.com/problems/restore-ip-addresses/" target="_blank">题目链接</a>

```
有效 IP 地址 正好由四个整数（每个整数位于 0 到 255 之间组成，且不能含有前导 0），整数之间用 '.' 分隔。

例如："0.1.2.201" 和 "192.168.1.1" 是 有效 IP 地址，但是 "0.011.255.245"、"192.168.1.312"
 和 "192.168@1.1" 是 无效 IP 地址。
给定一个只包含数字的字符串 s ，用以表示一个 IP 地址，返回所有可能的有效 IP 地址，
这些地址可以通过在 s 中插入 '.' 来形成。你不能重新排序或删除 s 中的任何数字。
你可以按 任何 顺序返回答案。

输入：s = "25525511135"
输出：["255.255.11.135","255.255.111.35"]

```



> 思路: 该问题需要穷举字符串的所有组合


```js
var restoreIpAddresses = function (s) {
    const isVal = (val) => {
        if (val > 255) return false
        if (val.length > 1 && val.startsWith('0')) return false
        return true
    }
    let len = s.length
    const result = []
    const dfs = (start, arr) => {
        if (arr.length === 4 && arr.join('').length === len) {
            result.push(arr.join('.'))
        }
        if (start >= len || arr.length > 4) return
        for (let i = 1; i <= 3; i++) {
            let str
            if (isVal(str = s.slice(start, start + i))) {
                if(str===s.slice(start, start + i-1))continue //剪枝，避免最后的重复选取
                dfs(start + i, arr.concat(str))
            }
        }
    }
    dfs(0, [])
    return result

};
```
