import { describe, it, expect } from '@jest/globals'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '../index'

describe('Card', () => {
  it('renders card with all sections', () => {
    render(
      <Card>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent>Card Content</CardContent>
        <CardFooter>Card Footer</CardFooter>
      </Card>
    )

    expect(screen.getByText('Card Title')).toBeInTheDocument()
    expect(screen.getByText('Card Description')).toBeInTheDocument()
    expect(screen.getByText('Card Content')).toBeInTheDocument()
    expect(screen.getByText('Card Footer')).toBeInTheDocument()
  })

  it('renders card with title only', () => {
    render(
      <Card>
        <CardHeader>
          <CardTitle>Simple Card</CardTitle>
        </CardHeader>
        <CardContent>Content here</CardContent>
      </Card>
    )

    expect(screen.getByText('Simple Card')).toBeInTheDocument()
    expect(screen.getByText('Content here')).toBeInTheDocument()
  })

  it('renders card with content only', () => {
    render(
      <Card>
        <CardContent>Just content</CardContent>
      </Card>
    )

    expect(screen.getByText('Just content')).toBeInTheDocument()
  })

  it('renders clickable card', async () => {
    const user = userEvent.setup()
    const onClick = vi.fn()

    render(
      <Card onClick={onClick} className="clickable">
        <CardContent>Clickable Card</CardContent>
      </Card>
    )

    const card = screen.getByText('Clickable Card').closest('div')
    if (card) await user.click(card)

    expect(onClick).toHaveBeenCalled()
  })

  it('applies custom className', () => {
    const { container } = render(
      <Card className="custom-card">
        <CardContent>Content</CardContent>
      </Card>
    )

    expect(container.firstChild).toHaveClass('custom-card')
  })

  it('renders with different variants', () => {
    const variants = ['default', 'outlined', 'elevated'] as const

    variants.forEach((variant) => {
      const { container } = render(
        <Card variant={variant}>
          <CardContent>Content</CardContent>
        </Card>
      )

      expect(container.firstChild).toBeInTheDocument()
    })
  })

  it('renders with image', () => {
    render(
      <Card>
        <img src="/image.jpg" alt="Card image" />
        <CardHeader>
          <CardTitle>Title</CardTitle>
        </CardHeader>
        <CardContent>Content</CardContent>
      </Card>
    )

    expect(screen.getByRole('img')).toHaveAttribute('src', '/image.jpg')
  })

  it('renders footer with actions', () => {
    render(
      <Card>
        <CardContent>Content</CardContent>
        <CardFooter>
          <button>Cancel</button>
          <button>Save</button>
        </CardFooter>
      </Card>
    )

    expect(screen.getByText('Cancel')).toBeInTheDocument()
    expect(screen.getByText('Save')).toBeInTheDocument()
  })

  it('renders with hover effect', () => {
    const { container } = render(
      <Card hover>
        <CardContent>Hover me</CardContent>
      </Card>
    )

    expect(container.firstChild).toHaveClass('hover-effect')
  })

  it('renders as disabled', () => {
    const { container } = render(
      <Card disabled>
        <CardContent>Disabled</CardContent>
      </Card>
    )

    expect(container.firstChild).toHaveClass('opacity-50')
  })

  it('supports custom padding', () => {
    const { container } = render(
      <Card padding="none">
        <CardContent>No padding</CardContent>
      </Card>
    )

    expect(container.firstChild).toHaveClass('p-0')
  })

  it('forwards ref correctly', () => {
    const ref = { current: null }
    render(
      <Card ref={ref}>
        <CardContent>Content</CardContent>
      </Card>
    )

    expect(ref.current).toBeInstanceOf(HTMLElement)
  })
})
