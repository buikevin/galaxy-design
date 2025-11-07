import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '../index'

describe('Accordion', () => {
  it('renders accordion items', () => {
    const wrapper = mount({
      components: { Accordion, AccordionItem, AccordionTrigger, AccordionContent },
      template: `
        <Accordion type="single">
          <AccordionItem value="item-1">
            <AccordionTrigger>Item 1</AccordionTrigger>
            <AccordionContent>Content 1</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Item 2</AccordionTrigger>
            <AccordionContent>Content 2</AccordionContent>
          </AccordionItem>
        </Accordion>
      `,
    })

    expect(wrapper.text()).toContain('Item 1')
    expect(wrapper.text()).toContain('Item 2')
  })

  it('expands item on trigger click', async () => {
    const wrapper = mount({
      components: { Accordion, AccordionItem, AccordionTrigger, AccordionContent },
      template: `
        <Accordion type="single">
          <AccordionItem value="item-1">
            <AccordionTrigger>Item 1</AccordionTrigger>
            <AccordionContent>Hidden Content</AccordionContent>
          </AccordionItem>
        </Accordion>
      `,
    })

    const trigger = wrapper.find('[data-radix-accordion-trigger]')
    await trigger.trigger('click')

    expect(wrapper.text()).toContain('Hidden Content')
  })

  it('collapses item when clicked again in single mode', async () => {
    const wrapper = mount({
      components: { Accordion, AccordionItem, AccordionTrigger, AccordionContent },
      template: `
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Item 1</AccordionTrigger>
            <AccordionContent>Content 1</AccordionContent>
          </AccordionItem>
        </Accordion>
      `,
    })

    const trigger = wrapper.find('[data-radix-accordion-trigger]')

    await trigger.trigger('click')
    expect(wrapper.text()).toContain('Content 1')

    await trigger.trigger('click')
    const content = wrapper.find('[data-radix-accordion-content]')
    expect(content.attributes('data-state')).toBe('closed')
  })

  it('allows only one item open in single mode', async () => {
    const wrapper = mount({
      components: { Accordion, AccordionItem, AccordionTrigger, AccordionContent },
      template: `
        <Accordion type="single">
          <AccordionItem value="item-1">
            <AccordionTrigger>Item 1</AccordionTrigger>
            <AccordionContent>Content 1</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Item 2</AccordionTrigger>
            <AccordionContent>Content 2</AccordionContent>
          </AccordionItem>
        </Accordion>
      `,
    })

    const triggers = wrapper.findAll('[data-radix-accordion-trigger]')

    await triggers[0].trigger('click')
    expect(wrapper.text()).toContain('Content 1')

    await triggers[1].trigger('click')
    expect(wrapper.text()).toContain('Content 2')

    const firstContent = wrapper.findAll('[data-radix-accordion-content]')[0]
    expect(firstContent.attributes('data-state')).toBe('closed')
  })

  it('allows multiple items open in multiple mode', async () => {
    const wrapper = mount({
      components: { Accordion, AccordionItem, AccordionTrigger, AccordionContent },
      template: `
        <Accordion type="multiple">
          <AccordionItem value="item-1">
            <AccordionTrigger>Item 1</AccordionTrigger>
            <AccordionContent>Content 1</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Item 2</AccordionTrigger>
            <AccordionContent>Content 2</AccordionContent>
          </AccordionItem>
        </Accordion>
      `,
    })

    const triggers = wrapper.findAll('[data-radix-accordion-trigger]')

    await triggers[0].trigger('click')
    await triggers[1].trigger('click')

    expect(wrapper.text()).toContain('Content 1')
    expect(wrapper.text()).toContain('Content 2')
  })

  it('opens default items on mount', () => {
    const wrapper = mount({
      components: { Accordion, AccordionItem, AccordionTrigger, AccordionContent },
      template: `
        <Accordion type="single" default-value="item-1">
          <AccordionItem value="item-1">
            <AccordionTrigger>Item 1</AccordionTrigger>
            <AccordionContent>Content 1</AccordionContent>
          </AccordionItem>
        </Accordion>
      `,
    })

    expect(wrapper.text()).toContain('Content 1')
  })

  it('supports keyboard navigation', async () => {
    const wrapper = mount({
      components: { Accordion, AccordionItem, AccordionTrigger, AccordionContent },
      template: `
        <Accordion type="single">
          <AccordionItem value="item-1">
            <AccordionTrigger>Item 1</AccordionTrigger>
            <AccordionContent>Content 1</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Item 2</AccordionTrigger>
            <AccordionContent>Content 2</AccordionContent>
          </AccordionItem>
        </Accordion>
      `,
    })

    const triggers = wrapper.findAll('[data-radix-accordion-trigger]')
    await triggers[0].trigger('keydown', { key: 'Space' })

    expect(wrapper.text()).toContain('Content 1')
  })

  it('disables specific items', () => {
    const wrapper = mount({
      components: { Accordion, AccordionItem, AccordionTrigger, AccordionContent },
      template: `
        <Accordion type="single">
          <AccordionItem value="item-1">
            <AccordionTrigger>Item 1</AccordionTrigger>
            <AccordionContent>Content 1</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2" disabled>
            <AccordionTrigger>Item 2</AccordionTrigger>
            <AccordionContent>Content 2</AccordionContent>
          </AccordionItem>
        </Accordion>
      `,
    })

    const items = wrapper.findAll('[data-radix-accordion-item]')
    expect(items[1].attributes('data-disabled')).toBeDefined()
  })

  it('has correct aria attributes', () => {
    const wrapper = mount({
      components: { Accordion, AccordionItem, AccordionTrigger, AccordionContent },
      template: `
        <Accordion type="single">
          <AccordionItem value="item-1">
            <AccordionTrigger>Item 1</AccordionTrigger>
            <AccordionContent>Content 1</AccordionContent>
          </AccordionItem>
        </Accordion>
      `,
    })

    const trigger = wrapper.find('[data-radix-accordion-trigger]')
    expect(trigger.attributes('aria-expanded')).toBeDefined()
    expect(trigger.attributes('aria-controls')).toBeDefined()
  })

  it('can be controlled externally', async () => {
    const wrapper = mount({
      components: { Accordion, AccordionItem, AccordionTrigger, AccordionContent },
      data() {
        return { openItem: null }
      },
      template: `
        <Accordion type="single" v-model="openItem">
          <AccordionItem value="item-1">
            <AccordionTrigger>Item 1</AccordionTrigger>
            <AccordionContent>Content 1</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Item 2</AccordionTrigger>
            <AccordionContent>Content 2</AccordionContent>
          </AccordionItem>
        </Accordion>
      `,
    })

    await wrapper.setData({ openItem: 'item-1' })
    expect(wrapper.text()).toContain('Content 1')

    await wrapper.setData({ openItem: 'item-2' })
    expect(wrapper.text()).toContain('Content 2')
  })
})
