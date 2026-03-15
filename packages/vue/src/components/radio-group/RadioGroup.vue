<!--
 * @author Bùi Trọng Hiếu
 * @email kevinbui210191@gmail.com
 * @desc RadioGroup component - Group of radio buttons for single selection
-->
<script setup lang="ts">
import { RadioGroupRoot, type RadioGroupRootProps } from 'radix-vue'

/**
 * RadioGroup Props
 * @prop modelValue - Controlled value
 * @prop defaultValue - Default value
 * @prop disabled - Disables the radio group
 * @prop required - Makes the radio group required
 * @prop name - Name attribute for form submission
 * @prop class - CSS class names for the radio group
 */
const props = defineProps<RadioGroupRootProps & {
  /** Controlled value. */
  modelValue?: string
  /** Default value. */
  defaultValue?: string
  /** Disables the radio group. */
  disabled?: boolean
  /** Makes the radio group required. */
  required?: boolean
  /** Name attribute for form submission. */
  name?: string
}>()
</script>

<template>
  <RadioGroupRoot v-bind="props">
    <slot />
  </RadioGroupRoot>
</template>
