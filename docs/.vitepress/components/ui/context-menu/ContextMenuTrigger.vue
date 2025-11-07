<script setup lang="ts">
import { ContextMenuTrigger, type ContextMenuTriggerProps } from 'radix-vue'

interface Props extends /* @vue-ignore */ ContextMenuTriggerProps {}

defineProps<Props>()
</script>

<template>
  <ContextMenuTrigger v-bind="$props">
    <slot />
  </ContextMenuTrigger>
</template>
