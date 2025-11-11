<script setup lang="ts">
import { type HTMLAttributes, computed } from 'vue'
import { ContextMenuItem, type ContextMenuItemProps } from 'radix-vue'
import { cn } from '@/lib/utils'

interface Props extends ContextMenuItemProps {
  class?: HTMLAttributes['class']
  inset?: boolean
}

const props = defineProps<Props>()

const delegatedProps = computed(() => {
  const { class: _, inset: __, ...delegated } = props
  return delegated
})
</script>

<template>
  <ContextMenuItem
    :class="cn(
      'relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      props.inset && 'pl-8',
      props.class
    )"
    v-bind="delegatedProps"
  >
    <slot />
  </ContextMenuItem>
</template>
