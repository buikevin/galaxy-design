<!--
 * @author Bùi Trọng Hiếu
 * @email kevinbui210191@gmail.com
 * @desc DropdownMenuItem component - Individual menu item with focus and disabled states
-->
<script setup lang="ts">
import { type HTMLAttributes, computed } from 'vue'
import { DropdownMenuItem, type DropdownMenuItemProps } from 'radix-vue'
import { cn } from '@/lib/utils'

/**
 * DropdownMenuItem Props
 * @prop as - Element or component to render
 * @prop asChild - Render as child via Radix Primitive
 * @prop disabled - Disables the item
 * @prop textValue - Text value for typeahead navigation
 * @prop inset - Applies inset spacing
 * @prop class - CSS class names for the item
 */
interface Props extends DropdownMenuItemProps {
  /** Element or component to render. */
  as?: string
  /** Render as child via Radix Primitive. */
  asChild?: boolean
  /** Disables the item. */
  disabled?: boolean
  /** Text value for typeahead navigation. */
  textValue?: string
  /** Applies inset spacing. */
  inset?: boolean
  /** CSS class names for the item. */
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()

const delegatedProps = computed(() => {
  const { class: _, inset: __, ...delegated } = props
  return delegated
})
</script>

<template>
  <DropdownMenuItem
    :class="cn(
      'relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      props.inset && 'pl-8',
      props.class
    )"
    v-bind="delegatedProps"
  >
    <slot />
  </DropdownMenuItem>
</template>
