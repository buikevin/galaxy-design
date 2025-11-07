<script setup lang="ts">
import { computed, type HTMLAttributes } from 'vue'
import Avatar from '@/components/avatar/avatar.vue'
import AvatarImage from '@/components/avatar/avatar-image.vue'
import AvatarFallback from '@/components/avatar/avatar-fallback.vue'
import { cn } from '@/lib/utils'
import type { Message } from './types'

interface Props {
  message: Message
  showTimestamp?: boolean
  class?: HTMLAttributes['class']
}

const props = withDefaults(defineProps<Props>(), {
  showTimestamp: true,
})

const formattedTime = computed(() => {
  const date = props.message.timestamp
  return date.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit'
  })
})

const initials = computed(() => {
  return props.message.senderName
    .split(' ')
    .map(n => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2)
})
</script>

<template>
  <div
    :class="cn(
      'flex gap-3 mb-4',
      message.isCurrentUser && 'flex-row-reverse',
      props.class
    )"
  >
    <Avatar class="h-8 w-8">
      <AvatarImage v-if="message.senderAvatar" :src="message.senderAvatar" :alt="message.senderName" />
      <AvatarFallback>{{ initials }}</AvatarFallback>
    </Avatar>

    <div
      :class="cn(
        'flex flex-col gap-1 max-w-[70%]',
        message.isCurrentUser && 'items-end'
      )"
    >
      <div class="flex items-center gap-2">
        <span
          :class="cn(
            'text-sm font-medium',
            message.isCurrentUser && 'order-2'
          )"
        >
          {{ message.senderName }}
        </span>
        <span
          v-if="showTimestamp"
          :class="cn(
            'text-xs text-muted-foreground',
            message.isCurrentUser && 'order-1'
          )"
        >
          {{ formattedTime }}
        </span>
      </div>

      <div
        :class="cn(
          'rounded-lg px-4 py-2 text-sm',
          message.isCurrentUser
            ? 'bg-primary text-primary-foreground'
            : 'bg-muted'
        )"
      >
        {{ message.content }}
      </div>
    </div>
  </div>
</template>
