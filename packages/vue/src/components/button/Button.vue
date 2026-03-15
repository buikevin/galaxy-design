<!--
 * @author Bùi Trọng Hiếu
 * @email kevinbui210191@gmail.com
 * @desc Button component - Displays a button or a component that looks like a button with variants and sizes
-->
<script setup lang="ts">
import { type HTMLAttributes, computed } from 'vue'
import { Primitive, type PrimitiveProps } from 'radix-vue'
import { type ButtonVariants, buttonVariants } from './variants'
import { cn } from '@/lib/utils'

/**
 * Button Props
 * @prop variant - Visual style variant (default, destructive, outline, secondary, ghost, link)
 * @prop size - Size variant (default, sm, lg, icon)
 * @prop asChild - Render as child via Radix Primitive
 * @prop as - Element or component to render
 * @prop class - CSS class names for the button
 * @prop type - Native button type (button, submit, reset)
 * @prop disabled - Disables the button
 */
interface ButtonProps extends PrimitiveProps {
  /** Visual style variant. */
  variant?: ButtonVariants['variant']
  /** Size variant. */
  size?: ButtonVariants['size']
  /** CSS class names for the button. */
  class?: HTMLAttributes['class']
  /** Render as child via Radix Primitive. */
  asChild?: boolean
  /** Element or component to render. */
  as?: string
  /** Native button type. */
  type?: 'button' | 'submit' | 'reset'
  /** Disables the button. */
  disabled?: boolean
}

const props = withDefaults(defineProps<ButtonProps>(), {
  as: 'button',
  variant: 'default',
  size: 'default',
  type: 'button',
  disabled: false,
})

const delegatedProps = computed(() => {
  const { class: _, variant, size, ...delegated } = props
  return delegated
})
</script>

<template>
  <Primitive
    :class="cn(buttonVariants({ variant, size }), props.class)"
    v-bind="delegatedProps"
  >
    <slot />
  </Primitive>
</template>
