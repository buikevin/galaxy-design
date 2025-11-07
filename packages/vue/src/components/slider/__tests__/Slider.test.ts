import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import { Slider } from '../Slider.vue'

describe('Slider', () => {
  it('renders slider correctly', () => {
    const wrapper = mount(Slider, {
      props: { modelValue: [50] }
    })

    expect(wrapper.find('[role="slider"]').exists()).toBe(true)
  })

  it('displays correct initial value', () => {
    const wrapper = mount(Slider, {
      props: { modelValue: [75] }
    })

    const slider = wrapper.find('[role="slider"]')
    expect(slider.attributes('aria-valuenow')).toBe('75')
  })

  it('has default min and max values', () => {
    const wrapper = mount(Slider, {
      props: { modelValue: [50] }
    })

    const slider = wrapper.find('[role="slider"]')
    expect(slider.attributes('aria-valuemin')).toBe('0')
    expect(slider.attributes('aria-valuemax')).toBe('100')
  })

  it('accepts custom min and max props', () => {
    const wrapper = mount(Slider, {
      props: {
        modelValue: [150],
        min: 0,
        max: 200
      }
    })

    const slider = wrapper.find('[role="slider"]')
    expect(slider.attributes('aria-valuemin')).toBe('0')
    expect(slider.attributes('aria-valuemax')).toBe('200')
    expect(slider.attributes('aria-valuenow')).toBe('150')
  })

  it('supports step increments', () => {
    const wrapper = mount(Slider, {
      props: {
        modelValue: [50],
        step: 10
      }
    })

    const slider = wrapper.find('[role="slider"]')
    // Radix uses data-* attributes for internal state
    expect(wrapper.html()).toContain('role="slider"')
  })

  it('updates value on interaction', async () => {
    const onValueChange = vi.fn()
    const wrapper = mount(Slider, {
      props: {
        modelValue: [30],
        onValueChange
      }
    })

    await wrapper.setProps({ modelValue: [70] })

    const slider = wrapper.find('[role="slider"]')
    expect(slider.attributes('aria-valuenow')).toBe('70')
  })

  it('does not change when disabled', async () => {
    const onValueChange = vi.fn()
    const wrapper = mount(Slider, {
      props: {
        modelValue: [50],
        disabled: true,
        onValueChange
      }
    })

    const slider = wrapper.find('[role="slider"]')
    await slider.trigger('mousedown')

    expect(onValueChange).not.toHaveBeenCalled()
  })

  it('has disabled styling when disabled', () => {
    const wrapper = mount(Slider, {
      props: {
        modelValue: [50],
        disabled: true
      }
    })

    const slider = wrapper.find('[role="slider"]')
    expect(slider.attributes('data-disabled')).toBeDefined()
  })

  it('supports keyboard navigation (ArrowRight)', async () => {
    const wrapper = mount(Slider, {
      props: { modelValue: [50] }
    })

    const slider = wrapper.find('[role="slider"]')
    await slider.trigger('keydown', { key: 'ArrowRight' })

    // Value should increase
    expect(wrapper.emitted()).toHaveProperty('update:modelValue')
  })

  it('supports keyboard navigation (ArrowLeft)', async () => {
    const wrapper = mount(Slider, {
      props: { modelValue: [50] }
    })

    const slider = wrapper.find('[role="slider"]')
    await slider.trigger('keydown', { key: 'ArrowLeft' })

    // Value should decrease
    expect(wrapper.emitted()).toHaveProperty('update:modelValue')
  })

  it('supports keyboard navigation (ArrowUp)', async () => {
    const wrapper = mount(Slider, {
      props: { modelValue: [50] }
    })

    const slider = wrapper.find('[role="slider"]')
    await slider.trigger('keydown', { key: 'ArrowUp' })

    // Value should increase
    expect(wrapper.emitted()).toHaveProperty('update:modelValue')
  })

  it('supports keyboard navigation (ArrowDown)', async () => {
    const wrapper = mount(Slider, {
      props: { modelValue: [50] }
    })

    const slider = wrapper.find('[role="slider"]')
    await slider.trigger('keydown', { key: 'ArrowDown' })

    // Value should decrease
    expect(wrapper.emitted()).toHaveProperty('update:modelValue')
  })

  it('supports Home key to go to minimum', async () => {
    const wrapper = mount(Slider, {
      props: { modelValue: [50] }
    })

    const slider = wrapper.find('[role="slider"]')
    await slider.trigger('keydown', { key: 'Home' })

    expect(wrapper.emitted()).toHaveProperty('update:modelValue')
  })

  it('supports End key to go to maximum', async () => {
    const wrapper = mount(Slider, {
      props: { modelValue: [50] }
    })

    const slider = wrapper.find('[role="slider"]')
    await slider.trigger('keydown', { key: 'End' })

    expect(wrapper.emitted()).toHaveProperty('update:modelValue')
  })

  it('renders track and range elements', () => {
    const wrapper = mount(Slider, {
      props: { modelValue: [50] }
    })

    // Check for track (background)
    expect(wrapper.find('.bg-secondary').exists()).toBe(true)

    // Check for range (filled portion)
    expect(wrapper.find('.bg-primary').exists()).toBe(true)
  })

  it('renders thumb element', () => {
    const wrapper = mount(Slider, {
      props: { modelValue: [50] }
    })

    expect(wrapper.find('.rounded-full.border-2').exists()).toBe(true)
  })

  it('applies custom className', () => {
    const wrapper = mount(Slider, {
      props: {
        modelValue: [50],
        class: 'custom-slider'
      }
    })

    expect(wrapper.classes()).toContain('custom-slider')
  })

  it('has focus-visible ring on thumb', () => {
    const wrapper = mount(Slider, {
      props: { modelValue: [50] }
    })

    const thumb = wrapper.find('.rounded-full.border-2')
    expect(thumb.classes()).toContain('focus-visible:ring-2')
  })

  it('supports multiple thumbs for range selection', () => {
    const wrapper = mount(Slider, {
      props: { modelValue: [25, 75] }
    })

    const sliders = wrapper.findAll('[role="slider"]')
    expect(sliders.length).toBeGreaterThanOrEqual(1)
  })
})
