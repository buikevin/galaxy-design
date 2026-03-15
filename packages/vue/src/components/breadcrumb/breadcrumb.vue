<!--
 * @author Bùi Trọng Hiếu
 * @email kevinbui210191@gmail.com
 * @desc Breadcrumb component - Navigation trail showing current page location
-->
<script setup lang="ts">
import { cn } from '@/lib/utils'

const props = withDefaults(defineProps<{
  class?: string
  separator?: string
}>(), {})
</script>

<template>
  <nav :class="cn(props.class)" aria-label="breadcrumb">
    <slot />
  </nav>
</template>
