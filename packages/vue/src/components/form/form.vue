<!--
 * @author Bùi Trọng Hiếu
 * @email kevinbui210191@gmail.com
 * @desc Form component - Form container with validation context support
-->
<script setup lang="ts">
import { cn } from '@/lib/utils'
import { provide } from 'vue'

defineOptions({
  name: 'UiForm',
})

const props = withDefaults(defineProps<{
  class?: string
}>(), {})

// Provide form context for nested components
provide('formContext', {})
</script>

<template>
  <form :class="cn(props.class)">
    <slot />
  </form>
</template>
