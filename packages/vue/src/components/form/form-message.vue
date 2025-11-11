<script setup lang="ts">
import { cn } from '@/lib/utils'

const props = withDefaults(defineProps<{
  class?: string
  message?: string
}>(), {})
</script>

<template>
  <p
    v-if="props.message || $slots.default"
    :class="cn('text-sm font-medium text-destructive', props.class)"
  >
    <slot>{{ props.message }}</slot>
  </p>
</template>
