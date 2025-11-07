<script setup lang="ts">
import { SelectValue, type SelectValueProps } from 'radix-vue'

interface Props extends /* @vue-ignore */ SelectValueProps {}

defineProps<Props>()
</script>

<template>
  <SelectValue>
    <slot />
  </SelectValue>
</template>
