import { describe, it, expect, vi } from '@jest/globals'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Button } from '../Button'

describe('Button', () => {
  it('renders correctly with text', () => {
    render(<Button>Click me</Button>)
    expect(screen.getByText('Click me')).toBeInTheDocument()
  })

  it('renders with different variants', () => {
    const variants = ['default', 'secondary', 'destructive', 'outline', 'ghost', 'link'] as const

    variants.forEach((variant) => {
      const { container } = render(<Button variant={variant}>Button</Button>)
      expect(container.firstChild).toBeInTheDocument()
    })
  })

  it('renders with different sizes', () => {
    const sizes = ['sm', 'default', 'lg', 'icon'] as const

    sizes.forEach((size) => {
      const { container } = render(<Button size={size}>Button</Button>)
      expect(container.firstChild).toBeInTheDocument()
    })
  })

  it('handles click events', async () => {
    const user = userEvent.setup()
    const onClick = vi.fn()

    render(<Button onClick={onClick}>Click me</Button>)

    await user.click(screen.getByRole('button'))
    expect(onClick).toHaveBeenCalledTimes(1)
  })

  it('does not trigger click when disabled', async () => {
    const user = userEvent.setup()
    const onClick = vi.fn()

    render(<Button disabled onClick={onClick}>Disabled</Button>)

    await user.click(screen.getByRole('button'))
    expect(onClick).not.toHaveBeenCalled()
  })

  it('shows disabled state', () => {
    render(<Button disabled>Disabled</Button>)
    expect(screen.getByRole('button')).toBeDisabled()
  })

  it('renders as child component with asChild', () => {
    render(
      <Button asChild>
        <a href="/test">Link Button</a>
      </Button>
    )

    const link = screen.getByRole('link')
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', '/test')
  })

  it('applies custom className', () => {
    render(<Button className="custom-class">Button</Button>)
    expect(screen.getByRole('button')).toHaveClass('custom-class')
  })

  it('has correct type attribute', () => {
    render(<Button type="submit">Submit</Button>)
    expect(screen.getByRole('button')).toHaveAttribute('type', 'submit')
  })

  it('is accessible with aria-label', () => {
    render(<Button aria-label="Close dialog">X</Button>)
    expect(screen.getByRole('button')).toHaveAccessibleName('Close dialog')
  })

  it('forwards refs correctly', () => {
    const ref = vi.fn()
    render(<Button ref={ref}>Button</Button>)
    expect(ref).toHaveBeenCalled()
  })

  it('renders with loading state', () => {
    render(<Button disabled>Loading...</Button>)
    expect(screen.getByText('Loading...')).toBeInTheDocument()
  })

  it('supports keyboard interaction', async () => {
    const user = userEvent.setup()
    const onClick = vi.fn()

    render(<Button onClick={onClick}>Button</Button>)

    const button = screen.getByRole('button')
    button.focus()
    await user.keyboard('{Enter}')

    expect(onClick).toHaveBeenCalled()
  })
})
