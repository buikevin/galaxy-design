<!--
 * @author Bùi Trọng Hiếu
 * @email kevinbui210191@gmail.com
 * @desc Switch component - Toggle switch for binary on/off state
-->
<script setup lang="ts">
import { SwitchRoot, SwitchThumb, type SwitchRootProps } from 'radix-vue'
import { cn } from '@/lib/utils'

/**
 * Switch Props
 * @prop checked - Controlled checked state
 * @prop defaultChecked - Default checked state
 * @prop disabled - Disables the switch
 * @prop required - Makes the switch required
 * @prop name - Name attribute for form submission
 * @prop value - Value attribute for form submission
 * @prop class - CSS class names for the switch
 */
const props = defineProps<SwitchRootProps & {
  /** Controlled checked state. */
  checked?: boolean
  /** Default checked state. */
  defaultChecked?: boolean
  /** Disables the switch. */
  disabled?: boolean
  /** Makes the switch required. */
  required?: boolean
  /** Name attribute for form submission. */
  name?: string
  /** Value attribute for form submission. */
  value?: string
  /** CSS class names for the switch. */
  class?: string
}>()
</script>

<template>
  <SwitchRoot
    v-bind="props"
    :class="cn(
      'peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input',
      props.class
    )"
  >
    <SwitchThumb
      class="pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0"
    />
  </SwitchRoot>
</template>
