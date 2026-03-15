<!--
 * @author Bùi Trọng Hiếu
 * @email kevinbui210191@gmail.com
 * @desc Select component - Displays a list of options for the user to pick from triggered by a button
-->
<script setup lang="ts">
import { type HTMLAttributes, computed } from 'vue'
import { SelectRoot, type SelectRootProps } from 'radix-vue'

/**
 * Select Props
 * @prop modelValue - Controlled selected value
 * @prop defaultValue - Default selected value
 * @prop open - Controlled open state
 * @prop defaultOpen - Default open state
 * @prop disabled - Disables the select
 * @prop multiple - Allows multiple selection
 * @prop class - CSS class names for the select
 */
interface Props extends SelectRootProps {
  /** Controlled selected value. */
  modelValue?: string | number | boolean
  /** Default selected value. */
  defaultValue?: string | number | boolean
  /** Controlled open state. */
  open?: boolean
  /** Default open state. */
  defaultOpen?: boolean
  /** Disables the select. */
  disabled?: boolean
  /** Allows multiple selection. */
  multiple?: boolean
  /** CSS class names for the select. */
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props
  return delegated
})
</script>

<template>
  <SelectRoot v-bind="delegatedProps">
    <slot />
  </SelectRoot>
</template>
