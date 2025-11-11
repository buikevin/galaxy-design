<script setup lang="ts">
import { cn } from '@/lib/utils'
import { computed } from 'vue'

interface Props {
  /**
   * CSS class
   */
  class?: string
  /**
   * Size variant
   * @default "default"
   */
  size?: 'sm' | 'default' | 'lg'
}

const props = withDefaults(defineProps<Props>(), {
  size: 'default',
})

const className = computed(() =>
  cn(
    'inline-flex items-center justify-center rounded border border-border bg-muted px-2 font-mono text-sm font-medium text-muted-foreground shadow-sm',
    {
      'h-5 min-w-[20px] text-xs': props.size === 'sm',
      'h-6 min-w-[24px] text-sm': props.size === 'default',
      'h-7 min-w-[28px] text-base': props.size === 'lg',
    },
    props.class
  )
)
</script>

<template>
  <kbd :class="className">
    <slot />
  </kbd>
</template>
