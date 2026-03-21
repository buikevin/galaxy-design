<!--
 * @author Bùi Trọng Hiếu
 * @email kevinbui210191@gmail.com
 * @desc Slider component - Range slider input with min/max bounds and thumb control
-->
<script setup lang="ts">
import { type HTMLAttributes, computed } from 'vue'
import { SliderRange, SliderRoot, SliderThumb, SliderTrack, type SliderRootProps } from 'radix-vue'
import { cn } from '@/lib/utils'

defineOptions({
  name: 'UiSlider',
})

/**
 * Slider Props
 * @prop modelValue - Controlled value
 * @prop defaultValue - Default value
 * @prop min - Minimum value
 * @prop max - Maximum value
 * @prop step - Step interval
 * @prop disabled - Disables the slider
 * @prop orientation - Slider orientation (horizontal or vertical)
 * @prop class - CSS class names for the slider
 */
interface Props extends SliderRootProps {
  /** Controlled value. */
  modelValue?: number[]
  /** Default value. */
  defaultValue?: number[]
  /** Minimum value. */
  min?: number
  /** Maximum value. */
  max?: number
  /** Step interval. */
  step?: number
  /** Disables the slider. */
  disabled?: boolean
  /** Slider orientation (horizontal or vertical). */
  orientation?: 'horizontal' | 'vertical'
  /** CSS class names for the slider. */
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props
  return delegated
})
</script>

<template>
  <SliderRoot
    :class="cn('relative flex w-full touch-none select-none items-center', props.class)"
    v-bind="delegatedProps"
  >
    <SliderTrack class="relative h-2 w-full grow overflow-hidden rounded-full bg-secondary">
      <SliderRange class="absolute h-full bg-primary" />
    </SliderTrack>
    <SliderThumb
      class="block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
    />
  </SliderRoot>
</template>
