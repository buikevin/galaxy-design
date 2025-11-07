import { describe, it, expect } from '@jest/globals'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Checkbox } from '../Checkbox'

describe('Checkbox', () => {
  it('renders correctly', () => {
    render(<Checkbox aria-label="Accept terms" />)
    expect(screen.getByRole('checkbox')).toBeInTheDocument()
  })

  it('starts unchecked by default', () => {
    render(<Checkbox aria-label="Accept" />)
    expect(screen.getByRole('checkbox')).not.toBeChecked()
  })

  it('toggles checked state on click', async () => {
    const user = userEvent.setup()
    render(<Checkbox aria-label="Accept" />)

    const checkbox = screen.getByRole('checkbox')
    await user.click(checkbox)

    expect(checkbox).toBeChecked()
  })

  it('shows checked state when checked prop is true', () => {
    render(<Checkbox checked aria-label="Accept" />)
    expect(screen.getByRole('checkbox')).toBeChecked()
  })

  it('handles controlled mode', async () => {
    const user = userEvent.setup()
    const { rerender } = render(<Checkbox checked={false} aria-label="Accept" />)

    expect(screen.getByRole('checkbox')).not.toBeChecked()

    rerender(<Checkbox checked={true} aria-label="Accept" />)
    expect(screen.getByRole('checkbox')).toBeChecked()
  })

  it('disables interaction when disabled', async () => {
    const user = userEvent.setup()
    render(<Checkbox disabled aria-label="Accept" />)

    const checkbox = screen.getByRole('checkbox')
    await user.click(checkbox)

    expect(checkbox).not.toBeChecked()
  })

  it('shows disabled state visually', () => {
    render(<Checkbox disabled aria-label="Accept" />)
    const checkbox = screen.getByRole('checkbox')
    expect(checkbox).toHaveAttribute('data-disabled')
  })

  it('calls onCheckedChange callback', async () => {
    const user = userEvent.setup()
    const onCheckedChange = vi.fn()

    render(<Checkbox onCheckedChange={onCheckedChange} aria-label="Accept" />)

    await user.click(screen.getByRole('checkbox'))
    expect(onCheckedChange).toHaveBeenCalledWith(true)
  })

  it('applies custom className', () => {
    const { container } = render(<Checkbox className="custom-checkbox" aria-label="Accept" />)
    expect(container.firstChild).toHaveClass('custom-checkbox')
  })

  it('is keyboard accessible', async () => {
    const user = userEvent.setup()
    render(<Checkbox aria-label="Accept" />)

    const checkbox = screen.getByRole('checkbox')
    checkbox.focus()
    await user.keyboard(' ')

    expect(checkbox).toBeChecked()
  })

  it('has correct aria attributes', () => {
    render(<Checkbox aria-label="Accept terms" />)
    expect(screen.getByRole('checkbox')).toHaveAccessibleName('Accept terms')
  })

  it('works with label association', () => {
    render(
      <div>
        <Checkbox id="terms" />
        <label htmlFor="terms">I agree to terms</label>
      </div>
    )

    expect(screen.getByRole('checkbox')).toHaveAccessibleName('I agree to terms')
  })

  it('shows check indicator when checked', () => {
    const { container } = render(<Checkbox checked aria-label="Accept" />)
    expect(container.querySelector('[data-state="checked"]')).toBeInTheDocument()
  })

  it('forwards ref correctly', () => {
    const ref = { current: null }
    render(<Checkbox ref={ref} aria-label="Accept" />)
    expect(ref.current).toBeInstanceOf(HTMLButtonElement)
  })
})
