import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '../index'

describe('Card', () => {
  it('renders card with all sections', () => {
    const wrapper = mount({
      components: { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter },
      template: `
        <Card>
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent>Card Content</CardContent>
          <CardFooter>Card Footer</CardFooter>
        </Card>
      `,
    })

    expect(wrapper.text()).toContain('Card Title')
    expect(wrapper.text()).toContain('Card Description')
    expect(wrapper.text()).toContain('Card Content')
    expect(wrapper.text()).toContain('Card Footer')
  })

  it('renders card with title only', () => {
    const wrapper = mount({
      components: { Card, CardHeader, CardTitle, CardContent },
      template: `
        <Card>
          <CardHeader>
            <CardTitle>Simple Card</CardTitle>
          </CardHeader>
          <CardContent>Content here</CardContent>
        </Card>
      `,
    })

    expect(wrapper.text()).toContain('Simple Card')
    expect(wrapper.text()).toContain('Content here')
  })

  it('renders card with content only', () => {
    const wrapper = mount({
      components: { Card, CardContent },
      template: `
        <Card>
          <CardContent>Just content</CardContent>
        </Card>
      `,
    })

    expect(wrapper.text()).toContain('Just content')
  })

  it('renders clickable card', async () => {
    const onClick = vi.fn()
    const wrapper = mount({
      components: { Card, CardContent },
      template: `
        <Card @click="onClick" class="clickable">
          <CardContent>Clickable Card</CardContent>
        </Card>
      `,
      methods: { onClick },
    })

    await wrapper.trigger('click')
    expect(onClick).toHaveBeenCalled()
  })

  it('applies custom className', () => {
    const wrapper = mount({
      components: { Card, CardContent },
      template: `
        <Card class="custom-card">
          <CardContent>Content</CardContent>
        </Card>
      `,
    })

    expect(wrapper.classes()).toContain('custom-card')
  })

  it('renders with different variants', () => {
    const variants = ['default', 'outlined', 'elevated']

    variants.forEach((variant) => {
      const wrapper = mount({
        components: { Card, CardContent },
        template: `
          <Card :variant="variant">
            <CardContent>Content</CardContent>
          </Card>
        `,
        data() {
          return { variant }
        },
      })

      expect(wrapper.exists()).toBe(true)
    })
  })

  it('renders with image', () => {
    const wrapper = mount({
      components: { Card, CardHeader, CardContent },
      template: `
        <Card>
          <img src="/image.jpg" alt="Card image" />
          <CardHeader>
            <CardTitle>Title</CardTitle>
          </CardHeader>
          <CardContent>Content</CardContent>
        </Card>
      `,
    })

    const img = wrapper.find('img')
    expect(img.exists()).toBe(true)
    expect(img.attributes('src')).toBe('/image.jpg')
  })

  it('renders footer with actions', () => {
    const wrapper = mount({
      components: { Card, CardContent, CardFooter },
      template: `
        <Card>
          <CardContent>Content</CardContent>
          <CardFooter>
            <button>Cancel</button>
            <button>Save</button>
          </CardFooter>
        </Card>
      `,
    })

    const buttons = wrapper.findAll('button')
    expect(buttons).toHaveLength(2)
    expect(buttons[0].text()).toBe('Cancel')
    expect(buttons[1].text()).toBe('Save')
  })

  it('renders with hover effect', () => {
    const wrapper = mount({
      components: { Card, CardContent },
      template: `
        <Card hover>
          <CardContent>Hover me</CardContent>
        </Card>
      `,
    })

    expect(wrapper.classes()).toContain('hover-effect')
  })

  it('renders as disabled', () => {
    const wrapper = mount({
      components: { Card, CardContent },
      template: `
        <Card disabled>
          <CardContent>Disabled</CardContent>
        </Card>
      `,
    })

    expect(wrapper.classes()).toContain('opacity-50')
  })

  it('supports custom padding', () => {
    const wrapper = mount({
      components: { Card, CardContent },
      template: `
        <Card padding="none">
          <CardContent>No padding</CardContent>
        </Card>
      `,
    })

    expect(wrapper.classes()).toContain('p-0')
  })
})
