import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import { HeroSection } from '../HeroSection.vue'

describe('HeroSection', () => {
  it('renders title and description', () => {
    const wrapper = mount(HeroSection, {
      props: {
        title: 'Welcome to Galaxy UI',
        description: 'Beautiful components for modern web',
      },
    })

    expect(wrapper.text()).toContain('Welcome to Galaxy UI')
    expect(wrapper.text()).toContain('Beautiful components for modern web')
  })

  it('renders primary CTA button', () => {
    const wrapper = mount(HeroSection, {
      props: {
        title: 'Title',
        primaryCta: {
          label: 'Get Started',
          href: '/docs',
        },
      },
    })

    const button = wrapper.find('a')
    expect(button.text()).toContain('Get Started')
    expect(button.attributes('href')).toBe('/docs')
  })

  it('renders secondary CTA button', () => {
    const wrapper = mount(HeroSection, {
      props: {
        title: 'Title',
        secondaryCta: {
          label: 'Learn More',
          href: '/about',
        },
      },
    })

    const links = wrapper.findAll('a')
    expect(links[0].text()).toContain('Learn More')
    expect(links[0].attributes('href')).toBe('/about')
  })

  it('calls onClick handler for primary CTA', async () => {
    const onClick = vi.fn()
    const wrapper = mount(HeroSection, {
      props: {
        title: 'Title',
        primaryCta: {
          label: 'Click Me',
          onClick,
        },
      },
    })

    await wrapper.find('button').trigger('click')
    expect(onClick).toHaveBeenCalled()
  })

  it('renders with default variant', () => {
    const wrapper = mount(HeroSection, {
      props: {
        title: 'Title',
        variant: 'default',
      },
    })

    expect(wrapper.classes()).toContain('hero-default')
  })

  it('renders with centered variant', () => {
    const wrapper = mount(HeroSection, {
      props: {
        title: 'Title',
        variant: 'centered',
      },
    })

    expect(wrapper.find('.hero-centered').exists()).toBe(true)
  })

  it('renders with split variant', () => {
    const wrapper = mount(HeroSection, {
      props: {
        title: 'Title',
        variant: 'split',
        image: '/hero.jpg',
      },
    })

    expect(wrapper.find('.hero-split').exists()).toBe(true)
  })

  it('renders with cards variant', () => {
    const wrapper = mount(HeroSection, {
      props: {
        title: 'Title',
        variant: 'cards',
      },
    })

    expect(wrapper.find('.hero-cards').exists()).toBe(true)
  })

  it('renders image when provided', () => {
    const wrapper = mount(HeroSection, {
      props: {
        title: 'Title',
        image: '/hero-image.jpg',
      },
    })

    const img = wrapper.find('img')
    expect(img.exists()).toBe(true)
    expect(img.attributes('src')).toBe('/hero-image.jpg')
  })

  it('renders image with alt text', () => {
    const wrapper = mount(HeroSection, {
      props: {
        title: 'Title',
        image: '/hero.jpg',
        imageAlt: 'Hero image description',
      },
    })

    const img = wrapper.find('img')
    expect(img.attributes('alt')).toBe('Hero image description')
  })

  it('applies custom className', () => {
    const wrapper = mount(HeroSection, {
      props: {
        title: 'Title',
        className: 'custom-hero',
      },
    })

    expect(wrapper.classes()).toContain('custom-hero')
  })

  it('renders without CTAs', () => {
    const wrapper = mount(HeroSection, {
      props: {
        title: 'Title Only',
      },
    })

    expect(wrapper.find('button').exists()).toBe(false)
  })

  it('supports custom content slot', () => {
    const wrapper = mount(HeroSection, {
      props: {
        title: 'Title',
      },
      slots: {
        default: '<div class="custom-content">Custom Content</div>',
      },
    })

    expect(wrapper.find('.custom-content').exists()).toBe(true)
    expect(wrapper.text()).toContain('Custom Content')
  })

  it('renders badge or tag', () => {
    const wrapper = mount(HeroSection, {
      props: {
        title: 'Title',
        badge: 'New Release',
      },
    })

    expect(wrapper.text()).toContain('New Release')
  })
})
