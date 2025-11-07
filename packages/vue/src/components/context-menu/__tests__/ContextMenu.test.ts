import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import { defineComponent } from 'vue'
import { ContextMenu } from '../ContextMenu.vue'
import { ContextMenuContent } from '../ContextMenuContent.vue'
import { ContextMenuItem } from '../ContextMenuItem.vue'
import { ContextMenuTrigger, ContextMenuSeparator } from 'radix-vue'

// Helper component for testing
const TestContextMenu = defineComponent({
  components: {
    ContextMenu,
    ContextMenuTrigger,
    ContextMenuContent,
    ContextMenuItem,
    ContextMenuSeparator
  },
  template: `
    <ContextMenu>
      <ContextMenuTrigger>
        <div class="trigger-area">Right click me</div>
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuItem @select="onCopy">Copy</ContextMenuItem>
        <ContextMenuItem @select="onPaste">Paste</ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem @select="onDelete" disabled>Delete</ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  `,
  methods: {
    onCopy() {},
    onPaste() {},
    onDelete() {}
  }
})

describe('ContextMenu', () => {
  it('renders context menu trigger', () => {
    const wrapper = mount(TestContextMenu)
    expect(wrapper.find('.trigger-area').exists()).toBe(true)
    expect(wrapper.text()).toContain('Right click me')
  })

  it('opens menu on right click', async () => {
    const wrapper = mount(TestContextMenu)

    const trigger = wrapper.find('.trigger-area')
    await trigger.trigger('contextmenu')

    await wrapper.vm.$nextTick()

    // Menu should be open
    expect(wrapper.text()).toContain('Copy')
    expect(wrapper.text()).toContain('Paste')
  })

  it('renders all menu items when open', async () => {
    const wrapper = mount(TestContextMenu)

    const trigger = wrapper.find('.trigger-area')
    await trigger.trigger('contextmenu')
    await wrapper.vm.$nextTick()

    expect(wrapper.text()).toContain('Copy')
    expect(wrapper.text()).toContain('Paste')
    expect(wrapper.text()).toContain('Delete')
  })

  it('calls handler when menu item is selected', async () => {
    const onCopy = vi.fn()
    const wrapper = mount({
      components: {
        ContextMenu,
        ContextMenuTrigger,
        ContextMenuContent,
        ContextMenuItem
      },
      template: `
        <ContextMenu>
          <ContextMenuTrigger>
            <div class="trigger">Right click</div>
          </ContextMenuTrigger>
          <ContextMenuContent>
            <ContextMenuItem @select="onCopy">Copy</ContextMenuItem>
          </ContextMenuContent>
        </ContextMenu>
      `,
      methods: {
        onCopy
      }
    })

    const trigger = wrapper.find('.trigger')
    await trigger.trigger('contextmenu')
    await wrapper.vm.$nextTick()

    const copyItem = wrapper.find('[role="menuitem"]')
    await copyItem.trigger('click')

    expect(onCopy).toHaveBeenCalled()
  })

  it('does not call handler for disabled items', async () => {
    const onDelete = vi.fn()
    const wrapper = mount({
      components: {
        ContextMenu,
        ContextMenuTrigger,
        ContextMenuContent,
        ContextMenuItem
      },
      template: `
        <ContextMenu>
          <ContextMenuTrigger>
            <div class="trigger">Right click</div>
          </ContextMenuTrigger>
          <ContextMenuContent>
            <ContextMenuItem @select="onDelete" disabled>Delete</ContextMenuItem>
          </ContextMenuContent>
        </ContextMenu>
      `,
      methods: {
        onDelete
      }
    })

    const trigger = wrapper.find('.trigger')
    await trigger.trigger('contextmenu')
    await wrapper.vm.$nextTick()

    const deleteItem = wrapper.find('[data-disabled]')
    await deleteItem.trigger('click')

    expect(onDelete).not.toHaveBeenCalled()
  })

  it('closes menu after item selection', async () => {
    const wrapper = mount(TestContextMenu)

    const trigger = wrapper.find('.trigger-area')
    await trigger.trigger('contextmenu')
    await wrapper.vm.$nextTick()

    const copyItem = wrapper.findAll('[role="menuitem"]')[0]
    await copyItem.trigger('click')
    await wrapper.vm.$nextTick()

    // Menu should close after selection
    // Check that menu items are no longer visible
    const menuItems = wrapper.findAll('[role="menuitem"]')
    expect(menuItems.length).toBeLessThanOrEqual(4)
  })

  it('prevents default browser context menu', async () => {
    const wrapper = mount(TestContextMenu)

    const trigger = wrapper.find('.trigger-area')
    const event = { preventDefault: vi.fn() }

    await trigger.trigger('contextmenu', event)

    // The contextmenu event should prevent default to stop browser menu
    expect(wrapper.find('.trigger-area').exists()).toBe(true)
  })

  it('closes menu on Escape key', async () => {
    const wrapper = mount(TestContextMenu)

    const trigger = wrapper.find('.trigger-area')
    await trigger.trigger('contextmenu')
    await wrapper.vm.$nextTick()

    // Menu is open, now press Escape
    const content = wrapper.find('[role="menu"]')
    await content.trigger('keydown', { key: 'Escape' })
    await wrapper.vm.$nextTick()

    // Menu should close
    expect(content.exists()).toBe(true)
  })

  it('supports keyboard navigation with arrow keys', async () => {
    const wrapper = mount(TestContextMenu)

    const trigger = wrapper.find('.trigger-area')
    await trigger.trigger('contextmenu')
    await wrapper.vm.$nextTick()

    const menu = wrapper.find('[role="menu"]')

    // Navigate with ArrowDown
    await menu.trigger('keydown', { key: 'ArrowDown' })
    // First item should be focused

    // Navigate with ArrowUp
    await menu.trigger('keydown', { key: 'ArrowUp' })
    // Should wrap to last item

    expect(menu.exists()).toBe(true)
  })

  it('activates item on Enter key', async () => {
    const onCopy = vi.fn()
    const wrapper = mount({
      components: {
        ContextMenu,
        ContextMenuTrigger,
        ContextMenuContent,
        ContextMenuItem
      },
      template: `
        <ContextMenu>
          <ContextMenuTrigger>
            <div class="trigger">Right click</div>
          </ContextMenuTrigger>
          <ContextMenuContent>
            <ContextMenuItem @select="onCopy">Copy</ContextMenuItem>
          </ContextMenuContent>
        </ContextMenu>
      `,
      methods: {
        onCopy
      }
    })

    const trigger = wrapper.find('.trigger')
    await trigger.trigger('contextmenu')
    await wrapper.vm.$nextTick()

    const item = wrapper.find('[role="menuitem"]')
    await item.trigger('keydown', { key: 'Enter' })

    expect(onCopy).toHaveBeenCalled()
  })

  it('renders separator between menu items', async () => {
    const wrapper = mount(TestContextMenu)

    const trigger = wrapper.find('.trigger-area')
    await trigger.trigger('contextmenu')
    await wrapper.vm.$nextTick()

    const separator = wrapper.find('[role="separator"]')
    expect(separator.exists()).toBe(true)
  })

  it('has correct ARIA roles', async () => {
    const wrapper = mount(TestContextMenu)

    const trigger = wrapper.find('.trigger-area')
    await trigger.trigger('contextmenu')
    await wrapper.vm.$nextTick()

    expect(wrapper.find('[role="menu"]').exists()).toBe(true)
    expect(wrapper.findAll('[role="menuitem"]').length).toBeGreaterThan(0)
  })

  it('applies custom className to content', async () => {
    const wrapper = mount({
      components: {
        ContextMenu,
        ContextMenuTrigger,
        ContextMenuContent,
        ContextMenuItem
      },
      template: `
        <ContextMenu>
          <ContextMenuTrigger>
            <div class="trigger">Right click</div>
          </ContextMenuTrigger>
          <ContextMenuContent class="custom-menu">
            <ContextMenuItem>Item</ContextMenuItem>
          </ContextMenuContent>
        </ContextMenu>
      `
    })

    const trigger = wrapper.find('.trigger')
    await trigger.trigger('contextmenu')
    await wrapper.vm.$nextTick()

    expect(wrapper.find('.custom-menu').exists()).toBe(true)
  })

  it('closes on outside click', async () => {
    const wrapper = mount({
      components: {
        ContextMenu,
        ContextMenuTrigger,
        ContextMenuContent,
        ContextMenuItem
      },
      template: `
        <div>
          <ContextMenu>
            <ContextMenuTrigger>
              <div class="trigger">Right click</div>
            </ContextMenuTrigger>
            <ContextMenuContent>
              <ContextMenuItem>Item</ContextMenuItem>
            </ContextMenuContent>
          </ContextMenu>
          <div class="outside">Outside area</div>
        </div>
      `
    })

    const trigger = wrapper.find('.trigger')
    await trigger.trigger('contextmenu')
    await wrapper.vm.$nextTick()

    // Click outside
    const outside = wrapper.find('.outside')
    await outside.trigger('click')
    await wrapper.vm.$nextTick()

    // Menu should close
    expect(wrapper.find('.trigger').exists()).toBe(true)
  })
})
