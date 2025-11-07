import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import { EmailClient } from '../EmailClient.vue'
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
    const wrapper = mount(EmailClient, {
      props: {
        folders: mockFolders,
        emails: [],
      },
    })

    expect(wrapper.text()).toContain('Inbox')
    expect(wrapper.text()).toContain('Sent')
    expect(wrapper.text()).toContain('Drafts')
  })

  it('shows folder counts', () => {
    const wrapper = mount(EmailClient, {
      props: {
        folders: mockFolders,
        emails: [],
      },
    })

    expect(wrapper.text()).toContain('5')
    expect(wrapper.text()).toContain('2')
  })

  it('renders email list', () => {
    const wrapper = mount(EmailClient, {
      props: {
        folders: mockFolders,
        emails: mockEmails,
      },
    })

    expect(wrapper.text()).toContain('John Doe')
    expect(wrapper.text()).toContain('Jane Smith')
    expect(wrapper.text()).toContain('Meeting Tomorrow')
    expect(wrapper.text()).toContain('Project Update')
  })

  it('shows unread indicator for unread emails', () => {
    const wrapper = mount(EmailClient, {
      props: {
        folders: mockFolders,
        emails: mockEmails,
      },
    })

    const emailItems = wrapper.findAll('.email-item')
    expect(emailItems[0].classes()).toContain('unread')
    expect(emailItems[1].classes()).not.toContain('unread')
  })

  it('shows star indicator for starred emails', () => {
    const wrapper = mount(EmailClient, {
      props: {
        folders: mockFolders,
        emails: mockEmails,
      },
    })

    expect(wrapper.html()).toContain('starred')
  })

  it('selects email on click', async () => {
    const wrapper = mount(EmailClient, {
      props: {
        folders: mockFolders,
        emails: mockEmails,
      },
    })

    const emailItems = wrapper.findAll('.email-item')
    await emailItems[0].trigger('click')

    expect(wrapper.text()).toContain('Can we reschedule our meeting?')
  })

  it('emits selectEmail event when email is clicked', async () => {
    const wrapper = mount(EmailClient, {
      props: {
        folders: mockFolders,
        emails: mockEmails,
      },
    })

    const emailItems = wrapper.findAll('.email-item')
    await emailItems[0].trigger('click')

    expect(wrapper.emitted('selectEmail')).toBeTruthy()
    expect(wrapper.emitted('selectEmail')?.[0]).toEqual([mockEmails[0]])
  })

  it('filters emails with search', async () => {
    const wrapper = mount(EmailClient, {
      props: {
        folders: mockFolders,
        emails: mockEmails,
      },
    })

    const searchInput = wrapper.find('input[type="search"]')
    await searchInput.setValue('Meeting')

    expect(wrapper.text()).toContain('Meeting Tomorrow')
    expect(wrapper.text()).not.toContain('Project Update')
  })

  it('emits starEmail event when star is clicked', async () => {
    const onStarEmail = vi.fn()
    const wrapper = mount(EmailClient, {
      props: {
        folders: mockFolders,
        emails: mockEmails,
        onStarEmail,
      },
    })

    const starButton = wrapper.find('.star-button')
    await starButton.trigger('click')

    expect(onStarEmail).toHaveBeenCalledWith(mockEmails[0].id)
  })

  it('emits archiveEmail event when archive is clicked', async () => {
    const onArchiveEmail = vi.fn()
    const wrapper = mount(EmailClient, {
      props: {
        folders: mockFolders,
        emails: mockEmails,
        onArchiveEmail,
      },
    })

    // Select email first to show actions
    const emailItems = wrapper.findAll('.email-item')
    await emailItems[0].trigger('click')

    const archiveButton = wrapper.find('[aria-label*="archive"]')
    await archiveButton.trigger('click')

    expect(onArchiveEmail).toHaveBeenCalledWith(mockEmails[0].id)
  })

  it('emits deleteEmail event when delete is clicked', async () => {
    const onDeleteEmail = vi.fn()
    const wrapper = mount(EmailClient, {
      props: {
        folders: mockFolders,
        emails: mockEmails,
        onDeleteEmail,
      },
    })

    // Select email first
    const emailItems = wrapper.findAll('.email-item')
    await emailItems[0].trigger('click')

    const deleteButton = wrapper.find('[aria-label*="delete"]')
    await deleteButton.trigger('click')

    expect(onDeleteEmail).toHaveBeenCalledWith(mockEmails[0].id)
  })

  it('formats timestamps correctly', () => {
    const wrapper = mount(EmailClient, {
      props: {
        folders: mockFolders,
        emails: mockEmails,
      },
    })

    // Should show relative time like "5m ago", "Yesterday", etc.
    expect(wrapper.html()).toContain('10:00')
  })

  it('changes folder on folder click', async () => {
    const wrapper = mount(EmailClient, {
      props: {
        folders: mockFolders,
        emails: mockEmails,
      },
    })

    const folders = wrapper.findAll('.folder-item')
    await folders[1].trigger('click')

    expect(wrapper.emitted('changeFolder')).toBeTruthy()
    expect(wrapper.emitted('changeFolder')?.[0]).toEqual(['sent'])
  })

  it('shows empty state when no emails', () => {
    const wrapper = mount(EmailClient, {
      props: {
        folders: mockFolders,
        emails: [],
      },
    })

    expect(wrapper.text()).toContain('No emails')
  })

  it('has three-column layout', () => {
    const wrapper = mount(EmailClient, {
      props: {
        folders: mockFolders,
        emails: mockEmails,
      },
    })

    expect(wrapper.find('.folder-sidebar').exists()).toBe(true)
    expect(wrapper.find('.email-list').exists()).toBe(true)
    expect(wrapper.find('.email-preview').exists()).toBe(true)
  })
})
