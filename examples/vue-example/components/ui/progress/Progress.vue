<script setup lang="ts">
import { computed } from 'vue';
import { ProgressIndicator, ProgressRoot } from 'radix-vue';
import { cn } from '@/lib/utils';

interface ProgressProps {
  modelValue?: number | null;
  max?: number;
  class?: string;
}

const props = withDefaults(defineProps<ProgressProps>(), {
  modelValue: 0,
  max: 100,
});

const percentage = computed(() => {
  const value = props.modelValue ?? 0;
  return Math.min(Math.max((value / props.max) * 100, 0), 100);
});
</script>

<template>
  <ProgressRoot
    :model-value="modelValue"
    :max="max"
    :class="cn('relative h-2 w-full overflow-hidden rounded-full bg-secondary', props.class)"
  >
    <ProgressIndicator
      class="h-full w-full flex-1 bg-primary transition-all"
      :style="`transform: translateX(-${100 - percentage}%)`"
    />
  </ProgressRoot>
</template>
