import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { Avatar, AvatarImage, AvatarFallback } from '../index'

describe('Avatar', () => {
  it('renders avatar image', () => {
    const wrapper = mount({
      components: { Avatar, AvatarImage, AvatarFallback },
      template: `
        <Avatar>
          <AvatarImage src="/avatar.jpg" alt="User" />
          <AvatarFallback>UN</AvatarFallback>
        </Avatar>
      `,
    })

    expect(wrapper.find('img').exists()).toBe(true)
  })

  it('shows fallback when image fails to load', async () => {
    const wrapper = mount({
      components: { Avatar, AvatarImage, AvatarFallback },
      template: `
        <Avatar>
          <AvatarImage src="/invalid.jpg" alt="User" />
          <AvatarFallback>UN</AvatarFallback>
        </Avatar>
      `,
    })

    const img = wrapper.find('img')
    await img.trigger('error')

    expect(wrapper.text()).toContain('UN')
  })

  it('displays fallback initials', () => {
    const wrapper = mount({
      components: { Avatar, AvatarFallback },
      template: `
        <Avatar>
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
      `,
    })

    expect(wrapper.text()).toContain('JD')
  })

  it('renders with different sizes', () => {
    const sizes = ['sm', 'default', 'lg']

    sizes.forEach((size) => {
      const wrapper = mount({
        components: { Avatar, AvatarFallback },
        template: `
          <Avatar :size="size">
            <AvatarFallback>UN</AvatarFallback>
          </Avatar>
        `,
        data() {
          return { size }
        },
      })

      expect(wrapper.exists()).toBe(true)
    })
  })

  it('renders circular shape by default', () => {
    const wrapper = mount({
      components: { Avatar, AvatarFallback },
      template: `
        <Avatar>
          <AvatarFallback>UN</AvatarFallback>
        </Avatar>
      `,
    })

    expect(wrapper.classes()).toContain('rounded-full')
  })

  it('renders square shape when specified', () => {
    const wrapper = mount({
      components: { Avatar, AvatarFallback },
      template: `
        <Avatar shape="square">
          <AvatarFallback>UN</AvatarFallback>
        </Avatar>
      `,
    })

    expect(wrapper.classes()).toContain('rounded-md')
  })

  it('has alt text for accessibility', () => {
    const wrapper = mount({
      components: { Avatar, AvatarImage, AvatarFallback },
      template: `
        <Avatar>
          <AvatarImage src="/avatar.jpg" alt="John Doe" />
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
      `,
    })

    const img = wrapper.find('img')
    expect(img.attributes('alt')).toBe('John Doe')
  })

  it('applies custom className', () => {
    const wrapper = mount({
      components: { Avatar, AvatarFallback },
      template: `
        <Avatar class="custom-avatar">
          <AvatarFallback>UN</AvatarFallback>
        </Avatar>
      `,
    })

    expect(wrapper.classes()).toContain('custom-avatar')
  })

  it('loads image from src', () => {
    const wrapper = mount({
      components: { Avatar, AvatarImage, AvatarFallback },
      template: `
        <Avatar>
          <AvatarImage src="https://example.com/avatar.jpg" />
          <AvatarFallback>UN</AvatarFallback>
        </Avatar>
      `,
    })

    const img = wrapper.find('img')
    expect(img.attributes('src')).toBe('https://example.com/avatar.jpg')
  })

  it('handles missing image gracefully', () => {
    const wrapper = mount({
      components: { Avatar, AvatarFallback },
      template: `
        <Avatar>
          <AvatarFallback>UN</AvatarFallback>
        </Avatar>
      `,
    })

    expect(wrapper.text()).toContain('UN')
  })
})
