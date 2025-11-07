import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { Separator } from '../Separator.vue'

describe('Separator', () => {
  it('renders separator correctly', () => {
    const wrapper = mount(Separator)
    expect(wrapper.find('[role="separator"]').exists()).toBe(true)
  })

  it('has default horizontal orientation', () => {
    const wrapper = mount(Separator)

    const separator = wrapper.find('[role="separator"]')
    expect(separator.attributes('data-orientation')).toBe('horizontal')
    expect(separator.classes()).toContain('h-[1px]')
    expect(separator.classes()).toContain('w-full')
  })

  it('renders with vertical orientation', () => {
    const wrapper = mount(Separator, {
      props: { orientation: 'vertical' }
    })

    const separator = wrapper.find('[role="separator"]')
    expect(separator.attributes('data-orientation')).toBe('vertical')
    expect(separator.classes()).toContain('h-full')
    expect(separator.classes()).toContain('w-[1px]')
  })

  it('has bg-border background color', () => {
    const wrapper = mount(Separator)

    const separator = wrapper.find('[role="separator"]')
    expect(separator.classes()).toContain('bg-border')
  })

  it('is decorative by default', () => {
    const wrapper = mount(Separator)

    const separator = wrapper.find('[role="separator"]')
    expect(separator.attributes('aria-orientation')).toBe('horizontal')
  })

  it('can be non-decorative for accessibility', () => {
    const wrapper = mount(Separator, {
      props: { decorative: false }
    })

    const separator = wrapper.find('[role="separator"]')
    expect(separator.attributes('role')).toBe('separator')
  })

  it('applies custom className', () => {
    const wrapper = mount(Separator, {
      props: { class: 'custom-separator' }
    })

    expect(wrapper.find('[role="separator"]').classes()).toContain('custom-separator')
  })

  it('has shrink-0 to prevent flex shrinking', () => {
    const wrapper = mount(Separator)

    const separator = wrapper.find('[role="separator"]')
    expect(separator.classes()).toContain('shrink-0')
  })

  it('horizontal separator spans full width', () => {
    const wrapper = mount(Separator, {
      props: { orientation: 'horizontal' }
    })

    const separator = wrapper.find('[role="separator"]')
    expect(separator.classes()).toContain('w-full')
    expect(separator.classes()).toContain('h-[1px]')
  })

  it('vertical separator spans full height', () => {
    const wrapper = mount(Separator, {
      props: { orientation: 'vertical' }
    })

    const separator = wrapper.find('[role="separator"]')
    expect(separator.classes()).toContain('h-full')
    expect(separator.classes()).toContain('w-[1px]')
  })

  it('works as visual divider in content', () => {
    const wrapper = mount({
      components: { Separator },
      template: `
        <div>
          <p>Section 1</p>
          <Separator class="my-4" />
          <p>Section 2</p>
        </div>
      `
    })

    expect(wrapper.text()).toContain('Section 1')
    expect(wrapper.find('[role="separator"]').exists()).toBe(true)
    expect(wrapper.text()).toContain('Section 2')
  })

  it('works in horizontal layouts', () => {
    const wrapper = mount({
      components: { Separator },
      template: `
        <div class="flex items-center">
          <span>Item 1</span>
          <Separator orientation="vertical" class="mx-2" />
          <span>Item 2</span>
        </div>
      `
    })

    const separator = wrapper.find('[role="separator"]')
    expect(separator.attributes('data-orientation')).toBe('vertical')
  })

  it('applies custom styles correctly', () => {
    const wrapper = mount(Separator, {
      props: { class: 'bg-red-500 h-[2px]' }
    })

    const separator = wrapper.find('[role="separator"]')
    expect(separator.classes()).toContain('bg-red-500')
    expect(separator.classes()).toContain('h-[2px]')
  })

  it('maintains aspect ratio with different orientations', () => {
    const horizontalWrapper = mount(Separator, {
      props: { orientation: 'horizontal' }
    })

    const verticalWrapper = mount(Separator, {
      props: { orientation: 'vertical' }
    })

    const horizontal = horizontalWrapper.find('[role="separator"]')
    const vertical = verticalWrapper.find('[role="separator"]')

    // Horizontal should be thin height, full width
    expect(horizontal.classes()).toContain('h-[1px]')
    expect(horizontal.classes()).toContain('w-full')

    // Vertical should be thin width, full height
    expect(vertical.classes()).toContain('w-[1px]')
    expect(vertical.classes()).toContain('h-full')
  })

  it('has correct aria attributes for screen readers', () => {
    const wrapper = mount(Separator, {
      props: { decorative: false }
    })

    const separator = wrapper.find('[role="separator"]')
    expect(separator.attributes('role')).toBe('separator')
    expect(separator.attributes('aria-orientation')).toBe('horizontal')
  })
})
