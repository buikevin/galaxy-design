import { describe, it, expect, vi } from '@jest/globals'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { RadioGroup, RadioGroupItem } from '../RadioGroup'

describe('RadioGroup', () => {
  it('renders radio group correctly', () => {
    render(
      <RadioGroup>
        <div>
          <RadioGroupItem value="option1" id="option1" />
          <label htmlFor="option1">Option 1</label>
        </div>
      </RadioGroup>
    )

    expect(screen.getByRole('radiogroup')).toBeInTheDocument()
  })

  it('renders all radio items', () => {
    render(
      <RadioGroup>
        <RadioGroupItem value="option1" />
        <RadioGroupItem value="option2" />
        <RadioGroupItem value="option3" />
      </RadioGroup>
    )

    const radioItems = screen.getAllByRole('radio')
    expect(radioItems).toHaveLength(3)
  })

  it('allows selecting a radio option', async () => {
    const user = userEvent.setup()
    const onValueChange = vi.fn()

    render(
      <RadioGroup onValueChange={onValueChange}>
        <RadioGroupItem value="option1" id="option1" />
        <RadioGroupItem value="option2" id="option2" />
      </RadioGroup>
    )

    const option2 = screen.getByRole('radio', { name: '', hidden: true })
    await user.click(screen.getAllByRole('radio')[1])

    expect(onValueChange).toHaveBeenCalledWith('option2')
  })

  it('only one option can be selected at a time', async () => {
    const user = userEvent.setup()

    render(
      <RadioGroup defaultValue="option1">
        <RadioGroupItem value="option1" />
        <RadioGroupItem value="option2" />
      </RadioGroup>
    )

    const radios = screen.getAllByRole('radio')

    // First should be checked
    expect(radios[0]).toHaveAttribute('data-state', 'checked')
    expect(radios[1]).toHaveAttribute('data-state', 'unchecked')

    // Click second
    await user.click(radios[1])

    // Second should be checked, first unchecked
    expect(radios[0]).toHaveAttribute('data-state', 'unchecked')
    expect(radios[1]).toHaveAttribute('data-state', 'checked')
  })

  it('does not select disabled option', async () => {
    const user = userEvent.setup()
    const onValueChange = vi.fn()

    render(
      <RadioGroup onValueChange={onValueChange}>
        <RadioGroupItem value="option1" />
        <RadioGroupItem value="option2" disabled />
      </RadioGroup>
    )

    const disabledOption = screen.getAllByRole('radio')[1]
    await user.click(disabledOption)

    expect(onValueChange).not.toHaveBeenCalled()
  })

  it('disabled item has correct attributes', () => {
    render(
      <RadioGroup>
        <RadioGroupItem value="option1" disabled />
      </RadioGroup>
    )

    const disabledOption = screen.getByRole('radio')
    expect(disabledOption).toHaveAttribute('data-disabled')
    expect(disabledOption).toBeDisabled()
  })

  it('supports keyboard navigation with arrow keys', async () => {
    const user = userEvent.setup()

    render(
      <RadioGroup defaultValue="option1">
        <RadioGroupItem value="option1" />
        <RadioGroupItem value="option2" />
        <RadioGroupItem value="option3" />
      </RadioGroup>
    )

    const radios = screen.getAllByRole('radio')

    // Focus first radio
    radios[0].focus()

    // Arrow down should select next
    await user.keyboard('{ArrowDown}')

    expect(radios[1]).toHaveAttribute('data-state', 'checked')
  })

  it('wraps around when navigating with arrow keys', async () => {
    const user = userEvent.setup()

    render(
      <RadioGroup defaultValue="option3">
        <RadioGroupItem value="option1" />
        <RadioGroupItem value="option2" />
        <RadioGroupItem value="option3" />
      </RadioGroup>
    )

    const radios = screen.getAllByRole('radio')

    // Focus last radio
    radios[2].focus()

    // Arrow down should wrap to first
    await user.keyboard('{ArrowDown}')

    expect(radios[0]).toHaveAttribute('data-state', 'checked')
  })

  it('supports ArrowUp navigation', async () => {
    const user = userEvent.setup()

    render(
      <RadioGroup defaultValue="option2">
        <RadioGroupItem value="option1" />
        <RadioGroupItem value="option2" />
      </RadioGroup>
    )

    const radios = screen.getAllByRole('radio')

    // Focus second radio
    radios[1].focus()

    // Arrow up should select previous
    await user.keyboard('{ArrowUp}')

    expect(radios[0]).toHaveAttribute('data-state', 'checked')
  })

  it('has correct ARIA role attributes', () => {
    render(
      <RadioGroup>
        <RadioGroupItem value="option1" />
        <RadioGroupItem value="option2" />
      </RadioGroup>
    )

    expect(screen.getByRole('radiogroup')).toBeInTheDocument()

    const radioItems = screen.getAllByRole('radio')
    radioItems.forEach(item => {
      expect(item).toHaveAttribute('role', 'radio')
    })
  })

  it('has correct aria-checked attributes', () => {
    render(
      <RadioGroup defaultValue="option1">
        <RadioGroupItem value="option1" />
        <RadioGroupItem value="option2" />
      </RadioGroup>
    )

    const radios = screen.getAllByRole('radio')

    expect(radios[0]).toHaveAttribute('aria-checked', 'true')
    expect(radios[1]).toHaveAttribute('aria-checked', 'false')
  })

  it('shows indicator icon when checked', () => {
    const { container } = render(
      <RadioGroup defaultValue="option1">
        <RadioGroupItem value="option1" />
      </RadioGroup>
    )

    const indicator = container.querySelector('svg')
    expect(indicator).toBeInTheDocument()
  })

  it('applies custom className to group', () => {
    render(
      <RadioGroup className="custom-radio-group">
        <RadioGroupItem value="option1" />
      </RadioGroup>
    )

    expect(screen.getByRole('radiogroup')).toHaveClass('custom-radio-group')
  })

  it('applies custom className to items', () => {
    render(
      <RadioGroup>
        <RadioGroupItem value="option1" className="custom-radio" />
      </RadioGroup>
    )

    expect(screen.getByRole('radio')).toHaveClass('custom-radio')
  })

  it('forwards ref correctly', () => {
    const ref = { current: null }

    render(
      <RadioGroup ref={ref}>
        <RadioGroupItem value="option1" />
      </RadioGroup>
    )

    expect(ref.current).toBeInstanceOf(HTMLDivElement)
  })

  it('supports controlled mode', async () => {
    const user = userEvent.setup()
    const onValueChange = vi.fn()

    const { rerender } = render(
      <RadioGroup value="option1" onValueChange={onValueChange}>
        <RadioGroupItem value="option1" />
        <RadioGroupItem value="option2" />
      </RadioGroup>
    )

    const radios = screen.getAllByRole('radio')
    expect(radios[0]).toHaveAttribute('data-state', 'checked')

    // Click second option
    await user.click(radios[1])
    expect(onValueChange).toHaveBeenCalledWith('option2')

    // Update controlled value
    rerender(
      <RadioGroup value="option2" onValueChange={onValueChange}>
        <RadioGroupItem value="option1" />
        <RadioGroupItem value="option2" />
      </RadioGroup>
    )

    expect(radios[1]).toHaveAttribute('data-state', 'checked')
  })
})
