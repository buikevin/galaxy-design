<!--
 * @author Bùi Trọng Hiếu
 * @email kevinbui210191@gmail.com
 * @desc HoverCard component - Popover that appears on hover with accessible focus
-->
<script setup lang="ts">
import { type HTMLAttributes, computed } from 'vue'
import { HoverCardRoot, type HoverCardRootProps } from 'radix-vue'

/**
 * HoverCard Props
 * @prop open - Controlled open state
 * @prop defaultOpen - Default open state
 * @prop openDelay - Delay before opening (ms)
 * @prop closeDelay - Delay before closing (ms)
 * @prop disabled - Disables the hover card
 * @prop class - CSS class names for the hover card
 */
interface Props extends HoverCardRootProps {
  /** Controlled open state. */
  open?: boolean
  /** Default open state. */
  defaultOpen?: boolean
  /** Delay before opening (ms). */
  openDelay?: number
  /** Delay before closing (ms). */
  closeDelay?: number
  /** Disables the hover card. */
  disabled?: boolean
  /** CSS class names for the hover card. */
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props
  return delegated
})
</script>

<template>
  <HoverCardRoot v-bind="delegatedProps">
    <slot />
  </HoverCardRoot>
</template>
