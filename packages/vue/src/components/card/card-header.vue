<!--
 * @author Bùi Trọng Hiếu
 * @email kevinbui210191@gmail.com
 * @desc CardHeader component - Card header container with vertical spacing
-->
<script setup lang="ts">
import { cn } from '@/lib/utils'

defineOptions({
  name: 'UiCardHeader',
})

const props = withDefaults(defineProps<{
  class?: string
}>(), {})
</script>

<template>
  <div :class="cn('flex flex-col space-y-1.5 p-6', props.class)">
    <slot />
  </div>
</template>
