import { describe, it, expect } from '@jest/globals'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Badge } from '../Badge'

describe('Badge', () => {
  it('renders badge with text', () => {
    render(<Badge>New</Badge>)
    expect(screen.getByText('New')).toBeInTheDocument()
  })

  it('renders with different variants', () => {
    const variants = ['default', 'secondary', 'destructive', 'outline'] as const

    variants.forEach((variant) => {
      const { container } = render(<Badge variant={variant}>Badge</Badge>)
      expect(container.firstChild).toBeInTheDocument()
    })
  })

  it('renders with different sizes', () => {
    const sizes = ['sm', 'default', 'lg'] as const

    sizes.forEach((size) => {
      const { container } = render(<Badge size={size}>Badge</Badge>)
      expect(container.firstChild).toBeInTheDocument()
    })
  })

  it('renders as dismissable with close button', () => {
    render(<Badge dismissable>Dismissable</Badge>)
    expect(screen.getByRole('button')).toBeInTheDocument()
  })

  it('calls onDismiss when close button clicked', async () => {
    const user = userEvent.setup()
    const onDismiss = vi.fn()

    render(
      <Badge dismissable onDismiss={onDismiss}>
        Dismissable
      </Badge>
    )

    await user.click(screen.getByRole('button'))
    expect(onDismiss).toHaveBeenCalled()
  })

  it('applies custom className', () => {
    const { container } = render(<Badge className="custom-badge">Badge</Badge>)
    expect(container.firstChild).toHaveClass('custom-badge')
  })

  it('renders with icon', () => {
    render(
      <Badge>
        <span data-testid="icon">⭐</span>
        With Icon
      </Badge>
    )

    expect(screen.getByTestId('icon')).toBeInTheDocument()
    expect(screen.getByText('With Icon')).toBeInTheDocument()
  })

  it('renders count badge', () => {
    render(<Badge>99+</Badge>)
    expect(screen.getByText('99+')).toBeInTheDocument()
  })

  it('renders dot badge', () => {
    const { container } = render(<Badge dot />)
    expect(container.firstChild).toHaveClass('dot')
  })

  it('renders as pill shape', () => {
    const { container } = render(<Badge pill>Pill</Badge>)
    expect(container.firstChild).toHaveClass('rounded-full')
  })

  it('forwards ref correctly', () => {
    const ref = { current: null }
    render(<Badge ref={ref}>Badge</Badge>)
    expect(ref.current).toBeInstanceOf(HTMLElement)
  })
})
