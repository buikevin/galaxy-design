import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator } from '../index'

describe('DropdownMenu', () => {
  it('renders dropdown trigger', () => {
    const wrapper = mount({
      components: { DropdownMenu, DropdownMenuTrigger },
      template: `
        <DropdownMenu>
          <DropdownMenuTrigger>Open Menu</DropdownMenuTrigger>
        </DropdownMenu>
      `,
    })

    expect(wrapper.text()).toContain('Open Menu')
  })

  it('opens menu on trigger click', async () => {
    const wrapper = mount({
      components: { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem },
      template: `
        <DropdownMenu>
          <DropdownMenuTrigger>Menu</DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Item 1</DropdownMenuItem>
            <DropdownMenuItem>Item 2</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      `,
    })

    const trigger = wrapper.find('button')
    await trigger.trigger('click')

    expect(wrapper.find('[role="menu"]').exists()).toBe(true)
  })

  it('shows menu items when open', async () => {
    const wrapper = mount({
      components: { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem },
      template: `
        <DropdownMenu>
          <DropdownMenuTrigger>Menu</DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Edit</DropdownMenuItem>
            <DropdownMenuItem>Delete</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      `,
    })

    await wrapper.find('button').trigger('click')

    expect(wrapper.text()).toContain('Edit')
    expect(wrapper.text()).toContain('Delete')
  })

  it('triggers item click callback', async () => {
    const onSelect = vi.fn()
    const wrapper = mount({
      components: { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem },
      template: `
        <DropdownMenu>
          <DropdownMenuTrigger>Menu</DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem @select="onSelect">Edit</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      `,
      methods: { onSelect },
    })

    await wrapper.find('button').trigger('click')
    const menuItem = wrapper.find('[role="menuitem"]')
    await menuItem.trigger('click')

    expect(onSelect).toHaveBeenCalled()
  })

  it('closes menu after item selection', async () => {
    const wrapper = mount({
      components: { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem },
      template: `
        <DropdownMenu>
          <DropdownMenuTrigger>Menu</DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Edit</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      `,
    })

    await wrapper.find('button').trigger('click')
    expect(wrapper.find('[role="menu"]').exists()).toBe(true)

    await wrapper.find('[role="menuitem"]').trigger('click')
    expect(wrapper.find('[role="menu"]').exists()).toBe(false)
  })

  it('closes menu on outside click', async () => {
    const wrapper = mount({
      components: { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem },
      template: `
        <div>
          <DropdownMenu>
            <DropdownMenuTrigger>Menu</DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Item</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <div class="outside">Outside</div>
        </div>
      `,
      attachTo: document.body,
    })

    await wrapper.find('button').trigger('click')
    expect(wrapper.find('[role="menu"]').exists()).toBe(true)

    await wrapper.find('.outside').trigger('click')
    expect(wrapper.find('[role="menu"]').exists()).toBe(false)

    wrapper.unmount()
  })

  it('closes menu on Escape key', async () => {
    const wrapper = mount({
      components: { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem },
      template: `
        <DropdownMenu>
          <DropdownMenuTrigger>Menu</DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Item</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      `,
    })

    await wrapper.find('button').trigger('click')
    await wrapper.find('[role="menu"]').trigger('keydown', { key: 'Escape' })

    expect(wrapper.find('[role="menu"]').exists()).toBe(false)
  })

  it('renders separator between items', async () => {
    const wrapper = mount({
      components: { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator },
      template: `
        <DropdownMenu>
          <DropdownMenuTrigger>Menu</DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Item 1</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Item 2</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      `,
    })

    await wrapper.find('button').trigger('click')
    expect(wrapper.find('[role="separator"]').exists()).toBe(true)
  })

  it('supports keyboard navigation', async () => {
    const wrapper = mount({
      components: { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem },
      template: `
        <DropdownMenu>
          <DropdownMenuTrigger>Menu</DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Item 1</DropdownMenuItem>
            <DropdownMenuItem>Item 2</DropdownMenuItem>
            <DropdownMenuItem>Item 3</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      `,
    })

    await wrapper.find('button').trigger('click')
    const menu = wrapper.find('[role="menu"]')
    await menu.trigger('keydown', { key: 'ArrowDown' })

    const items = wrapper.findAll('[role="menuitem"]')
    expect(items[0].attributes('data-highlighted')).toBeDefined()
  })

  it('disables specific menu items', async () => {
    const wrapper = mount({
      components: { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem },
      template: `
        <DropdownMenu>
          <DropdownMenuTrigger>Menu</DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Enabled</DropdownMenuItem>
            <DropdownMenuItem disabled>Disabled</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      `,
    })

    await wrapper.find('button').trigger('click')
    const items = wrapper.findAll('[role="menuitem"]')
    expect(items[1].attributes('data-disabled')).toBeDefined()
  })

  it('has correct aria attributes', async () => {
    const wrapper = mount({
      components: { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem },
      template: `
        <DropdownMenu>
          <DropdownMenuTrigger>Menu</DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Item</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      `,
    })

    const trigger = wrapper.find('button')
    expect(trigger.attributes('aria-haspopup')).toBe('menu')

    await trigger.trigger('click')
    expect(trigger.attributes('aria-expanded')).toBe('true')
  })
})
