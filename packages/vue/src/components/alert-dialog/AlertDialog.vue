<!--
 * @author Bùi Trọng Hiếu
 * @email kevinbui210191@gmail.com
 * @desc AlertDialog component - Modal alert dialog with overlay and accessible focus management
-->
<script setup lang="ts">
import { AlertDialogRoot, type AlertDialogProps } from 'radix-vue'
interface Props extends AlertDialogProps {}
defineProps<Props>()
</script>

<template>
  <AlertDialogRoot v-bind="$props"><slot /></AlertDialogRoot>
</template>
