<script setup lang="ts">
import { ref, type HTMLAttributes } from 'vue'
import Textarea from '@/components/textarea/textarea.vue'
import Button from '@/components/button/Button.vue'
import { cn } from '@/lib/utils'

interface Props {
  placeholder?: string
  disabled?: boolean
  maxLength?: number
  class?: HTMLAttributes['class']
}

const props = withDefaults(defineProps<Props>(), {
  placeholder: 'Type your message...',
  disabled: false,
  maxLength: 1000,
})

const emit = defineEmits<{
  send: [content: string]
}>()

const messageContent = ref('')

const handleSend = () => {
  const content = messageContent.value.trim()
  if (content && !props.disabled) {
    emit('send', content)
    messageContent.value = ''
  }
}

const handleKeyDown = (event: KeyboardEvent) => {
  // Send on Enter, but allow Shift+Enter for new lines
  if (event.key === 'Enter' && !event.shiftKey) {
    event.preventDefault()
    handleSend()
  }
}
</script>

<template>
  <div :class="cn('flex gap-2 p-4 border-t bg-background', props.class)">
    <Textarea
      v-model="messageContent"
      :placeholder="placeholder"
      :disabled="disabled"
      :maxlength="maxLength"
      class="min-h-[60px] max-h-[120px] resize-none"
      @keydown="handleKeyDown"
    />
    <Button
      :disabled="disabled || !messageContent.trim()"
      @click="handleSend"
      class="self-end"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="m22 2-7 20-4-9-9-4Z" />
        <path d="M22 2 11 13" />
      </svg>
      <span class="ml-2">Send</span>
    </Button>
  </div>
</template>
