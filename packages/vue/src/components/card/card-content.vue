<!--
 * @author Bùi Trọng Hiếu
 * @email kevinbui210191@gmail.com
 * @desc CardContent component - Card main content area with padding
-->
<script setup lang="ts">
import { cn } from '@/lib/utils'

const props = withDefaults(defineProps<{
  class?: string
}>(), {})
</script>

<template>
  <div :class="cn('p-6 pt-0', props.class)">
    <slot />
  </div>
</template>
