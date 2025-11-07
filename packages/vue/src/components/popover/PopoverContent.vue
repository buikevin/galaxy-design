<script setup lang="ts">
import { type HTMLAttributes, computed } from 'vue'
import { PopoverContent, PopoverPortal, type PopoverContentProps } from 'radix-vue'
import { cn } from '@/lib/utils'

interface Props extends PopoverContentProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props
  return delegated
})
</script>

<template>
  <PopoverPortal>
    <PopoverContent
      :class="cn('z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none', props.class)"
      v-bind="delegatedProps"
    ><slot /></PopoverContent>
  </PopoverPortal>
</template>
