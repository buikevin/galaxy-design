<script setup lang="ts">
import { ref } from 'vue'

const isPressed = ref(false)
</script>

<template>
  <div class="flex gap-2">
    <button
      @click="isPressed = !isPressed"
      :class="[
        'inline-flex items-center justify-center rounded-md text-sm font-medium px-3 py-2',
        'hover:bg-muted hover:text-muted-foreground',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
        'disabled:pointer-events-none disabled:opacity-50',
        isPressed ? 'bg-accent text-accent-foreground' : ''
      ]"
      :aria-pressed="isPressed"
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
        <path d="M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z" />
        <path d="M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z" />
      </svg>
    </button>
  </div>
</template>
