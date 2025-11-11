import { describe, it, expect, vi } from '@jest/globals'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Switch } from '../Switch'

describe('Switch', () => {
  it('renders switch correctly', () => {
    render(<Switch />)
    expect(screen.getByRole('switch')).toBeInTheDocument()
  })

  it('toggles between checked and unchecked', async () => {
    const user = userEvent.setup()
    const onCheckedChange = vi.fn()

    render(<Switch onCheckedChange={onCheckedChange} />)

    const switchElement = screen.getByRole('switch')
    await user.click(switchElement)

    expect(onCheckedChange).toHaveBeenCalledWith(true)
  })

  it('starts with checked state when checked is true', () => {
    render(<Switch checked={true} />)

    const switchElement = screen.getByRole('switch')
    expect(switchElement).toHaveAttribute('data-state', 'checked')
    expect(switchElement).toHaveAttribute('aria-checked', 'true')
  })

  it('starts with unchecked state when checked is false', () => {
    render(<Switch checked={false} />)

    const switchElement = screen.getByRole('switch')
    expect(switchElement).toHaveAttribute('data-state', 'unchecked')
    expect(switchElement).toHaveAttribute('aria-checked', 'false')
  })

  it('does not toggle when disabled', async () => {
    const user = userEvent.setup()
    const onCheckedChange = vi.fn()

    render(<Switch disabled onCheckedChange={onCheckedChange} />)

    const switchElement = screen.getByRole('switch')
    await user.click(switchElement)

    expect(onCheckedChange).not.toHaveBeenCalled()
  })

  it('has disabled attribute when disabled', () => {
    render(<Switch disabled />)

    const switchElement = screen.getByRole('switch')
    expect(switchElement).toHaveAttribute('data-disabled')
  })

  it('supports keyboard interaction (Space key)', async () => {
    const user = userEvent.setup()
    const onCheckedChange = vi.fn()

    render(<Switch onCheckedChange={onCheckedChange} />)

    const switchElement = screen.getByRole('switch')
    switchElement.focus()
    await user.keyboard(' ')

    expect(onCheckedChange).toHaveBeenCalled()
  })

  it('supports keyboard interaction (Enter key)', async () => {
    const user = userEvent.setup()
    const onCheckedChange = vi.fn()

    render(<Switch onCheckedChange={onCheckedChange} />)

    const switchElement = screen.getByRole('switch')
    switchElement.focus()
    await user.keyboard('{Enter}')

    expect(onCheckedChange).toHaveBeenCalled()
  })

  it('has correct ARIA attributes', () => {
    render(<Switch checked={false} />)

    const switchElement = screen.getByRole('switch')
    expect(switchElement).toHaveAttribute('role', 'switch')
    expect(switchElement).toHaveAttribute('aria-checked', 'false')
  })

  it('updates ARIA checked when state changes', () => {
    const { rerender } = render(<Switch checked={false} />)

    let switchElement = screen.getByRole('switch')
    expect(switchElement).toHaveAttribute('aria-checked', 'false')

    rerender(<Switch checked={true} />)

    switchElement = screen.getByRole('switch')
    expect(switchElement).toHaveAttribute('aria-checked', 'true')
  })

  it('applies custom className', () => {
    render(<Switch className="custom-switch" />)

    const switchElement = screen.getByRole('switch')
    expect(switchElement).toHaveClass('custom-switch')
  })

  it('forwards ref correctly', () => {
    const ref = { current: null }
    render(<Switch ref={ref} />)

    expect(ref.current).toBeInstanceOf(HTMLButtonElement)
  })

  it('supports defaultChecked for uncontrolled mode', () => {
    render(<Switch defaultChecked={true} />)

    const switchElement = screen.getByRole('switch')
    expect(switchElement).toHaveAttribute('data-state', 'checked')
  })

  it('calls onCheckedChange with correct value when toggling', async () => {
    const user = userEvent.setup()
    const onCheckedChange = vi.fn()

    render(<Switch defaultChecked={false} onCheckedChange={onCheckedChange} />)

    const switchElement = screen.getByRole('switch')

    // First click - should be true
    await user.click(switchElement)
    expect(onCheckedChange).toHaveBeenCalledWith(true)

    // Second click - should be false
    await user.click(switchElement)
    expect(onCheckedChange).toHaveBeenCalledWith(false)
  })
})
