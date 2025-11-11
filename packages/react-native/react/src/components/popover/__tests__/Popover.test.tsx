import { describe, it, expect, vi } from '@jest/globals'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import {
  Popover,
  PopoverTrigger,
  PopoverContent
} from '../Popover'

describe('Popover', () => {
  it('renders popover trigger', () => {
    render(
      <Popover>
        <PopoverTrigger>Open</PopoverTrigger>
        <PopoverContent>Content</PopoverContent>
      </Popover>
    )

    expect(screen.getByText('Open')).toBeInTheDocument()
  })

  it('opens popover when trigger is clicked', async () => {
    const user = userEvent.setup()

    render(
      <Popover>
        <PopoverTrigger>Open</PopoverTrigger>
        <PopoverContent>Popover content</PopoverContent>
      </Popover>
    )

    const trigger = screen.getByText('Open')
    await user.click(trigger)

    expect(screen.getByText('Popover content')).toBeInTheDocument()
  })

  it('closes popover when trigger is clicked again', async () => {
    const user = userEvent.setup()

    render(
      <Popover>
        <PopoverTrigger>Toggle</PopoverTrigger>
        <PopoverContent>Content</PopoverContent>
      </Popover>
    )

    const trigger = screen.getByText('Toggle')

    await user.click(trigger)
    expect(screen.getByText('Content')).toBeInTheDocument()

    await user.click(trigger)
    expect(screen.queryByText('Content')).not.toBeInTheDocument()
  })

  it('closes on Escape key', async () => {
    const user = userEvent.setup()

    render(
      <Popover>
        <PopoverTrigger>Open</PopoverTrigger>
        <PopoverContent>Content</PopoverContent>
      </Popover>
    )

    const trigger = screen.getByText('Open')
    await user.click(trigger)

    expect(screen.getByText('Content')).toBeInTheDocument()

    await user.keyboard('{Escape}')
    expect(screen.queryByText('Content')).not.toBeInTheDocument()
  })

  it('closes on outside click', async () => {
    const user = userEvent.setup()

    render(
      <>
        <Popover>
          <PopoverTrigger>Open</PopoverTrigger>
          <PopoverContent>Content</PopoverContent>
        </Popover>
        <div>Outside</div>
      </>
    )

    const trigger = screen.getByText('Open')
    await user.click(trigger)

    expect(screen.getByText('Content')).toBeInTheDocument()

    await user.click(screen.getByText('Outside'))
    expect(screen.queryByText('Content')).not.toBeInTheDocument()
  })

  it('can be controlled', () => {
    const { rerender } = render(
      <Popover open={false}>
        <PopoverTrigger>Trigger</PopoverTrigger>
        <PopoverContent>Controlled</PopoverContent>
      </Popover>
    )

    expect(screen.queryByText('Controlled')).not.toBeInTheDocument()

    rerender(
      <Popover open={true}>
        <PopoverTrigger>Trigger</PopoverTrigger>
        <PopoverContent>Controlled</PopoverContent>
      </Popover>
    )

    expect(screen.getByText('Controlled')).toBeInTheDocument()
  })

  it('calls onOpenChange', async () => {
    const user = userEvent.setup()
    const onOpenChange = vi.fn()

    render(
      <Popover onOpenChange={onOpenChange}>
        <PopoverTrigger>Open</PopoverTrigger>
        <PopoverContent>Content</PopoverContent>
      </Popover>
    )

    await user.click(screen.getByText('Open'))
    expect(onOpenChange).toHaveBeenCalledWith(true)
  })

  it('supports positioning', async () => {
    const user = userEvent.setup()

    render(
      <Popover>
        <PopoverTrigger>Open</PopoverTrigger>
        <PopoverContent side="top" align="start">
          Positioned
        </PopoverContent>
      </Popover>
    )

    await user.click(screen.getByText('Open'))
    expect(screen.getByText('Positioned')).toBeInTheDocument()
  })

  it('applies custom className', async () => {
    const user = userEvent.setup()

    render(
      <Popover>
        <PopoverTrigger>Open</PopoverTrigger>
        <PopoverContent className="custom-popover">
          Content
        </PopoverContent>
      </Popover>
    )

    await user.click(screen.getByText('Open'))
    const content = screen.getByText('Content').closest('[class*="custom-popover"]')
    expect(content).toBeInTheDocument()
  })
})
