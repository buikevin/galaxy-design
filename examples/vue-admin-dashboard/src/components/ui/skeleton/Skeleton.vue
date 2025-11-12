<script setup lang="ts">
import { cn } from '@/lib/utils'
import { computed } from 'vue'

interface Props {
  /**
   * CSS class
   */
  class?: string
  /**
   * Skeleton variant
   * @default "default"
   */
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
