import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import { Input } from '../Input.vue'

describe('Input', () => {
  it('renders text input correctly', () => {
    const wrapper = mount(Input, {
      props: { type: 'text' },
    })

    const input = wrapper.find('input')
    expect(input.exists()).toBe(true)
    expect(input.attributes('type')).toBe('text')
  })

  it('handles v-model binding', async () => {
    const wrapper = mount(Input, {
      props: {
        modelValue: 'initial',
        'onUpdate:modelValue': (value: string) => wrapper.setProps({ modelValue: value }),
      },
    })

    const input = wrapper.find('input')
    expect(input.element.value).toBe('initial')

    await input.setValue('updated')
    expect(wrapper.props('modelValue')).toBe('updated')
  })

  it('shows placeholder text', () => {
    const wrapper = mount(Input, {
      props: { placeholder: 'Enter your name' },
    })

    expect(wrapper.find('input').attributes('placeholder')).toBe('Enter your name')
  })

  it('applies disabled state', () => {
    const wrapper = mount(Input, {
      props: { disabled: true },
    })

    expect(wrapper.find('input').attributes('disabled')).toBeDefined()
  })

  it('handles different input types', () => {
    const types = ['text', 'email', 'password', 'number', 'tel', 'url']

    types.forEach((type) => {
      const wrapper = mount(Input, {
        props: { type: type as any },
      })
      expect(wrapper.find('input').attributes('type')).toBe(type)
    })
  })

  it('emits input event on change', async () => {
    const wrapper = mount(Input)
    const input = wrapper.find('input')

    await input.setValue('test')
    await input.trigger('input')

    expect(wrapper.emitted('update:modelValue')).toBeTruthy()
  })

  it('shows error state with aria-invalid', () => {
    const wrapper = mount(Input, {
      props: { 'aria-invalid': 'true' },
    })

    expect(wrapper.find('input').attributes('aria-invalid')).toBe('true')
  })

  it('applies custom className', () => {
    const wrapper = mount(Input, {
      props: { class: 'custom-input' },
    })

    expect(wrapper.classes()).toContain('custom-input')
  })

  it('handles readonly state', () => {
    const wrapper = mount(Input, {
      props: { readonly: true },
    })

    expect(wrapper.find('input').attributes('readonly')).toBeDefined()
  })

  it('sets maxlength attribute', () => {
    const wrapper = mount(Input, {
      props: { maxlength: 50 },
    })

    expect(wrapper.find('input').attributes('maxlength')).toBe('50')
  })

  it('sets autocomplete attribute', () => {
    const wrapper = mount(Input, {
      props: { autocomplete: 'email' },
    })

    expect(wrapper.find('input').attributes('autocomplete')).toBe('email')
  })

  it('handles focus event', async () => {
    const wrapper = mount(Input)
    const input = wrapper.find('input')

    await input.trigger('focus')
    expect(wrapper.emitted('focus')).toBeTruthy()
  })

  it('handles blur event', async () => {
    const wrapper = mount(Input)
    const input = wrapper.find('input')

    await input.trigger('blur')
    expect(wrapper.emitted('blur')).toBeTruthy()
  })
})
