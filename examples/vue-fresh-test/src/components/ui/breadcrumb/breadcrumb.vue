<script setup lang="ts">
import { cn } from '@/lib/utils'

const props = withDefaults(defineProps<{
  class?: string
  separator?: string
}>(), {})
</script>

<template>
  <nav :class="cn(props.class)" aria-label="breadcrumb">
    <slot />
  </nav>
</template>
