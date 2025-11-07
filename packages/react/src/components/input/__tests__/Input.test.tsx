import { describe, it, expect } from '@jest/globals'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Input } from '../Input'

describe('Input', () => {
  it('renders text input correctly', () => {
    render(<Input type="text" />)
    expect(screen.getByRole('textbox')).toBeInTheDocument()
  })

  it('handles value changes', async () => {
    const user = userEvent.setup()
    const { container } = render(<Input />)

    const input = container.querySelector('input') as HTMLInputElement
    await user.type(input, 'test value')

    expect(input.value).toBe('test value')
  })

  it('shows placeholder text', () => {
    render(<Input placeholder="Enter your name" />)
    expect(screen.getByPlaceholderText('Enter your name')).toBeInTheDocument()
  })

  it('applies disabled state', () => {
    const { container } = render(<Input disabled />)
    const input = container.querySelector('input')
    expect(input).toBeDisabled()
  })

  it('handles different input types', () => {
    const types = ['text', 'email', 'password', 'number', 'tel', 'url']

    types.forEach((type) => {
      const { container } = render(<Input type={type as any} />)
      const input = container.querySelector('input')
      expect(input).toHaveAttribute('type', type)
    })
  })

  it('shows error state with aria-invalid', () => {
    const { container } = render(<Input aria-invalid="true" />)
    const input = container.querySelector('input')
    expect(input).toHaveAttribute('aria-invalid', 'true')
  })

  it('applies custom className', () => {
    const { container } = render(<Input className="custom-input" />)
    expect(container.firstChild).toHaveClass('custom-input')
  })

  it('handles readonly state', () => {
    const { container } = render(<Input readOnly />)
    const input = container.querySelector('input')
    expect(input).toHaveAttribute('readonly')
  })

  it('sets maxLength attribute', () => {
    const { container } = render(<Input maxLength={50} />)
    const input = container.querySelector('input')
    expect(input).toHaveAttribute('maxlength', '50')
  })

  it('sets autoComplete attribute', () => {
    const { container } = render(<Input autoComplete="email" />)
    const input = container.querySelector('input')
    expect(input).toHaveAttribute('autocomplete', 'email')
  })

  it('handles focus event', async () => {
    const user = userEvent.setup()
    const { container } = render(<Input />)

    const input = container.querySelector('input') as HTMLInputElement
    await user.click(input)

    expect(input).toHaveFocus()
  })

  it('forwards ref correctly', () => {
    const ref = { current: null }
    render(<Input ref={ref} />)
    expect(ref.current).toBeInstanceOf(HTMLInputElement)
  })

  it('accepts defaultValue', () => {
    const { container } = render(<Input defaultValue="initial" />)
    const input = container.querySelector('input') as HTMLInputElement
    expect(input.value).toBe('initial')
  })
})
