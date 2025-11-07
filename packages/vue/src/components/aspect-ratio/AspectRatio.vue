<script setup lang="ts">
import { AspectRatio as AspectRatioPrimitive, type AspectRatioProps } from 'radix-vue'

interface Props extends AspectRatioProps {}

defineProps<Props>()
</script>

<template>
  <AspectRatioPrimitive v-bind="$props">
    <slot />
  </AspectRatioPrimitive>
</template>
