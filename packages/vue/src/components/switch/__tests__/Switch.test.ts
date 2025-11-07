import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import { Switch } from '../Switch.vue'

describe('Switch', () => {
  it('renders switch correctly', () => {
    const wrapper = mount(Switch)
    expect(wrapper.find('[role="switch"]').exists()).toBe(true)
  })

  it('toggles between checked and unchecked', async () => {
    const wrapper = mount(Switch, {
      props: {
        modelValue: false,
        'onUpdate:modelValue': (value: boolean) => wrapper.setProps({ modelValue: value })
      }
    })

    const switchElement = wrapper.find('[role="switch"]')
    await switchElement.trigger('click')

    expect(wrapper.props('modelValue')).toBe(true)
  })

  it('starts with checked state when modelValue is true', () => {
    const wrapper = mount(Switch, {
      props: { checked: true }
    })

    const switchElement = wrapper.find('[role="switch"]')
    expect(switchElement.attributes('data-state')).toBe('checked')
    expect(switchElement.attributes('aria-checked')).toBe('true')
  })

  it('starts with unchecked state when modelValue is false', () => {
    const wrapper = mount(Switch, {
      props: { checked: false }
    })

    const switchElement = wrapper.find('[role="switch"]')
    expect(switchElement.attributes('data-state')).toBe('unchecked')
    expect(switchElement.attributes('aria-checked')).toBe('false')
  })

  it('does not toggle when disabled', async () => {
    const onCheckedChange = vi.fn()
    const wrapper = mount(Switch, {
      props: {
        checked: false,
        disabled: true,
        onCheckedChange
      }
    })

    const switchElement = wrapper.find('[role="switch"]')
    await switchElement.trigger('click')

    expect(onCheckedChange).not.toHaveBeenCalled()
  })

  it('has disabled attribute when disabled', () => {
    const wrapper = mount(Switch, {
      props: { disabled: true }
    })

    const switchElement = wrapper.find('[role="switch"]')
    expect(switchElement.attributes('data-disabled')).toBeDefined()
    expect(switchElement.classes()).toContain('disabled:cursor-not-allowed')
  })

  it('supports keyboard interaction (Space key)', async () => {
    const onCheckedChange = vi.fn()
    const wrapper = mount(Switch, {
      props: {
        checked: false,
        onCheckedChange
      }
    })

    const switchElement = wrapper.find('[role="switch"]')
    await switchElement.trigger('keydown', { key: ' ' })

    expect(onCheckedChange).toHaveBeenCalled()
  })

  it('supports keyboard interaction (Enter key)', async () => {
    const onCheckedChange = vi.fn()
    const wrapper = mount(Switch, {
      props: {
        checked: false,
        onCheckedChange
      }
    })

    const switchElement = wrapper.find('[role="switch"]')
    await switchElement.trigger('keydown', { key: 'Enter' })

    expect(onCheckedChange).toHaveBeenCalled()
  })

  it('has correct ARIA attributes', () => {
    const wrapper = mount(Switch, {
      props: { checked: false }
    })

    const switchElement = wrapper.find('[role="switch"]')
    expect(switchElement.attributes('role')).toBe('switch')
    expect(switchElement.attributes('aria-checked')).toBe('false')
  })

  it('updates ARIA checked when state changes', async () => {
    const wrapper = mount(Switch, {
      props: { checked: false }
    })

    await wrapper.setProps({ checked: true })

    const switchElement = wrapper.find('[role="switch"]')
    expect(switchElement.attributes('aria-checked')).toBe('true')
  })

  it('renders thumb that moves on state change', async () => {
    const wrapper = mount(Switch, {
      props: { checked: false }
    })

    let thumb = wrapper.find('[data-state="unchecked"]')
    expect(thumb.classes()).toContain('data-[state=unchecked]:translate-x-0')

    await wrapper.setProps({ checked: true })

    thumb = wrapper.find('[data-state="checked"]')
    expect(thumb.classes()).toContain('data-[state=checked]:translate-x-5')
  })

  it('applies custom className', () => {
    const wrapper = mount(Switch, {
      props: { class: 'custom-switch' }
    })

    expect(wrapper.find('[role="switch"]').classes()).toContain('custom-switch')
  })

  it('has focus-visible ring styles', () => {
    const wrapper = mount(Switch)

    const switchElement = wrapper.find('[role="switch"]')
    expect(switchElement.classes()).toContain('focus-visible:ring-2')
    expect(switchElement.classes()).toContain('focus-visible:ring-ring')
  })
})
