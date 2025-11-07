export interface Message {
  id: string
  content: string
  senderId: string
  senderName: string
  senderAvatar?: string
  timestamp: Date
  isCurrentUser?: boolean
}

export interface ChatUIProps {
  messages: Message[]
  currentUserId: string
  onSendMessage?: (content: string) => void
  placeholder?: string
  showTimestamp?: boolean
}
