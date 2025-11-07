# Chat UI

A complete chat interface with message list, user avatars, timestamps, and message input.

## Installation

::: code-group

```bash [Vue]
npx galaxy-ui add chat-ui
```

```bash [React]
npx galaxy-ui add chat-ui
```

```bash [Angular]
npx galaxy-ui add chat-ui
```

:::

## Usage

::: code-group

```vue [Vue]
<script setup>
import { ref } from 'vue'
import { ChatUI } from '@/components/ui/chat-ui'

const messages = ref([
  {
    id: '1',
    content: 'Hey! How are you?',
    senderId: 'user1',
    senderName: 'John Doe',
    senderAvatar: '/avatars/john.jpg',
    timestamp: new Date(Date.now() - 3600000),
    isCurrentUser: false
  },
  {
    id: '2',
    content: 'I\'m doing great, thanks for asking!',
    senderId: 'current',
    senderName: 'Me',
    timestamp: new Date(Date.now() - 3000000),
    isCurrentUser: true
  },
  {
    id: '3',
    content: 'Working on the new Galaxy UI blocks. They\'re awesome!',
    senderId: 'current',
    senderName: 'Me',
    timestamp: new Date(Date.now() - 2000000),
    isCurrentUser: true
  }
])

const handleSendMessage = (content) => {
  messages.value.push({
    id: Date.now().toString(),
    content,
    senderId: 'current',
    senderName: 'Me',
    timestamp: new Date(),
    isCurrentUser: true
  })
}
</script>

<template>
  <ChatUI
    :messages="messages"
    current-user-id="current"
    placeholder="Type your message..."
    @send-message="handleSendMessage"
  />
</template>
```

```tsx [React]
import { useState } from 'react'
import { ChatUI } from '@/components/ui/chat-ui'

export default function ChatExample() {
  const [messages, setMessages] = useState([
    {
      id: '1',
      content: 'Hey! How are you?',
      senderId: 'user1',
      senderName: 'John Doe',
      senderAvatar: '/avatars/john.jpg',
      timestamp: new Date(Date.now() - 3600000),
      isCurrentUser: false
    },
    {
      id: '2',
      content: 'I\'m doing great, thanks!',
      senderId: 'current',
      senderName: 'Me',
      timestamp: new Date(),
      isCurrentUser: true
    }
  ])

  const handleSendMessage = (content) => {
    setMessages([...messages, {
      id: Date.now().toString(),
      content,
      senderId: 'current',
      senderName: 'Me',
      timestamp: new Date(),
      isCurrentUser: true
    }])
  }

  return (
    <ChatUI
      messages={messages}
      currentUserId="current"
      onSendMessage={handleSendMessage}
    />
  )
}
```

```typescript [Angular]
import { Component } from '@angular/core';
import { ChatUIComponent, Message } from '@/components/ui/chat-ui';

@Component({
  selector: 'app-chat-example',
  standalone: true,
  imports: [ChatUIComponent],
  template: `
    <ui-chat-ui
      [messages]="messages"
      [currentUserId]="'current'"
      (sendMessage)="handleSendMessage($event)"
    />
  `
})
export class ChatExampleComponent {
  messages: Message[] = [
    {
      id: '1',
      content: 'Hey! How are you?',
      senderId: 'user1',
      senderName: 'John Doe',
      timestamp: new Date(Date.now() - 3600000),
      isCurrentUser: false
    },
    {
      id: '2',
      content: 'I\'m doing great!',
      senderId: 'current',
      senderName: 'Me',
      timestamp: new Date(),
      isCurrentUser: true
    }
  ];

  handleSendMessage(content: string) {
    this.messages.push({
      id: Date.now().toString(),
      content,
      senderId: 'current',
      senderName: 'Me',
      timestamp: new Date(),
      isCurrentUser: true
    });
  }
}
```

:::

## Features

- ✅ **Message List** with auto-scroll to bottom
- ✅ **User Avatars** with fallback initials
- ✅ **Timestamps** with smart formatting
- ✅ **Message Input** with Enter to send (Shift+Enter for new line)
- ✅ **Current User Styling** - different appearance for sender/receiver
- ✅ **Responsive Design** - works on all screen sizes
- ✅ **Dark Mode** support

## Components Used

This block is built using the following base components:
- [Avatar](/components/avatar)
- [Button](/components/button)
- [ScrollArea](/components/scroll-area)
- [Textarea](/components/textarea)

## Props

### ChatUI Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `messages` | `Message[]` | `[]` | Array of message objects |
| `currentUserId` | `string` | required | ID of the current user |
| `onSendMessage` | `(content: string) => void` | - | Callback when message is sent |
| `placeholder` | `string` | `'Type your message...'` | Input placeholder text |
| `showTimestamp` | `boolean` | `true` | Show/hide message timestamps |
| `height` | `string` | `'500px'` | Height of the chat container |

### Message Interface

```typescript
interface Message {
  id: string
  content: string
  senderId: string
  senderName: string
  senderAvatar?: string
  timestamp: Date
  isCurrentUser?: boolean
}
```

## Advanced Usage

### With Real-time Updates

```vue
<script setup>
import { ref, onMounted } from 'vue'
import { ChatUI } from '@/components/ui/chat-ui'
import { socket } from '@/lib/socket'

const messages = ref([])

onMounted(() => {
  // Load initial messages
  fetchMessages().then(data => {
    messages.value = data
  })

  // Listen for new messages
  socket.on('new-message', (message) => {
    messages.value.push(message)
  })
})

const handleSendMessage = async (content) => {
  const message = {
    id: Date.now().toString(),
    content,
    senderId: 'current',
    senderName: 'Me',
    timestamp: new Date(),
    isCurrentUser: true
  }

  // Optimistic update
  messages.value.push(message)

  // Send to server
  await socket.emit('send-message', message)
}
</script>
```

### With Emoji Support

```vue
<script setup>
import { ChatUI } from '@/components/ui/chat-ui'
import EmojiPicker from '@/components/EmojiPicker.vue'

const showEmojiPicker = ref(false)

const handleEmojiSelect = (emoji) => {
  // Append emoji to input
  messageInput.value += emoji
}
</script>

<template>
  <div class="relative">
    <ChatUI v-bind="chatProps" />
    <EmojiPicker
      v-if="showEmojiPicker"
      @select="handleEmojiSelect"
    />
  </div>
</template>
```

## Customization

### Custom Styling

```vue
<!-- Change message colors -->
<ChatUI
  class="max-w-4xl"
  :messages="messages"
  current-user-id="current"
/>

<style scoped>
/* Override message bubble colors */
:deep(.bg-primary) {
  @apply bg-blue-500;
}

:deep(.bg-muted) {
  @apply bg-gray-100 dark:bg-gray-800;
}
</style>
```

### Custom Avatar Component

```vue
<script setup>
// Replace avatar in ChatMessage component
import CustomAvatar from '@/components/CustomAvatar.vue'
</script>
```

## Accessibility

- **Keyboard Navigation**: Full keyboard support
- **Screen Readers**: Proper ARIA labels
- **Focus Management**: Logical tab order
- **Timestamps**: Readable date formats

## Related Blocks

- [Sidebar](/blocks/web/sidebar) - Perfect companion for chat apps
- [Email Client](/blocks/web/email) - Similar messaging interface

## Platform Availability

| Platform | Status |
|----------|--------|
| Vue 3 | ✅ Available |
| React 18+ | ✅ Available |
| Angular 20 | ✅ Available |
| React Native | ✅ [Mobile Version](/blocks/mobile/chat-ui) |
| Flutter | ✅ [Mobile Version](/blocks/mobile/chat-ui) |
