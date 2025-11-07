import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import { ChatUI } from '../ChatUI.vue'
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
    const wrapper = mount(ChatUI, {
      props: {
        messages: mockMessages,
        currentUserId: 'user-1',
      },
    })

    expect(wrapper.text()).toContain('Hello!')
    expect(wrapper.text()).toContain('Hi there!')
  })

  it('displays sender names', () => {
    const wrapper = mount(ChatUI, {
      props: {
        messages: mockMessages,
        currentUserId: 'user-1',
      },
    })

    expect(wrapper.text()).toContain('John Doe')
    expect(wrapper.text()).toContain('Jane Smith')
  })

  it('emits sendMessage event when message is sent', async () => {
    const wrapper = mount(ChatUI, {
      props: {
        messages: mockMessages,
        currentUserId: 'user-1',
      },
    })

    const textarea = wrapper.find('textarea')
    await textarea.setValue('New message')

    const sendButton = wrapper.find('button[type="submit"]')
    await sendButton.trigger('click')

    expect(wrapper.emitted('sendMessage')).toBeTruthy()
    expect(wrapper.emitted('sendMessage')?.[0]).toEqual(['New message'])
  })

  it('clears input after sending message', async () => {
    const wrapper = mount(ChatUI, {
      props: {
        messages: mockMessages,
        currentUserId: 'user-1',
      },
    })

    const textarea = wrapper.find('textarea')
    await textarea.setValue('New message')

    const sendButton = wrapper.find('button[type="submit"]')
    await sendButton.trigger('click')

    expect((textarea.element as HTMLTextAreaElement).value).toBe('')
  })

  it('calls onSendMessage callback if provided', async () => {
    const onSendMessage = vi.fn()
    const wrapper = mount(ChatUI, {
      props: {
        messages: mockMessages,
        currentUserId: 'user-1',
        onSendMessage,
      },
    })

    const textarea = wrapper.find('textarea')
    await textarea.setValue('Test message')

    const sendButton = wrapper.find('button[type="submit"]')
    await sendButton.trigger('click')

    expect(onSendMessage).toHaveBeenCalledWith('Test message')
  })

  it('does not send empty messages', async () => {
    const onSendMessage = vi.fn()
    const wrapper = mount(ChatUI, {
      props: {
        messages: mockMessages,
        currentUserId: 'user-1',
        onSendMessage,
      },
    })

    const sendButton = wrapper.find('button[type="submit"]')
    await sendButton.trigger('click')

    expect(onSendMessage).not.toHaveBeenCalled()
    expect(wrapper.emitted('sendMessage')).toBeFalsy()
  })

  it('shows custom placeholder', () => {
    const wrapper = mount(ChatUI, {
      props: {
        messages: mockMessages,
        currentUserId: 'user-1',
        placeholder: 'Custom placeholder...',
      },
    })

    const textarea = wrapper.find('textarea')
    expect(textarea.attributes('placeholder')).toBe('Custom placeholder...')
  })

  it('hides timestamps when showTimestamp is false', () => {
    const wrapper = mount(ChatUI, {
      props: {
        messages: mockMessages,
        currentUserId: 'user-1',
        showTimestamp: false,
      },
    })

    // Timestamps should not be visible
    expect(wrapper.text()).not.toContain('10:00')
    expect(wrapper.text()).not.toContain('10:01')
  })

  it('applies custom height', () => {
    const wrapper = mount(ChatUI, {
      props: {
        messages: mockMessages,
        currentUserId: 'user-1',
        height: '600px',
      },
    })

    const messageList = wrapper.find('[class*="message-list"]')
    expect(messageList.attributes('style')).toContain('height: 600px')
  })
})
