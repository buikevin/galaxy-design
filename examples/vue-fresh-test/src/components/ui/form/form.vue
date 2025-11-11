<script setup lang="ts">
import { cn } from '@/lib/utils'
import { provide } from 'vue'

const props = withDefaults(defineProps<{
  class?: string
}>(), {})

// Provide form context for nested components
provide('formContext', {})
</script>

<template>
  <form :class="cn(props.class)">
    <slot />
  </form>
</template>
