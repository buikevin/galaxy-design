<script setup lang="ts">
import { ref } from 'vue'

const tags = ref(['React', 'Vue', 'Angular'])
const inputValue = ref('')

const addTag = () => {
  if (inputValue.value.trim() && !tags.value.includes(inputValue.value.trim())) {
    tags.value.push(inputValue.value.trim())
    inputValue.value = ''
  }
}

const removeTag = (index: number) => {
  tags.value.splice(index, 1)
}

const handleKeydown = (e: KeyboardEvent) => {
  if (e.key === 'Enter') {
    e.preventDefault()
    addTag()
  } else if (e.key === 'Backspace' && !inputValue.value && tags.value.length > 0) {
    removeTag(tags.value.length - 1)
  }
}
</script>

<template>
  <div class="flex flex-col gap-4">
    <div class="max-w-md">
      <div class="flex flex-wrap gap-2 p-3 border rounded-md focus-within:ring-2 focus-within:ring-ring">
        <span
          v-for="(tag, index) in tags"
          :key="tag"
          class="inline-flex items-center gap-1 px-2 py-1 text-xs font-medium bg-primary text-primary-foreground rounded-md"
        >
          {{ tag }}
          <button
            @click="removeTag(index)"
            class="hover:bg-primary-foreground/20 rounded-sm"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>
        </span>

        <input
          v-model="inputValue"
          @keydown="handleKeydown"
          type="text"
          placeholder="Add tag..."
          class="flex-1 min-w-[120px] outline-none text-sm bg-transparent"
        />
      </div>

      <p class="text-xs text-muted-foreground mt-2">
        Press Enter to add tags, Backspace to remove
      </p>
    </div>
  </div>
</template>
