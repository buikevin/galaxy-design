<!--
 * @author Bùi Trọng Hiếu
 * @email kevinbui210191@gmail.com
 * @desc ScrollBar component - Custom scrollbar with thumb for scroll area
-->
<script setup lang="ts">
import { ScrollAreaScrollbar, ScrollAreaThumb, type ScrollAreaScrollbarProps } from 'radix-vue'
import { cn } from '@/lib/utils'

/**
 * ScrollBar Props
 * @prop orientation - Scrollbar orientation (vertical, horizontal)
 * @prop forceMount - Force-mount the scrollbar even when not needed
 * @prop as - Element or component to render
 * @prop asChild - Render as child via Radix Primitive
 * @prop class - CSS class names for the scrollbar
 */
interface Props extends ScrollAreaScrollbarProps {
  /** Scrollbar orientation (vertical, horizontal). */
  orientation?: 'vertical' | 'horizontal'
  /** Force-mount the scrollbar even when not needed. */
  forceMount?: boolean
  /** Element or component to render. */
  as?: string
  /** Render as child via Radix Primitive. */
  asChild?: boolean
  /** CSS class names for the scrollbar. */
  class?: string
}

const props = withDefaults(defineProps<Props>(), {
  orientation: 'vertical',
})
</script>

<template>
  <ScrollAreaScrollbar
    v-bind="props"
    :class="
      cn(
        'flex touch-none select-none transition-colors',
        props.orientation === 'vertical' &&
          'h-full w-2.5 border-l border-l-transparent p-[1px]',
        props.orientation === 'horizontal' &&
          'h-2.5 flex-col border-t border-t-transparent p-[1px]',
        props.class
      )
    "
  >
    <ScrollAreaThumb class="relative flex-1 rounded-full bg-border" />
  </ScrollAreaScrollbar>
</template>
