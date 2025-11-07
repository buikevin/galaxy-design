import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { Badge } from '../Badge.vue'

describe('Badge', () => {
  it('renders badge with text', () => {
    const wrapper = mount(Badge, {
      slots: { default: 'New' },
    })

    expect(wrapper.text()).toBe('New')
  })

  it('renders with different variants', () => {
    const variants = ['default', 'secondary', 'destructive', 'outline']

    variants.forEach((variant) => {
      const wrapper = mount(Badge, {
        props: { variant: variant as any },
        slots: { default: 'Badge' },
      })

      expect(wrapper.exists()).toBe(true)
    })
  })

  it('renders with different sizes', () => {
    const sizes = ['sm', 'default', 'lg']

    sizes.forEach((size) => {
      const wrapper = mount(Badge, {
        props: { size: size as any },
        slots: { default: 'Badge' },
      })

      expect(wrapper.exists()).toBe(true)
    })
  })

  it('renders as dismissable with close button', () => {
    const wrapper = mount(Badge, {
      props: { dismissable: true },
      slots: { default: 'Dismissable' },
    })

    const closeButton = wrapper.find('button')
    expect(closeButton.exists()).toBe(true)
  })

  it('emits dismiss event when close button clicked', async () => {
    const wrapper = mount(Badge, {
      props: { dismissable: true },
      slots: { default: 'Dismissable' },
    })

    const closeButton = wrapper.find('button')
    await closeButton.trigger('click')

    expect(wrapper.emitted('dismiss')).toBeTruthy()
  })

  it('removes badge when dismissed', async () => {
    const wrapper = mount(Badge, {
      props: { dismissable: true },
      slots: { default: 'Dismissable' },
    })

    const closeButton = wrapper.find('button')
    await closeButton.trigger('click')

    expect(wrapper.html()).toBe('')
  })

  it('applies custom className', () => {
    const wrapper = mount(Badge, {
      props: { class: 'custom-badge' },
      slots: { default: 'Badge' },
    })

    expect(wrapper.classes()).toContain('custom-badge')
  })

  it('renders with icon', () => {
    const wrapper = mount(Badge, {
      slots: {
        default: 'With Icon',
        icon: '<span class="icon">⭐</span>',
      },
    })

    expect(wrapper.html()).toContain('icon')
    expect(wrapper.text()).toContain('⭐')
  })

  it('renders count badge', () => {
    const wrapper = mount(Badge, {
      slots: { default: '99+' },
    })

    expect(wrapper.text()).toBe('99+')
  })

  it('renders dot badge', () => {
    const wrapper = mount(Badge, {
      props: { dot: true },
    })

    expect(wrapper.classes()).toContain('dot')
  })

  it('renders as pill shape', () => {
    const wrapper = mount(Badge, {
      props: { pill: true },
      slots: { default: 'Pill' },
    })

    expect(wrapper.classes()).toContain('rounded-full')
  })
})
