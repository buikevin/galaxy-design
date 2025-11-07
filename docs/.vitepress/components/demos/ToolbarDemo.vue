<script setup lang="ts">
import { ref } from 'vue'

const isBold = ref(false)
const isItalic = ref(false)
const isUnderline = ref(false)
const alignment = ref<'left' | 'center' | 'right'>('left')

const toggleBold = () => { isBold.value = !isBold.value }
const toggleItalic = () => { isItalic.value = !isItalic.value }
const toggleUnderline = () => { isUnderline.value = !isUnderline.value }
const setAlignment = (align: 'left' | 'center' | 'right') => { alignment.value = align }
</script>

<template>
  <div class="flex flex-col gap-4">
    <div class="flex items-center gap-1 p-2 border rounded-md max-w-fit">
      <!-- Bold -->
      <button
        @click="toggleBold"
        :class="['p-2 hover:bg-accent rounded-md', isBold ? 'bg-accent' : '']"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
        >
          <path d="M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z" />
          <path d="M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z" />
        </svg>
      </button>

      <!-- Italic -->
      <button
        @click="toggleItalic"
        :class="['p-2 hover:bg-accent rounded-md', isItalic ? 'bg-accent' : '']"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
        >
          <line x1="19" x2="10" y1="4" y2="4" />
          <line x1="14" x2="5" y1="20" y2="20" />
          <line x1="15" x2="9" y1="4" y2="20" />
        </svg>
      </button>

      <!-- Underline -->
      <button
        @click="toggleUnderline"
        :class="['p-2 hover:bg-accent rounded-md', isUnderline ? 'bg-accent' : '']"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
        >
          <path d="M6 3v7a6 6 0 0 0 6 6 6 6 0 0 0 6-6V3" />
          <line x1="4" x2="20" y1="21" y2="21" />
        </svg>
      </button>

      <div class="w-px h-6 bg-border mx-1"></div>

      <!-- Align Left -->
      <button
        @click="setAlignment('left')"
        :class="['p-2 hover:bg-accent rounded-md', alignment === 'left' ? 'bg-accent' : '']"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
        >
          <line x1="21" x2="3" y1="6" y2="6" />
          <line x1="15" x2="3" y1="12" y2="12" />
          <line x1="17" x2="3" y1="18" y2="18" />
        </svg>
      </button>

      <!-- Align Center -->
      <button
        @click="setAlignment('center')"
        :class="['p-2 hover:bg-accent rounded-md', alignment === 'center' ? 'bg-accent' : '']"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
        >
          <line x1="21" x2="3" y1="6" y2="6" />
          <line x1="17" x2="7" y1="12" y2="12" />
          <line x1="19" x2="5" y1="18" y2="18" />
        </svg>
      </button>

      <!-- Align Right -->
      <button
        @click="setAlignment('right')"
        :class="['p-2 hover:bg-accent rounded-md', alignment === 'right' ? 'bg-accent' : '']"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
        >
          <line x1="21" x2="3" y1="6" y2="6" />
          <line x1="21" x2="9" y1="12" y2="12" />
          <line x1="21" x2="7" y1="18" y2="18" />
        </svg>
      </button>
    </div>
  </div>
</template>
