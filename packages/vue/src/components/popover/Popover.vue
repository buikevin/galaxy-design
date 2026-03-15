<!--
 * @author Bùi Trọng Hiếu
 * @email kevinbui210191@gmail.com
 * @desc Popover component - Displays rich content in a popover triggered by a button
-->
<script setup lang="ts">
import { PopoverRoot, type PopoverRootProps } from 'radix-vue'

/**
 * Popover Props
 * @prop open - Controlled open state
 * @prop defaultOpen - Default open state
 * @prop modal - Modal behavior
 * @prop class - CSS class names for the popover
 */
interface Props extends PopoverRootProps {
  /** Controlled open state. */
  open?: boolean
  /** Default open state. */
  defaultOpen?: boolean
  /** Modal behavior. */
  modal?: boolean
}
defineProps<Props>()
</script>

<template>
  <PopoverRoot v-bind="$props"><slot /></PopoverRoot>
</template>
