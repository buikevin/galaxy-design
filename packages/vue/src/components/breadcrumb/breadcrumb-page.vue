<!--
 * @author Bùi Trọng Hiếu
 * @email kevinbui210191@gmail.com
 * @desc BreadcrumbPage component - Current page indicator in breadcrumb trail
-->
<script setup lang="ts">
import { cn } from '@/lib/utils'

defineOptions({
  name: 'UiBreadcrumbPage',
})

const props = withDefaults(defineProps<{
  class?: string
}>(), {})
</script>

<template>
  <span
    role="link"
    aria-disabled="true"
    aria-current="page"
    :class="cn('font-normal text-foreground', props.class)"
  >
    <slot />
  </span>
</template>
