<script setup lang="ts">
import { CollapsibleContent, type CollapsibleContentProps } from 'radix-vue'

interface Props extends /* @vue-ignore */ CollapsibleContentProps {}

defineProps<Props>()
</script>

<template>
  <CollapsibleContent v-bind="$props">
    <slot />
  </CollapsibleContent>
</template>
