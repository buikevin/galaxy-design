import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { Textarea } from '../Textarea.vue'

describe('Textarea', () => {
  it('renders textarea correctly', () => {
    const wrapper = mount(Textarea)
    expect(wrapper.find('textarea').exists()).toBe(true)
  })

  it('displays placeholder text', () => {
    const wrapper = mount(Textarea, {
      props: { placeholder: 'Enter your message...' }
    })

    const textarea = wrapper.find('textarea')
    expect(textarea.attributes('placeholder')).toBe('Enter your message...')
  })

  it('binds v-model correctly', async () => {
    const wrapper = mount(Textarea, {
      props: {
        modelValue: 'Initial text'
      }
    })

    const textarea = wrapper.find('textarea')
    expect(textarea.element.value).toBe('Initial text')
  })

  it('updates modelValue on input', async () => {
    const wrapper = mount(Textarea, {
      props: {
        modelValue: '',
        'onUpdate:modelValue': (value: string) => wrapper.setProps({ modelValue: value })
      }
    })

    const textarea = wrapper.find('textarea')
    await textarea.setValue('New text content')

    expect(wrapper.props('modelValue')).toBe('New text content')
  })

  it('emits update:modelValue event', async () => {
    const wrapper = mount(Textarea, {
      props: { modelValue: '' }
    })

    const textarea = wrapper.find('textarea')
    await textarea.setValue('Hello world')

    expect(wrapper.emitted()).toHaveProperty('update:modelValue')
    expect(wrapper.emitted('update:modelValue')?.[0]).toEqual(['Hello world'])
  })

  it('accepts custom rows prop', () => {
    const wrapper = mount(Textarea, {
      props: { rows: 10 }
    })

    const textarea = wrapper.find('textarea')
    expect(textarea.attributes('rows')).toBe('10')
  })

  it('has default min-h-[80px] height', () => {
    const wrapper = mount(Textarea)

    const textarea = wrapper.find('textarea')
    expect(textarea.classes()).toContain('min-h-[80px]')
  })

  it('disables textarea when disabled prop is true', () => {
    const wrapper = mount(Textarea, {
      props: { disabled: true }
    })

    const textarea = wrapper.find('textarea')
    expect(textarea.attributes('disabled')).toBeDefined()
  })

  it('has disabled styling when disabled', () => {
    const wrapper = mount(Textarea, {
      props: { disabled: true }
    })

    const textarea = wrapper.find('textarea')
    expect(textarea.classes()).toContain('disabled:cursor-not-allowed')
    expect(textarea.classes()).toContain('disabled:opacity-50')
  })

  it('does not emit events when disabled', async () => {
    const wrapper = mount(Textarea, {
      props: {
        modelValue: '',
        disabled: true
      }
    })

    const textarea = wrapper.find('textarea')
    await textarea.trigger('input')

    // Disabled textarea should not update value
    expect(wrapper.emitted('update:modelValue')).toBeFalsy()
  })

  it('applies custom className', () => {
    const wrapper = mount(Textarea, {
      props: { class: 'custom-textarea' }
    })

    expect(wrapper.find('textarea').classes()).toContain('custom-textarea')
  })

  it('has focus-visible ring styles', () => {
    const wrapper = mount(Textarea)

    const textarea = wrapper.find('textarea')
    expect(textarea.classes()).toContain('focus-visible:ring-2')
    expect(textarea.classes()).toContain('focus-visible:ring-ring')
  })

  it('handles multiline text correctly', async () => {
    const multilineText = 'Line 1\nLine 2\nLine 3'
    const wrapper = mount(Textarea, {
      props: { modelValue: multilineText }
    })

    const textarea = wrapper.find('textarea')
    expect(textarea.element.value).toBe(multilineText)
  })

  it('handles empty value', () => {
    const wrapper = mount(Textarea, {
      props: { modelValue: '' }
    })

    const textarea = wrapper.find('textarea')
    expect(textarea.element.value).toBe('')
  })

  it('supports number type for modelValue', async () => {
    const wrapper = mount(Textarea, {
      props: { modelValue: 12345 }
    })

    const textarea = wrapper.find('textarea')
    expect(textarea.element.value).toBe('12345')
  })

  it('has correct border and background styles', () => {
    const wrapper = mount(Textarea)

    const textarea = wrapper.find('textarea')
    expect(textarea.classes()).toContain('border')
    expect(textarea.classes()).toContain('border-input')
    expect(textarea.classes()).toContain('bg-background')
  })

  it('has correct padding styles', () => {
    const wrapper = mount(Textarea)

    const textarea = wrapper.find('textarea')
    expect(textarea.classes()).toContain('px-3')
    expect(textarea.classes()).toContain('py-2')
  })

  it('handles focus and blur events', async () => {
    const wrapper = mount(Textarea)

    const textarea = wrapper.find('textarea')

    await textarea.trigger('focus')
    expect(wrapper.emitted()).toHaveProperty('focus')

    await textarea.trigger('blur')
    expect(wrapper.emitted()).toHaveProperty('blur')
  })
})
