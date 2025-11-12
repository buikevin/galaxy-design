<script setup lang="ts">
import { cn } from '@/lib/utils'

const props = withDefaults(defineProps<{
  class?: string
}>(), {})
</script>

<template>
  <li :class="cn('inline-flex items-center gap-1.5', props.class)">
    <slot />
  </li>
</template>
