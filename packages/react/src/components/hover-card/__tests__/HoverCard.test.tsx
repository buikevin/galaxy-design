import { describe, it, expect, vi, beforeEach, afterEach } from '@jest/globals'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent
} from '../HoverCard'

describe('HoverCard', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('renders hover trigger', () => {
    render(
      <HoverCard>
        <HoverCardTrigger>Hover me</HoverCardTrigger>
        <HoverCardContent>
          <p>Content</p>
        </HoverCardContent>
      </HoverCard>
    )

    expect(screen.getByText('Hover me')).toBeInTheDocument()
  })

  it('shows content on hover', async () => {
    const user = userEvent.setup({ delay: null })

    render(
      <HoverCard openDelay={0}>
        <HoverCardTrigger>Hover me</HoverCardTrigger>
        <HoverCardContent>
          <p>Hover content</p>
        </HoverCardContent>
      </HoverCard>
    )

    const trigger = screen.getByText('Hover me')
    await user.hover(trigger)
    await vi.runAllTimersAsync()

    expect(screen.getByText('Hover content')).toBeInTheDocument()
  })

  it('hides content when mouse leaves', async () => {
    const user = userEvent.setup({ delay: null })

    render(
      <HoverCard openDelay={0} closeDelay={0}>
        <HoverCardTrigger>Hover me</HoverCardTrigger>
        <HoverCardContent>
          <p>Content</p>
        </HoverCardContent>
      </HoverCard>
    )

    const trigger = screen.getByText('Hover me')
    await user.hover(trigger)
    await vi.runAllTimersAsync()

    expect(screen.getByText('Content')).toBeInTheDocument()

    await user.unhover(trigger)
    await vi.runAllTimersAsync()

    expect(screen.queryByText('Content')).not.toBeInTheDocument()
  })

  it('respects open delay', async () => {
    const user = userEvent.setup({ delay: null })

    render(
      <HoverCard openDelay={300}>
        <HoverCardTrigger>Hover</HoverCardTrigger>
        <HoverCardContent>
          <p>Delayed content</p>
        </HoverCardContent>
      </HoverCard>
    )

    const trigger = screen.getByText('Hover')
    await user.hover(trigger)

    // Should not appear immediately
    await vi.advanceTimersByTimeAsync(100)
    expect(screen.queryByText('Delayed content')).not.toBeInTheDocument()

    // After full delay
    await vi.advanceTimersByTimeAsync(200)
    expect(screen.getByText('Delayed content')).toBeInTheDocument()
  })

  it('can be controlled with open prop', () => {
    const { rerender } = render(
      <HoverCard open={false}>
        <HoverCardTrigger>Trigger</HoverCardTrigger>
        <HoverCardContent>
          <p>Controlled</p>
        </HoverCardContent>
      </HoverCard>
    )

    expect(screen.queryByText('Controlled')).not.toBeInTheDocument()

    rerender(
      <HoverCard open={true}>
        <HoverCardTrigger>Trigger</HoverCardTrigger>
        <HoverCardContent>
          <p>Controlled</p>
        </HoverCardContent>
      </HoverCard>
    )

    expect(screen.getByText('Controlled')).toBeInTheDocument()
  })

  it('calls onOpenChange when toggled', async () => {
    const user = userEvent.setup({ delay: null })
    const onOpenChange = vi.fn()

    render(
      <HoverCard openDelay={0} onOpenChange={onOpenChange}>
        <HoverCardTrigger>Hover</HoverCardTrigger>
        <HoverCardContent>
          <p>Content</p>
        </HoverCardContent>
      </HoverCard>
    )

    const trigger = screen.getByText('Hover')
    await user.hover(trigger)
    await vi.runAllTimersAsync()

    expect(onOpenChange).toHaveBeenCalledWith(true)
  })

  it('supports different positioning', async () => {
    const user = userEvent.setup({ delay: null })

    render(
      <HoverCard openDelay={0}>
        <HoverCardTrigger>Hover</HoverCardTrigger>
        <HoverCardContent side="top" align="start">
          <p>Positioned content</p>
        </HoverCardContent>
      </HoverCard>
    )

    const trigger = screen.getByText('Hover')
    await user.hover(trigger)
    await vi.runAllTimersAsync()

    expect(screen.getByText('Positioned content')).toBeInTheDocument()
  })

  it('applies custom className', async () => {
    const user = userEvent.setup({ delay: null })

    render(
      <HoverCard openDelay={0}>
        <HoverCardTrigger>Hover</HoverCardTrigger>
        <HoverCardContent className="custom-hover-card">
          <p>Content</p>
        </HoverCardContent>
      </HoverCard>
    )

    const trigger = screen.getByText('Hover')
    await user.hover(trigger)
    await vi.runAllTimersAsync()

    const content = screen.getByText('Content').parentElement
    expect(content).toHaveClass('custom-hover-card')
  })
})
