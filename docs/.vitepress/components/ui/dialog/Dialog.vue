<script setup lang="ts">
import { DialogRoot, type DialogRootProps } from 'radix-vue'
interface Props extends /* @vue-ignore */ DialogRootProps {}
defineProps<Props>()
</script>

<template>
  <DialogRoot v-bind="$props"><slot /></DialogRoot>
</template>
