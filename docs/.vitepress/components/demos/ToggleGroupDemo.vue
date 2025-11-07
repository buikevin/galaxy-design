<script setup lang="ts">
import { ref } from 'vue'

const selected = ref<string[]>([])

const toggleItem = (value: string) => {
  const index = selected.value.indexOf(value)
  if (index > -1) {
    selected.value.splice(index, 1)
  } else {
    selected.value.push(value)
  }
}
</script>

<template>
  <div class="flex gap-1 border rounded-md p-1">
    <button
      v-for="item in [
        { value: 'bold', icon: 'M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z' },
        { value: 'italic', icon: 'M19 4h-9 M14 20h-9 M15 4l-6 16' },
        { value: 'underline', icon: 'M6 3v7a6 6 0 0 0 6 6 6 6 0 0 0 6-6V3 M4 21h16' }
      ]"
      :key="item.value"
      @click="toggleItem(item.value)"
      :class="[
        'inline-flex items-center justify-center rounded-md text-sm font-medium px-3 py-2',
        'hover:bg-muted hover:text-muted-foreground',
        selected.includes(item.value) ? 'bg-accent text-accent-foreground' : ''
      ]"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
      >
        <path :d="item.icon" />
      </svg>
    </button>
  </div>
</template>
