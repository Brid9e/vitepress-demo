/*
 * @Author: Joe
 * @Date: 2023-08-24 23:06:24
 * @LastEditors: Joe
 * @LastEditTime: 2023-08-24 23:36:37
 * @FilePath: /comphub/docs/.vitepress/theme/index.ts
 * @Description: 
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
 */
import DefaultTheme from 'vitepress/theme'
import CompA from '../../demo/comp1/index.vue'
import CompB from '../../demo/comp2/index.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    // app.component('compA', () => import('../../demo/comp2/index.vue'))
    app.component('CompA', CompA),
    app.component('CompB', CompB)
  }
}