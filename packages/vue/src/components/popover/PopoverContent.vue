<!--
 * @author Bùi Trọng Hiếu
 * @email kevinbui210191@gmail.com
 * @desc PopoverContent component - Rich content popover panel with portal support
-->
<script setup lang="ts">
import { type HTMLAttributes, computed } from 'vue'
import { PopoverContent, PopoverPortal, type PopoverContentProps } from 'radix-vue'
import { cn } from '@/lib/utils'

/**
 * PopoverContent Props
 * @prop as - Element or component to render
 * @prop asChild - Render as child via Radix Primitive
 * @prop side - Side to align the content
 * @prop sideOffset - Offset from the side
 * @prop align - Alignment along the side
 * @prop alignOffset - Offset from the alignment
 * @prop avoidCollisions - Whether to avoid collisions
 * @prop collisionBoundary - Boundary for collision detection
 * @prop collisionPadding - Padding for collision detection
 * @prop sticky - Sticky behavior
 * @prop hideWhenDetached - Hide when detached
 * @prop class - CSS class names for the content
 */
interface Props extends PopoverContentProps {
  /** Element or component to render. */
  as?: string
  /** Render as child via Radix Primitive. */
  asChild?: boolean
  /** Side to align the content. */
  side?: 'top' | 'right' | 'bottom' | 'left'
  /** Offset from the side. */
  sideOffset?: number
  /** Alignment along the side. */
  align?: 'start' | 'center' | 'end'
  /** Offset from the alignment. */
  alignOffset?: number
  /** Whether to avoid collisions. */
  avoidCollisions?: boolean
  /** Boundary for collision detection. */
  collisionBoundary?: Element | null | (Element | null)[]
  /** Padding for collision detection. */
  collisionPadding?: number | Partial<Record<'top' | 'right' | 'bottom' | 'left', number>>
  /** Sticky behavior. */
  sticky?: 'partial' | 'always'
  /** Hide when detached. */
  hideWhenDetached?: boolean
  /** CSS class names for the content. */
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
