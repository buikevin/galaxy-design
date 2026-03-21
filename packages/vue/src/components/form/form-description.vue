<script setup lang="ts">
import { cn } from '@/lib/utils'

defineOptions({
  name: 'UiFormDescription',
})

const props = withDefaults(defineProps<{
  class?: string
}>(), {})
</script>

<template>
  <p :class="cn('text-sm text-muted-foreground', props.class)">
    <slot />
  </p>
</template>
