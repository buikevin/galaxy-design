import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import { Button } from '../Button.vue'

describe('Button', () => {
  it('renders correctly with default variant', () => {
    const wrapper = mount(Button, {
      slots: { default: 'Click me' },
    })
    expect(wrapper.text()).toBe('Click me')
    expect(wrapper.classes()).toContain('bg-primary')
  })

  it('renders with different variants', () => {
    const variants = ['default', 'secondary', 'destructive', 'outline', 'ghost', 'link']

    variants.forEach((variant) => {
      const wrapper = mount(Button, {
        props: { variant: variant as any },
        slots: { default: 'Button' },
      })
      expect(wrapper.exists()).toBe(true)
    })
  })

  it('renders with different sizes', () => {
    const sizes = ['sm', 'default', 'lg', 'icon']

    sizes.forEach((size) => {
      const wrapper = mount(Button, {
        props: { size: size as any },
        slots: { default: 'Button' },
      })
      expect(wrapper.exists()).toBe(true)
    })
  })

  it('handles click events', async () => {
    const onClick = vi.fn()
    const wrapper = mount(Button, {
      slots: { default: 'Click me' },
      attrs: { onClick },
    })

    await wrapper.trigger('click')
    expect(onClick).toHaveBeenCalledTimes(1)
  })

  it('does not trigger click when disabled', async () => {
    const onClick = vi.fn()
    const wrapper = mount(Button, {
      props: { disabled: true },
      slots: { default: 'Click me' },
      attrs: { onClick },
    })

    await wrapper.trigger('click')
    expect(onClick).not.toHaveBeenCalled()
  })

  it('shows disabled state', () => {
    const wrapper = mount(Button, {
      props: { disabled: true },
      slots: { default: 'Disabled' },
    })

    expect(wrapper.attributes('disabled')).toBeDefined()
    expect(wrapper.classes()).toContain('disabled:opacity-50')
  })

  it('renders as different element with asChild', () => {
    const wrapper = mount(Button, {
      props: { asChild: true },
      slots: {
        default: '<a href="/test">Link Button</a>',
      },
    })

    expect(wrapper.html()).toContain('<a')
  })

  it('applies custom className', () => {
    const wrapper = mount(Button, {
      props: { class: 'custom-class' },
      slots: { default: 'Button' },
    })

    expect(wrapper.classes()).toContain('custom-class')
  })

  it('renders with icon slot', () => {
    const wrapper = mount(Button, {
      slots: {
        default: 'Button',
        icon: '<span class="icon">📧</span>',
      },
    })

    expect(wrapper.html()).toContain('icon')
  })

  it('has correct type attribute', () => {
    const wrapper = mount(Button, {
      props: { type: 'submit' },
      slots: { default: 'Submit' },
    })

    expect(wrapper.attributes('type')).toBe('submit')
  })

  it('is accessible with aria-label', () => {
    const wrapper = mount(Button, {
      attrs: { 'aria-label': 'Close dialog' },
      slots: { default: 'X' },
    })

    expect(wrapper.attributes('aria-label')).toBe('Close dialog')
  })

  it('forwards refs correctly', () => {
    const wrapper = mount(Button, {
      slots: { default: 'Button' },
    })

    expect(wrapper.element).toBeInstanceOf(HTMLButtonElement)
  })
})
