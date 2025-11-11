<script setup lang="ts">
import { type HTMLAttributes } from 'vue'
import { Pane, Splitpanes } from 'splitpanes'
import 'splitpanes/dist/splitpanes.css'
import { cn } from '@/lib/utils'

interface Props {
  direction?: 'horizontal' | 'vertical'
  class?: HTMLAttributes['class']
}

const props = withDefaults(defineProps<Props>(), {
  direction: 'horizontal',
})
</script>

<template>
  <Splitpanes
    :horizontal="direction === 'vertical'"
    :class="cn('flex h-full w-full', direction === 'vertical' && 'flex-col', props.class)"
  >
    <slot />
  </Splitpanes>
</template>
