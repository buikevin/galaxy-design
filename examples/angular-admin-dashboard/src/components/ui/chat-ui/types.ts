export interface Message {
  id: string
  content: string
  senderId: string
  senderName: string
  senderAvatar?: string
  timestamp: Date
  isCurrentUser?: boolean
}

export interface ChatUser {
  id: string
  name: string
  avatar?: string
  status?: 'online' | 'offline' | 'away'
}

export interface ChatUIProps {
  messages: Message[]
  currentUserId: string
  showTimestamp?: boolean
  height?: string
}
