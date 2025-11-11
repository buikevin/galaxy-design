import { describe, it, expect, vi } from '@jest/globals'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { EmailClient } from '../EmailClient'
import type { Email, EmailFolder } from '../types'

describe('EmailClient', () => {
  const mockFolders: EmailFolder[] = [
    { id: 'inbox', name: 'Inbox', icon: '📥', count: 5 },
    { id: 'sent', name: 'Sent', icon: '📤', count: 0 },
    { id: 'drafts', name: 'Drafts', icon: '📝', count: 2 },
  ]

  const mockEmails: Email[] = [
    {
      id: '1',
      from: 'john@example.com',
      fromName: 'John Doe',
      subject: 'Meeting Tomorrow',
      preview: 'Can we reschedule our meeting?',
      timestamp: new Date('2024-01-01T10:00:00'),
      isRead: false,
      isStarred: false,
    },
    {
      id: '2',
      from: 'jane@example.com',
      fromName: 'Jane Smith',
      subject: 'Project Update',
      preview: 'The project is going well...',
      timestamp: new Date('2024-01-01T09:00:00'),
      isRead: true,
      isStarred: true,
    },
  ]

  it('renders email folders', () => {
    render(<EmailClient folders={mockFolders} emails={[]} />)

    expect(screen.getByText('Inbox')).toBeInTheDocument()
    expect(screen.getByText('Sent')).toBeInTheDocument()
    expect(screen.getByText('Drafts')).toBeInTheDocument()
  })

  it('shows folder counts', () => {
    render(<EmailClient folders={mockFolders} emails={[]} />)

    expect(screen.getByText('5')).toBeInTheDocument()
    expect(screen.getByText('2')).toBeInTheDocument()
  })

  it('renders email list', () => {
    render(<EmailClient folders={mockFolders} emails={mockEmails} />)

    expect(screen.getByText('John Doe')).toBeInTheDocument()
    expect(screen.getByText('Jane Smith')).toBeInTheDocument()
    expect(screen.getByText('Meeting Tomorrow')).toBeInTheDocument()
    expect(screen.getByText('Project Update')).toBeInTheDocument()
  })

  it('calls onSelectEmail when email is clicked', async () => {
    const user = userEvent.setup()
    const onSelectEmail = vi.fn()

    render(<EmailClient folders={mockFolders} emails={mockEmails} onSelectEmail={onSelectEmail} />)

    const emailItem = screen.getByText('Meeting Tomorrow').closest('.email-item')
    if (emailItem) {
      await user.click(emailItem as Element)
      expect(onSelectEmail).toHaveBeenCalledWith(mockEmails[0])
    }
  })

  it('filters emails with search', async () => {
    const user = userEvent.setup()

    render(<EmailClient folders={mockFolders} emails={mockEmails} />)

    const searchInput = screen.getByRole('searchbox')
    await user.type(searchInput, 'Meeting')

    expect(screen.getByText('Meeting Tomorrow')).toBeInTheDocument()
    expect(screen.queryByText('Project Update')).not.toBeInTheDocument()
  })

  it('calls onStarEmail when star is clicked', async () => {
    const user = userEvent.setup()
    const onStarEmail = vi.fn()

    render(<EmailClient folders={mockFolders} emails={mockEmails} onStarEmail={onStarEmail} />)

    const starButton = screen.getAllByLabelText(/star/i)[0]
    await user.click(starButton)

    expect(onStarEmail).toHaveBeenCalledWith(mockEmails[0].id)
  })

  it('calls onArchiveEmail when archive is clicked', async () => {
    const user = userEvent.setup()
    const onArchiveEmail = vi.fn()

    render(<EmailClient folders={mockFolders} emails={mockEmails} onArchiveEmail={onArchiveEmail} />)

    // Select email first
    const emailItem = screen.getByText('Meeting Tomorrow').closest('.email-item')
    if (emailItem) {
      await user.click(emailItem as Element)
    }

    const archiveButton = screen.getByLabelText(/archive/i)
    await user.click(archiveButton)

    expect(onArchiveEmail).toHaveBeenCalledWith(mockEmails[0].id)
  })

  it('calls onDeleteEmail when delete is clicked', async () => {
    const user = userEvent.setup()
    const onDeleteEmail = vi.fn()

    render(<EmailClient folders={mockFolders} emails={mockEmails} onDeleteEmail={onDeleteEmail} />)

    // Select email first
    const emailItem = screen.getByText('Meeting Tomorrow').closest('.email-item')
    if (emailItem) {
      await user.click(emailItem as Element)
    }

    const deleteButton = screen.getByLabelText(/delete/i)
    await user.click(deleteButton)

    expect(onDeleteEmail).toHaveBeenCalledWith(mockEmails[0].id)
  })

  it('shows empty state when no emails', () => {
    render(<EmailClient folders={mockFolders} emails={[]} />)
    expect(screen.getByText(/no emails/i)).toBeInTheDocument()
  })

  it('has three-column layout', () => {
    const { container } = render(<EmailClient folders={mockFolders} emails={mockEmails} />)

    expect(container.querySelector('.folder-sidebar')).toBeInTheDocument()
    expect(container.querySelector('.email-list')).toBeInTheDocument()
    expect(container.querySelector('.email-preview')).toBeInTheDocument()
  })

  it('changes folder on folder click', async () => {
    const user = userEvent.setup()
    const onChangeFolder = vi.fn()

    render(<EmailClient folders={mockFolders} emails={mockEmails} onChangeFolder={onChangeFolder} />)

    await user.click(screen.getByText('Sent'))
    expect(onChangeFolder).toHaveBeenCalledWith('sent')
  })

  it('highlights unread emails', () => {
    const { container } = render(<EmailClient folders={mockFolders} emails={mockEmails} />)

    const emailItems = container.querySelectorAll('.email-item')
    expect(emailItems[0]).toHaveClass('unread')
    expect(emailItems[1]).not.toHaveClass('unread')
  })
})
