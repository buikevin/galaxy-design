import React, { useState } from 'react'
import { Textarea } from '@/components/ui/textarea/textarea'
import { Button } from '@/components/ui/button/Button'
import { cn } from '@/lib/utils'

interface MessageInputProps {
  onSend: (content: string) => void
  placeholder?: string
  disabled?: boolean
  maxLength?: number
  className?: string
}

export const MessageInput: React.FC<MessageInputProps> = ({
  onSend,
  placeholder = 'Type your message...',
  disabled = false,
  maxLength = 1000,
  className,
}) => {
  const [messageContent, setMessageContent] = useState('')

  const handleSend = () => {
    const content = messageContent.trim()
    if (content && !disabled) {
      onSend(content)
      setMessageContent('')
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    // Send on Enter, but allow Shift+Enter for new lines
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  return (
    <div className={cn('flex gap-2 p-4 border-t bg-background', className)}>
      <Textarea
        value={messageContent}
        onChange={(e) => setMessageContent(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        disabled={disabled}
        maxLength={maxLength}
        className="min-h-[60px] max-h-[120px] resize-none"
      />
      <Button
        onClick={handleSend}
        disabled={disabled || !messageContent.trim()}
        className="self-end"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m22 2-7 20-4-9-9-4Z" />
          <path d="M22 2 11 13" />
        </svg>
        <span className="ml-2">Send</span>
      </Button>
    </div>
  )
}
