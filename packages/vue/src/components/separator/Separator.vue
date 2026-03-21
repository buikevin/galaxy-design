<!--
 * @author Bùi Trọng Hiếu
 * @email kevinbui210191@gmail.com
 * @desc Separator component - Visual divider with horizontal or vertical orientation
-->
<script setup lang="ts">
import { Separator as RadixSeparator, type SeparatorProps } from 'radix-vue'
import { cn } from '@/lib/utils'

defineOptions({
  name: 'UiSeparator',
})

const props = withDefaults(defineProps<SeparatorProps & { class?: string }>(), {
  orientation: 'horizontal',
  decorative: true,
})
</script>

<template>
  <RadixSeparator
    v-bind="props"
    :class="cn(
      'shrink-0 bg-border',
      props.orientation === 'horizontal' ? 'h-[1px] w-full' : 'h-full w-[1px]',
      props.class
    )"
  />
</template>
