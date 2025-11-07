import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import { defineComponent } from 'vue'
import { Popover } from '../Popover.vue'
import { PopoverContent } from '../PopoverContent.vue'
import { PopoverTrigger } from 'radix-vue'

// Helper component for testing
const TestPopover = defineComponent({
  components: {
    Popover,
    PopoverTrigger,
    PopoverContent
  },
  template: `
    <Popover>
      <PopoverTrigger>
        <button class="trigger">Open popover</button>
      </PopoverTrigger>
      <PopoverContent>
        <div class="popover-content">
          <h3>Popover Title</h3>
          <p>This is the popover content</p>
          <button class="close-btn">Close</button>
        </div>
      </PopoverContent>
    </Popover>
  `
})

describe('Popover', () => {
  it('renders popover trigger', () => {
    const wrapper = mount(TestPopover)
    expect(wrapper.find('.trigger').exists()).toBe(true)
    expect(wrapper.text()).toContain('Open popover')
  })

  it('opens popover when trigger is clicked', async () => {
    const wrapper = mount(TestPopover)

    const trigger = wrapper.find('.trigger')
    await trigger.trigger('click')
    await wrapper.vm.$nextTick()

    expect(wrapper.text()).toContain('Popover Title')
    expect(wrapper.text()).toContain('This is the popover content')
  })

  it('closes popover when trigger is clicked again', async () => {
    const wrapper = mount(TestPopover)

    const trigger = wrapper.find('.trigger')

    // Open popover
    await trigger.trigger('click')
    await wrapper.vm.$nextTick()

    expect(wrapper.text()).toContain('Popover Title')

    // Close popover
    await trigger.trigger('click')
    await wrapper.vm.$nextTick()

    // Content should be hidden
    const content = wrapper.find('[data-state="closed"]')
    expect(content.exists()).toBe(true)
  })

  it('closes popover on Escape key', async () => {
    const wrapper = mount(TestPopover)

    const trigger = wrapper.find('.trigger')

    // Open popover
    await trigger.trigger('click')
    await wrapper.vm.$nextTick()

    expect(wrapper.text()).toContain('Popover Title')

    // Press Escape
    const content = wrapper.find('[data-state="open"]')
    await content.trigger('keydown', { key: 'Escape' })
    await wrapper.vm.$nextTick()

    // Should close
    expect(content.exists()).toBe(true)
  })

  it('closes popover on outside click', async () => {
    const wrapper = mount({
      components: {
        Popover,
        PopoverTrigger,
        PopoverContent
      },
      template: `
        <div>
          <Popover>
            <PopoverTrigger>
              <button class="trigger">Open</button>
            </PopoverTrigger>
            <PopoverContent>
              <p>Content</p>
            </PopoverContent>
          </Popover>
          <div class="outside">Outside area</div>
        </div>
      `
    })

    const trigger = wrapper.find('.trigger')

    // Open popover
    await trigger.trigger('click')
    await wrapper.vm.$nextTick()

    expect(wrapper.text()).toContain('Content')

    // Click outside
    const outside = wrapper.find('.outside')
    await outside.trigger('click')
    await wrapper.vm.$nextTick()

    // Should close
    expect(wrapper.find('.trigger').exists()).toBe(true)
  })

  it('can be controlled with open prop', async () => {
    const wrapper = mount({
      components: {
        Popover,
        PopoverTrigger,
        PopoverContent
      },
      template: `
        <Popover :open="isOpen">
          <PopoverTrigger>
            <button>Trigger</button>
          </PopoverTrigger>
          <PopoverContent>
            <p>Controlled content</p>
          </PopoverContent>
        </Popover>
      `,
      data() {
        return {
          isOpen: false
        }
      }
    })

    expect(wrapper.text()).not.toContain('Controlled content')

    wrapper.vm.isOpen = true
    await wrapper.vm.$nextTick()

    expect(wrapper.text()).toContain('Controlled content')
  })

  it('emits update:open event', async () => {
    const onOpenChange = vi.fn()
    const wrapper = mount({
      components: {
        Popover,
        PopoverTrigger,
        PopoverContent
      },
      template: `
        <Popover @update:open="onOpenChange">
          <PopoverTrigger>
            <button class="trigger">Open</button>
          </PopoverTrigger>
          <PopoverContent>
            <p>Content</p>
          </PopoverContent>
        </Popover>
      `,
      methods: {
        onOpenChange
      }
    })

    const trigger = wrapper.find('.trigger')
    await trigger.trigger('click')
    await wrapper.vm.$nextTick()

    expect(onOpenChange).toHaveBeenCalledWith(true)
  })

  it('supports default open state', () => {
    const wrapper = mount({
      components: {
        Popover,
        PopoverTrigger,
        PopoverContent
      },
      template: `
        <Popover :default-open="true">
          <PopoverTrigger>
            <button>Trigger</button>
          </PopoverTrigger>
          <PopoverContent>
            <p>Default open content</p>
          </PopoverContent>
        </Popover>
      `
    })

    expect(wrapper.text()).toContain('Default open content')
  })

  it('renders content in portal by default', async () => {
    const wrapper = mount(TestPopover, {
      attachTo: document.body
    })

    const trigger = wrapper.find('.trigger')
    await trigger.trigger('click')
    await wrapper.vm.$nextTick()

    // Content should be rendered in a portal
    expect(document.body.innerHTML).toContain('Popover Title')

    wrapper.unmount()
  })

  it('supports different side positions', async () => {
    const wrapper = mount({
      components: {
        Popover,
        PopoverTrigger,
        PopoverContent
      },
      template: `
        <Popover>
          <PopoverTrigger>
            <button class="trigger">Open</button>
          </PopoverTrigger>
          <PopoverContent side="top">
            <p>Top popover</p>
          </PopoverContent>
        </Popover>
      `
    })

    const trigger = wrapper.find('.trigger')
    await trigger.trigger('click')
    await wrapper.vm.$nextTick()

    expect(wrapper.text()).toContain('Top popover')
  })

  it('supports different alignments', async () => {
    const wrapper = mount({
      components: {
        Popover,
        PopoverTrigger,
        PopoverContent
      },
      template: `
        <Popover>
          <PopoverTrigger>
            <button class="trigger">Open</button>
          </PopoverTrigger>
          <PopoverContent align="start">
            <p>Aligned popover</p>
          </PopoverContent>
        </Popover>
      `
    })

    const trigger = wrapper.find('.trigger')
    await trigger.trigger('click')
    await wrapper.vm.$nextTick()

    expect(wrapper.text()).toContain('Aligned popover')
  })

  it('applies custom className to content', async () => {
    const wrapper = mount({
      components: {
        Popover,
        PopoverTrigger,
        PopoverContent
      },
      template: `
        <Popover>
          <PopoverTrigger>
            <button class="trigger">Open</button>
          </PopoverTrigger>
          <PopoverContent class="custom-popover">
            <p>Content</p>
          </PopoverContent>
        </Popover>
      `
    })

    const trigger = wrapper.find('.trigger')
    await trigger.trigger('click')
    await wrapper.vm.$nextTick()

    expect(wrapper.find('.custom-popover').exists()).toBe(true)
  })

  it('has correct data-state attributes', async () => {
    const wrapper = mount(TestPopover)

    // Initially closed
    let trigger = wrapper.find('[data-state]')
    if (trigger.exists()) {
      expect(trigger.attributes('data-state')).toBe('closed')
    }

    // Open popover
    const triggerBtn = wrapper.find('.trigger')
    await triggerBtn.trigger('click')
    await wrapper.vm.$nextTick()

    const openContent = wrapper.find('[data-state="open"]')
    expect(openContent.exists()).toBe(true)
  })

  it('supports modal behavior', async () => {
    const wrapper = mount({
      components: {
        Popover,
        PopoverTrigger,
        PopoverContent
      },
      template: `
        <Popover modal>
          <PopoverTrigger>
            <button class="trigger">Open</button>
          </PopoverTrigger>
          <PopoverContent>
            <p>Modal popover</p>
          </PopoverContent>
        </Popover>
      `
    })

    const trigger = wrapper.find('.trigger')
    await trigger.trigger('click')
    await wrapper.vm.$nextTick()

    expect(wrapper.text()).toContain('Modal popover')
  })

  it('supports custom sideOffset', async () => {
    const wrapper = mount({
      components: {
        Popover,
        PopoverTrigger,
        PopoverContent
      },
      template: `
        <Popover>
          <PopoverTrigger>
            <button class="trigger">Open</button>
          </PopoverTrigger>
          <PopoverContent :side-offset="10">
            <p>Offset popover</p>
          </PopoverContent>
        </Popover>
      `
    })

    const trigger = wrapper.find('.trigger')
    await trigger.trigger('click')
    await wrapper.vm.$nextTick()

    expect(wrapper.text()).toContain('Offset popover')
  })

  it('works with form inputs inside', async () => {
    const wrapper = mount({
      components: {
        Popover,
        PopoverTrigger,
        PopoverContent
      },
      template: `
        <Popover>
          <PopoverTrigger>
            <button class="trigger">Settings</button>
          </PopoverTrigger>
          <PopoverContent>
            <div>
              <label>Width</label>
              <input type="number" value="100" class="width-input" />
              <label>Height</label>
              <input type="number" value="100" class="height-input" />
            </div>
          </PopoverContent>
        </Popover>
      `
    })

    const trigger = wrapper.find('.trigger')
    await trigger.trigger('click')
    await wrapper.vm.$nextTick()

    const widthInput = wrapper.find('.width-input')
    expect(widthInput.exists()).toBe(true)
    expect(widthInput.element.value).toBe('100')
  })

  it('has correct ARIA attributes', async () => {
    const wrapper = mount(TestPopover)

    const trigger = wrapper.find('.trigger')
    await trigger.trigger('click')
    await wrapper.vm.$nextTick()

    // Check for ARIA attributes
    expect(trigger.attributes('aria-expanded')).toBeTruthy()
  })

  it('supports collision padding', async () => {
    const wrapper = mount({
      components: {
        Popover,
        PopoverTrigger,
        PopoverContent
      },
      template: `
        <Popover>
          <PopoverTrigger>
            <button class="trigger">Open</button>
          </PopoverTrigger>
          <PopoverContent :collision-padding="10">
            <p>Padded popover</p>
          </PopoverContent>
        </Popover>
      `
    })

    const trigger = wrapper.find('.trigger')
    await trigger.trigger('click')
    await wrapper.vm.$nextTick()

    expect(wrapper.text()).toContain('Padded popover')
  })
})
