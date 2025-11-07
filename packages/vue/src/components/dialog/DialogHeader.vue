<script setup lang="ts">
import { cn } from '@/lib/utils'
import { computed } from 'vue'

interface Props {
  class?: string
}
const props = defineProps<Props>()

const className = computed(() => cn('flex flex-col space-y-1.5 text-center sm:text-left', props.class))
</script>

<template>
  <div :class="className">
    <slot />
  </div>
</template>
