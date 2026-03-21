<!--
 * @author Bùi Trọng Hiếu
 * @email kevinbui210191@gmail.com
 * @desc AlertTitle component - Alert heading text with medium font weight
-->
<script setup lang="ts">
import { cn } from '@/lib/utils'

defineOptions({
  name: 'UiAlertTitle',
})

const props = withDefaults(defineProps<{
  class?: string
}>(), {})
</script>

<template>
  <h5 :class="cn('mb-1 font-medium leading-none tracking-tight', props.class)">
    <slot />
  </h5>
</template>
