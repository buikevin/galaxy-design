import { describe, it, expect, vi } from '@jest/globals'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ChatUI } from '../ChatUI'
import type { Message } from '../types'

describe('ChatUI', () => {
  const mockMessages: Message[] = [
    {
      id: '1',
      content: 'Hello!',
      senderId: 'user-1',
      senderName: 'John Doe',
      timestamp: new Date('2024-01-01T10:00:00'),
    },
    {
      id: '2',
      content: 'Hi there!',
      senderId: 'user-2',
      senderName: 'Jane Smith',
      timestamp: new Date('2024-01-01T10:01:00'),
    },
  ]

  it('renders messages correctly', () => {
    render(<ChatUI messages={mockMessages} currentUserId="user-1" />)

    expect(screen.getByText('Hello!')).toBeInTheDocument()
    expect(screen.getByText('Hi there!')).toBeInTheDocument()
  })

  it('displays sender names', () => {
    render(<ChatUI messages={mockMessages} currentUserId="user-1" />)

    expect(screen.getByText('John Doe')).toBeInTheDocument()
    expect(screen.getByText('Jane Smith')).toBeInTheDocument()
  })

  it('calls onSendMessage when message is sent', async () => {
    const user = userEvent.setup()
    const onSendMessage = vi.fn()

    render(
      <ChatUI
        messages={mockMessages}
        currentUserId="user-1"
        onSendMessage={onSendMessage}
      />
    )

    const textarea = screen.getByPlaceholderText(/type your message/i)
    await user.type(textarea, 'New message')

    const sendButton = screen.getByRole('button', { name: /send/i })
    await user.click(sendButton)

    expect(onSendMessage).toHaveBeenCalledWith('New message')
  })

  it('clears input after sending message', async () => {
    const user = userEvent.setup()
    const onSendMessage = vi.fn()

    render(
      <ChatUI
        messages={mockMessages}
        currentUserId="user-1"
        onSendMessage={onSendMessage}
      />
    )

    const textarea = screen.getByPlaceholderText(/type your message/i) as HTMLTextAreaElement
    await user.type(textarea, 'New message')

    const sendButton = screen.getByRole('button', { name: /send/i })
    await user.click(sendButton)

    expect(textarea.value).toBe('')
  })

  it('does not send empty messages', async () => {
    const user = userEvent.setup()
    const onSendMessage = vi.fn()

    render(
      <ChatUI
        messages={mockMessages}
        currentUserId="user-1"
        onSendMessage={onSendMessage}
      />
    )

    const sendButton = screen.getByRole('button', { name: /send/i })
    await user.click(sendButton)

    expect(onSendMessage).not.toHaveBeenCalled()
  })

  it('shows custom placeholder', () => {
    render(
      <ChatUI
        messages={mockMessages}
        currentUserId="user-1"
        placeholder="Custom placeholder..."
      />
    )

    expect(screen.getByPlaceholderText('Custom placeholder...')).toBeInTheDocument()
  })

  it('hides timestamps when showTimestamp is false', () => {
    const { container } = render(
      <ChatUI
        messages={mockMessages}
        currentUserId="user-1"
        showTimestamp={false}
      />
    )

    const timestamps = container.querySelectorAll('.timestamp')
    expect(timestamps.length).toBe(0)
  })

  it('applies custom height', () => {
    const { container } = render(
      <ChatUI
        messages={mockMessages}
        currentUserId="user-1"
        height="600px"
      />
    )

    const messageList = container.querySelector('.message-list')
    expect(messageList).toHaveStyle({ height: '600px' })
  })

  it('supports keyboard shortcut (Enter) to send message', async () => {
    const user = userEvent.setup()
    const onSendMessage = vi.fn()

    render(
      <ChatUI
        messages={mockMessages}
        currentUserId="user-1"
        onSendMessage={onSendMessage}
      />
    )

    const textarea = screen.getByPlaceholderText(/type your message/i)
    await user.type(textarea, 'New message{Enter}')

    expect(onSendMessage).toHaveBeenCalledWith('New message')
  })
})
