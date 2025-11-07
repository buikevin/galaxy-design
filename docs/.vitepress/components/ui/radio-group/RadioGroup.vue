<script setup lang="ts">
import { RadioGroupIndicator, RadioGroupItem, RadioGroupRoot, type RadioGroupRootProps } from 'radix-vue'
import { Circle } from 'lucide-vue-next'
import { cn } from '@/lib/utils'

const props = defineProps<RadioGroupRootProps>()
</script>

<template>
  <RadioGroupRoot v-bind="props">
    <slot />
  </RadioGroupRoot>
</template>
