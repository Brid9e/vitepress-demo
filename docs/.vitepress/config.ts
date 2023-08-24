const nav = [
  { text: '指南', link: '/guide/' },
  { text: '组件', link: '/components/comp1/index' },
  {
    text: '下拉菜单',
    items: [
      { text: 'Item A', link: '/item-1' },
      { text: 'Item B', link: '/item-2' },
      { text: 'Item C', link: '/item-3' }
    ]
  }
]

const sidebar = {
  '/guide': [
    {
      text: '指南',
      items: [
        { text: '组件库介绍', link: '/guide/' }
      ]
    }
  ],
  '/components': [
    {
      text: '通用组件',
      items: [
        { text: '组件1', link: '/components/comp1/index' },
        { text: '组件2', link: '/components/comp2/index' },
        { text: '预览组件', link: '/components/preview/index' }
      ]
    }
  ]
}
export default {
  title: '组件库',
  // description: '自用组件库',
  lang: 'cn-ZH',
  base: '/',
  lastUpdated: true,
  themeConfig: {
    logo: 'https://vitepress.dev/vitepress-logo-mini.svg',
    // siteTitle: '物料库',
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
    nav,
    sidebar
  }
}

