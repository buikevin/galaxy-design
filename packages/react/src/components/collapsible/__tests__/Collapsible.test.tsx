import { describe, it, expect, vi } from '@jest/globals'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from '../Collapsible'

describe('Collapsible', () => {
  it('renders collapsible correctly', () => {
    render(
      <Collapsible>
        <CollapsibleTrigger>
          <button>Toggle</button>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <div>Content</div>
        </CollapsibleContent>
      </Collapsible>
    )

    expect(screen.getByText('Toggle')).toBeInTheDocument()
  })

  it('starts collapsed by default', () => {
    render(
      <Collapsible>
        <CollapsibleTrigger>
          <button>Toggle</button>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <div>Hidden content</div>
        </CollapsibleContent>
      </Collapsible>
    )

    // Content should be hidden initially
    const content = screen.queryByText('Hidden content')
    expect(content).not.toBeVisible()
  })

  it('expands when trigger is clicked', async () => {
    const user = userEvent.setup()

    render(
      <Collapsible>
        <CollapsibleTrigger>
          <button>Toggle</button>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <div>Expandable content</div>
        </CollapsibleContent>
      </Collapsible>
    )

    const trigger = screen.getByText('Toggle')
    await user.click(trigger)

    expect(screen.getByText('Expandable content')).toBeVisible()
  })

  it('collapses when trigger is clicked again', async () => {
    const user = userEvent.setup()

    render(
      <Collapsible>
        <CollapsibleTrigger>
          <button>Toggle</button>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <div>Content</div>
        </CollapsibleContent>
      </Collapsible>
    )

    const trigger = screen.getByText('Toggle')

    // First click - expand
    await user.click(trigger)
    expect(screen.getByText('Content')).toBeVisible()

    // Second click - collapse
    await user.click(trigger)
    expect(screen.queryByText('Content')).not.toBeVisible()
  })

  it('supports default open state', () => {
    render(
      <Collapsible defaultOpen={true}>
        <CollapsibleTrigger>
          <button>Toggle</button>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <div>Default open content</div>
        </CollapsibleContent>
      </Collapsible>
    )

    expect(screen.getByText('Default open content')).toBeVisible()
  })

  it('can be controlled with open prop', () => {
    const { rerender } = render(
      <Collapsible open={false}>
        <CollapsibleTrigger>
          <button>Toggle</button>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <div>Controlled content</div>
        </CollapsibleContent>
      </Collapsible>
    )

    expect(screen.queryByText('Controlled content')).not.toBeVisible()

    rerender(
      <Collapsible open={true}>
        <CollapsibleTrigger>
          <button>Toggle</button>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <div>Controlled content</div>
        </CollapsibleContent>
      </Collapsible>
    )

    expect(screen.getByText('Controlled content')).toBeVisible()
  })

  it('calls onOpenChange when toggled', async () => {
    const user = userEvent.setup()
    const onOpenChange = vi.fn()

    render(
      <Collapsible onOpenChange={onOpenChange}>
        <CollapsibleTrigger>
          <button>Toggle</button>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <div>Content</div>
        </CollapsibleContent>
      </Collapsible>
    )

    const trigger = screen.getByText('Toggle')
    await user.click(trigger)

    expect(onOpenChange).toHaveBeenCalledWith(true)
  })

  it('supports disabled state', async () => {
    const user = userEvent.setup()

    render(
      <Collapsible disabled>
        <CollapsibleTrigger>
          <button>Toggle</button>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <div>Content</div>
        </CollapsibleContent>
      </Collapsible>
    )

    const trigger = screen.getByText('Toggle')
    await user.click(trigger)

    // Should not open when disabled
    expect(screen.queryByText('Content')).not.toBeVisible()
  })

  it('has correct data-state attribute', async () => {
    const user = userEvent.setup()

    const { container } = render(
      <Collapsible>
        <CollapsibleTrigger>
          <button>Toggle</button>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <div>Content</div>
        </CollapsibleContent>
      </Collapsible>
    )

    const collapsible = container.querySelector('[data-state]')
    expect(collapsible).toHaveAttribute('data-state', 'closed')

    const trigger = screen.getByText('Toggle')
    await user.click(trigger)

    expect(collapsible).toHaveAttribute('data-state', 'open')
  })

  it('applies custom className', () => {
    const { container } = render(
      <Collapsible className="custom-collapsible">
        <CollapsibleTrigger>
          <button>Toggle</button>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <div>Content</div>
        </CollapsibleContent>
      </Collapsible>
    )

    expect(container.firstChild).toHaveClass('custom-collapsible')
  })

  it('supports keyboard interaction', async () => {
    const user = userEvent.setup()

    render(
      <Collapsible>
        <CollapsibleTrigger>
          <button>Toggle</button>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <div>Content</div>
        </CollapsibleContent>
      </Collapsible>
    )

    const trigger = screen.getByText('Toggle')
    trigger.focus()

    // Space key
    await user.keyboard(' ')
    expect(screen.getByText('Content')).toBeVisible()

    // Enter key
    await user.keyboard('{Enter}')
    expect(screen.queryByText('Content')).not.toBeVisible()
  })

  it('renders multiple collapsible sections independently', async () => {
    const user = userEvent.setup()

    render(
      <>
        <Collapsible>
          <CollapsibleTrigger>
            <button>First</button>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <div>First Content</div>
          </CollapsibleContent>
        </Collapsible>
        <Collapsible>
          <CollapsibleTrigger>
            <button>Second</button>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <div>Second Content</div>
          </CollapsibleContent>
        </Collapsible>
      </>
    )

    const firstTrigger = screen.getByText('First')
    const secondTrigger = screen.getByText('Second')

    // Open first
    await user.click(firstTrigger)
    expect(screen.getByText('First Content')).toBeVisible()
    expect(screen.queryByText('Second Content')).not.toBeVisible()

    // Open second
    await user.click(secondTrigger)
    expect(screen.getByText('First Content')).toBeVisible()
    expect(screen.getByText('Second Content')).toBeVisible()
  })

  it('forwards ref correctly', () => {
    const ref = { current: null }

    render(
      <Collapsible ref={ref}>
        <CollapsibleTrigger>
          <button>Toggle</button>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <div>Content</div>
        </CollapsibleContent>
      </Collapsible>
    )

    expect(ref.current).toBeInstanceOf(HTMLDivElement)
  })
})
