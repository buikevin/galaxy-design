<!--
 * @author Bùi Trọng Hiếu
 * @email kevinbui210191@gmail.com
 * @desc Toolbar component - Group of controls with Radix Toolbar primitive
-->
<script setup lang="ts">
import { cn } from '@/lib/utils'
import { ToolbarRoot } from 'radix-vue'

interface Props {
  class?: string
}

const props = defineProps<Props>()
</script>

<template>
  <ToolbarRoot
    :class="
      cn(
        'flex w-full min-w-max items-center gap-1 rounded-md bg-background p-1',
        props.class
      )
    "
  >
    <slot />
  </ToolbarRoot>
</template>
