<!--
 * @author Bùi Trọng Hiếu
 * @email kevinbui210191@gmail.com
 * @desc Skeleton component - Loading placeholder with pulse animation and variants
-->
<script setup lang="ts">
import { cn } from '@/lib/utils'
import { computed } from 'vue'

defineOptions({
  name: 'UiSkeleton',
})

/**
 * Skeleton Props
 * @prop class - CSS class names for the skeleton
 * @prop variant - Skeleton variant (default, circle, text)
 */
interface Props {
  /** CSS class names for the skeleton. */
  class?: string
  /** Skeleton variant. */
  variant?: 'default' | 'circle' | 'text'
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'default',
})

const className = computed(() =>
  cn(
    'animate-pulse bg-muted',
    {
      'rounded-md': props.variant === 'default',
      'rounded-full': props.variant === 'circle',
      'h-4 rounded': props.variant === 'text',
    },
    props.class
  )
)
</script>

<template>
  <div :class="className">
    <slot />
  </div>
</template>
