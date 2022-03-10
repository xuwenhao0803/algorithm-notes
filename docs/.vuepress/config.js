module.exports = {
  title: '算法笔记',
  description: '我的算法笔记',
  // 注入到当前页面的 HTML <head> 中的标签
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }], // 增加一个自定义的 favicon(网页标签的图标)
  ],
  base: '/', // 这是部署到github相关的配置 下面会讲
  markdown: {
    lineNumbers: true // 代码块显示行号
  },
  themeConfig: {
    sidebar: [
      {
        title: '数组',   // 必要的
        path: '/array',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        collapsable: true, // 可选的, 默认值是 true,
        sidebarDepth: 1,    // 可选的, 默认值是 1
        children: [
          '/array/二分查找.md',
          '/array/长度最小的子数组.md',
          '/array/基本计算器II.md',
          '/array/螺旋矩阵',
        ]
      },
      {
        title: '哈希表',   // 必要的
        path: '/hash',
        collapsable: true,
        sidebarDepth: 1,
        children: [
          '/hash/两数之和.md',
          '/hash/四数相加II.md',
          '/hash/快乐数.md',
        ]
      },
      {
        title: '链表',   // 必要的
        path: '/LinkList',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        collapsable: true, // 可选的, 默认值是 true,
        sidebarDepth: 1,    // 可选的, 默认值是 1
        children: [
          '/LinkList/反转链表.md',
          '/LinkList/移除链表元素.md',
          '/LinkList/两两交换链表中的节点.md',
          '/LinkList/环形链表.md',
          '/LinkList/删除链表的倒数第N个节点.md',
          '/LinkList/链表相交.md',
          '/LinkList/环形链表II.md'
        ]
      },
      {
        title: '栈和队列和堆',   // 必要的
        path: '/queue',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        collapsable: true, // 可选的, 默认值是 true,
        sidebarDepth: 1,    // 可选的, 默认值是 1
        children: [
          '/queue/逆波兰表达式求值.md',
          '/queue/滑动窗口最大值.md',
          '/queue/前K个高频元素.md',
        ]
      },

      {
        title: '双指针',   // 必要的
        path: '/accumulate',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        collapsable: true, // 可选的, 默认值是 true,
        sidebarDepth: 1,    // 可选的, 默认值是 1
        children: [
          '/accumulate/double.md',
          '/accumulate/删除链表的倒数第 N 个结点.md',
          '/accumulate/四树之和.md'
        ]
      },
      {
        title: '回溯算法',   // 必要的
        path: '/backTrack',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        collapsable: true, // 可选的, 默认值是 true,
        sidebarDepth: 1,    // 可选的, 默认值是 1
        children: [
          '/backTrack/组合.md',
          '/backTrack/组合总和II.md',
          '/backTrack/组合总和III.md',
          '/backTrack/组合总和.md',
          '/backTrack/分割回文串.md',
          '/backTrack/复原 IP 地址.md',
          '/backTrack/子集.md',
          '/backTrack/子集II.md',
          '/backTrack/递增子序列.md',
          '/backTrack/全排列.md',
          '/backTrack/全排列II.md',
          '/backTrack/N皇后.md',
          '/backTrack/解数独.md',
        ]
      },
      {
        title: '动态规划',
        path: '/dynamic',
        collapsable: true,
        sidebarDepth: 2,
        children: [         
          '/dynamic/使用最小花费爬楼梯.md',
          '/dynamic/最长公共子序列.md',
          '/dynamic/打家劫舍.md',
          '/dynamic/打家劫舍II.md',
          '/dynamic/回文字串.md',
          '/dynamic/分割等和子集.md',
          '/dynamic/不同路径II.md',
          '/dynamic/整数拆分.md',
          '/dynamic/不同的二叉搜索树.md',
          '/dynamic/最后一块石头的重量II.md',
          '/dynamic/目标和.md',
          '/dynamic/一和零.md',
          '/dynamic/零钱兑换.md',
          '/dynamic/零钱兑换II.md',
        ]
      },
      {
        title: '二叉树',
        path: '/tree',
        collapsable: true,
        sidebarDepth: 2,
        children: [
          '/tree/翻转二叉树.md',
          '/tree/平衡二叉树.md',
          '/tree/从中序与后序遍历序列构造二叉树.md',
          '/tree/二叉树的锯齿形层序遍历.md',
          '/tree/二叉树的层序遍历.md',
          '/tree/二叉树的最大深度.md',
          '/tree/验证二叉搜索树.md',
          '/tree/二叉搜索树中的插入操作.md',
          '/tree/删除二叉搜索树中的节点.md',
          '/tree/修剪二叉搜索树.md',
          '/tree/把二叉搜索树转换为累加树.md'
        ]
      },
      {
        title: '贪心算法',
        path: '/greedy',
        collapsable: true,
        sidebarDepth: 2,
        children: [
          '/greedy/分发饼干.md',
          '/greedy/摆动序列.md',
          '/greedy/最大子数组和.md',
          '/greedy/跳跃游戏.md',
          '/greedy/跳跃游戏II.md',
          '/greedy/根据身高重建队列.md',
          '/greedy/无重叠区间.md',
          '/greedy/划分字母区间.md',
          '/greedy/合并区间.md',
          '/greedy/单调递增的数字.md',
          '/greedy/买卖股票的最佳时机含手续费.md'
        ]
      }
    ],
    nav: [
      { text: '前端算法', link: '/algorithm/' }, // 内部链接 以docs为根目录
      // 下拉列表
      {
        text: 'GitHub',
        items: [
          { text: 'GitHub地址', link: 'https://github.com/xuwenhao0803' },
          {
            text: '算法仓库',
            link: 'https://github.com/xuwenhao0803/algorithm-notes'
          }
        ]
      }
    ]
  }
};