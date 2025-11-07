<script setup lang="ts">
import { TooltipTrigger, type TooltipTriggerProps } from 'radix-vue'

interface Props extends /* @vue-ignore */ TooltipTriggerProps {}

defineProps<Props>()
</script>

<template>
  <TooltipTrigger v-bind="$props">
    <slot />
  </TooltipTrigger>
</template>
