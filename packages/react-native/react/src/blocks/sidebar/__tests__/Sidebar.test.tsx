import { describe, it, expect, vi } from '@jest/globals'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Sidebar } from '../Sidebar'
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
    render(<Sidebar items={mockMenuItems} />)

    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('Settings')).toBeInTheDocument()
    expect(screen.getByText('Profile')).toBeInTheDocument()
  })

  it('displays icons for menu items', () => {
    render(<Sidebar items={mockMenuItems} />)

    expect(screen.getByText('🏠')).toBeInTheDocument()
    expect(screen.getByText('⚙️')).toBeInTheDocument()
    expect(screen.getByText('👤')).toBeInTheDocument()
  })

  it('shows badge when provided', () => {
    render(<Sidebar items={mockMenuItems} />)

    expect(screen.getByText('3')).toBeInTheDocument()
  })

  it('calls onItemClick when item is clicked', async () => {
    const user = userEvent.setup()
    const onItemClick = vi.fn()

    render(<Sidebar items={mockMenuItems} onItemClick={onItemClick} />)

    const homeItem = screen.getByText('Home')
    await user.click(homeItem)

    expect(onItemClick).toHaveBeenCalledWith(mockMenuItems[0])
  })

  it('can be collapsed', () => {
    const { container, rerender } = render(
      <Sidebar items={mockMenuItems} collapsed={false} />
    )

    expect(screen.getByText('Home')).toBeInTheDocument()

    rerender(<Sidebar items={mockMenuItems} collapsed={true} />)

    const sidebarElement = container.querySelector('.sidebar')
    expect(sidebarElement).toHaveClass('collapsed')
  })

  it('calls onCollapseChange when collapse toggle is clicked', async () => {
    const user = userEvent.setup()
    const onCollapseChange = vi.fn()

    render(
      <Sidebar
        items={mockMenuItems}
        collapsed={false}
        onCollapseChange={onCollapseChange}
      />
    )

    const collapseButton = screen.getByLabelText(/collapse/i)
    await user.click(collapseButton)

    expect(onCollapseChange).toHaveBeenCalledWith(true)
  })

  it('displays nested menu items', () => {
    render(<Sidebar items={mockMenuItems} />)

    expect(screen.getByText('Edit Profile')).toBeInTheDocument()
    expect(screen.getByText('Security')).toBeInTheDocument()
  })

  it('highlights active item', () => {
    const { container } = render(
      <Sidebar items={mockMenuItems} activeItemId="home" />
    )

    const homeItem = container.querySelector('[data-item-id="home"]')
    expect(homeItem).toHaveClass('active')
  })

  it('expands parent when child is clicked', async () => {
    const user = userEvent.setup()
    render(<Sidebar items={mockMenuItems} />)

    const profileItem = screen.getByText('Profile')
    await user.click(profileItem)

    expect(screen.getByText('Edit Profile')).toBeVisible()
    expect(screen.getByText('Security')).toBeVisible()
  })

  it('applies custom className', () => {
    const { container } = render(
      <Sidebar items={mockMenuItems} className="custom-sidebar" />
    )

    const sidebarElement = container.querySelector('.custom-sidebar')
    expect(sidebarElement).toBeInTheDocument()
  })
})
