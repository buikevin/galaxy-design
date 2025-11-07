import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { Progress } from '../Progress.vue'

describe('Progress', () => {
  it('renders progress bar', () => {
    const wrapper = mount(Progress, {
      props: { value: 50 },
    })

    expect(wrapper.find('[role="progressbar"]').exists()).toBe(true)
  })

  it('shows correct progress value', () => {
    const wrapper = mount(Progress, {
      props: { value: 75 },
    })

    const progressbar = wrapper.find('[role="progressbar"]')
    expect(progressbar.attributes('aria-valuenow')).toBe('75')
  })

  it('renders with 0% progress', () => {
    const wrapper = mount(Progress, {
      props: { value: 0 },
    })

    const progressbar = wrapper.find('[role="progressbar"]')
    expect(progressbar.attributes('aria-valuenow')).toBe('0')
  })

  it('renders with 100% progress', () => {
    const wrapper = mount(Progress, {
      props: { value: 100 },
    })

    const progressbar = wrapper.find('[role="progressbar"]')
    expect(progressbar.attributes('aria-valuenow')).toBe('100')
  })

  it('shows indeterminate state', () => {
    const wrapper = mount(Progress, {
      props: { value: null },
    })

    const progressbar = wrapper.find('[role="progressbar"]')
    expect(progressbar.attributes('data-state')).toBe('indeterminate')
  })

  it('has min and max attributes', () => {
    const wrapper = mount(Progress, {
      props: { value: 50, min: 0, max: 100 },
    })

    const progressbar = wrapper.find('[role="progressbar"]')
    expect(progressbar.attributes('aria-valuemin')).toBe('0')
    expect(progressbar.attributes('aria-valuemax')).toBe('100')
  })

  it('renders with custom max value', () => {
    const wrapper = mount(Progress, {
      props: { value: 50, max: 200 },
    })

    const progressbar = wrapper.find('[role="progressbar"]')
    expect(progressbar.attributes('aria-valuemax')).toBe('200')
  })

  it('applies custom className', () => {
    const wrapper = mount(Progress, {
      props: { value: 50, class: 'custom-progress' },
    })

    expect(wrapper.classes()).toContain('custom-progress')
  })

  it('renders different sizes', () => {
    const sizes = ['sm', 'default', 'lg']

    sizes.forEach((size) => {
      const wrapper = mount(Progress, {
        props: { value: 50, size: size as any },
      })

      expect(wrapper.exists()).toBe(true)
    })
  })

  it('renders different variants/colors', () => {
    const variants = ['default', 'success', 'warning', 'destructive']

    variants.forEach((variant) => {
      const wrapper = mount(Progress, {
        props: { value: 50, variant: variant as any },
      })

      expect(wrapper.exists()).toBe(true)
    })
  })

  it('shows animation when animated', () => {
    const wrapper = mount(Progress, {
      props: { value: 50, animated: true },
    })

    const indicator = wrapper.find('.progress-indicator')
    expect(indicator.classes()).toContain('animate')
  })

  it('updates value reactively', async () => {
    const wrapper = mount(Progress, {
      props: { value: 30 },
    })

    let progressbar = wrapper.find('[role="progressbar"]')
    expect(progressbar.attributes('aria-valuenow')).toBe('30')

    await wrapper.setProps({ value: 70 })

    progressbar = wrapper.find('[role="progressbar"]')
    expect(progressbar.attributes('aria-valuenow')).toBe('70')
  })

  it('clamps value between min and max', () => {
    const wrapper = mount(Progress, {
      props: { value: 150, min: 0, max: 100 },
    })

    const progressbar = wrapper.find('[role="progressbar"]')
    expect(progressbar.attributes('aria-valuenow')).toBe('100')
  })
})
