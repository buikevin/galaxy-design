<!--
 * @author Bùi Trọng Hiếu
 * @email kevinbui210191@gmail.com
 * @desc Dialog component - Modal dialog with overlay, content, and accessible focus management
-->
<script setup lang="ts">
import { DialogRoot, type DialogRootProps } from 'radix-vue'

defineOptions({
  name: 'UiDialog',
})

/**
 * Dialog Props
 * @prop open - Controlled open state
 * @prop defaultOpen - Default open state
 * @prop modal - Modal behavior
 * @prop openAsChild - Open as child via Radix Primitive
 */
interface Props extends DialogRootProps {
  /** Controlled open state. */
  open?: boolean
  /** Default open state. */
  defaultOpen?: boolean
  /** Modal behavior. */
  modal?: boolean
}
defineProps<Props>()
</script>

<template>
  <DialogRoot v-bind="$props"><slot /></DialogRoot>
</template>
