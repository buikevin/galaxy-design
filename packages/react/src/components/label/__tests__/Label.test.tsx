import { describe, it, expect } from '@jest/globals'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Label } from '../Label'

describe('Label', () => {
  it('renders label correctly', () => {
    render(<Label>Email address</Label>)

    expect(screen.getByText('Email address')).toBeInTheDocument()
  })

  it('associates with form control using htmlFor', () => {
    render(
      <>
        <Label htmlFor="email-input">Email</Label>
        <input id="email-input" type="text" />
      </>
    )

    const label = screen.getByText('Email')
    expect(label).toHaveAttribute('for', 'email-input')
  })

  it('clicking label focuses associated input', async () => {
    const user = userEvent.setup()

    render(
      <>
        <Label htmlFor="clickable-input">Click me</Label>
        <input id="clickable-input" type="text" />
      </>
    )

    const label = screen.getByText('Click me')
    await user.click(label)

    const input = screen.getByRole('textbox')
    expect(input).toHaveFocus()
  })

  it('applies custom className', () => {
    render(<Label className="custom-label">Label</Label>)

    const label = screen.getByText('Label')
    expect(label).toHaveClass('custom-label')
  })

  it('forwards ref correctly', () => {
    const ref = { current: null }
    render(<Label ref={ref}>Label</Label>)

    expect(ref.current).toBeInstanceOf(HTMLLabelElement)
  })

  it('supports HTML content', () => {
    render(
      <Label>
        Email <span className="text-red-500">*</span>
      </Label>
    )

    expect(screen.getByText('Email')).toBeInTheDocument()
    expect(screen.getByText('*')).toBeInTheDocument()
  })

  it('supports complex children', () => {
    render(
      <Label>
        <span>Name</span>
        <span className="required">*</span>
      </Label>
    )

    expect(screen.getByText('Name')).toBeInTheDocument()
    expect(document.querySelector('.required')).toBeInTheDocument()
  })

  it('works with checkbox', async () => {
    const user = userEvent.setup()

    render(
      <>
        <input type="checkbox" id="agree" />
        <Label htmlFor="agree">I agree</Label>
      </>
    )

    const label = screen.getByText('I agree')
    await user.click(label)

    const checkbox = screen.getByRole('checkbox')
    expect(checkbox).toBeChecked()
  })

  it('works with radio button', async () => {
    const user = userEvent.setup()

    render(
      <>
        <input type="radio" id="option1" name="choice" />
        <Label htmlFor="option1">Option 1</Label>
      </>
    )

    const label = screen.getByText('Option 1')
    await user.click(label)

    const radio = screen.getByRole('radio')
    expect(radio).toBeChecked()
  })

  it('renders without htmlFor attribute', () => {
    render(<Label>Standalone Label</Label>)

    const label = screen.getByText('Standalone Label')
    expect(label).not.toHaveAttribute('for')
  })

  it('supports asChild pattern from Radix', () => {
    render(
      <Label asChild>
        <button>Custom Element</button>
      </Label>
    )

    expect(screen.getByRole('button')).toHaveTextContent('Custom Element')
  })

  it('handles empty content gracefully', () => {
    const { container } = render(<Label />)

    expect(container.querySelector('label')).toBeInTheDocument()
  })

  it('supports data attributes', () => {
    render(<Label data-testid="test-label">Label</Label>)

    expect(screen.getByTestId('test-label')).toBeInTheDocument()
  })

  it('supports aria-label', () => {
    render(<Label aria-label="Form field label">Visible Text</Label>)

    const label = screen.getByText('Visible Text')
    expect(label).toHaveAttribute('aria-label', 'Form field label')
  })

  it('works in form context', () => {
    render(
      <form>
        <Label htmlFor="username">Username</Label>
        <input id="username" type="text" name="username" />
      </form>
    )

    const label = screen.getByText('Username')
    const input = screen.getByRole('textbox')

    expect(label).toHaveAttribute('for', 'username')
    expect(input).toHaveAttribute('id', 'username')
  })

  it('supports onClick handler', async () => {
    const user = userEvent.setup()
    const onClick = vi.fn()

    render(<Label onClick={onClick}>Clickable</Label>)

    const label = screen.getByText('Clickable')
    await user.click(label)

    expect(onClick).toHaveBeenCalled()
  })
})
