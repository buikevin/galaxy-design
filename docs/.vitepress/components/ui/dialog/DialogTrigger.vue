<script setup lang="ts">
import { DialogTrigger, type DialogTriggerProps } from 'radix-vue'

interface Props extends /* @vue-ignore */ DialogTriggerProps {}

defineProps<Props>()
</script>

<template>
  <DialogTrigger v-bind="$props">
    <slot />
  </DialogTrigger>
</template>
