<!--
 * @author Bùi Trọng Hiếu
 * @email kevinbui210191@gmail.com
 * @desc AlertDescription component - Alert description text with relaxed line height
-->
<script setup lang="ts">
import { cn } from '@/lib/utils'

const props = withDefaults(defineProps<{
  class?: string
}>(), {})
</script>

<template>
  <div :class="cn('text-sm [&_p]:leading-relaxed', props.class)">
    <slot />
  </div>
</template>
