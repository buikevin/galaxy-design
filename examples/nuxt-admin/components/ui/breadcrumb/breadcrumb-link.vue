<script setup lang="ts">
import { cn } from '@/lib/utils'

const props = withDefaults(defineProps<{
  class?: string
  href?: string
}>(), {})
</script>

<template>
  <a
    :href="props.href"
    :class="cn('transition-colors hover:text-foreground', props.class)"
  >
    <slot />
  </a>
</template>
