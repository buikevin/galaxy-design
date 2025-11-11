import React, { useRef, useEffect } from 'react'
import { ScrollArea } from '@/components/ui/scroll-area/ScrollArea'
import { ChatMessage } from './ChatMessage'
import { cn } from '@/lib/utils'
import type { Message } from './types'

interface MessageListProps {
  messages: Message[]
  showTimestamp?: boolean
  height?: string
  className?: string
}

export const MessageList: React.FC<MessageListProps> = ({
  messages,
  showTimestamp = true,
  height = '400px',
  className,
}) => {
  const scrollAreaRef = useRef<HTMLDivElement>(null)

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight
    }
  }, [messages.length])

  return (
    <ScrollArea
      ref={scrollAreaRef}
      className={cn('w-full rounded-md border p-4', className)}
      style={{ height }}
    >
      {messages.length === 0 ? (
        <div className="flex items-center justify-center h-full text-muted-foreground">
          <p>No messages yet. Start the conversation!</p>
        </div>
      ) : (
        <div className="space-y-1">
          {messages.map((message) => (
            <ChatMessage
              key={message.id}
              message={message}
              showTimestamp={showTimestamp}
            />
          ))}
        </div>
      )}
    </ScrollArea>
  )
}
