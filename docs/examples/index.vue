<template lang='pug'>
.doc-preview 
  component(ref="compRef" :is="compFile")
  p 描述: {{ description }}
  p 源码: 
    pre {{ compContentValue[compFile.toLowerCase()] }}
</template>
<script>
import compContent from '../configs/compContent'
export default {
  props: {
    compFile: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    },
    // source: {
    //   type: String,
    //   default: ''
    // }
  },
  computed: {
    compContentValue() {
      return compContent
    }
  },
  mounted() {
    console.log(compContent)
  }
}
</script>

<style scoped>
.doc-preview {
  border: 1px solid var(--vp-c-divider);
  padding: 1rem;
  border-radius: 8px;
}
</style>