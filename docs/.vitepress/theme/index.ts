import DefaultTheme from 'vitepress/theme'
import CompA from '../../examples/comp1/index.vue'
import CompB from '../../examples/comp2/index.vue'
import Preview from '../../examples/index.vue'
import HelloWorld from '../../../src/components/HelloWorld.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    // app.component('compA', () => import('../../demo/comp2/index.vue'))
    app.component('Comp1', CompA)
    app.component('Comp2', CompB)
    app.component('Preview', Preview)
    app.component('HelloWorld', HelloWorld)
  }
}