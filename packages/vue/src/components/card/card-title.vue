<!--
 * @author Bùi Trọng Hiếu
 * @email kevinbui210191@gmail.com
 * @desc CardTitle component - Card heading text with bold styling
-->
<script setup lang="ts">
import { cn } from '@/lib/utils'

const props = withDefaults(defineProps<{
  class?: string
}>(), {})
</script>

<template>
  <h3 :class="cn('text-2xl font-semibold leading-none tracking-tight', props.class)">
    <slot />
  </h3>
</template>
