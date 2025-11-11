import { describe, it, expect } from '@jest/globals'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Alert, AlertTitle, AlertDescription } from '../index'

describe('Alert', () => {
  it('renders alert with title and description', () => {
    render(
      <Alert>
        <AlertTitle>Alert Title</AlertTitle>
        <AlertDescription>This is an alert message</AlertDescription>
      </Alert>
    )

    expect(screen.getByText('Alert Title')).toBeInTheDocument()
    expect(screen.getByText('This is an alert message')).toBeInTheDocument()
  })

  it('renders with different variants', () => {
    const variants = ['default', 'destructive', 'success', 'warning', 'info'] as const

    variants.forEach((variant) => {
      const { container } = render(
        <Alert variant={variant}>
          <AlertTitle>Title</AlertTitle>
        </Alert>
      )

      expect(container.firstChild).toBeInTheDocument()
    })
  })

  it('shows icon for variant', () => {
    const { container } = render(
      <Alert variant="success">
        <AlertTitle>Success</AlertTitle>
      </Alert>
    )

    expect(container.querySelector('.alert-icon')).toBeInTheDocument()
  })

  it('renders as dismissable with close button', () => {
    render(
      <Alert dismissable>
        <AlertTitle>Dismissable Alert</AlertTitle>
      </Alert>
    )

    expect(screen.getByRole('button')).toBeInTheDocument()
  })

  it('calls onDismiss when closed', async () => {
    const user = userEvent.setup()
    const onDismiss = vi.fn()

    render(
      <Alert dismissable onDismiss={onDismiss}>
        <AlertTitle>Alert</AlertTitle>
      </Alert>
    )

    await user.click(screen.getByRole('button'))
    expect(onDismiss).toHaveBeenCalled()
  })

  it('applies custom className', () => {
    const { container } = render(
      <Alert className="custom-alert">
        <AlertTitle>Alert</AlertTitle>
      </Alert>
    )

    expect(container.firstChild).toHaveClass('custom-alert')
  })

  it('has correct role attribute', () => {
    const { container } = render(
      <Alert>
        <AlertTitle>Alert</AlertTitle>
      </Alert>
    )

    expect(container.firstChild).toHaveAttribute('role', 'alert')
  })

  it('supports custom icon', () => {
    render(
      <Alert icon={<span data-testid="custom-icon">🔔</span>}>
        <AlertTitle>Alert</AlertTitle>
      </Alert>
    )

    expect(screen.getByTestId('custom-icon')).toBeInTheDocument()
    expect(screen.getByText('🔔')).toBeInTheDocument()
  })

  it('renders without icon when showIcon is false', () => {
    const { container } = render(
      <Alert showIcon={false}>
        <AlertTitle>No Icon</AlertTitle>
      </Alert>
    )

    expect(container.querySelector('.alert-icon')).not.toBeInTheDocument()
  })

  it('forwards ref correctly', () => {
    const ref = { current: null }
    render(
      <Alert ref={ref}>
        <AlertTitle>Alert</AlertTitle>
      </Alert>
    )

    expect(ref.current).toBeInstanceOf(HTMLElement)
  })
})
