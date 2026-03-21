<!--
 * @author Bùi Trọng Hiếu
 * @email kevinbui210191@gmail.com
 * @desc Card component - Container with rounded border, background, and shadow
-->
<script setup lang="ts">
import { cn } from '@/lib/utils'

defineOptions({
  name: 'UiCard',
})

const props = withDefaults(defineProps<{
  class?: string
}>(), {})
</script>

<template>
  <div :class="cn('rounded-lg border bg-card text-card-foreground shadow-sm', props.class)">
    <slot />
  </div>
</template>
