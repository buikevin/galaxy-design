import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { Checkbox } from '../Checkbox.vue'

describe('Checkbox', () => {
  it('renders correctly', () => {
    const wrapper = mount(Checkbox)
    expect(wrapper.find('[role="checkbox"]').exists()).toBe(true)
  })

  it('starts unchecked by default', () => {
    const wrapper = mount(Checkbox)
    const checkbox = wrapper.find('[role="checkbox"]')
    expect(checkbox.attributes('aria-checked')).toBe('false')
  })

  it('toggles checked state on click', async () => {
    const wrapper = mount(Checkbox, {
      props: {
        checked: false,
        'onUpdate:checked': (value: boolean) => wrapper.setProps({ checked: value }),
      },
    })

    const checkbox = wrapper.find('[role="checkbox"]')
    await checkbox.trigger('click')

    expect(wrapper.props('checked')).toBe(true)
  })

  it('shows checked state', () => {
    const wrapper = mount(Checkbox, {
      props: { checked: true },
    })

    const checkbox = wrapper.find('[role="checkbox"]')
    expect(checkbox.attributes('data-state')).toBe('checked')
  })

  it('supports indeterminate state', () => {
    const wrapper = mount(Checkbox, {
      props: { checked: 'indeterminate' },
    })

    const checkbox = wrapper.find('[role="checkbox"]')
    expect(checkbox.attributes('data-state')).toBe('indeterminate')
  })

  it('disables interaction when disabled', async () => {
    const wrapper = mount(Checkbox, {
      props: {
        checked: false,
        disabled: true,
        'onUpdate:checked': (value: boolean) => wrapper.setProps({ checked: value }),
      },
    })

    const checkbox = wrapper.find('[role="checkbox"]')
    await checkbox.trigger('click')

    // Should not change when disabled
    expect(wrapper.props('checked')).toBe(false)
  })

  it('shows disabled state visually', () => {
    const wrapper = mount(Checkbox, {
      props: { disabled: true },
    })

    const checkbox = wrapper.find('[role="checkbox"]')
    expect(checkbox.attributes('data-disabled')).toBeDefined()
  })

  it('emits update:checked event', async () => {
    const wrapper = mount(Checkbox, {
      props: { checked: false },
    })

    const checkbox = wrapper.find('[role="checkbox"]')
    await checkbox.trigger('click')

    expect(wrapper.emitted('update:checked')).toBeTruthy()
    expect(wrapper.emitted('update:checked')?.[0]).toEqual([true])
  })

  it('applies custom className', () => {
    const wrapper = mount(Checkbox, {
      props: { class: 'custom-checkbox' },
    })

    expect(wrapper.classes()).toContain('custom-checkbox')
  })

  it('is keyboard accessible', async () => {
    const wrapper = mount(Checkbox, {
      props: {
        checked: false,
        'onUpdate:checked': (value: boolean) => wrapper.setProps({ checked: value }),
      },
    })

    const checkbox = wrapper.find('[role="checkbox"]')
    await checkbox.trigger('keydown', { key: ' ' })

    expect(wrapper.props('checked')).toBe(true)
  })

  it('has correct aria attributes', () => {
    const wrapper = mount(Checkbox, {
      props: { 'aria-label': 'Accept terms' },
    })

    const checkbox = wrapper.find('[role="checkbox"]')
    expect(checkbox.attributes('aria-label')).toBe('Accept terms')
  })

  it('works with label association', () => {
    const wrapper = mount(Checkbox, {
      props: { id: 'terms-checkbox' },
    })

    expect(wrapper.attributes('id')).toBe('terms-checkbox')
  })

  it('shows check indicator when checked', () => {
    const wrapper = mount(Checkbox, {
      props: { checked: true },
    })

    // CheckIcon should be present
    expect(wrapper.find('[data-radix-checkbox-indicator]').exists()).toBe(true)
  })
})
