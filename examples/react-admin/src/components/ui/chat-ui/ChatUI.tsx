import React from 'react'
import { MessageList } from './MessageList'
import { MessageInput } from './MessageInput'
import { cn } from '@/lib/utils'
import type { ChatUIProps } from './types'

export const ChatUI: React.FC<ChatUIProps> = ({
  messages,
  currentUserId,
  onSendMessage,
  placeholder = 'Type your message...',
  showTimestamp = true,
  height = '500px',
  className,
}) => {
  const handleSendMessage = (content: string) => {
    if (onSendMessage) {
      onSendMessage(content)
    }
  }

  return (
    <div
      className={cn(
        'flex flex-col w-full max-w-2xl mx-auto rounded-lg border bg-card text-card-foreground shadow-sm',
        className
      )}
    >
      {/* Chat Header */}
      <div className="flex items-center justify-between p-4 border-b">
        <div>
          <h3 className="text-lg font-semibold">Chat</h3>
          <p className="text-sm text-muted-foreground">
            {messages.length} {messages.length === 1 ? 'message' : 'messages'}
          </p>
        </div>
      </div>

      {/* Messages */}
      <MessageList
        messages={messages}
        showTimestamp={showTimestamp}
        height={height}
        className="flex-1"
      />

      {/* Input */}
      <MessageInput placeholder={placeholder} onSend={handleSendMessage} />
    </div>
  )
}
