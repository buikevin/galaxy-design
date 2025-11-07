<script setup lang="ts">
import { type HTMLAttributes, computed } from 'vue'
import { TooltipContent, TooltipPortal, type TooltipContentProps } from 'radix-vue'
import { cn } from '@/lib/utils'

interface Props extends TooltipContentProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props
  return delegated
})
</script>

<template>
  <TooltipPortal>
    <TooltipContent
      :class="cn('z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md', props.class)"
      v-bind="delegatedProps"
    ><slot /></TooltipContent>
  </TooltipPortal>
</template>
