<!--
 * @author Bùi Trọng Hiếu
 * @email kevinbui210191@gmail.com
 * @desc Collapsible component - Expandable/collapsible content section
-->
<script setup lang="ts">
import { type HTMLAttributes, computed } from 'vue'
import { CollapsibleRoot, type CollapsibleRootProps } from 'radix-vue'
import { cn } from '@/lib/utils'

/**
 * Collapsible Props
 * @prop open - Controlled open state
 * @prop defaultOpen - Default open state
 * @prop disabled - Disables the collapsible
 * @prop class - CSS class names for the collapsible
 */
interface Props extends CollapsibleRootProps {
  /** Controlled open state. */
  open?: boolean
  /** Default open state. */
  defaultOpen?: boolean
  /** Disables the collapsible. */
  disabled?: boolean
  /** CSS class names for the collapsible. */
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props
  return delegated
})
</script>

<template>
  <CollapsibleRoot
    :class="cn('', props.class)"
    v-bind="delegatedProps"
  >
    <slot />
  </CollapsibleRoot>
</template>
