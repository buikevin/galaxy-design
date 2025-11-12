<script setup lang="ts">
import { RadioGroupRoot, type RadioGroupRootProps } from 'radix-vue'

const props = defineProps<RadioGroupRootProps>()
</script>

<template>
  <RadioGroupRoot v-bind="props">
    <slot />
  </RadioGroupRoot>
</template>
