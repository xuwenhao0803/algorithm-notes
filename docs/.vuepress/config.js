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
          '/array/长度最小的子数组.md'
        ]
      },
      {
        title: '链表',   // 必要的
        path: '/LinkList',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        collapsable: true, // 可选的, 默认值是 true,
        sidebarDepth: 1,    // 可选的, 默认值是 1
        children: [
          '/LinkList/移除链表元素.md',
          '/LinkList/两两交换链表中的节点.md',
          '/LinkList/环形链表.md'
        ]
      },
      {
        title: '双指针',   // 必要的
        path: '/accumulate',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        collapsable: true, // 可选的, 默认值是 true,
        sidebarDepth: 1,    // 可选的, 默认值是 1
        children: [
          '/accumulate/double.md',
          '/accumulate/删除链表的倒数第 N 个结点.md'
        ]
      },
      {
        title: '动态规划',
        path: '/dynamic',
        collapsable: true,
        sidebarDepth: 2,
        children: [
          '/dynamic/最长公共子序列.md',
          '/dynamic/打家劫舍.md',
          '/dynamic/打家劫舍II.md'
        ]
      },
      {
        title: '二叉树',
        path: '/tree',
        collapsable: true,
        sidebarDepth: 2,
        children: [
          '/tree/二叉树的锯齿形层序遍历.md',
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