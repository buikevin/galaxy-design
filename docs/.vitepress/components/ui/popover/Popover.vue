<script setup lang="ts">
import { PopoverRoot, type PopoverRootProps } from 'radix-vue'

interface Props extends /* @vue-ignore */ PopoverRootProps {}
defineProps<Props>()
</script>

<template>
  <PopoverRoot v-bind="$props"><slot /></PopoverRoot>
</template>
