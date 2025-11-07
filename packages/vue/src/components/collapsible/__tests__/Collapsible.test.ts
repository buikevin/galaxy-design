import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import { defineComponent } from 'vue'
import { Collapsible } from '../Collapsible.vue'
import { CollapsibleTrigger, CollapsibleContent } from 'radix-vue'

// Helper component for testing
const TestCollapsible = defineComponent({
  components: { Collapsible, CollapsibleTrigger, CollapsibleContent },
  template: `
    <Collapsible v-model:open="isOpen">
      <CollapsibleTrigger>
        <button>Toggle</button>
      </CollapsibleTrigger>
      <CollapsibleContent>
        <div class="content">This is the collapsible content</div>
      </CollapsibleContent>
    </Collapsible>
  `,
  data() {
    return {
      isOpen: false
    }
  }
})

describe('Collapsible', () => {
  it('renders collapsible correctly', () => {
    const wrapper = mount(TestCollapsible)
    expect(wrapper.find('button').exists()).toBe(true)
  })

  it('starts collapsed by default', () => {
    const wrapper = mount(TestCollapsible)
    expect(wrapper.vm.isOpen).toBe(false)
  })

  it('expands when trigger is clicked', async () => {
    const wrapper = mount(TestCollapsible)

    const trigger = wrapper.find('button')
    await trigger.trigger('click')

    expect(wrapper.vm.isOpen).toBe(true)
  })

  it('collapses when trigger is clicked again', async () => {
    const wrapper = mount(TestCollapsible)

    const trigger = wrapper.find('button')

    // First click - expand
    await trigger.trigger('click')
    expect(wrapper.vm.isOpen).toBe(true)

    // Second click - collapse
    await trigger.trigger('click')
    expect(wrapper.vm.isOpen).toBe(false)
  })

  it('shows content when open', async () => {
    const wrapper = mount(TestCollapsible)

    wrapper.vm.isOpen = true
    await wrapper.vm.$nextTick()

    expect(wrapper.find('.content').exists()).toBe(true)
    expect(wrapper.text()).toContain('This is the collapsible content')
  })

  it('hides content when closed', async () => {
    const wrapper = mount(TestCollapsible)

    // Start open
    wrapper.vm.isOpen = true
    await wrapper.vm.$nextTick()

    // Then close
    wrapper.vm.isOpen = false
    await wrapper.vm.$nextTick()

    // Content should be hidden
    const content = wrapper.find('[data-state="closed"]')
    expect(content.exists()).toBe(true)
  })

  it('supports default open state', () => {
    const wrapper = mount({
      components: { Collapsible, CollapsibleTrigger, CollapsibleContent },
      template: `
        <Collapsible :default-open="true">
          <CollapsibleTrigger>
            <button>Toggle</button>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <div>Content</div>
          </CollapsibleContent>
        </Collapsible>
      `
    })

    expect(wrapper.text()).toContain('Content')
  })

  it('can be controlled with open prop', async () => {
    const wrapper = mount({
      components: { Collapsible, CollapsibleTrigger, CollapsibleContent },
      template: `
        <Collapsible :open="isOpen">
          <CollapsibleTrigger>
            <button>Toggle</button>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <div>Controlled Content</div>
          </CollapsibleContent>
        </Collapsible>
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

  it('emits update:open event when toggled', async () => {
    const onOpenChange = vi.fn()
    const wrapper = mount({
      components: { Collapsible, CollapsibleTrigger, CollapsibleContent },
      template: `
        <Collapsible @update:open="onOpenChange">
          <CollapsibleTrigger>
            <button>Toggle</button>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <div>Content</div>
          </CollapsibleContent>
        </Collapsible>
      `,
      methods: {
        onOpenChange
      }
    })

    const trigger = wrapper.find('button')
    await trigger.trigger('click')

    expect(onOpenChange).toHaveBeenCalledWith(true)
  })

  it('supports disabled state', async () => {
    const wrapper = mount({
      components: { Collapsible, CollapsibleTrigger, CollapsibleContent },
      template: `
        <Collapsible :disabled="true">
          <CollapsibleTrigger>
            <button>Toggle</button>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <div>Content</div>
          </CollapsibleContent>
        </Collapsible>
      `
    })

    const trigger = wrapper.find('button')
    await trigger.trigger('click')

    // Should not open when disabled
    expect(wrapper.text()).not.toContain('Content')
  })

  it('has correct data-state attribute on trigger', async () => {
    const wrapper = mount(TestCollapsible)

    const collapsible = wrapper.find('[data-state]')
    expect(collapsible.attributes('data-state')).toBe('closed')

    wrapper.vm.isOpen = true
    await wrapper.vm.$nextTick()

    expect(collapsible.attributes('data-state')).toBe('open')
  })

  it('applies custom className', () => {
    const wrapper = mount({
      components: { Collapsible, CollapsibleTrigger, CollapsibleContent },
      template: `
        <Collapsible class="custom-collapsible">
          <CollapsibleTrigger>
            <button>Toggle</button>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <div>Content</div>
          </CollapsibleContent>
        </Collapsible>
      `
    })

    expect(wrapper.find('.custom-collapsible').exists()).toBe(true)
  })

  it('supports keyboard interaction on trigger', async () => {
    const wrapper = mount(TestCollapsible)

    const trigger = wrapper.find('button')

    // Space key
    await trigger.trigger('keydown', { key: ' ' })
    expect(wrapper.vm.isOpen).toBe(true)

    // Enter key
    await trigger.trigger('keydown', { key: 'Enter' })
    expect(wrapper.vm.isOpen).toBe(false)
  })

  it('renders multiple collapsible sections independently', async () => {
    const wrapper = mount({
      components: { Collapsible, CollapsibleTrigger, CollapsibleContent },
      template: `
        <div>
          <Collapsible v-model:open="first">
            <CollapsibleTrigger>
              <button>First</button>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <div>First Content</div>
            </CollapsibleContent>
          </Collapsible>
          <Collapsible v-model:open="second">
            <CollapsibleTrigger>
              <button>Second</button>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <div>Second Content</div>
            </CollapsibleContent>
          </Collapsible>
        </div>
      `,
      data() {
        return {
          first: false,
          second: false
        }
      }
    })

    const buttons = wrapper.findAll('button')

    // Open first
    await buttons[0].trigger('click')
    expect(wrapper.vm.first).toBe(true)
    expect(wrapper.vm.second).toBe(false)

    // Open second
    await buttons[1].trigger('click')
    expect(wrapper.vm.first).toBe(true)
    expect(wrapper.vm.second).toBe(true)
  })
})
