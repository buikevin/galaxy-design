import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import { LoginForm } from '../LoginForm.vue'

describe('LoginForm', () => {
  it('renders login form fields', () => {
    const wrapper = mount(LoginForm)

    expect(wrapper.find('input[type="email"]').exists()).toBe(true)
    expect(wrapper.find('input[type="password"]').exists()).toBe(true)
    expect(wrapper.find('input[type="checkbox"]').exists()).toBe(true)
  })

  it('validates email format', async () => {
    const wrapper = mount(LoginForm)

    const emailInput = wrapper.find('input[type="email"]')
    await emailInput.setValue('invalid-email')

    const submitButton = wrapper.find('button[type="submit"]')
    await submitButton.trigger('click')

    expect(wrapper.text()).toContain('Invalid email address')
  })

  it('validates password is required', async () => {
    const wrapper = mount(LoginForm)

    const emailInput = wrapper.find('input[type="email"]')
    await emailInput.setValue('test@example.com')

    const submitButton = wrapper.find('button[type="submit"]')
    await submitButton.trigger('click')

    expect(wrapper.text()).toContain('Password is required')
  })

  it('submits form with valid data', async () => {
    const onSubmit = vi.fn()
    const wrapper = mount(LoginForm, {
      props: { onSubmit },
    })

    const emailInput = wrapper.find('input[type="email"]')
    const passwordInput = wrapper.find('input[type="password"]')
    const rememberCheckbox = wrapper.find('input[type="checkbox"]')

    await emailInput.setValue('test@example.com')
    await passwordInput.setValue('password123')
    await rememberCheckbox.setValue(true)

    const submitButton = wrapper.find('button[type="submit"]')
    await submitButton.trigger('click')

    expect(onSubmit).toHaveBeenCalledWith({
      email: 'test@example.com',
      password: 'password123',
      rememberMe: true,
    })
  })

  it('shows loading state', async () => {
    const wrapper = mount(LoginForm, {
      props: { loading: true },
    })

    const submitButton = wrapper.find('button[type="submit"]')
    expect(submitButton.attributes('disabled')).toBeDefined()
    expect(wrapper.text()).toContain('Logging in...')
  })

  it('displays error message', () => {
    const wrapper = mount(LoginForm, {
      props: { error: 'Invalid credentials' },
    })

    expect(wrapper.text()).toContain('Invalid credentials')
  })

  it('triggers forgot password callback', async () => {
    const onForgotPassword = vi.fn()
    const wrapper = mount(LoginForm, {
      props: { onForgotPassword },
    })

    const forgotLink = wrapper.find('a[href="#"]')
    await forgotLink.trigger('click')

    expect(onForgotPassword).toHaveBeenCalled()
  })

  it('disables submit button when loading', () => {
    const wrapper = mount(LoginForm, {
      props: { loading: true },
    })

    const submitButton = wrapper.find('button[type="submit"]')
    expect(submitButton.element.disabled).toBe(true)
  })
})
