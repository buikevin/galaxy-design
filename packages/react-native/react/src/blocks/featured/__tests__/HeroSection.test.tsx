import { describe, it, expect, vi } from '@jest/globals'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { HeroSection } from '../HeroSection'

describe('HeroSection', () => {
  it('renders title and description', () => {
    render(
      <HeroSection title="Welcome to Galaxy UI" description="Beautiful components for modern web" />
    )

    expect(screen.getByText('Welcome to Galaxy UI')).toBeInTheDocument()
    expect(screen.getByText('Beautiful components for modern web')).toBeInTheDocument()
  })

  it('renders primary CTA button', () => {
    render(
      <HeroSection title="Title" primaryCta={{ label: 'Get Started', href: '/docs' }} />
    )

    const link = screen.getByRole('link', { name: 'Get Started' })
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', '/docs')
  })

  it('renders secondary CTA button', () => {
    render(
      <HeroSection title="Title" secondaryCta={{ label: 'Learn More', href: '/about' }} />
    )

    const link = screen.getByRole('link', { name: 'Learn More' })
    expect(link).toHaveAttribute('href', '/about')
  })

  it('calls onClick handler for primary CTA', async () => {
    const user = userEvent.setup()
    const onClick = vi.fn()

    render(<HeroSection title="Title" primaryCta={{ label: 'Click Me', onClick }} />)

    await user.click(screen.getByRole('button', { name: 'Click Me' }))
    expect(onClick).toHaveBeenCalled()
  })

  it('renders with default variant', () => {
    const { container } = render(<HeroSection title="Title" variant="default" />)
    expect(container.querySelector('.hero-default')).toBeInTheDocument()
  })

  it('renders with centered variant', () => {
    const { container } = render(<HeroSection title="Title" variant="centered" />)
    expect(container.querySelector('.hero-centered')).toBeInTheDocument()
  })

  it('renders with split variant', () => {
    const { container } = render(<HeroSection title="Title" variant="split" image="/hero.jpg" />)
    expect(container.querySelector('.hero-split')).toBeInTheDocument()
  })

  it('renders with cards variant', () => {
    const { container } = render(<HeroSection title="Title" variant="cards" />)
    expect(container.querySelector('.hero-cards')).toBeInTheDocument()
  })

  it('renders image when provided', () => {
    render(<HeroSection title="Title" image="/hero-image.jpg" />)

    const img = screen.getByRole('img')
    expect(img).toBeInTheDocument()
    expect(img).toHaveAttribute('src', '/hero-image.jpg')
  })

  it('renders image with alt text', () => {
    render(<HeroSection title="Title" image="/hero.jpg" imageAlt="Hero image description" />)

    const img = screen.getByRole('img')
    expect(img).toHaveAttribute('alt', 'Hero image description')
  })

  it('applies custom className', () => {
    const { container } = render(<HeroSection title="Title" className="custom-hero" />)
    expect(container.firstChild).toHaveClass('custom-hero')
  })

  it('renders without CTAs', () => {
    render(<HeroSection title="Title Only" />)
    expect(screen.queryByRole('button')).not.toBeInTheDocument()
    expect(screen.queryByRole('link')).not.toBeInTheDocument()
  })

  it('supports custom content children', () => {
    render(
      <HeroSection title="Title">
        <div data-testid="custom-content">Custom Content</div>
      </HeroSection>
    )

    expect(screen.getByTestId('custom-content')).toBeInTheDocument()
    expect(screen.getByText('Custom Content')).toBeInTheDocument()
  })

  it('renders badge or tag', () => {
    render(<HeroSection title="Title" badge="New Release" />)
    expect(screen.getByText('New Release')).toBeInTheDocument()
  })

  it('renders both CTAs together', () => {
    render(
      <HeroSection
        title="Title"
        primaryCta={{ label: 'Get Started', href: '/start' }}
        secondaryCta={{ label: 'Learn More', href: '/learn' }}
      />
    )

    expect(screen.getByRole('link', { name: 'Get Started' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Learn More' })).toBeInTheDocument()
  })

  it('handles external links', () => {
    render(
      <HeroSection
        title="Title"
        primaryCta={{ label: 'External Link', href: 'https://example.com' }}
      />
    )

    const link = screen.getByRole('link')
    expect(link).toHaveAttribute('href', 'https://example.com')
  })
})
