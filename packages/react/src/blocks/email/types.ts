export interface Email {
  id: string
  from: { name: string; email: string; avatar?: string }
  subject: string
  preview: string
  body: string
  date: Date
  read: boolean
  starred: boolean
  labels?: string[]
}

export interface EmailFolder {
  id: string
  name: string
  icon?: React.ReactNode
  count?: number
}

export interface EmailClientProps {
  emails: Email[]
  folders?: EmailFolder[]
  onEmailClick?: (email: Email) => void
  onSelectEmail?: (email: Email) => void
  onCompose?: () => void
  onEmailAction?: (emailId: string, action: 'star' | 'delete' | 'archive') => void
  onStarEmail?: (emailId: string) => void
  onArchiveEmail?: (emailId: string) => void
  onDeleteEmail?: (emailId: string) => void
  onChangeFolder?: (folderId: string) => void
  className?: string
}
