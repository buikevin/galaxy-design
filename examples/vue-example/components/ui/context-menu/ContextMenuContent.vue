<script setup lang="ts">
import { type HTMLAttributes, computed } from 'vue'
import { ContextMenuContent, ContextMenuPortal, type ContextMenuContentProps } from 'radix-vue'
import { cn } from '@/lib/utils'

interface Props extends ContextMenuContentProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props
  return delegated
})
</script>

<template>
  <ContextMenuPortal>
    <ContextMenuContent
      :class="cn(
        'z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95',
        props.class
      )"
      v-bind="delegatedProps"
    >
      <slot />
    </ContextMenuContent>
  </ContextMenuPortal>
</template>
