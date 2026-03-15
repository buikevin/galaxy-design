<!--
 * @author Bùi Trọng Hiếu
 * @email kevinbui210191@gmail.com
 * @desc BreadcrumbSeparator component - Visual separator between breadcrumb items
-->
<script setup lang="ts">
import { ChevronRight } from 'lucide-vue-next'
import { cn } from '@/lib/utils'

const props = withDefaults(defineProps<{
  class?: string
}>(), {})
</script>

<template>
  <li
    role="presentation"
    aria-hidden="true"
    :class="cn('[&>svg]:size-3.5', props.class)"
  >
    <slot>
      <ChevronRight />
    </slot>
  </li>
</template>
