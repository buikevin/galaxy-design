<script setup lang="ts">
import { type HTMLAttributes } from 'vue'
import MessageList from './MessageList.vue'
import MessageInput from './MessageInput.vue'
import { cn } from '@/lib/utils'
import type { ChatUIProps } from './types'

interface Props extends ChatUIProps {
  class?: HTMLAttributes['class']
}

const props = withDefaults(defineProps<Props>(), {
  placeholder: 'Type your message...',
  showTimestamp: true,
  height: '500px',
})

const emit = defineEmits<{
  sendMessage: [content: string]
}>()

const handleSendMessage = (content: string) => {
  emit('sendMessage', content)
  if (props.onSendMessage) {
    props.onSendMessage(content)
  }
}
</script>

<template>
  <div
    :class="cn(
      'flex flex-col w-full max-w-2xl mx-auto rounded-lg border bg-card text-card-foreground shadow-sm',
      props.class
    )"
  >
    <!-- Chat Header -->
    <div class="flex items-center justify-between p-4 border-b">
      <div>
        <h3 class="text-lg font-semibold">Chat</h3>
        <p class="text-sm text-muted-foreground">
          {{ messages.length }} {{ messages.length === 1 ? 'message' : 'messages' }}
        </p>
      </div>
      <slot name="header-actions" />
    </div>

    <!-- Messages -->
    <MessageList
      :messages="messages"
      :show-timestamp="showTimestamp"
      :height="height"
      class="flex-1"
    />

    <!-- Input -->
    <MessageInput
      :placeholder="placeholder"
      @send="handleSendMessage"
    />
  </div>
</template>
