/*
 * @Author: Joe
 * @Date: 2023-08-24 22:09:51
 * @LastEditors: Joe
 * @LastEditTime: 2023-08-24 23:27:39
 * @FilePath: /comphub/docs/.vitepress/config.ts
 * @Description: 
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
 */
const nav = [
  { text: '指南', link: '/guide/' },
  { text: '组件', link: '/components/comp1' },
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
        { text: '组件1', link: '/components/comp1' },
        { text: '组件2', link: '/components/comp2' }
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
    logo: '/logo.png',
    // siteTitle: '组件库标题',
    outline: 3,
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
    nav,
    sidebar
  }
}

