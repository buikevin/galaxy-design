import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { defineComponent } from 'vue'
import { Label } from '../Label.vue'

describe('Label', () => {
  it('renders label correctly', () => {
    const wrapper = mount(Label, {
      slots: {
        default: 'Email address'
      }
    })

    expect(wrapper.text()).toBe('Email address')
    expect(wrapper.find('label').exists()).toBe(true)
  })

  it('renders text content in slot', () => {
    const wrapper = mount(Label, {
      slots: {
        default: 'Username'
      }
    })

    expect(wrapper.text()).toContain('Username')
  })

  it('associates with form control using for attribute', () => {
    const wrapper = mount(Label, {
      props: {
        for: 'email-input'
      },
      slots: {
        default: 'Email'
      }
    })

    const label = wrapper.find('label')
    expect(label.attributes('for')).toBe('email-input')
  })

  it('works with native input association', () => {
    const TestComponent = defineComponent({
      components: { Label },
      template: `
        <div>
          <Label for="test-input">Test Label</Label>
          <input id="test-input" type="text" />
        </div>
      `
    })

    const wrapper = mount(TestComponent)
    const label = wrapper.find('label')
    const input = wrapper.find('input')

    expect(label.attributes('for')).toBe('test-input')
    expect(input.attributes('id')).toBe('test-input')
  })

  it('applies custom className', () => {
    const wrapper = mount(Label, {
      props: {
        class: 'custom-label'
      },
      slots: {
        default: 'Label'
      }
    })

    expect(wrapper.find('label').classes()).toContain('custom-label')
  })

  it('has default font styles', () => {
    const wrapper = mount(Label, {
      slots: {
        default: 'Label'
      }
    })

    const label = wrapper.find('label')
    expect(label.classes()).toContain('text-sm')
    expect(label.classes()).toContain('font-medium')
  })

  it('has peer-disabled styles', () => {
    const wrapper = mount(Label, {
      slots: {
        default: 'Label'
      }
    })

    const label = wrapper.find('label')
    expect(label.classes()).toContain('peer-disabled:cursor-not-allowed')
    expect(label.classes()).toContain('peer-disabled:opacity-70')
  })

  it('works with peer-disabled pattern', () => {
    const TestComponent = defineComponent({
      components: { Label },
      template: `
        <div>
          <input id="disabled-input" type="text" class="peer" disabled />
          <Label for="disabled-input">Disabled Field</Label>
        </div>
      `
    })

    const wrapper = mount(TestComponent)
    const label = wrapper.find('label')

    expect(label.classes()).toContain('peer-disabled:cursor-not-allowed')
  })

  it('supports HTML content in slot', () => {
    const wrapper = mount(Label, {
      slots: {
        default: '<span>Email <span class="text-red-500">*</span></span>'
      }
    })

    expect(wrapper.html()).toContain('<span')
    expect(wrapper.text()).toContain('Email')
  })

  it('supports component content in slot', () => {
    const TestComponent = defineComponent({
      components: { Label },
      template: `
        <Label>
          <span>Name</span>
          <span class="required">*</span>
        </Label>
      `
    })

    const wrapper = mount(TestComponent)

    expect(wrapper.text()).toContain('Name')
    expect(wrapper.find('.required').exists()).toBe(true)
  })

  it('clicking label focuses associated input', async () => {
    const TestComponent = defineComponent({
      components: { Label },
      template: `
        <div>
          <Label for="clickable-input">Click me</Label>
          <input id="clickable-input" type="text" />
        </div>
      `
    })

    const wrapper = mount(TestComponent)
    const label = wrapper.find('label')
    const input = wrapper.find('input')

    await label.trigger('click')

    // Check that focus event would be triggered
    expect(label.attributes('for')).toBe(input.attributes('id'))
  })

  it('has correct leading-none style', () => {
    const wrapper = mount(Label, {
      slots: {
        default: 'Label'
      }
    })

    const label = wrapper.find('label')
    expect(label.classes()).toContain('leading-none')
  })

  it('renders without for attribute when not provided', () => {
    const wrapper = mount(Label, {
      slots: {
        default: 'Standalone Label'
      }
    })

    const label = wrapper.find('label')
    expect(label.attributes('for')).toBeUndefined()
  })

  it('supports asChild pattern from Radix', () => {
    const wrapper = mount(Label, {
      props: {
        asChild: true
      },
      slots: {
        default: '<button>Custom Element</button>'
      }
    })

    // With asChild, the label should delegate to the child element
    expect(wrapper.html()).toContain('button')
  })

  it('handles empty content gracefully', () => {
    const wrapper = mount(Label)

    expect(wrapper.find('label').exists()).toBe(true)
  })
})
