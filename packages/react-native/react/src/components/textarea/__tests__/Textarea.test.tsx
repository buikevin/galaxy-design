import { describe, it, expect, vi } from '@jest/globals'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Textarea } from '../Textarea'

describe('Textarea', () => {
  it('renders textarea correctly', () => {
    render(<Textarea />)
    expect(screen.getByRole('textbox')).toBeInTheDocument()
  })

  it('displays placeholder text', () => {
    render(<Textarea placeholder="Enter your message..." />)

    const textarea = screen.getByPlaceholderText('Enter your message...')
    expect(textarea).toBeInTheDocument()
  })

  it('displays initial value', () => {
    render(<Textarea value="Initial text" />)

    const textarea = screen.getByRole('textbox')
    expect(textarea).toHaveValue('Initial text')
  })

  it('updates value on input', async () => {
    const user = userEvent.setup()
    const onChange = vi.fn()

    render(<Textarea onChange={onChange} />)

    const textarea = screen.getByRole('textbox')
    await user.type(textarea, 'New text')

    expect(onChange).toHaveBeenCalled()
  })

  it('supports defaultValue for uncontrolled mode', () => {
    render(<Textarea defaultValue="Default text" />)

    const textarea = screen.getByRole('textbox')
    expect(textarea).toHaveValue('Default text')
  })

  it('accepts custom rows prop', () => {
    render(<Textarea rows={10} />)

    const textarea = screen.getByRole('textbox')
    expect(textarea).toHaveAttribute('rows', '10')
  })

  it('disables textarea when disabled prop is true', () => {
    render(<Textarea disabled />)

    const textarea = screen.getByRole('textbox')
    expect(textarea).toBeDisabled()
  })

  it('does not accept input when disabled', async () => {
    const user = userEvent.setup()
    const onChange = vi.fn()

    render(<Textarea disabled onChange={onChange} />)

    const textarea = screen.getByRole('textbox')
    await user.type(textarea, 'Text')

    expect(onChange).not.toHaveBeenCalled()
  })

  it('applies custom className', () => {
    render(<Textarea className="custom-textarea" />)

    const textarea = screen.getByRole('textbox')
    expect(textarea).toHaveClass('custom-textarea')
  })

  it('forwards ref correctly', () => {
    const ref = { current: null }
    render(<Textarea ref={ref} />)

    expect(ref.current).toBeInstanceOf(HTMLTextAreaElement)
  })

  it('handles multiline text correctly', async () => {
    const user = userEvent.setup()
    const multilineText = 'Line 1\nLine 2\nLine 3'

    render(<Textarea value={multilineText} onChange={() => {}} />)

    const textarea = screen.getByRole('textbox')
    expect(textarea).toHaveValue(multilineText)
  })

  it('handles empty value', () => {
    render(<Textarea value="" />)

    const textarea = screen.getByRole('textbox')
    expect(textarea).toHaveValue('')
  })

  it('handles focus and blur events', async () => {
    const user = userEvent.setup()
    const onFocus = vi.fn()
    const onBlur = vi.fn()

    render(<Textarea onFocus={onFocus} onBlur={onBlur} />)

    const textarea = screen.getByRole('textbox')

    await user.click(textarea)
    expect(onFocus).toHaveBeenCalled()

    await user.tab()
    expect(onBlur).toHaveBeenCalled()
  })

  it('supports aria-label for accessibility', () => {
    render(<Textarea aria-label="Message input" />)

    const textarea = screen.getByLabelText('Message input')
    expect(textarea).toBeInTheDocument()
  })

  it('supports aria-describedby', () => {
    render(
      <>
        <Textarea aria-describedby="description" />
        <div id="description">Enter a detailed message</div>
      </>
    )

    const textarea = screen.getByRole('textbox')
    expect(textarea).toHaveAttribute('aria-describedby', 'description')
  })

  it('supports aria-invalid for error state', () => {
    render(<Textarea aria-invalid="true" />)

    const textarea = screen.getByRole('textbox')
    expect(textarea).toHaveAttribute('aria-invalid', 'true')
  })

  it('supports name attribute for forms', () => {
    render(<Textarea name="message" />)

    const textarea = screen.getByRole('textbox')
    expect(textarea).toHaveAttribute('name', 'message')
  })

  it('supports maxLength attribute', () => {
    render(<Textarea maxLength={100} />)

    const textarea = screen.getByRole('textbox')
    expect(textarea).toHaveAttribute('maxLength', '100')
  })

  it('supports required attribute', () => {
    render(<Textarea required />)

    const textarea = screen.getByRole('textbox')
    expect(textarea).toBeRequired()
  })

  it('supports readOnly attribute', async () => {
    const user = userEvent.setup()
    const onChange = vi.fn()

    render(<Textarea readOnly onChange={onChange} />)

    const textarea = screen.getByRole('textbox')
    await user.type(textarea, 'Text')

    expect(onChange).not.toHaveBeenCalled()
  })
})
