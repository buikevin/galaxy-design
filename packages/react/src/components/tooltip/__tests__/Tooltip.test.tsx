import { describe, it, expect, vi, beforeEach, afterEach } from '@jest/globals'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent
} from '../Tooltip'

describe('Tooltip', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('renders tooltip trigger', () => {
    render(
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>Hover</TooltipTrigger>
          <TooltipContent>Tooltip</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    )

    expect(screen.getByText('Hover')).toBeInTheDocument()
  })

  it('shows tooltip on hover', async () => {
    const user = userEvent.setup({ delay: null })

    render(
      <TooltipProvider>
        <Tooltip delayDuration={0}>
          <TooltipTrigger>Hover</TooltipTrigger>
          <TooltipContent>Tooltip text</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    )

    const trigger = screen.getByText('Hover')
    await user.hover(trigger)
    await vi.runAllTimersAsync()

    expect(screen.getByText('Tooltip text')).toBeInTheDocument()
  })

  it('hides tooltip when mouse leaves', async () => {
    const user = userEvent.setup({ delay: null })

    render(
      <TooltipProvider>
        <Tooltip delayDuration={0}>
          <TooltipTrigger>Hover</TooltipTrigger>
          <TooltipContent>Tooltip</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    )

    const trigger = screen.getByText('Hover')
    await user.hover(trigger)
    await vi.runAllTimersAsync()

    expect(screen.getByText('Tooltip')).toBeInTheDocument()

    await user.unhover(trigger)
    await vi.runAllTimersAsync()

    expect(screen.queryByText('Tooltip')).not.toBeInTheDocument()
  })

  it('shows tooltip on focus', async () => {
    const user = userEvent.setup({ delay: null })

    render(
      <TooltipProvider>
        <Tooltip delayDuration={0}>
          <TooltipTrigger asChild>
            <button>Button</button>
          </TooltipTrigger>
          <TooltipContent>Tooltip</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    )

    const button = screen.getByRole('button')
    await user.tab()
    await vi.runAllTimersAsync()

    expect(screen.getByText('Tooltip')).toBeInTheDocument()
  })

  it('respects delay duration', async () => {
    const user = userEvent.setup({ delay: null })

    render(
      <TooltipProvider>
        <Tooltip delayDuration={300}>
          <TooltipTrigger>Hover</TooltipTrigger>
          <TooltipContent>Delayed</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    )

    const trigger = screen.getByText('Hover')
    await user.hover(trigger)
    await vi.advanceTimersByTimeAsync(100)

    expect(screen.queryByText('Delayed')).not.toBeInTheDocument()

    await vi.advanceTimersByTimeAsync(200)
    expect(screen.getByText('Delayed')).toBeInTheDocument()
  })

  it('can be controlled', () => {
    const { rerender } = render(
      <TooltipProvider>
        <Tooltip open={false}>
          <TooltipTrigger>Trigger</TooltipTrigger>
          <TooltipContent>Content</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    )

    expect(screen.queryByText('Content')).not.toBeInTheDocument()

    rerender(
      <TooltipProvider>
        <Tooltip open={true}>
          <TooltipTrigger>Trigger</TooltipTrigger>
          <TooltipContent>Content</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    )

    expect(screen.getByText('Content')).toBeInTheDocument()
  })

  it('supports positioning', async () => {
    const user = userEvent.setup({ delay: null })

    render(
      <TooltipProvider>
        <Tooltip delayDuration={0}>
          <TooltipTrigger>Hover</TooltipTrigger>
          <TooltipContent side="top" align="start">
            Top tooltip
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    )

    const trigger = screen.getByText('Hover')
    await user.hover(trigger)
    await vi.runAllTimersAsync()

    expect(screen.getByText('Top tooltip')).toBeInTheDocument()
  })

  it('hides on Escape key', async () => {
    const user = userEvent.setup({ delay: null })

    render(
      <TooltipProvider>
        <Tooltip delayDuration={0}>
          <TooltipTrigger>Hover</TooltipTrigger>
          <TooltipContent>Tooltip</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    )

    const trigger = screen.getByText('Hover')
    await user.hover(trigger)
    await vi.runAllTimersAsync()

    expect(screen.getByText('Tooltip')).toBeInTheDocument()

    await user.keyboard('{Escape}')
    expect(screen.queryByText('Tooltip')).not.toBeInTheDocument()
  })

  it('has correct role', async () => {
    const user = userEvent.setup({ delay: null })

    render(
      <TooltipProvider>
        <Tooltip delayDuration={0}>
          <TooltipTrigger>Hover</TooltipTrigger>
          <TooltipContent>Tooltip</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    )

    const trigger = screen.getByText('Hover')
    await user.hover(trigger)
    await vi.runAllTimersAsync()

    expect(screen.getByRole('tooltip')).toBeInTheDocument()
  })
})
