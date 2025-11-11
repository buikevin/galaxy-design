<script setup lang="ts">
import { cn } from '@/lib/utils'
import { inject } from 'vue'

const props = withDefaults(defineProps<{
  class?: string
  for?: string
  error?: boolean
}>(), {})

const formItemContext = inject<{ id: string }>('formItemContext', { id: '' })
</script>

<template>
  <label
    :for="props.for || formItemContext.id"
    :class="cn('text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70', props.error && 'text-destructive', props.class)"
  >
    <slot />
  </label>
</template>
