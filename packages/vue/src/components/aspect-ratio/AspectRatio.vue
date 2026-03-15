<!--
 * @author Bùi Trọng Hiếu
 * @email kevinbui210191@gmail.com
 * @desc AspectRatio component - Maintains aspect ratio for embedded content
-->
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
