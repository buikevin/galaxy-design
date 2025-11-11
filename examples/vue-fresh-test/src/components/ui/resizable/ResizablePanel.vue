<script setup lang="ts">
import { type HTMLAttributes } from 'vue'
import { Pane } from 'splitpanes'
import { cn } from '@/lib/utils'

interface Props {
  size?: number
  minSize?: number
  maxSize?: number
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <Pane
    :size="size"
    :min-size="minSize"
    :max-size="maxSize"
    :class="cn('relative', props.class)"
  >
    <slot />
  </Pane>
</template>
