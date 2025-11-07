import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../index'

describe('Tabs', () => {
  it('renders tabs correctly', () => {
    const wrapper = mount({
      components: { Tabs, TabsList, TabsTrigger, TabsContent },
      template: `
        <Tabs default-value="tab1">
          <TabsList>
            <TabsTrigger value="tab1">Tab 1</TabsTrigger>
            <TabsTrigger value="tab2">Tab 2</TabsTrigger>
          </TabsList>
          <TabsContent value="tab1">Content 1</TabsContent>
          <TabsContent value="tab2">Content 2</TabsContent>
        </Tabs>
      `,
    })

    expect(wrapper.text()).toContain('Tab 1')
    expect(wrapper.text()).toContain('Tab 2')
  })

  it('shows default tab content', () => {
    const wrapper = mount({
      components: { Tabs, TabsList, TabsTrigger, TabsContent },
      template: `
        <Tabs default-value="tab1">
          <TabsList>
            <TabsTrigger value="tab1">Tab 1</TabsTrigger>
            <TabsTrigger value="tab2">Tab 2</TabsTrigger>
          </TabsList>
          <TabsContent value="tab1">First Content</TabsContent>
          <TabsContent value="tab2">Second Content</TabsContent>
        </Tabs>
      `,
    })

    expect(wrapper.text()).toContain('First Content')
  })

  it('switches tab content on trigger click', async () => {
    const wrapper = mount({
      components: { Tabs, TabsList, TabsTrigger, TabsContent },
      template: `
        <Tabs default-value="tab1">
          <TabsList>
            <TabsTrigger value="tab1">Tab 1</TabsTrigger>
            <TabsTrigger value="tab2">Tab 2</TabsTrigger>
          </TabsList>
          <TabsContent value="tab1">First Content</TabsContent>
          <TabsContent value="tab2">Second Content</TabsContent>
        </Tabs>
      `,
    })

    const triggers = wrapper.findAll('[role="tab"]')
    await triggers[1].trigger('click')

    expect(wrapper.text()).toContain('Second Content')
  })

  it('highlights active tab', async () => {
    const wrapper = mount({
      components: { Tabs, TabsList, TabsTrigger, TabsContent },
      template: `
        <Tabs default-value="tab1">
          <TabsList>
            <TabsTrigger value="tab1">Tab 1</TabsTrigger>
            <TabsTrigger value="tab2">Tab 2</TabsTrigger>
          </TabsList>
          <TabsContent value="tab1">Content 1</TabsContent>
          <TabsContent value="tab2">Content 2</TabsContent>
        </Tabs>
      `,
    })

    const triggers = wrapper.findAll('[role="tab"]')
    expect(triggers[0].attributes('data-state')).toBe('active')
    expect(triggers[1].attributes('data-state')).toBe('inactive')

    await triggers[1].trigger('click')
    expect(triggers[1].attributes('data-state')).toBe('active')
  })

  it('supports keyboard navigation', async () => {
    const wrapper = mount({
      components: { Tabs, TabsList, TabsTrigger, TabsContent },
      template: `
        <Tabs default-value="tab1">
          <TabsList>
            <TabsTrigger value="tab1">Tab 1</TabsTrigger>
            <TabsTrigger value="tab2">Tab 2</TabsTrigger>
            <TabsTrigger value="tab3">Tab 3</TabsTrigger>
          </TabsList>
          <TabsContent value="tab1">Content 1</TabsContent>
          <TabsContent value="tab2">Content 2</TabsContent>
          <TabsContent value="tab3">Content 3</TabsContent>
        </Tabs>
      `,
    })

    const firstTrigger = wrapper.findAll('[role="tab"]')[0]
    await firstTrigger.trigger('keydown', { key: 'ArrowRight' })

    expect(wrapper.text()).toContain('Content 2')
  })

  it('disables specific tabs', () => {
    const wrapper = mount({
      components: { Tabs, TabsList, TabsTrigger, TabsContent },
      template: `
        <Tabs default-value="tab1">
          <TabsList>
            <TabsTrigger value="tab1">Tab 1</TabsTrigger>
            <TabsTrigger value="tab2" disabled>Tab 2</TabsTrigger>
          </TabsList>
          <TabsContent value="tab1">Content 1</TabsContent>
          <TabsContent value="tab2">Content 2</TabsContent>
        </Tabs>
      `,
    })

    const triggers = wrapper.findAll('[role="tab"]')
    expect(triggers[1].attributes('data-disabled')).toBeDefined()
  })

  it('has correct aria attributes', () => {
    const wrapper = mount({
      components: { Tabs, TabsList, TabsTrigger, TabsContent },
      template: `
        <Tabs default-value="tab1">
          <TabsList>
            <TabsTrigger value="tab1">Tab 1</TabsTrigger>
          </TabsList>
          <TabsContent value="tab1">Content 1</TabsContent>
        </Tabs>
      `,
    })

    const tablist = wrapper.find('[role="tablist"]')
    const tab = wrapper.find('[role="tab"]')
    const tabpanel = wrapper.find('[role="tabpanel"]')

    expect(tablist.exists()).toBe(true)
    expect(tab.attributes('aria-selected')).toBeTruthy()
    expect(tabpanel.exists()).toBe(true)
  })

  it('can be controlled externally', async () => {
    const wrapper = mount({
      components: { Tabs, TabsList, TabsTrigger, TabsContent },
      data() {
        return { activeTab: 'tab1' }
      },
      template: `
        <Tabs v-model="activeTab">
          <TabsList>
            <TabsTrigger value="tab1">Tab 1</TabsTrigger>
            <TabsTrigger value="tab2">Tab 2</TabsTrigger>
          </TabsList>
          <TabsContent value="tab1">Content 1</TabsContent>
          <TabsContent value="tab2">Content 2</TabsContent>
        </Tabs>
      `,
    })

    expect(wrapper.text()).toContain('Content 1')

    await wrapper.setData({ activeTab: 'tab2' })
    expect(wrapper.text()).toContain('Content 2')
  })

  it('supports vertical orientation', () => {
    const wrapper = mount({
      components: { Tabs, TabsList, TabsTrigger, TabsContent },
      template: `
        <Tabs default-value="tab1" orientation="vertical">
          <TabsList>
            <TabsTrigger value="tab1">Tab 1</TabsTrigger>
            <TabsTrigger value="tab2">Tab 2</TabsTrigger>
          </TabsList>
          <TabsContent value="tab1">Content 1</TabsContent>
          <TabsContent value="tab2">Content 2</TabsContent>
        </Tabs>
      `,
    })

    const tablist = wrapper.find('[role="tablist"]')
    expect(tablist.attributes('aria-orientation')).toBe('vertical')
  })
})
