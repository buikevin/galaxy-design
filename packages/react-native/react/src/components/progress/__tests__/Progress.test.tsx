import { describe, it, expect } from '@jest/globals'
import { render, screen } from '@testing-library/react'
import { Progress } from '../Progress'

describe('Progress', () => {
  it('renders progress bar', () => {
    render(<Progress value={50} />)
    expect(screen.getByRole('progressbar')).toBeInTheDocument()
  })

  it('shows correct progress value', () => {
    render(<Progress value={75} />)
    const progressbar = screen.getByRole('progressbar')
    expect(progressbar).toHaveAttribute('aria-valuenow', '75')
  })

  it('renders with 0% progress', () => {
    render(<Progress value={0} />)
    const progressbar = screen.getByRole('progressbar')
    expect(progressbar).toHaveAttribute('aria-valuenow', '0')
  })

  it('renders with 100% progress', () => {
    render(<Progress value={100} />)
    const progressbar = screen.getByRole('progressbar')
    expect(progressbar).toHaveAttribute('aria-valuenow', '100')
  })

  it('shows indeterminate state', () => {
    render(<Progress value={null} />)
    const progressbar = screen.getByRole('progressbar')
    expect(progressbar).toHaveAttribute('data-state', 'indeterminate')
  })

  it('has min and max attributes', () => {
    render(<Progress value={50} min={0} max={100} />)
    const progressbar = screen.getByRole('progressbar')
    expect(progressbar).toHaveAttribute('aria-valuemin', '0')
    expect(progressbar).toHaveAttribute('aria-valuemax', '100')
  })

  it('renders with custom max value', () => {
    render(<Progress value={50} max={200} />)
    const progressbar = screen.getByRole('progressbar')
    expect(progressbar).toHaveAttribute('aria-valuemax', '200')
  })

  it('applies custom className', () => {
    const { container } = render(<Progress value={50} className="custom-progress" />)
    expect(container.firstChild).toHaveClass('custom-progress')
  })

  it('renders different sizes', () => {
    const sizes = ['sm', 'default', 'lg'] as const

    sizes.forEach((size) => {
      const { container } = render(<Progress value={50} size={size} />)
      expect(container.firstChild).toBeInTheDocument()
    })
  })

  it('renders different variants/colors', () => {
    const variants = ['default', 'success', 'warning', 'destructive'] as const

    variants.forEach((variant) => {
      const { container } = render(<Progress value={50} variant={variant} />)
      expect(container.firstChild).toBeInTheDocument()
    })
  })

  it('shows animation when animated', () => {
    const { container } = render(<Progress value={50} animated />)
    const indicator = container.querySelector('.progress-indicator')
    expect(indicator).toHaveClass('animate')
  })

  it('updates value when prop changes', () => {
    const { rerender } = render(<Progress value={30} />)

    let progressbar = screen.getByRole('progressbar')
    expect(progressbar).toHaveAttribute('aria-valuenow', '30')

    rerender(<Progress value={70} />)

    progressbar = screen.getByRole('progressbar')
    expect(progressbar).toHaveAttribute('aria-valuenow', '70')
  })

  it('clamps value between min and max', () => {
    render(<Progress value={150} min={0} max={100} />)
    const progressbar = screen.getByRole('progressbar')
    expect(progressbar).toHaveAttribute('aria-valuenow', '100')
  })

  it('forwards ref correctly', () => {
    const ref = { current: null }
    render(<Progress value={50} ref={ref} />)
    expect(ref.current).toBeInstanceOf(HTMLElement)
  })
})
