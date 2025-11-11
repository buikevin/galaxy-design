import { describe, it, expect } from '@jest/globals'
import { render, screen } from '@testing-library/react'
import { Separator } from '../Separator'

describe('Separator', () => {
  it('renders separator correctly', () => {
    render(<Separator />)
    expect(screen.getByRole('separator')).toBeInTheDocument()
  })

  it('has default horizontal orientation', () => {
    render(<Separator />)

    const separator = screen.getByRole('separator')
    expect(separator).toHaveAttribute('data-orientation', 'horizontal')
  })

  it('renders with vertical orientation', () => {
    render(<Separator orientation="vertical" />)

    const separator = screen.getByRole('separator')
    expect(separator).toHaveAttribute('data-orientation', 'vertical')
  })

  it('has correct aria-orientation attribute', () => {
    render(<Separator />)

    const separator = screen.getByRole('separator')
    expect(separator).toHaveAttribute('aria-orientation', 'horizontal')
  })

  it('vertical separator has correct aria-orientation', () => {
    render(<Separator orientation="vertical" />)

    const separator = screen.getByRole('separator')
    expect(separator).toHaveAttribute('aria-orientation', 'vertical')
  })

  it('is decorative by default', () => {
    render(<Separator />)

    const separator = screen.getByRole('separator', { hidden: true })
    expect(separator).toHaveAttribute('role', 'none')
  })

  it('can be non-decorative for accessibility', () => {
    render(<Separator decorative={false} />)

    const separator = screen.getByRole('separator')
    expect(separator).toHaveAttribute('role', 'separator')
  })

  it('applies custom className', () => {
    render(<Separator className="custom-separator" />)

    const separator = screen.getByRole('separator', { hidden: true })
    expect(separator).toHaveClass('custom-separator')
  })

  it('horizontal separator has correct height', () => {
    render(<Separator orientation="horizontal" />)

    const separator = screen.getByRole('separator', { hidden: true })
    expect(separator).toHaveClass('h-[1px]')
  })

  it('vertical separator has correct width', () => {
    render(<Separator orientation="vertical" />)

    const separator = screen.getByRole('separator', { hidden: true })
    expect(separator).toHaveClass('w-[1px]')
  })

  it('works as visual divider in content', () => {
    render(
      <div>
        <p>Section 1</p>
        <Separator className="my-4" />
        <p>Section 2</p>
      </div>
    )

    expect(screen.getByText('Section 1')).toBeInTheDocument()
    expect(screen.getByRole('separator', { hidden: true })).toBeInTheDocument()
    expect(screen.getByText('Section 2')).toBeInTheDocument()
  })

  it('works in horizontal layouts', () => {
    render(
      <div className="flex items-center">
        <span>Item 1</span>
        <Separator orientation="vertical" className="mx-2" />
        <span>Item 2</span>
      </div>
    )

    const separator = screen.getByRole('separator', { hidden: true })
    expect(separator).toHaveAttribute('data-orientation', 'vertical')
  })

  it('applies custom styles correctly', () => {
    render(<Separator className="bg-red-500 h-[2px]" />)

    const separator = screen.getByRole('separator', { hidden: true })
    expect(separator).toHaveClass('bg-red-500')
    expect(separator).toHaveClass('h-[2px]')
  })

  it('forwards ref correctly', () => {
    const ref = { current: null }
    render(<Separator ref={ref} />)

    expect(ref.current).toBeInstanceOf(HTMLDivElement)
  })

  it('supports data attributes', () => {
    render(<Separator data-testid="test-separator" />)

    expect(screen.getByTestId('test-separator')).toBeInTheDocument()
  })
})
