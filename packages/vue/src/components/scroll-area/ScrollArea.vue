<!--
 * @author Bùi Trọng Hiếu
 * @email kevinbui210191@gmail.com
 * @desc ScrollArea component - Custom styled scroll container with scrollbars
-->
<script setup lang="ts">
import { ScrollAreaRoot, ScrollAreaViewport, ScrollAreaCorner, type ScrollAreaRootProps } from 'radix-vue'
import { cn } from '@/lib/utils'
import ScrollBar from './ScrollBar.vue'

/**
 * ScrollArea Props
 * @prop type - Scrollbar type (auto, always, hover, scroll)
 * @prop dir - Text direction (ltr, rtl)
 * @prop class - CSS class names for the scroll area
 */
interface Props extends ScrollAreaRootProps {
  /** Scrollbar type (auto, always, hover, scroll). */
  type?: 'auto' | 'always' | 'hover' | 'scroll'
  /** Text direction (ltr, rtl). */
  dir?: 'ltr' | 'rtl'
  /** CSS class names for the scroll area. */
  class?: string
}

const props = defineProps<Props>()
</script>

<template>
  <ScrollAreaRoot :class="cn('relative overflow-hidden', props.class)" v-bind="props">
    <ScrollAreaViewport class="h-full w-full rounded-[inherit]">
      <slot />
    </ScrollAreaViewport>
    <ScrollBar />
    <ScrollAreaCorner />
  </ScrollAreaRoot>
</template>
