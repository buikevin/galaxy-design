<script setup lang="ts">
import { DropdownMenuTrigger, type DropdownMenuTriggerProps } from 'radix-vue'

interface Props extends /* @vue-ignore */ DropdownMenuTriggerProps {}

defineProps<Props>()
</script>

<template>
  <DropdownMenuTrigger v-bind="$props">
    <slot />
  </DropdownMenuTrigger>
</template>
