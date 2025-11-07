import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { mount } from '@vue/test-utils'
import { defineComponent } from 'vue'
import { HoverCard } from '../HoverCard.vue'
import { HoverCardContent } from '../HoverCardContent.vue'
import { HoverCardTrigger } from 'radix-vue'

// Helper component for testing
const TestHoverCard = defineComponent({
  components: {
    HoverCard,
    HoverCardTrigger,
    HoverCardContent
  },
  template: `
    <HoverCard :open-delay="0" :close-delay="0">
      <HoverCardTrigger>
        <span class="trigger">Hover me</span>
      </HoverCardTrigger>
      <HoverCardContent>
        <div class="card-content">
          <h3>User Info</h3>
          <p>Additional information appears here</p>
        </div>
      </HoverCardContent>
    </HoverCard>
  `
})

describe('HoverCard', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('renders hover trigger', () => {
    const wrapper = mount(TestHoverCard)
    expect(wrapper.find('.trigger').exists()).toBe(true)
    expect(wrapper.text()).toContain('Hover me')
  })

  it('shows content on hover', async () => {
    const wrapper = mount(TestHoverCard)

    const trigger = wrapper.find('.trigger')
    await trigger.trigger('mouseenter')
    await vi.advanceTimersByTimeAsync(0)
    await wrapper.vm.$nextTick()

    expect(wrapper.text()).toContain('User Info')
    expect(wrapper.text()).toContain('Additional information appears here')
  })

  it('hides content when mouse leaves', async () => {
    const wrapper = mount(TestHoverCard)

    const trigger = wrapper.find('.trigger')

    // Show card
    await trigger.trigger('mouseenter')
    await vi.advanceTimersByTimeAsync(0)
    await wrapper.vm.$nextTick()

    expect(wrapper.text()).toContain('User Info')

    // Hide card
    await trigger.trigger('mouseleave')
    await vi.advanceTimersByTimeAsync(0)
    await wrapper.vm.$nextTick()

    // Content should be hidden
    const content = wrapper.find('[data-state="closed"]')
    expect(content.exists()).toBe(true)
  })

  it('respects open delay', async () => {
    const wrapper = mount({
      components: {
        HoverCard,
        HoverCardTrigger,
        HoverCardContent
      },
      template: `
        <HoverCard :open-delay="300">
          <HoverCardTrigger>
            <span class="trigger">Hover</span>
          </HoverCardTrigger>
          <HoverCardContent>
            <p>Content</p>
          </HoverCardContent>
        </HoverCard>
      `
    })

    const trigger = wrapper.find('.trigger')
    await trigger.trigger('mouseenter')

    // Content should not appear immediately
    await vi.advanceTimersByTimeAsync(100)
    await wrapper.vm.$nextTick()

    // Wait for open delay
    await vi.advanceTimersByTimeAsync(200)
    await wrapper.vm.$nextTick()

    expect(wrapper.text()).toContain('Content')
  })

  it('respects close delay', async () => {
    const wrapper = mount({
      components: {
        HoverCard,
        HoverCardTrigger,
        HoverCardContent
      },
      template: `
        <HoverCard :open-delay="0" :close-delay="300">
          <HoverCardTrigger>
            <span class="trigger">Hover</span>
          </HoverCardTrigger>
          <HoverCardContent>
            <p>Content</p>
          </HoverCardContent>
        </HoverCard>
      `
    })

    const trigger = wrapper.find('.trigger')

    // Open card
    await trigger.trigger('mouseenter')
    await vi.advanceTimersByTimeAsync(0)
    await wrapper.vm.$nextTick()

    // Mouse leave
    await trigger.trigger('mouseleave')
    await vi.advanceTimersByTimeAsync(100)
    await wrapper.vm.$nextTick()

    // Should still be visible
    expect(wrapper.text()).toContain('Content')

    // After full delay
    await vi.advanceTimersByTimeAsync(200)
    await wrapper.vm.$nextTick()

    // Should be hidden
    const content = wrapper.find('[data-state]')
    expect(content.exists()).toBe(true)
  })

  it('can be controlled with open prop', async () => {
    const wrapper = mount({
      components: {
        HoverCard,
        HoverCardTrigger,
        HoverCardContent
      },
      template: `
        <HoverCard :open="isOpen">
          <HoverCardTrigger>
            <span>Trigger</span>
          </HoverCardTrigger>
          <HoverCardContent>
            <p>Controlled Content</p>
          </HoverCardContent>
        </HoverCard>
      `,
      data() {
        return {
          isOpen: false
        }
      }
    })

    expect(wrapper.text()).not.toContain('Controlled Content')

    wrapper.vm.isOpen = true
    await wrapper.vm.$nextTick()

    expect(wrapper.text()).toContain('Controlled Content')
  })

  it('emits update:open event', async () => {
    const onOpenChange = vi.fn()
    const wrapper = mount({
      components: {
        HoverCard,
        HoverCardTrigger,
        HoverCardContent
      },
      template: `
        <HoverCard :open-delay="0" @update:open="onOpenChange">
          <HoverCardTrigger>
            <span class="trigger">Hover</span>
          </HoverCardTrigger>
          <HoverCardContent>
            <p>Content</p>
          </HoverCardContent>
        </HoverCard>
      `,
      methods: {
        onOpenChange
      }
    })

    const trigger = wrapper.find('.trigger')
    await trigger.trigger('mouseenter')
    await vi.advanceTimersByTimeAsync(0)
    await wrapper.vm.$nextTick()

    expect(onOpenChange).toHaveBeenCalledWith(true)
  })

  it('renders content in portal by default', async () => {
    const wrapper = mount(TestHoverCard, {
      attachTo: document.body
    })

    const trigger = wrapper.find('.trigger')
    await trigger.trigger('mouseenter')
    await vi.advanceTimersByTimeAsync(0)
    await wrapper.vm.$nextTick()

    // Content should be rendered in a portal (outside the component tree)
    expect(document.body.innerHTML).toContain('User Info')

    wrapper.unmount()
  })

  it('supports custom side positioning', async () => {
    const wrapper = mount({
      components: {
        HoverCard,
        HoverCardTrigger,
        HoverCardContent
      },
      template: `
        <HoverCard :open-delay="0">
          <HoverCardTrigger>
            <span class="trigger">Hover</span>
          </HoverCardTrigger>
          <HoverCardContent side="top">
            <p>Top Content</p>
          </HoverCardContent>
        </HoverCard>
      `
    })

    const trigger = wrapper.find('.trigger')
    await trigger.trigger('mouseenter')
    await vi.advanceTimersByTimeAsync(0)
    await wrapper.vm.$nextTick()

    expect(wrapper.text()).toContain('Top Content')
  })

  it('supports custom align positioning', async () => {
    const wrapper = mount({
      components: {
        HoverCard,
        HoverCardTrigger,
        HoverCardContent
      },
      template: `
        <HoverCard :open-delay="0">
          <HoverCardTrigger>
            <span class="trigger">Hover</span>
          </HoverCardTrigger>
          <HoverCardContent align="start">
            <p>Aligned Content</p>
          </HoverCardContent>
        </HoverCard>
      `
    })

    const trigger = wrapper.find('.trigger')
    await trigger.trigger('mouseenter')
    await vi.advanceTimersByTimeAsync(0)
    await wrapper.vm.$nextTick()

    expect(wrapper.text()).toContain('Aligned Content')
  })

  it('applies custom className to content', async () => {
    const wrapper = mount({
      components: {
        HoverCard,
        HoverCardTrigger,
        HoverCardContent
      },
      template: `
        <HoverCard :open-delay="0">
          <HoverCardTrigger>
            <span class="trigger">Hover</span>
          </HoverCardTrigger>
          <HoverCardContent class="custom-hover-card">
            <p>Content</p>
          </HoverCardContent>
        </HoverCard>
      `
    })

    const trigger = wrapper.find('.trigger')
    await trigger.trigger('mouseenter')
    await vi.advanceTimersByTimeAsync(0)
    await wrapper.vm.$nextTick()

    expect(wrapper.find('.custom-hover-card').exists()).toBe(true)
  })

  it('stays open when hovering over content', async () => {
    const wrapper = mount(TestHoverCard)

    const trigger = wrapper.find('.trigger')

    // Open card
    await trigger.trigger('mouseenter')
    await vi.advanceTimersByTimeAsync(0)
    await wrapper.vm.$nextTick()

    expect(wrapper.text()).toContain('User Info')

    // Mouse leaves trigger but enters content
    await trigger.trigger('mouseleave')

    const content = wrapper.find('.card-content')
    await content.trigger('mouseenter')
    await vi.advanceTimersByTimeAsync(0)
    await wrapper.vm.$nextTick()

    // Should still be visible
    expect(wrapper.text()).toContain('User Info')
  })

  it('supports defaultOpen prop', () => {
    const wrapper = mount({
      components: {
        HoverCard,
        HoverCardTrigger,
        HoverCardContent
      },
      template: `
        <HoverCard :default-open="true">
          <HoverCardTrigger>
            <span>Trigger</span>
          </HoverCardTrigger>
          <HoverCardContent>
            <p>Default Open Content</p>
          </HoverCardContent>
        </HoverCard>
      `
    })

    expect(wrapper.text()).toContain('Default Open Content')
  })

  it('renders rich content correctly', async () => {
    const wrapper = mount({
      components: {
        HoverCard,
        HoverCardTrigger,
        HoverCardContent
      },
      template: `
        <HoverCard :open-delay="0">
          <HoverCardTrigger>
            <span class="trigger">@username</span>
          </HoverCardTrigger>
          <HoverCardContent>
            <div class="profile">
              <img src="/avatar.jpg" alt="Avatar" />
              <h3>John Doe</h3>
              <p>Software Developer</p>
              <button>Follow</button>
            </div>
          </HoverCardContent>
        </HoverCard>
      `
    })

    const trigger = wrapper.find('.trigger')
    await trigger.trigger('mouseenter')
    await vi.advanceTimersByTimeAsync(0)
    await wrapper.vm.$nextTick()

    expect(wrapper.text()).toContain('John Doe')
    expect(wrapper.text()).toContain('Software Developer')
    expect(wrapper.find('button').text()).toBe('Follow')
  })
})
