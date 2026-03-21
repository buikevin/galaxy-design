<!--
 * @author Bùi Trọng Hiếu
 * @email kevinbui210191@gmail.com
 * @desc BreadcrumbItem component - Individual breadcrumb item with flex layout
-->
<script setup lang="ts">
import { cn } from '@/lib/utils'

defineOptions({
  name: 'UiBreadcrumbItem',
})

const props = withDefaults(defineProps<{
  class?: string
}>(), {})
</script>

<template>
  <li :class="cn('inline-flex items-center gap-1.5', props.class)">
    <slot />
  </li>
</template>
