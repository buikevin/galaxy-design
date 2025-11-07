import { describe, it, expect } from '@jest/globals'
import { render, screen } from '@testing-library/react'
import { Avatar, AvatarImage, AvatarFallback } from '../index'

describe('Avatar', () => {
  it('renders avatar image', () => {
    render(
      <Avatar>
        <AvatarImage src="/avatar.jpg" alt="User" />
        <AvatarFallback>UN</AvatarFallback>
      </Avatar>
    )

    expect(screen.getByRole('img')).toBeInTheDocument()
  })

  it('shows fallback when image fails to load', async () => {
    render(
      <Avatar>
        <AvatarImage src="/invalid.jpg" alt="User" />
        <AvatarFallback>UN</AvatarFallback>
      </Avatar>
    )

    const img = screen.getByRole('img')
    // Simulate image load error
    Object.defineProperty(img, 'complete', { value: false })

    expect(screen.getByText('UN')).toBeInTheDocument()
  })

  it('displays fallback initials', () => {
    render(
      <Avatar>
        <AvatarFallback>JD</AvatarFallback>
      </Avatar>
    )

    expect(screen.getByText('JD')).toBeInTheDocument()
  })

  it('renders with different sizes', () => {
    const sizes = ['sm', 'default', 'lg'] as const

    sizes.forEach((size) => {
      const { container } = render(
        <Avatar size={size}>
          <AvatarFallback>UN</AvatarFallback>
        </Avatar>
      )

      expect(container.firstChild).toBeInTheDocument()
    })
  })

  it('renders circular shape by default', () => {
    const { container } = render(
      <Avatar>
        <AvatarFallback>UN</AvatarFallback>
      </Avatar>
    )

    expect(container.firstChild).toHaveClass('rounded-full')
  })

  it('renders square shape when specified', () => {
    const { container } = render(
      <Avatar shape="square">
        <AvatarFallback>UN</AvatarFallback>
      </Avatar>
    )

    expect(container.firstChild).toHaveClass('rounded-md')
  })

  it('has alt text for accessibility', () => {
    render(
      <Avatar>
        <AvatarImage src="/avatar.jpg" alt="John Doe" />
        <AvatarFallback>JD</AvatarFallback>
      </Avatar>
    )

    expect(screen.getByAltText('John Doe')).toBeInTheDocument()
  })

  it('applies custom className', () => {
    const { container } = render(
      <Avatar className="custom-avatar">
        <AvatarFallback>UN</AvatarFallback>
      </Avatar>
    )

    expect(container.firstChild).toHaveClass('custom-avatar')
  })

  it('loads image from src', () => {
    render(
      <Avatar>
        <AvatarImage src="https://example.com/avatar.jpg" />
        <AvatarFallback>UN</AvatarFallback>
      </Avatar>
    )

    const img = screen.getByRole('img')
    expect(img).toHaveAttribute('src', 'https://example.com/avatar.jpg')
  })

  it('handles missing image gracefully', () => {
    render(
      <Avatar>
        <AvatarFallback>UN</AvatarFallback>
      </Avatar>
    )

    expect(screen.getByText('UN')).toBeInTheDocument()
  })

  it('forwards ref correctly', () => {
    const ref = { current: null }
    render(
      <Avatar ref={ref}>
        <AvatarFallback>UN</AvatarFallback>
      </Avatar>
    )

    expect(ref.current).toBeInstanceOf(HTMLElement)
  })
})
