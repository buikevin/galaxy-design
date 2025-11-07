<script setup lang="ts">
import { ref, computed, type HTMLAttributes } from 'vue'
import Button from '@/components/button/Button.vue'
import Input from '@/components/input/input.vue'
import Avatar from '@/components/avatar/avatar.vue'
import AvatarImage from '@/components/avatar/avatar-image.vue'
import AvatarFallback from '@/components/avatar/avatar-fallback.vue'
import Separator from '@/components/separator/separator.vue'
import ScrollArea from '@/components/scroll-area/scroll-area.vue'
import { cn } from '@/lib/utils'
import type { EmailClientProps, Email, EmailFolder } from './types'

interface Props extends EmailClientProps {
  class?: HTMLAttributes['class']
}

const props = withDefaults(defineProps<Props>(), {
  folders: () => [
    { id: 'inbox', name: 'Inbox', icon: '📥', count: 12 },
    { id: 'starred', name: 'Starred', icon: '⭐' },
    { id: 'sent', name: 'Sent', icon: '📤' },
    { id: 'drafts', name: 'Drafts', icon: '📝' },
    { id: 'trash', name: 'Trash', icon: '🗑️' },
  ]
})

const emit = defineEmits<{
  emailClick: [email: Email]
  compose: []
  emailAction: [emailId: string, action: 'star' | 'delete' | 'archive']
}>()

const selectedEmail = ref<Email | null>(null)
const searchQuery = ref('')

const filteredEmails = computed(() => {
  if (!searchQuery.value) return props.emails
  const query = searchQuery.value.toLowerCase()
  return props.emails.filter(email =>
    email.subject.toLowerCase().includes(query) ||
    email.from.name.toLowerCase().includes(query) ||
    email.preview.toLowerCase().includes(query)
  )
})

const handleEmailClick = (email: Email) => {
  selectedEmail.value = email
  emit('emailClick', email)
  if (props.onEmailClick) props.onEmailClick(email)
}

const handleCompose = () => {
  emit('compose')
  if (props.onCompose) props.onCompose()
}

const handleEmailAction = (emailId: string, action: 'star' | 'delete' | 'archive') => {
  emit('emailAction', emailId, action)
  if (props.onEmailAction) props.onEmailAction(emailId, action)
}

const formatDate = (date: Date) => {
  const now = new Date()
  const diff = now.getTime() - date.getTime()
  const days = Math.floor(diff / (1000 * 60 * 60 * 24))

  if (days === 0) return date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
  if (days === 1) return 'Yesterday'
  if (days < 7) return date.toLocaleDateString('en-US', { weekday: 'short' })
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
}
</script>

<template>
  <div :class="cn('flex h-screen border rounded-lg overflow-hidden bg-background', props.class)">
    <!-- Sidebar -->
    <div class="w-64 border-r flex flex-col">
      <div class="p-4">
        <Button class="w-full" @click="handleCompose">
          <svg class="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
          </svg>
          Compose
        </Button>
      </div>

      <ScrollArea class="flex-1">
        <nav class="px-2 space-y-1">
          <Button
            v-for="folder in folders"
            :key="folder.id"
            variant="ghost"
            class="w-full justify-start gap-2"
          >
            <span>{{ folder.icon }}</span>
            <span class="flex-1 text-left">{{ folder.name }}</span>
            <span v-if="folder.count" class="text-xs text-muted-foreground">{{ folder.count }}</span>
          </Button>
        </nav>
      </ScrollArea>
    </div>

    <!-- Email List -->
    <div class="w-96 border-r flex flex-col">
      <div class="p-4 border-b">
        <Input v-model="searchQuery" placeholder="Search emails..." />
      </div>

      <ScrollArea class="flex-1">
        <div class="divide-y">
          <button
            v-for="email in filteredEmails"
            :key="email.id"
            :class="cn(
              'w-full text-left p-4 hover:bg-muted/50 transition-colors',
              selectedEmail?.id === email.id && 'bg-muted',
              !email.read && 'bg-muted/30'
            )"
            @click="handleEmailClick(email)"
          >
            <div class="flex items-start gap-3">
              <Avatar class="h-9 w-9">
                <AvatarImage v-if="email.from.avatar" :src="email.from.avatar" />
                <AvatarFallback>{{ email.from.name.slice(0, 2).toUpperCase() }}</AvatarFallback>
              </Avatar>

              <div class="flex-1 min-w-0">
                <div class="flex items-center justify-between gap-2 mb-1">
                  <span :class="cn('font-medium truncate', !email.read && 'font-bold')">
                    {{ email.from.name }}
                  </span>
                  <span class="text-xs text-muted-foreground shrink-0">
                    {{ formatDate(email.date) }}
                  </span>
                </div>
                <div :class="cn('text-sm truncate mb-1', !email.read && 'font-semibold')">
                  {{ email.subject }}
                </div>
                <div class="text-sm text-muted-foreground truncate">
                  {{ email.preview }}
                </div>
              </div>
            </div>
          </button>
        </div>
      </ScrollArea>
    </div>

    <!-- Email Content -->
    <div class="flex-1 flex flex-col">
      <div v-if="selectedEmail" class="flex flex-col h-full">
        <!-- Header -->
        <div class="p-4 border-b space-y-4">
          <div class="flex items-center justify-between">
            <h2 class="text-2xl font-semibold">{{ selectedEmail.subject }}</h2>
            <div class="flex gap-2">
              <Button variant="ghost" size="icon" @click="handleEmailAction(selectedEmail.id, 'star')">
                <svg class="h-4 w-4" :class="selectedEmail.starred && 'fill-yellow-400'" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
              </Button>
              <Button variant="ghost" size="icon" @click="handleEmailAction(selectedEmail.id, 'archive')">
                <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                </svg>
              </Button>
              <Button variant="ghost" size="icon" @click="handleEmailAction(selectedEmail.id, 'delete')">
                <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </Button>
            </div>
          </div>

          <div class="flex items-center gap-3">
            <Avatar class="h-10 w-10">
              <AvatarImage v-if="selectedEmail.from.avatar" :src="selectedEmail.from.avatar" />
              <AvatarFallback>{{ selectedEmail.from.name.slice(0, 2).toUpperCase() }}</AvatarFallback>
            </Avatar>
            <div>
              <div class="font-medium">{{ selectedEmail.from.name }}</div>
              <div class="text-sm text-muted-foreground">{{ selectedEmail.from.email }}</div>
            </div>
            <div class="ml-auto text-sm text-muted-foreground">
              {{ selectedEmail.date.toLocaleString('en-US', { dateStyle: 'medium', timeStyle: 'short' }) }}
            </div>
          </div>
        </div>

        <!-- Body -->
        <ScrollArea class="flex-1 p-6">
          <div class="prose max-w-none" v-html="selectedEmail.body" />
        </ScrollArea>

        <!-- Reply -->
        <div class="p-4 border-t">
          <Button variant="outline">
            <svg class="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
            </svg>
            Reply
          </Button>
        </div>
      </div>

      <div v-else class="flex items-center justify-center h-full text-muted-foreground">
        <p>Select an email to read</p>
      </div>
    </div>
  </div>
</template>
