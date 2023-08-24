export default {
  "comp1": "<template lang=\"pug\">\n.comp1\n  p 我是COMP1\n</template>\n<script>\n</script>\n\n<style>\n.comp1 {\n  border: 1px solid var(--vp-c-divider);\n  padding: 1rem;\n  border-radius: 8px;\n}\n</style>",
  "comp2": "<template lang=\"pug\">\n.comp2\n  p 我是COMP2\n</template>\n<script>\n</script>\n<style>\n.comp2 {\n  border: 1px solid var(--vp-c-divider);\n  padding: 1rem;\n  border-radius: 8px;\n}\n</style>",
  "index": "<template lang='pug'>\n.doc-preview \n  component(ref=\"compRef\" :is=\"compFile\")\n  p 描述: {{ description }}\n  p 源码: \n    code(v-if=\"source\") {{ source }}\n</template>\n<script>\nimport compContent from '../configs/compContent'\nexport default {\n  props: {\n    compFile: {\n      type: String,\n      default: ''\n    },\n    description: {\n      type: String,\n      default: ''\n    },\n    source: {\n      type: String,\n      default: ''\n    }\n  },\n  mounted() {\n    console.log(compContent)\n  }\n}\n</script>\n\n<style scoped>\n.doc-preview {\n  border: 1px solid var(--vp-c-divider);\n  padding: 1rem;\n  border-radius: 8px;\n}\n</style>"
};
