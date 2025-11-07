import { describe, it, expect, vi } from '@jest/globals'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Toggle } from '../Toggle'

describe('Toggle', () => {
  it('renders toggle button correctly', () => {
    render(<Toggle>Toggle</Toggle>)

    expect(screen.getByRole('button')).toBeInTheDocument()
    expect(screen.getByText('Toggle')).toBeInTheDocument()
  })

  it('toggles between pressed and not pressed', async () => {
    const user = userEvent.setup()
    const onPressedChange = vi.fn()

    render(<Toggle onPressedChange={onPressedChange}>Toggle</Toggle>)

    const toggle = screen.getByRole('button')
    await user.click(toggle)

    expect(onPressedChange).toHaveBeenCalledWith(true)
  })

  it('starts in pressed state when pressed is true', () => {
    render(<Toggle pressed={true}>Pressed</Toggle>)

    const toggle = screen.getByRole('button')
    expect(toggle).toHaveAttribute('data-state', 'on')
    expect(toggle).toHaveAttribute('aria-pressed', 'true')
  })

  it('starts in unpressed state when pressed is false', () => {
    render(<Toggle pressed={false}>Not Pressed</Toggle>)

    const toggle = screen.getByRole('button')
    expect(toggle).toHaveAttribute('data-state', 'off')
    expect(toggle).toHaveAttribute('aria-pressed', 'false')
  })

  it('does not toggle when disabled', async () => {
    const user = userEvent.setup()
    const onPressedChange = vi.fn()

    render(<Toggle disabled onPressedChange={onPressedChange}>Disabled</Toggle>)

    const toggle = screen.getByRole('button')
    await user.click(toggle)

    expect(onPressedChange).not.toHaveBeenCalled()
  })

  it('has disabled attribute when disabled', () => {
    render(<Toggle disabled>Disabled</Toggle>)

    const toggle = screen.getByRole('button')
    expect(toggle).toBeDisabled()
  })

  it('renders with different variants', () => {
    const variants = ['default', 'outline'] as const

    variants.forEach((variant) => {
      const { container } = render(<Toggle variant={variant}>Toggle</Toggle>)
      expect(container.firstChild).toBeInTheDocument()
    })
  })

  it('renders with different sizes', () => {
    const sizes = ['default', 'sm', 'lg'] as const

    sizes.forEach((size) => {
      const { container } = render(<Toggle size={size}>Toggle</Toggle>)
      expect(container.firstChild).toBeInTheDocument()
    })
  })

  it('applies custom className', () => {
    render(<Toggle className="custom-toggle">Toggle</Toggle>)

    const toggle = screen.getByRole('button')
    expect(toggle).toHaveClass('custom-toggle')
  })

  it('forwards ref correctly', () => {
    const ref = { current: null }
    render(<Toggle ref={ref}>Toggle</Toggle>)

    expect(ref.current).toBeInstanceOf(HTMLButtonElement)
  })

  it('supports defaultPressed for uncontrolled mode', () => {
    render(<Toggle defaultPressed={true}>Toggle</Toggle>)

    const toggle = screen.getByRole('button')
    expect(toggle).toHaveAttribute('data-state', 'on')
  })

  it('supports keyboard interaction (Space key)', async () => {
    const user = userEvent.setup()
    const onPressedChange = vi.fn()

    render(<Toggle onPressedChange={onPressedChange}>Toggle</Toggle>)

    const toggle = screen.getByRole('button')
    toggle.focus()
    await user.keyboard(' ')

    expect(onPressedChange).toHaveBeenCalled()
  })

  it('supports keyboard interaction (Enter key)', async () => {
    const user = userEvent.setup()
    const onPressedChange = vi.fn()

    render(<Toggle onPressedChange={onPressedChange}>Toggle</Toggle>)

    const toggle = screen.getByRole('button')
    toggle.focus()
    await user.keyboard('{Enter}')

    expect(onPressedChange).toHaveBeenCalled()
  })

  it('has correct ARIA attributes', () => {
    render(<Toggle pressed={false}>Toggle</Toggle>)

    const toggle = screen.getByRole('button')
    expect(toggle).toHaveAttribute('aria-pressed', 'false')
  })

  it('updates ARIA pressed when state changes', () => {
    const { rerender } = render(<Toggle pressed={false}>Toggle</Toggle>)

    let toggle = screen.getByRole('button')
    expect(toggle).toHaveAttribute('aria-pressed', 'false')

    rerender(<Toggle pressed={true}>Toggle</Toggle>)

    toggle = screen.getByRole('button')
    expect(toggle).toHaveAttribute('aria-pressed', 'true')
  })

  it('renders with icon', () => {
    render(
      <Toggle>
        <span data-testid="icon">🔔</span>
        Toggle
      </Toggle>
    )

    expect(screen.getByTestId('icon')).toBeInTheDocument()
    expect(screen.getByText('Toggle')).toBeInTheDocument()
  })

  it('works as icon-only toggle', () => {
    render(
      <Toggle aria-label="Toggle notifications">
        <span data-testid="icon">🔔</span>
      </Toggle>
    )

    const toggle = screen.getByLabelText('Toggle notifications')
    expect(toggle).toBeInTheDocument()
    expect(screen.getByTestId('icon')).toBeInTheDocument()
  })

  it('calls onPressedChange with correct value', async () => {
    const user = userEvent.setup()
    const onPressedChange = vi.fn()

    render(<Toggle defaultPressed={false} onPressedChange={onPressedChange}>Toggle</Toggle>)

    const toggle = screen.getByRole('button')

    // First click - should be true
    await user.click(toggle)
    expect(onPressedChange).toHaveBeenCalledWith(true)

    // Second click - should be false
    await user.click(toggle)
    expect(onPressedChange).toHaveBeenCalledWith(false)
  })

  it('supports controlled mode', async () => {
    const user = userEvent.setup()
    const onPressedChange = vi.fn()

    const { rerender } = render(
      <Toggle pressed={false} onPressedChange={onPressedChange}>Toggle</Toggle>
    )

    let toggle = screen.getByRole('button')
    expect(toggle).toHaveAttribute('data-state', 'off')

    // Click to toggle
    await user.click(toggle)
    expect(onPressedChange).toHaveBeenCalledWith(true)

    // Update controlled value
    rerender(
      <Toggle pressed={true} onPressedChange={onPressedChange}>Toggle</Toggle>
    )

    toggle = screen.getByRole('button')
    expect(toggle).toHaveAttribute('data-state', 'on')
  })

  it('supports type attribute', () => {
    render(<Toggle type="button">Toggle</Toggle>)

    const toggle = screen.getByRole('button')
    expect(toggle).toHaveAttribute('type', 'button')
  })
})
