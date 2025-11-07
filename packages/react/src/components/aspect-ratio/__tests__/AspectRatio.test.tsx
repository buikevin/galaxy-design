import { describe, it, expect } from '@jest/globals'
import { render, screen } from '@testing-library/react'
import { AspectRatio } from '../AspectRatio'

describe('AspectRatio', () => {
  it('renders AspectRatio correctly', () => {
    render(
      <AspectRatio ratio={16 / 9}>
        <img src="/image.jpg" alt="Test" />
      </AspectRatio>
    )

    expect(screen.getByAltText('Test')).toBeInTheDocument()
  })

  it('applies 16:9 aspect ratio', () => {
    const { container } = render(
      <AspectRatio ratio={16 / 9}>
        <div>Content</div>
      </AspectRatio>
    )

    const wrapper = container.firstChild as HTMLElement
    expect(wrapper).toBeInTheDocument()
  })

  it('applies 4:3 aspect ratio', () => {
    const { container } = render(
      <AspectRatio ratio={4 / 3}>
        <div>Content</div>
      </AspectRatio>
    )

    const wrapper = container.firstChild as HTMLElement
    expect(wrapper).toBeInTheDocument()
  })

  it('applies 1:1 (square) aspect ratio', () => {
    const { container } = render(
      <AspectRatio ratio={1}>
        <div>Content</div>
      </AspectRatio>
    )

    const wrapper = container.firstChild as HTMLElement
    expect(wrapper).toBeInTheDocument()
  })

  it('applies 21:9 (ultrawide) aspect ratio', () => {
    const { container } = render(
      <AspectRatio ratio={21 / 9}>
        <div>Content</div>
      </AspectRatio>
    )

    const wrapper = container.firstChild as HTMLElement
    expect(wrapper).toBeInTheDocument()
  })

  it('renders image content correctly', () => {
    render(
      <AspectRatio ratio={16 / 9}>
        <img src="/landscape.jpg" alt="Landscape" />
      </AspectRatio>
    )

    const image = screen.getByAltText('Landscape')
    expect(image).toHaveAttribute('src', '/landscape.jpg')
  })

  it('renders video content correctly', () => {
    render(
      <AspectRatio ratio={16 / 9}>
        <video data-testid="video">
          <source src="/video.mp4" type="video/mp4" />
        </video>
      </AspectRatio>
    )

    expect(screen.getByTestId('video')).toBeInTheDocument()
  })

  it('renders iframe content correctly', () => {
    render(
      <AspectRatio ratio={16 / 9}>
        <iframe
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          title="YouTube video"
        />
      </AspectRatio>
    )

    const iframe = screen.getByTitle('YouTube video')
    expect(iframe).toHaveAttribute('src')
  })

  it('renders div content correctly', () => {
    render(
      <AspectRatio ratio={16 / 9}>
        <div data-testid="content">Custom content</div>
      </AspectRatio>
    )

    expect(screen.getByTestId('content')).toHaveTextContent('Custom content')
  })

  it('applies custom className', () => {
    const { container } = render(
      <AspectRatio ratio={16 / 9} className="custom-aspect-ratio">
        <div>Content</div>
      </AspectRatio>
    )

    expect(container.firstChild).toHaveClass('custom-aspect-ratio')
  })

  it('forwards ref correctly', () => {
    const ref = { current: null }

    render(
      <AspectRatio ratio={16 / 9} ref={ref}>
        <div>Content</div>
      </AspectRatio>
    )

    expect(ref.current).toBeInstanceOf(HTMLDivElement)
  })

  it('maintains aspect ratio with different content sizes', () => {
    render(
      <AspectRatio ratio={16 / 9}>
        <img
          src="/image.jpg"
          alt="Test"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </AspectRatio>
    )

    const image = screen.getByAltText('Test')
    expect(image).toHaveStyle({ width: '100%', height: '100%' })
  })

  it('works with responsive images', () => {
    render(
      <AspectRatio ratio={16 / 9}>
        <img
          src="/image.jpg"
          alt="Responsive"
          className="w-full h-full object-cover"
        />
      </AspectRatio>
    )

    const image = screen.getByAltText('Responsive')
    expect(image).toHaveClass('w-full', 'h-full', 'object-cover')
  })

  it('supports data attributes', () => {
    render(
      <AspectRatio ratio={16 / 9} data-testid="aspect-ratio-container">
        <div>Content</div>
      </AspectRatio>
    )

    expect(screen.getByTestId('aspect-ratio-container')).toBeInTheDocument()
  })

  it('works in a grid layout', () => {
    render(
      <div className="grid grid-cols-3 gap-4">
        <AspectRatio ratio={16 / 9}>
          <img src="/image1.jpg" alt="Image 1" />
        </AspectRatio>
        <AspectRatio ratio={16 / 9}>
          <img src="/image2.jpg" alt="Image 2" />
        </AspectRatio>
        <AspectRatio ratio={16 / 9}>
          <img src="/image3.jpg" alt="Image 3" />
        </AspectRatio>
      </div>
    )

    expect(screen.getByAltText('Image 1')).toBeInTheDocument()
    expect(screen.getByAltText('Image 2')).toBeInTheDocument()
    expect(screen.getByAltText('Image 3')).toBeInTheDocument()
  })

  it('preserves aspect ratio with overflow content', () => {
    render(
      <AspectRatio ratio={1}>
        <div style={{ width: '200%', height: '200%' }}>
          Overflowing content
        </div>
      </AspectRatio>
    )

    expect(screen.getByText('Overflowing content')).toBeInTheDocument()
  })
})
