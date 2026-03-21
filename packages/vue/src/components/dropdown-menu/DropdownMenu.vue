<!--
 * @author Bùi Trọng Hiếu
 * @email kevinbui210191@gmail.com
 * @desc DropdownMenu component - Menu with trigger, content, items, and separator
-->
<script setup lang="ts">
import { computed } from 'vue'
import { DropdownMenuRoot, type DropdownMenuRootProps } from 'radix-vue'

/**
 * DropdownMenu Props
 * @prop open - Controlled open state
 * @prop defaultOpen - Default open state
 * @prop modal - Modal behavior
 */
interface Props extends DropdownMenuRootProps {
  /** Controlled open state. */
  open?: boolean
  /** Default open state. */
  defaultOpen?: boolean
  /** Modal behavior. */
  modal?: boolean
}

const props = defineProps<Props>()

const delegatedProps = computed(() => {
  const { ...delegated } = props
  return delegated
})
</script>

<template>
  <DropdownMenuRoot v-bind="delegatedProps">
    <slot />
  </DropdownMenuRoot>
</template>
