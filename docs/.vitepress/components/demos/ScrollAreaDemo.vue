<script setup lang="ts">
const tags = Array.from({ length: 50 }).map((_, i, a) => `v1.2.0-beta.${a.length - i}`)
</script>

<template>
  <div class="h-72 w-48 rounded-md border overflow-auto">
    <div class="p-4">
      <h4 class="mb-4 text-sm font-medium leading-none">Tags</h4>
      <div v-for="tag in tags" :key="tag">
        <div class="text-sm">
          {{ tag }}
        </div>
        <div class="my-2 h-px bg-border" />
      </div>
    </div>
  </div>
</template>
