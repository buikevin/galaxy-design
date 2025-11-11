import React from 'react'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar/Avatar'
import { cn } from '@/lib/utils'
import type { Message } from './types'

interface ChatMessageProps {
  message: Message
  showTimestamp?: boolean
  className?: string
}

export const ChatMessage: React.FC<ChatMessageProps> = ({
  message,
  showTimestamp = true,
  className,
}) => {
  const formattedTime = message.timestamp.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
  })

  const initials = message.senderName
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2)

  return (
    <div
      className={cn(
        'flex gap-3 mb-4',
        message.isCurrentUser && 'flex-row-reverse',
        className
      )}
    >
      <Avatar className="h-8 w-8">
        {message.senderAvatar && (
          <AvatarImage src={message.senderAvatar} alt={message.senderName} />
        )}
        <AvatarFallback>{initials}</AvatarFallback>
      </Avatar>

      <div
        className={cn(
          'flex flex-col gap-1 max-w-[70%]',
          message.isCurrentUser && 'items-end'
        )}
      >
        <div className="flex items-center gap-2">
          <span
            className={cn(
              'text-sm font-medium',
              message.isCurrentUser && 'order-2'
            )}
          >
            {message.senderName}
          </span>
          {showTimestamp && (
            <span
              className={cn(
                'text-xs text-muted-foreground',
                message.isCurrentUser && 'order-1'
              )}
            >
              {formattedTime}
            </span>
          )}
        </div>

        <div
          className={cn(
            'rounded-lg px-4 py-2 text-sm',
            message.isCurrentUser
              ? 'bg-primary text-primary-foreground'
              : 'bg-muted'
          )}
        >
          {message.content}
        </div>
      </div>
    </div>
  )
}
