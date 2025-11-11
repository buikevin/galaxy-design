import { describe, it, expect, vi } from '@jest/globals'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { LoginForm } from '../LoginForm'

describe('LoginForm', () => {
  it('renders login form fields', () => {
    render(<LoginForm />)

    expect(screen.getByLabelText(/email/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/remember me/i)).toBeInTheDocument()
  })

  it('validates email format', async () => {
    const user = userEvent.setup()
    render(<LoginForm />)

    const emailInput = screen.getByLabelText(/email/i)
    await user.type(emailInput, 'invalid-email')

    const submitButton = screen.getByRole('button', { name: /log in/i })
    await user.click(submitButton)

    await waitFor(() => {
      expect(screen.getByText(/invalid email/i)).toBeInTheDocument()
    })
  })

  it('validates password is required', async () => {
    const user = userEvent.setup()
    render(<LoginForm />)

    const emailInput = screen.getByLabelText(/email/i)
    await user.type(emailInput, 'test@example.com')

    const submitButton = screen.getByRole('button', { name: /log in/i })
    await user.click(submitButton)

    await waitFor(() => {
      expect(screen.getByText(/password is required/i)).toBeInTheDocument()
    })
  })

  it('submits form with valid data', async () => {
    const user = userEvent.setup()
    const onSubmit = vi.fn()
    render(<LoginForm onSubmit={onSubmit} />)

    const emailInput = screen.getByLabelText(/email/i)
    const passwordInput = screen.getByLabelText(/password/i)
    const rememberCheckbox = screen.getByLabelText(/remember me/i)

    await user.type(emailInput, 'test@example.com')
    await user.type(passwordInput, 'password123')
    await user.click(rememberCheckbox)

    const submitButton = screen.getByRole('button', { name: /log in/i })
    await user.click(submitButton)

    await waitFor(() => {
      expect(onSubmit).toHaveBeenCalledWith({
        email: 'test@example.com',
        password: 'password123',
        rememberMe: true,
      })
    })
  })

  it('shows loading state', () => {
    render(<LoginForm loading={true} />)

    const submitButton = screen.getByRole('button', { name: /logging in/i })
    expect(submitButton).toBeDisabled()
  })

  it('displays error message', () => {
    render(<LoginForm error="Invalid credentials" />)

    expect(screen.getByText('Invalid credentials')).toBeInTheDocument()
  })

  it('triggers forgot password callback', async () => {
    const user = userEvent.setup()
    const onForgotPassword = vi.fn()
    render(<LoginForm onForgotPassword={onForgotPassword} />)

    const forgotLink = screen.getByText(/forgot password/i)
    await user.click(forgotLink)

    expect(onForgotPassword).toHaveBeenCalled()
  })

  it('disables all inputs when loading', () => {
    render(<LoginForm loading={true} />)

    const emailInput = screen.getByLabelText(/email/i)
    const passwordInput = screen.getByLabelText(/password/i)
    const submitButton = screen.getByRole('button')

    expect(emailInput).toBeDisabled()
    expect(passwordInput).toBeDisabled()
    expect(submitButton).toBeDisabled()
  })

  it('clears validation errors when user types', async () => {
    const user = userEvent.setup()
    render(<LoginForm />)

    const emailInput = screen.getByLabelText(/email/i)
    await user.type(emailInput, 'invalid')

    const submitButton = screen.getByRole('button', { name: /log in/i })
    await user.click(submitButton)

    await waitFor(() => {
      expect(screen.getByText(/invalid email/i)).toBeInTheDocument()
    })

    await user.clear(emailInput)
    await user.type(emailInput, 'valid@example.com')

    await waitFor(() => {
      expect(screen.queryByText(/invalid email/i)).not.toBeInTheDocument()
    })
  })
})
