import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import { Sidebar } from '../Sidebar.vue'
import type { MenuItem } from '../types'

describe('Sidebar', () => {
  const mockMenuItems: MenuItem[] = [
    {
      id: 'home',
      label: 'Home',
      icon: '🏠',
      path: '/',
    },
    {
      id: 'settings',
      label: 'Settings',
      icon: '⚙️',
      path: '/settings',
      badge: '3',
    },
    {
      id: 'profile',
      label: 'Profile',
      icon: '👤',
      children: [
        { id: 'edit', label: 'Edit Profile', path: '/profile/edit' },
        { id: 'security', label: 'Security', path: '/profile/security' },
      ],
    },
  ]

  it('renders menu items correctly', () => {
    const wrapper = mount(Sidebar, {
      props: {
        items: mockMenuItems,
      },
    })

    expect(wrapper.text()).toContain('Home')
    expect(wrapper.text()).toContain('Settings')
    expect(wrapper.text()).toContain('Profile')
  })

  it('displays icons for menu items', () => {
    const wrapper = mount(Sidebar, {
      props: {
        items: mockMenuItems,
      },
    })

    expect(wrapper.text()).toContain('🏠')
    expect(wrapper.text()).toContain('⚙️')
    expect(wrapper.text()).toContain('👤')
  })

  it('shows badge when provided', () => {
    const wrapper = mount(Sidebar, {
      props: {
        items: mockMenuItems,
      },
    })

    expect(wrapper.text()).toContain('3')
  })

  it('emits itemClick event when item is clicked', async () => {
    const wrapper = mount(Sidebar, {
      props: {
        items: mockMenuItems,
      },
    })

    const homeItem = wrapper.findAll('.menu-item')[0]
    await homeItem.trigger('click')

    expect(wrapper.emitted('itemClick')).toBeTruthy()
    expect(wrapper.emitted('itemClick')?.[0]).toEqual([mockMenuItems[0]])
  })

  it('can be collapsed', async () => {
    const wrapper = mount(Sidebar, {
      props: {
        items: mockMenuItems,
        collapsed: false,
      },
    })

    expect(wrapper.text()).toContain('Home')

    await wrapper.setProps({ collapsed: true })

    // When collapsed, labels should be hidden
    const sidebarElement = wrapper.find('.sidebar')
    expect(sidebarElement.classes()).toContain('collapsed')
  })

  it('emits collapseChange event when collapse toggle is clicked', async () => {
    const wrapper = mount(Sidebar, {
      props: {
        items: mockMenuItems,
        collapsed: false,
      },
    })

    const collapseButton = wrapper.find('[aria-label*="collapse"]')
    await collapseButton.trigger('click')

    expect(wrapper.emitted('collapseChange')).toBeTruthy()
    expect(wrapper.emitted('collapseChange')?.[0]).toEqual([true])
  })

  it('displays nested menu items', () => {
    const wrapper = mount(Sidebar, {
      props: {
        items: mockMenuItems,
      },
    })

    expect(wrapper.text()).toContain('Edit Profile')
    expect(wrapper.text()).toContain('Security')
  })

  it('highlights active item', () => {
    const wrapper = mount(Sidebar, {
      props: {
        items: mockMenuItems,
        activeItemId: 'home',
      },
    })

    const menuItems = wrapper.findAll('.menu-item')
    expect(menuItems[0].classes()).toContain('active')
  })

  it('calls onItemClick callback if provided', async () => {
    const onItemClick = vi.fn()
    const wrapper = mount(Sidebar, {
      props: {
        items: mockMenuItems,
        onItemClick,
      },
    })

    const homeItem = wrapper.findAll('.menu-item')[0]
    await homeItem.trigger('click')

    expect(onItemClick).toHaveBeenCalledWith(mockMenuItems[0])
  })
})
