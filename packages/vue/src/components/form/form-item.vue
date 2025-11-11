<script setup lang="ts">
import { cn } from '@/lib/utils'
import { provide, ref } from 'vue'

const props = withDefaults(defineProps<{
  class?: string
}>(), {})

const id = ref(`form-item-${Date.now()}-${Math.floor(Math.random() * 1000)}`)

provide('formItemContext', {
  id: id.value,
})
</script>

<template>
  <div :class="cn('space-y-2', props.class)">
    <slot />
  </div>
</template>
