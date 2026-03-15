<!--
 * @author Bùi Trọng Hiếu
 * @email kevinbui210191@gmail.com
 * @desc ContextMenu component - Right-click menu with accessible keyboard navigation
-->
<script setup lang="ts">
import { type HTMLAttributes, computed } from 'vue'
import { ContextMenuRoot, type ContextMenuRootProps } from 'radix-vue'
import { cn } from '@/lib/utils'

/**
 * ContextMenu Props
 * @prop open - Controlled open state
 * @prop defaultOpen - Default open state
 * @prop modal - Modal behavior
 * @prop class - CSS class names for the context menu
 */
interface Props extends ContextMenuRootProps {
  /** Controlled open state. */
  open?: boolean
  /** Default open state. */
  defaultOpen?: boolean
  /** Modal behavior. */
  modal?: boolean
}

const props = defineProps<Props>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props
  return delegated
})
</script>

<template>
  <ContextMenuRoot v-bind="delegatedProps">
    <slot />
  </ContextMenuRoot>
</template>
