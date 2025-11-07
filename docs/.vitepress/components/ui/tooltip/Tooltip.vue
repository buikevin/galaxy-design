<script setup lang="ts">
import { TooltipRoot, type TooltipRootProps } from 'radix-vue'
interface Props extends /* @vue-ignore */ TooltipRootProps {}
defineProps<Props>()
</script>

<template>
  <TooltipRoot v-bind="$props"><slot /></TooltipRoot>
</template>
