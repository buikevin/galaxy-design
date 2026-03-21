<!--
 * @author Bùi Trọng Hiếu
 * @email kevinbui210191@gmail.com
 * @desc Tooltip component - Popover that displays information on hover or focus
-->
<script setup lang="ts">
import { TooltipRoot, type TooltipRootProps } from 'radix-vue'

defineOptions({
  name: 'UiTooltip',
})

/**
 * Tooltip Props
 * @prop open - Controlled open state
 * @prop defaultOpen - Default open state
 * @prop delayDuration - Delay before showing tooltip
 * @prop disableHoverableContent - Disables hoverable content
 * @prop side - Side to display (top, right, bottom, left)
 * @prop align - Alignment (start, center, end)
 */
interface Props extends TooltipRootProps {
  /** Controlled open state. */
  open?: boolean
  /** Default open state. */
  defaultOpen?: boolean
  /** Delay before showing tooltip. */
  delayDuration?: number
  /** Disables hoverable content. */
  disableHoverableContent?: boolean
  /** Side to display (top, right, bottom, left). */
  side?: 'top' | 'right' | 'bottom' | 'left'
  /** Alignment (start, center, end). */
  align?: 'start' | 'center' | 'end'
}
defineProps<Props>()
</script>

<template>
  <TooltipRoot v-bind="$props"><slot /></TooltipRoot>
</template>
