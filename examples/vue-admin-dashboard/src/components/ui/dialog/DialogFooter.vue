<script setup lang="ts">
import { cn } from '@/lib/utils'
import { computed } from 'vue'

interface Props {
  class?: string
}
const props = defineProps<Props>()

const className = computed(() => cn('flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2', props.class))
</script>

<template>
  <div :class="className">
    <slot />
  </div>
</template>
