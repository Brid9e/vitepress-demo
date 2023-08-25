<template lang='pug'>
.doc-preview 
  .comp-box
    component(ref="compRef" :is="compFile")
  p 描述: {{ description }}
  p 源码:  
    el-button(@click="show = !show" link) 展开
    pre.source(v-if="show" v-highlightjs="compContentValue[compFile.toLowerCase()]")
      code(class="html")
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
  data() {
    return {
      show: false
    }
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
.comp-box {
  width: 100%;
  border: 1px solid var(--vp-c-divider);
  border-radius: 4px;
  padding: 1rem;
}
.doc-preview {
  border: 1px solid var(--vp-c-divider);
  padding: 1rem;
  border-radius: 8px;

  .source {
    background-color: #2d2b57;
    border-radius: 8px;
    padding: 1rem;
    color: #ffffffac;
    font-size: 14px;
  }
}
</style>