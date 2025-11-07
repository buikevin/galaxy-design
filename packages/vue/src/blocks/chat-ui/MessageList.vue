<script setup lang="ts">
import { ref, watch, nextTick, type HTMLAttributes } from 'vue'
import ScrollArea from '@/components/scroll-area/scroll-area.vue'
import ChatMessage from './ChatMessage.vue'
import { cn } from '@/lib/utils'
import type { Message } from './types'

interface Props {
  messages: Message[]
  showTimestamp?: boolean
  height?: string
  class?: HTMLAttributes['class']
}

const props = withDefaults(defineProps<Props>(), {
  showTimestamp: true,
  height: '400px',
})

const scrollAreaRef = ref<HTMLElement | null>(null)

// Auto-scroll to bottom when new messages arrive
watch(
  () => props.messages.length,
  async () => {
    await nextTick()
    if (scrollAreaRef.value) {
      scrollAreaRef.value.scrollTop = scrollAreaRef.value.scrollHeight
    }
  }
)
</script>

<template>
  <ScrollArea
    ref="scrollAreaRef"
    :class="cn('w-full rounded-md border p-4', props.class)"
    :style="{ height: props.height }"
  >
    <div v-if="messages.length === 0" class="flex items-center justify-center h-full text-muted-foreground">
      <p>No messages yet. Start the conversation!</p>
    </div>

    <div v-else class="space-y-1">
      <ChatMessage
        v-for="message in messages"
        :key="message.id"
        :message="message"
        :show-timestamp="showTimestamp"
      />
    </div>
  </ScrollArea>
</template>
