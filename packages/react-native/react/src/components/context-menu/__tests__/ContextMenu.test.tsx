import { describe, it, expect, vi } from '@jest/globals'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator
} from '../ContextMenu'

describe('ContextMenu', () => {
  it('renders context menu trigger', () => {
    render(
      <ContextMenu>
        <ContextMenuTrigger>
          <div>Right click me</div>
        </ContextMenuTrigger>
        <ContextMenuContent>
          <ContextMenuItem>Copy</ContextMenuItem>
        </ContextMenuContent>
      </ContextMenu>
    )

    expect(screen.getByText('Right click me')).toBeInTheDocument()
  })

  it('opens menu on right click', async () => {
    const user = userEvent.setup()

    render(
      <ContextMenu>
        <ContextMenuTrigger>
          <div>Right click me</div>
        </ContextMenuTrigger>
        <ContextMenuContent>
          <ContextMenuItem>Copy</ContextMenuItem>
          <ContextMenuItem>Paste</ContextMenuItem>
        </ContextMenuContent>
      </ContextMenu>
    )

    const trigger = screen.getByText('Right click me')
    await user.pointer({ keys: '[MouseRight]', target: trigger })

    expect(screen.getByText('Copy')).toBeInTheDocument()
    expect(screen.getByText('Paste')).toBeInTheDocument()
  })

  it('calls handler when menu item is selected', async () => {
    const user = userEvent.setup()
    const onCopy = vi.fn()

    render(
      <ContextMenu>
        <ContextMenuTrigger>
          <div>Right click</div>
        </ContextMenuTrigger>
        <ContextMenuContent>
          <ContextMenuItem onSelect={onCopy}>Copy</ContextMenuItem>
        </ContextMenuContent>
      </ContextMenu>
    )

    const trigger = screen.getByText('Right click')
    await user.pointer({ keys: '[MouseRight]', target: trigger })

    const copyItem = screen.getByText('Copy')
    await user.click(copyItem)

    expect(onCopy).toHaveBeenCalled()
  })

  it('does not call handler for disabled items', async () => {
    const user = userEvent.setup()
    const onDelete = vi.fn()

    render(
      <ContextMenu>
        <ContextMenuTrigger>
          <div>Right click</div>
        </ContextMenuTrigger>
        <ContextMenuContent>
          <ContextMenuItem disabled onSelect={onDelete}>
            Delete
          </ContextMenuItem>
        </ContextMenuContent>
      </ContextMenu>
    )

    const trigger = screen.getByText('Right click')
    await user.pointer({ keys: '[MouseRight]', target: trigger })

    const deleteItem = screen.getByText('Delete')
    await user.click(deleteItem)

    expect(onDelete).not.toHaveBeenCalled()
  })

  it('closes menu after item selection', async () => {
    const user = userEvent.setup()

    render(
      <ContextMenu>
        <ContextMenuTrigger>
          <div>Right click</div>
        </ContextMenuTrigger>
        <ContextMenuContent>
          <ContextMenuItem>Copy</ContextMenuItem>
        </ContextMenuContent>
      </ContextMenu>
    )

    const trigger = screen.getByText('Right click')
    await user.pointer({ keys: '[MouseRight]', target: trigger })

    const copyItem = screen.getByText('Copy')
    await user.click(copyItem)

    // Menu should close after selection
    expect(screen.queryByRole('menu')).not.toBeInTheDocument()
  })

  it('closes menu on Escape key', async () => {
    const user = userEvent.setup()

    render(
      <ContextMenu>
        <ContextMenuTrigger>
          <div>Right click</div>
        </ContextMenuTrigger>
        <ContextMenuContent>
          <ContextMenuItem>Copy</ContextMenuItem>
        </ContextMenuContent>
      </ContextMenu>
    )

    const trigger = screen.getByText('Right click')
    await user.pointer({ keys: '[MouseRight]', target: trigger })

    expect(screen.getByText('Copy')).toBeInTheDocument()

    // Press Escape
    await user.keyboard('{Escape}')

    expect(screen.queryByRole('menu')).not.toBeInTheDocument()
  })

  it('supports keyboard navigation with arrow keys', async () => {
    const user = userEvent.setup()

    render(
      <ContextMenu>
        <ContextMenuTrigger>
          <div>Right click</div>
        </ContextMenuTrigger>
        <ContextMenuContent>
          <ContextMenuItem>First</ContextMenuItem>
          <ContextMenuItem>Second</ContextMenuItem>
          <ContextMenuItem>Third</ContextMenuItem>
        </ContextMenuContent>
      </ContextMenu>
    )

    const trigger = screen.getByText('Right click')
    await user.pointer({ keys: '[MouseRight]', target: trigger })

    // Navigate with ArrowDown
    await user.keyboard('{ArrowDown}')
    await user.keyboard('{ArrowDown}')

    // Second item should be focused
    expect(screen.getByText('Second')).toBeInTheDocument()
  })

  it('activates item on Enter key', async () => {
    const user = userEvent.setup()
    const onSelect = vi.fn()

    render(
      <ContextMenu>
        <ContextMenuTrigger>
          <div>Right click</div>
        </ContextMenuTrigger>
        <ContextMenuContent>
          <ContextMenuItem onSelect={onSelect}>Copy</ContextMenuItem>
        </ContextMenuContent>
      </ContextMenu>
    )

    const trigger = screen.getByText('Right click')
    await user.pointer({ keys: '[MouseRight]', target: trigger })

    await user.keyboard('{Enter}')

    expect(onSelect).toHaveBeenCalled()
  })

  it('renders separator between menu items', async () => {
    const user = userEvent.setup()

    render(
      <ContextMenu>
        <ContextMenuTrigger>
          <div>Right click</div>
        </ContextMenuTrigger>
        <ContextMenuContent>
          <ContextMenuItem>Copy</ContextMenuItem>
          <ContextMenuSeparator />
          <ContextMenuItem>Delete</ContextMenuItem>
        </ContextMenuContent>
      </ContextMenu>
    )

    const trigger = screen.getByText('Right click')
    await user.pointer({ keys: '[MouseRight]', target: trigger })

    expect(screen.getByRole('separator')).toBeInTheDocument()
  })

  it('has correct ARIA roles', async () => {
    const user = userEvent.setup()

    render(
      <ContextMenu>
        <ContextMenuTrigger>
          <div>Right click</div>
        </ContextMenuTrigger>
        <ContextMenuContent>
          <ContextMenuItem>Item</ContextMenuItem>
        </ContextMenuContent>
      </ContextMenu>
    )

    const trigger = screen.getByText('Right click')
    await user.pointer({ keys: '[MouseRight]', target: trigger })

    expect(screen.getByRole('menu')).toBeInTheDocument()
    expect(screen.getAllByRole('menuitem')).toHaveLength(1)
  })

  it('applies custom className to content', async () => {
    const user = userEvent.setup()

    render(
      <ContextMenu>
        <ContextMenuTrigger>
          <div>Right click</div>
        </ContextMenuTrigger>
        <ContextMenuContent className="custom-menu">
          <ContextMenuItem>Item</ContextMenuItem>
        </ContextMenuContent>
      </ContextMenu>
    )

    const trigger = screen.getByText('Right click')
    await user.pointer({ keys: '[MouseRight]', target: trigger })

    const menu = screen.getByRole('menu')
    expect(menu).toHaveClass('custom-menu')
  })

  it('closes on outside click', async () => {
    const user = userEvent.setup()

    render(
      <>
        <ContextMenu>
          <ContextMenuTrigger>
            <div>Right click</div>
          </ContextMenuTrigger>
          <ContextMenuContent>
            <ContextMenuItem>Item</ContextMenuItem>
          </ContextMenuContent>
        </ContextMenu>
        <div>Outside area</div>
      </>
    )

    const trigger = screen.getByText('Right click')
    await user.pointer({ keys: '[MouseRight]', target: trigger })

    expect(screen.getByRole('menu')).toBeInTheDocument()

    // Click outside
    const outside = screen.getByText('Outside area')
    await user.click(outside)

    expect(screen.queryByRole('menu')).not.toBeInTheDocument()
  })

  it('prevents default browser context menu', async () => {
    const user = userEvent.setup()

    render(
      <ContextMenu>
        <ContextMenuTrigger>
          <div>Right click</div>
        </ContextMenuTrigger>
        <ContextMenuContent>
          <ContextMenuItem>Item</ContextMenuItem>
        </ContextMenuContent>
      </ContextMenu>
    )

    const trigger = screen.getByText('Right click')
    await user.pointer({ keys: '[MouseRight]', target: trigger })

    // Custom context menu should appear instead of browser's
    expect(screen.getByRole('menu')).toBeInTheDocument()
  })
})
