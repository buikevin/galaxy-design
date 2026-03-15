<script setup lang="ts">
import { computed, type HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'

export type SpinnerSize = 'sm' | 'default' | 'lg'

interface Props {
  size?: SpinnerSize
  label?: string
  class?: HTMLAttributes['class']
}

const props = withDefaults(defineProps<Props>(), {
  size: 'default',
  label: 'Loading...',
})

const sizeClasses: Record<SpinnerSize, string> = {
  sm: 'h-4 w-4 border-2',
  default: 'h-6 w-6 border-2',
  lg: 'h-8 w-8 border-[3px]',
}

const className = computed(() =>
  cn(
    'inline-block shrink-0 animate-spin rounded-full border-solid border-current border-t-transparent text-muted-foreground',
    sizeClasses[props.size],
    props.class
  )
)
</script>

<template>
  <span role="status" :aria-label="label" :class="className" />
</template>
