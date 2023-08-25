<template>
  <div class="flex flex-wrap items-center gap-1 my-2 tag-group">
    <span class="m-1 tag-group__title line-height-2">Dark</span>
    <el-tag v-for="item in items" :key="item.label" :type="item.type" class="mx-1" effect="dark">
      {{ item.label }}
    </el-tag>
    <el-tag v-for="item in items" :key="item.label" :type="item.type" class="mx-1" effect="dark" closable>
      {{ item.label }}
    </el-tag>
  </div>
  <div class="flex flex-wrap items-center gap-1 my-2 tag-group">
    <span class="m-1 tag-group__title">Light</span>
    <el-tag v-for="item in items" :key="item.label" class="mx-1" :type="item.type" effect="light">
      {{ item.label }}
    </el-tag>
    <el-tag v-for="item in items" :key="item.label" class="mx-1" :type="item.type" effect="light" closable>
      {{ item.label }}
    </el-tag>
  </div>
  <div class="flex flex-wrap items-center gap-1 my-2 tag-group">
    <span class="m-1 tag-group__title">Plain</span>
    <el-tag v-for="item in items" :key="item.label" class="mx-1" :type="item.type" effect="plain">
      {{ item.label }}
    </el-tag>
    <el-tag v-for="item in items" :key="item.label" class="mx-1" :type="item.type" effect="plain" closable>
      {{ item.label }}
    </el-tag>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

import type { TagProps } from 'element-plus'

type Item = { type: TagProps['type']; label: string }

const items = ref<Array<Item>>([
  { type: '', label: 'Tag 1' },
  { type: 'success', label: 'Tag 2' },
  { type: 'info', label: 'Tag 3' },
  { type: 'danger', label: 'Tag 4' },
  { type: 'warning', label: 'Tag 5' },
])
</script>