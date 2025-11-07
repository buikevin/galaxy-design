import { describe, it, expect, vi } from '@jest/globals'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Slider } from '../Slider'

describe('Slider', () => {
  it('renders slider correctly', () => {
    render(<Slider defaultValue={[50]} />)
    expect(screen.getByRole('slider')).toBeInTheDocument()
  })

  it('displays correct initial value', () => {
    render(<Slider value={[75]} />)

    const slider = screen.getByRole('slider')
    expect(slider).toHaveAttribute('aria-valuenow', '75')
  })

  it('has default min and max values', () => {
    render(<Slider defaultValue={[50]} />)

    const slider = screen.getByRole('slider')
    expect(slider).toHaveAttribute('aria-valuemin', '0')
    expect(slider).toHaveAttribute('aria-valuemax', '100')
  })

  it('accepts custom min and max props', () => {
    render(<Slider value={[150]} min={0} max={200} />)

    const slider = screen.getByRole('slider')
    expect(slider).toHaveAttribute('aria-valuemin', '0')
    expect(slider).toHaveAttribute('aria-valuemax', '200')
    expect(slider).toHaveAttribute('aria-valuenow', '150')
  })

  it('supports step increments', () => {
    render(<Slider defaultValue={[50]} step={10} />)

    const slider = screen.getByRole('slider')
    expect(slider).toBeInTheDocument()
  })

  it('calls onValueChange when value changes', async () => {
    const user = userEvent.setup()
    const onValueChange = vi.fn()

    render(<Slider defaultValue={[50]} onValueChange={onValueChange} />)

    const slider = screen.getByRole('slider')

    // Simulate arrow key press to change value
    slider.focus()
    await user.keyboard('{ArrowRight}')

    expect(onValueChange).toHaveBeenCalled()
  })

  it('does not change when disabled', async () => {
    const user = userEvent.setup()
    const onValueChange = vi.fn()

    render(<Slider defaultValue={[50]} disabled onValueChange={onValueChange} />)

    const slider = screen.getByRole('slider')
    slider.focus()
    await user.keyboard('{ArrowRight}')

    expect(onValueChange).not.toHaveBeenCalled()
  })

  it('has disabled styling when disabled', () => {
    render(<Slider defaultValue={[50]} disabled />)

    const slider = screen.getByRole('slider')
    expect(slider).toHaveAttribute('data-disabled')
  })

  it('supports keyboard navigation (ArrowRight)', async () => {
    const user = userEvent.setup()
    const onValueChange = vi.fn()

    render(<Slider defaultValue={[50]} onValueChange={onValueChange} />)

    const slider = screen.getByRole('slider')
    slider.focus()
    await user.keyboard('{ArrowRight}')

    expect(onValueChange).toHaveBeenCalled()
    // Value should increase
    const newValue = onValueChange.mock.calls[0][0]
    expect(newValue[0]).toBeGreaterThan(50)
  })

  it('supports keyboard navigation (ArrowLeft)', async () => {
    const user = userEvent.setup()
    const onValueChange = vi.fn()

    render(<Slider defaultValue={[50]} onValueChange={onValueChange} />)

    const slider = screen.getByRole('slider')
    slider.focus()
    await user.keyboard('{ArrowLeft}')

    expect(onValueChange).toHaveBeenCalled()
    // Value should decrease
    const newValue = onValueChange.mock.calls[0][0]
    expect(newValue[0]).toBeLessThan(50)
  })

  it('supports keyboard navigation (ArrowUp)', async () => {
    const user = userEvent.setup()
    const onValueChange = vi.fn()

    render(<Slider defaultValue={[50]} onValueChange={onValueChange} />)

    const slider = screen.getByRole('slider')
    slider.focus()
    await user.keyboard('{ArrowUp}')

    expect(onValueChange).toHaveBeenCalled()
  })

  it('supports keyboard navigation (ArrowDown)', async () => {
    const user = userEvent.setup()
    const onValueChange = vi.fn()

    render(<Slider defaultValue={[50]} onValueChange={onValueChange} />)

    const slider = screen.getByRole('slider')
    slider.focus()
    await user.keyboard('{ArrowDown}')

    expect(onValueChange).toHaveBeenCalled()
  })

  it('supports Home key to go to minimum', async () => {
    const user = userEvent.setup()
    const onValueChange = vi.fn()

    render(<Slider defaultValue={[50]} min={0} max={100} onValueChange={onValueChange} />)

    const slider = screen.getByRole('slider')
    slider.focus()
    await user.keyboard('{Home}')

    expect(onValueChange).toHaveBeenCalledWith([0])
  })

  it('supports End key to go to maximum', async () => {
    const user = userEvent.setup()
    const onValueChange = vi.fn()

    render(<Slider defaultValue={[50]} min={0} max={100} onValueChange={onValueChange} />)

    const slider = screen.getByRole('slider')
    slider.focus()
    await user.keyboard('{End}')

    expect(onValueChange).toHaveBeenCalledWith([100])
  })

  it('renders track and range elements', () => {
    const { container } = render(<Slider defaultValue={[50]} />)

    // Check for track and range via class names
    expect(container.querySelector('.bg-secondary')).toBeInTheDocument()
    expect(container.querySelector('.bg-primary')).toBeInTheDocument()
  })

  it('applies custom className', () => {
    const { container } = render(<Slider defaultValue={[50]} className="custom-slider" />)

    expect(container.firstChild).toHaveClass('custom-slider')
  })

  it('forwards ref correctly', () => {
    const ref = { current: null }
    render(<Slider defaultValue={[50]} ref={ref} />)

    expect(ref.current).toBeInstanceOf(HTMLSpanElement)
  })

  it('supports multiple values for range selection', () => {
    render(<Slider defaultValue={[25, 75]} />)

    const sliders = screen.getAllByRole('slider')
    expect(sliders.length).toBeGreaterThanOrEqual(1)
  })

  it('updates value in controlled mode', () => {
    const { rerender } = render(<Slider value={[30]} />)

    let slider = screen.getByRole('slider')
    expect(slider).toHaveAttribute('aria-valuenow', '30')

    rerender(<Slider value={[70]} />)

    slider = screen.getByRole('slider')
    expect(slider).toHaveAttribute('aria-valuenow', '70')
  })

  it('clamps value within min and max', () => {
    render(<Slider value={[150]} min={0} max={100} />)

    const slider = screen.getByRole('slider')
    expect(slider).toHaveAttribute('aria-valuenow', '100')
  })
})
