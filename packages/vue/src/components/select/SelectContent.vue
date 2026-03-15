<!--
 * @author Bùi Trọng Hiếu
 * @email kevinbui210191@gmail.com
 * @desc SelectContent component - Dropdown content panel for select options with positioning
-->
<script setup lang="ts">
import { type HTMLAttributes, computed } from 'vue'
import { SelectContent, SelectPortal, SelectViewport, type SelectContentProps } from 'radix-vue'
import { cn } from '@/lib/utils'

/**
 * SelectContent Props
 * @prop position - Positioning strategy (popper, item-aligned)
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
interface Props extends SelectContentProps {
  /** Positioning strategy. */
  position?: 'popper' | 'item-aligned'
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

const props = withDefaults(defineProps<Props>(), {
  position: 'popper',
})

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props
  return delegated
})
</script>

<template>
  <SelectPortal>
    <SelectContent
      :class="cn(
        'relative z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
        props.position === 'popper' && 'data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1',
        props.class
      )"
      v-bind="delegatedProps"
    >
      <SelectViewport
        :class="cn(
          'p-1',
          props.position === 'popper' && 'h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]'
        )"
      >
        <slot />
      </SelectViewport>
    </SelectContent>
  </SelectPortal>
</template>
