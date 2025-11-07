# Email Client

Gmail-like email interface with inbox, folders, email list, reading pane, and email actions.

## Installation

```bash
npx galaxy-ui-cli add email
```

## Features

- ✅ **Three-column Layout** - Folders, email list, reading pane
- ✅ **Email List** - With preview and read/unread states
- ✅ **Reading Pane** - Full email content display
- ✅ **Folder Sidebar** - Inbox, starred, sent, etc.
- ✅ **Search** - Filter emails by subject, sender, or content
- ✅ **Email Actions** - Star, archive, delete
- ✅ **Avatar Support** - Sender avatars with fallbacks
- ✅ **Smart Date Formatting** - "5m ago", "Yesterday", etc.

## Components Used

- [Button](/components/button)
- [Input](/components/input)
- [Avatar](/components/avatar)
- [Separator](/components/separator)
- [ScrollArea](/components/scroll-area)

## Usage

::: code-group
```vue [Vue]
<script setup>
import { ref } from 'vue'
import { EmailClient } from '@/components/ui/email'

const emails = ref([
  {
    id: '1',
    from: {
      name: 'John Doe',
      email: 'john@example.com',
      avatar: '/avatars/john.jpg'
    },
    subject: 'Project Update',
    preview: 'Here is the latest update on the project...',
    body: '<p>Full email content here...</p>',
    date: new Date(),
    read: false,
    starred: false
  }
])

const handleEmailClick = (email) => {
  email.read = true
}

const handleEmailAction = (emailId, action) => {
  console.log(`${action} email:`, emailId)
}
</script>

<template>
  <EmailClient
    :emails="emails"
    @email-click="handleEmailClick"
    @email-action="handleEmailAction"
  />
</template>
```

```tsx [React]
import { useState } from 'react'
import { EmailClient } from '@/components/ui/email'

export default function EmailApp() {
  const [emails, setEmails] = useState([
    {
      id: '1',
      from: {
        name: 'John Doe',
        email: 'john@example.com',
        avatar: '/avatars/john.jpg'
      },
      subject: 'Project Update',
      preview: 'Here is the latest update...',
      body: '<p>Full email content...</p>',
      date: new Date(),
      read: false,
      starred: false
    }
  ])

  const handleEmailClick = (email) => {
    setEmails(emails.map(e => 
      e.id === email.id ? { ...e, read: true } : e
    ))
  }

  return (
    <EmailClient
      emails={emails}
      onEmailClick={handleEmailClick}
    />
  )
}
```
:::

## Props

| Prop | Type | Description |
|------|------|-------------|
| `emails` | `Email[]` | Array of email objects |
| `folders` | `EmailFolder[]` | Sidebar folders (optional) |
| `onEmailClick` | `(email: Email) => void` | Called when email is clicked |
| `onCompose` | `() => void` | Called when compose is clicked |
| `onEmailAction` | `(id: string, action) => void` | Star, archive, delete actions |

## Types

```typescript
interface Email {
  id: string
  from: {
    name: string
    email: string
    avatar?: string
  }
  subject: string
  preview: string
  body: string
  date: Date
  read: boolean
  starred: boolean
  labels?: string[]
}

interface EmailFolder {
  id: string
  name: string
  icon?: ReactNode
  count?: number
}
```

## Platform Availability

| Platform | Status |
|----------|--------|
| Vue 3 | ✅ Available |
| React 18+ | ✅ Available |
| Angular 20 | ✅ Available |
| React Native | ❌ Not suitable for mobile |
| Flutter | ❌ Not suitable for mobile |
