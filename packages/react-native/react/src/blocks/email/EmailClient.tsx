import React, { useState } from 'react'
import { Button } from '@/components/ui/button/Button'
import { Input } from '@/components/ui/input/Input'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar/Avatar'
import { Separator } from '@/components/ui/separator/Separator'
import { ScrollArea } from '@/components/ui/scroll-area/ScrollArea'
import { cn } from '@/lib/utils'
import type { EmailClientProps, Email } from './types'

export const EmailClient: React.FC<EmailClientProps> = ({
  emails,
  folders,
  onEmailClick,
  onCompose,
  onEmailAction,
  className,
}) => {
  const [selectedEmail, setSelectedEmail] = useState<Email | null>(null)
  const [searchQuery, setSearchQuery] = useState('')

  const filteredEmails = searchQuery
    ? emails.filter(
        (email) =>
          email.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
          email.from.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          email.preview.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : emails

  const handleEmailClick = (email: Email) => {
    setSelectedEmail(email)
    onEmailClick?.(email)
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

  return (
    <div className={cn('flex h-screen border rounded-lg overflow-hidden bg-background', className)}>
      {/* Sidebar */}
      <div className="w-64 border-r flex flex-col">
        <div className="p-4">
          <Button className="w-full" onClick={onCompose}>
            <span className="mr-2">+</span>
            Compose
          </Button>
        </div>

        <ScrollArea className="flex-1">
          <nav className="px-2 space-y-1">
            {folders?.map((folder) => (
              <Button key={folder.id} variant="ghost" className="w-full justify-start gap-2">
                {folder.icon && <span>{folder.icon}</span>}
                <span className="flex-1 text-left">{folder.name}</span>
                {folder.count && (
                  <span className="text-xs text-muted-foreground">{folder.count}</span>
                )}
              </Button>
            ))}
          </nav>
        </ScrollArea>
      </div>

      {/* Email List */}
      <div className="w-96 border-r flex flex-col">
        <div className="p-4 border-b">
          <Input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search emails..."
          />
        </div>

        <ScrollArea className="flex-1">
          <div className="divide-y">
            {filteredEmails.map((email) => (
              <button
                key={email.id}
                className={cn(
                  'w-full text-left p-4 hover:bg-muted/50 transition-colors',
                  selectedEmail?.id === email.id && 'bg-muted',
                  !email.read && 'bg-muted/30'
                )}
                onClick={() => handleEmailClick(email)}
              >
                <div className="flex items-start gap-3">
                  <Avatar className="h-9 w-9">
                    {email.from.avatar && <AvatarImage src={email.from.avatar} />}
                    <AvatarFallback>
                      {email.from.name.slice(0, 2).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <span
                        className={cn(
                          'font-medium truncate',
                          !email.read && 'font-bold'
                        )}
                      >
                        {email.from.name}
                      </span>
                      <span className="text-xs text-muted-foreground shrink-0">
                        {formatDate(email.date)}
                      </span>
                    </div>
                    <div
                      className={cn(
                        'text-sm truncate mb-1',
                        !email.read && 'font-semibold'
                      )}
                    >
                      {email.subject}
                    </div>
                    <div className="text-sm text-muted-foreground truncate">
                      {email.preview}
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </ScrollArea>
      </div>

      {/* Email Content */}
      <div className="flex-1 flex flex-col">
        {selectedEmail ? (
          <>
            <div className="p-4 border-b space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-semibold">{selectedEmail.subject}</h2>
                <div className="flex gap-2">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => onEmailAction?.(selectedEmail.id, 'star')}
                  >
                    ⭐
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => onEmailAction?.(selectedEmail.id, 'archive')}
                  >
                    📦
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => onEmailAction?.(selectedEmail.id, 'delete')}
                  >
                    🗑️
                  </Button>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Avatar className="h-10 w-10">
                  {selectedEmail.from.avatar && (
                    <AvatarImage src={selectedEmail.from.avatar} />
                  )}
                  <AvatarFallback>
                    {selectedEmail.from.name.slice(0, 2).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-medium">{selectedEmail.from.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {selectedEmail.from.email}
                  </div>
                </div>
                <div className="ml-auto text-sm text-muted-foreground">
                  {selectedEmail.date.toLocaleString('en-US', {
                    dateStyle: 'medium',
                    timeStyle: 'short',
                  })}
                </div>
              </div>
            </div>

            <ScrollArea className="flex-1 p-6">
              <div
                className="prose max-w-none"
                dangerouslySetInnerHTML={{ __html: selectedEmail.body }}
              />
            </ScrollArea>

            <div className="p-4 border-t">
              <Button variant="outline">↩️ Reply</Button>
            </div>
          </>
        ) : (
          <div className="flex items-center justify-center h-full text-muted-foreground">
            <p>Select an email to read</p>
          </div>
        )}
      </div>
    </div>
  )
}
