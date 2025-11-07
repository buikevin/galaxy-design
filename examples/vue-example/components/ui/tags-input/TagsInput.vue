<script setup lang="ts">
import { cn } from '@/lib/utils'
import { ref } from 'vue'
import { X } from 'lucide-vue-next'

interface Props {
  class?: string
  modelValue?: string[]
  placeholder?: string
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: () => [],
  placeholder: 'Add tag...',
})

const emit = defineEmits<{
  'update:modelValue': [value: string[]]
  tagAdd: [tag: string]
  tagRemove: [tag: string]
}>()

const inputValue = ref('')
const inputRef = ref<HTMLInputElement>()

const handleKeyDown = (e: KeyboardEvent) => {
  if (e.key === 'Enter' && inputValue.value.trim()) {
    e.preventDefault()
    const newTag = inputValue.value.trim()
    if (!props.modelValue.includes(newTag)) {
      const newTags = [...props.modelValue, newTag]
      emit('update:modelValue', newTags)
      emit('tagAdd', newTag)
    }
    inputValue.value = ''
  } else if (e.key === 'Backspace' && !inputValue.value && props.modelValue.length > 0) {
    const lastTag = props.modelValue[props.modelValue.length - 1]
    const newTags = props.modelValue.slice(0, -1)
    emit('update:modelValue', newTags)
    emit('tagRemove', lastTag)
  }
}

const removeTag = (tagToRemove: string) => {
  const newTags = props.modelValue.filter((tag) => tag !== tagToRemove)
  emit('update:modelValue', newTags)
  emit('tagRemove', tagToRemove)
}
</script>

<template>
  <div
    :class="
      cn(
        'flex min-h-10 w-full flex-wrap gap-2 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2',
        props.class
      )
    "
    @click="inputRef?.focus()"
  >
    <span
      v-for="tag in modelValue"
      :key="tag"
      class="inline-flex items-center gap-1 rounded-md bg-primary px-2 py-1 text-xs font-medium text-primary-foreground"
    >
      {{ tag }}
      <button
        type="button"
        class="rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
        @click="removeTag(tag)"
      >
        <X class="h-3 w-3" />
        <span class="sr-only">Remove {{ tag }}</span>
      </button>
    </span>
    <input
      ref="inputRef"
      v-model="inputValue"
      type="text"
      :placeholder="modelValue.length === 0 ? placeholder : ''"
      class="flex-1 bg-transparent outline-none placeholder:text-muted-foreground"
      @keydown="handleKeyDown"
    />
  </div>
</template>
