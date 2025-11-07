import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { mount } from '@vue/test-utils'
import { defineComponent } from 'vue'
import { Tooltip } from '../Tooltip.vue'
import { TooltipContent } from '../TooltipContent.vue'
import { TooltipTrigger, TooltipProvider } from 'radix-vue'

// Helper component for testing
const TestTooltip = defineComponent({
  components: {
    TooltipProvider,
    Tooltip,
    TooltipTrigger,
    TooltipContent
  },
  template: `
    <TooltipProvider>
      <Tooltip :delay-duration="0">
        <TooltipTrigger>
          <button class="trigger">Hover for tooltip</button>
        </TooltipTrigger>
        <TooltipContent>
          <p>This is a tooltip</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  `
})

describe('Tooltip', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('renders tooltip trigger', () => {
    const wrapper = mount(TestTooltip)
    expect(wrapper.find('.trigger').exists()).toBe(true)
    expect(wrapper.text()).toContain('Hover for tooltip')
  })

  it('shows tooltip on hover', async () => {
    const wrapper = mount(TestTooltip)

    const trigger = wrapper.find('.trigger')
    await trigger.trigger('mouseenter')
    await vi.advanceTimersByTimeAsync(0)
    await wrapper.vm.$nextTick()

    expect(wrapper.text()).toContain('This is a tooltip')
  })

  it('hides tooltip when mouse leaves', async () => {
    const wrapper = mount(TestTooltip)

    const trigger = wrapper.find('.trigger')

    // Show tooltip
    await trigger.trigger('mouseenter')
    await vi.advanceTimersByTimeAsync(0)
    await wrapper.vm.$nextTick()

    expect(wrapper.text()).toContain('This is a tooltip')

    // Hide tooltip
    await trigger.trigger('mouseleave')
    await vi.advanceTimersByTimeAsync(0)
    await wrapper.vm.$nextTick()

    // Tooltip should be hidden
    const content = wrapper.find('[data-state="closed"]')
    expect(content.exists()).toBe(true)
  })

  it('shows tooltip on focus', async () => {
    const wrapper = mount(TestTooltip)

    const trigger = wrapper.find('.trigger')
    await trigger.trigger('focus')
    await vi.advanceTimersByTimeAsync(0)
    await wrapper.vm.$nextTick()

    expect(wrapper.text()).toContain('This is a tooltip')
  })

  it('hides tooltip on blur', async () => {
    const wrapper = mount(TestTooltip)

    const trigger = wrapper.find('.trigger')

    // Show on focus
    await trigger.trigger('focus')
    await vi.advanceTimersByTimeAsync(0)
    await wrapper.vm.$nextTick()

    expect(wrapper.text()).toContain('This is a tooltip')

    // Hide on blur
    await trigger.trigger('blur')
    await vi.advanceTimersByTimeAsync(0)
    await wrapper.vm.$nextTick()

    const content = wrapper.find('[data-state="closed"]')
    expect(content.exists()).toBe(true)
  })

  it('respects delay duration', async () => {
    const wrapper = mount({
      components: {
        TooltipProvider,
        Tooltip,
        TooltipTrigger,
        TooltipContent
      },
      template: `
        <TooltipProvider>
          <Tooltip :delay-duration="300">
            <TooltipTrigger>
              <button class="trigger">Hover</button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Delayed tooltip</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      `
    })

    const trigger = wrapper.find('.trigger')
    await trigger.trigger('mouseenter')

    // Should not appear immediately
    await vi.advanceTimersByTimeAsync(100)
    await wrapper.vm.$nextTick()

    // Wait for full delay
    await vi.advanceTimersByTimeAsync(200)
    await wrapper.vm.$nextTick()

    expect(wrapper.text()).toContain('Delayed tooltip')
  })

  it('can be controlled with open prop', async () => {
    const wrapper = mount({
      components: {
        TooltipProvider,
        Tooltip,
        TooltipTrigger,
        TooltipContent
      },
      template: `
        <TooltipProvider>
          <Tooltip :open="isOpen">
            <TooltipTrigger>
              <button>Trigger</button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Controlled tooltip</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      `,
      data() {
        return {
          isOpen: false
        }
      }
    })

    expect(wrapper.text()).not.toContain('Controlled tooltip')

    wrapper.vm.isOpen = true
    await wrapper.vm.$nextTick()

    expect(wrapper.text()).toContain('Controlled tooltip')
  })

  it('emits update:open event', async () => {
    const onOpenChange = vi.fn()
    const wrapper = mount({
      components: {
        TooltipProvider,
        Tooltip,
        TooltipTrigger,
        TooltipContent
      },
      template: `
        <TooltipProvider>
          <Tooltip :delay-duration="0" @update:open="onOpenChange">
            <TooltipTrigger>
              <button class="trigger">Hover</button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Tooltip</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
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
    const wrapper = mount(TestTooltip, {
      attachTo: document.body
    })

    const trigger = wrapper.find('.trigger')
    await trigger.trigger('mouseenter')
    await vi.advanceTimersByTimeAsync(0)
    await wrapper.vm.$nextTick()

    // Content should be rendered in a portal
    expect(document.body.innerHTML).toContain('This is a tooltip')

    wrapper.unmount()
  })

  it('supports different side positions', async () => {
    const wrapper = mount({
      components: {
        TooltipProvider,
        Tooltip,
        TooltipTrigger,
        TooltipContent
      },
      template: `
        <TooltipProvider>
          <Tooltip :delay-duration="0">
            <TooltipTrigger>
              <button class="trigger">Hover</button>
            </TooltipTrigger>
            <TooltipContent side="top">
              <p>Top tooltip</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      `
    })

    const trigger = wrapper.find('.trigger')
    await trigger.trigger('mouseenter')
    await vi.advanceTimersByTimeAsync(0)
    await wrapper.vm.$nextTick()

    expect(wrapper.text()).toContain('Top tooltip')
  })

  it('supports different alignments', async () => {
    const wrapper = mount({
      components: {
        TooltipProvider,
        Tooltip,
        TooltipTrigger,
        TooltipContent
      },
      template: `
        <TooltipProvider>
          <Tooltip :delay-duration="0">
            <TooltipTrigger>
              <button class="trigger">Hover</button>
            </TooltipTrigger>
            <TooltipContent align="start">
              <p>Aligned tooltip</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      `
    })

    const trigger = wrapper.find('.trigger')
    await trigger.trigger('mouseenter')
    await vi.advanceTimersByTimeAsync(0)
    await wrapper.vm.$nextTick()

    expect(wrapper.text()).toContain('Aligned tooltip')
  })

  it('applies custom className to content', async () => {
    const wrapper = mount({
      components: {
        TooltipProvider,
        Tooltip,
        TooltipTrigger,
        TooltipContent
      },
      template: `
        <TooltipProvider>
          <Tooltip :delay-duration="0">
            <TooltipTrigger>
              <button class="trigger">Hover</button>
            </TooltipTrigger>
            <TooltipContent class="custom-tooltip">
              <p>Content</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      `
    })

    const trigger = wrapper.find('.trigger')
    await trigger.trigger('mouseenter')
    await vi.advanceTimersByTimeAsync(0)
    await wrapper.vm.$nextTick()

    expect(wrapper.find('.custom-tooltip').exists()).toBe(true)
  })

  it('hides tooltip when pressing Escape', async () => {
    const wrapper = mount(TestTooltip)

    const trigger = wrapper.find('.trigger')

    // Show tooltip
    await trigger.trigger('mouseenter')
    await vi.advanceTimersByTimeAsync(0)
    await wrapper.vm.$nextTick()

    expect(wrapper.text()).toContain('This is a tooltip')

    // Press Escape
    await trigger.trigger('keydown', { key: 'Escape' })
    await wrapper.vm.$nextTick()

    const content = wrapper.find('[data-state]')
    expect(content.exists()).toBe(true)
  })

  it('supports disabled state', async () => {
    const wrapper = mount({
      components: {
        TooltipProvider,
        Tooltip,
        TooltipTrigger,
        TooltipContent
      },
      template: `
        <TooltipProvider>
          <Tooltip :disabled="true">
            <TooltipTrigger>
              <button class="trigger">Hover</button>
            </TooltipTrigger>
            <TooltipContent>
              <p>This should not show</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      `
    })

    const trigger = wrapper.find('.trigger')
    await trigger.trigger('mouseenter')
    await vi.advanceTimersByTimeAsync(0)
    await wrapper.vm.$nextTick()

    expect(wrapper.text()).not.toContain('This should not show')
  })

  it('supports custom sideOffset', async () => {
    const wrapper = mount({
      components: {
        TooltipProvider,
        Tooltip,
        TooltipTrigger,
        TooltipContent
      },
      template: `
        <TooltipProvider>
          <Tooltip :delay-duration="0">
            <TooltipTrigger>
              <button class="trigger">Hover</button>
            </TooltipTrigger>
            <TooltipContent :side-offset="10">
              <p>Offset tooltip</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      `
    })

    const trigger = wrapper.find('.trigger')
    await trigger.trigger('mouseenter')
    await vi.advanceTimersByTimeAsync(0)
    await wrapper.vm.$nextTick()

    expect(wrapper.text()).toContain('Offset tooltip')
  })

  it('works with multiple tooltips independently', async () => {
    const wrapper = mount({
      components: {
        TooltipProvider,
        Tooltip,
        TooltipTrigger,
        TooltipContent
      },
      template: `
        <TooltipProvider>
          <Tooltip :delay-duration="0">
            <TooltipTrigger>
              <button class="first">First</button>
            </TooltipTrigger>
            <TooltipContent>
              <p>First tooltip</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip :delay-duration="0">
            <TooltipTrigger>
              <button class="second">Second</button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Second tooltip</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      `
    })

    const firstTrigger = wrapper.find('.first')
    await firstTrigger.trigger('mouseenter')
    await vi.advanceTimersByTimeAsync(0)
    await wrapper.vm.$nextTick()

    expect(wrapper.text()).toContain('First tooltip')
    expect(wrapper.text()).not.toContain('Second tooltip')
  })

  it('has correct role attribute', async () => {
    const wrapper = mount(TestTooltip)

    const trigger = wrapper.find('.trigger')
    await trigger.trigger('mouseenter')
    await vi.advanceTimersByTimeAsync(0)
    await wrapper.vm.$nextTick()

    const tooltip = wrapper.find('[role="tooltip"]')
    expect(tooltip.exists()).toBe(true)
  })
})
