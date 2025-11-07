<script setup lang="ts">
defineProps<{
  class?: string
}>()
</script>

<template>
  <div class="demo-container" :class="$props.class">
    <slot />
  </div>
</template>

<style scoped>
.demo-container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 8px;
  flex-wrap: wrap;
}
</style>
