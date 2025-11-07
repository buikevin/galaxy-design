<script setup lang="ts">
import { cn } from '@/lib/utils'
import { computed } from 'vue'

interface Props {
  /**
   * CSS class
   */
  class?: string
  /**
   * Empty state description
   */
  description?: string
  /**
   * Custom image alt text
   */
  imageAlt?: string
}

const props = withDefaults(defineProps<Props>(), {
  imageAlt: 'Empty',
})

const className = computed(() =>
  cn('flex flex-col items-center justify-center p-8 text-center', props.class)
)
</script>

<template>
  <div :class="className">
    <slot name="image">
      <svg
        class="mb-4 h-16 w-16 text-muted-foreground/40"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        :aria-label="imageAlt"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          :stroke-width="1"
          d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
        />
      </svg>
    </slot>
    <p v-if="description" class="text-sm text-muted-foreground">
      {{ description }}
    </p>
    <div v-if="$slots.default" class="mt-4">
      <slot />
    </div>
  </div>
</template>
