import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from '../index'

describe('Select', () => {
  const options = [
    { value: 'apple', label: 'Apple' },
    { value: 'banana', label: 'Banana' },
    { value: 'orange', label: 'Orange' },
  ]

  it('renders select trigger', () => {
    const wrapper = mount(Select, {
      slots: {
        default: `
          <SelectTrigger>
            <SelectValue placeholder="Select fruit" />
          </SelectTrigger>
        `,
      },
    })

    expect(wrapper.find('[role="combobox"]').exists()).toBe(true)
  })

  it('shows placeholder when no value selected', () => {
    const wrapper = mount({
      components: { Select, SelectTrigger, SelectValue },
      template: `
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Select an option" />
          </SelectTrigger>
        </Select>
      `,
    })

    expect(wrapper.text()).toContain('Select an option')
  })

  it('opens dropdown on trigger click', async () => {
    const wrapper = mount({
      components: { Select, SelectTrigger, SelectValue, SelectContent, SelectItem },
      template: `
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Select" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1">Option 1</SelectItem>
            <SelectItem value="2">Option 2</SelectItem>
          </SelectContent>
        </Select>
      `,
    })

    const trigger = wrapper.find('[role="combobox"]')
    await trigger.trigger('click')

    expect(wrapper.find('[role="listbox"]').exists()).toBe(true)
  })

  it('selects option on click', async () => {
    const wrapper = mount({
      components: { Select, SelectTrigger, SelectValue, SelectContent, SelectItem },
      data() {
        return { selected: '' }
      },
      template: `
        <Select v-model="selected">
          <SelectTrigger>
            <SelectValue placeholder="Select" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="apple">Apple</SelectItem>
            <SelectItem value="banana">Banana</SelectItem>
          </SelectContent>
        </Select>
      `,
    })

    const trigger = wrapper.find('[role="combobox"]')
    await trigger.trigger('click')

    const items = wrapper.findAll('[role="option"]')
    await items[0].trigger('click')

    expect(wrapper.vm.selected).toBe('apple')
  })

  it('shows selected value in trigger', async () => {
    const wrapper = mount({
      components: { Select, SelectTrigger, SelectValue, SelectContent, SelectItem },
      template: `
        <Select model-value="banana">
          <SelectTrigger>
            <SelectValue placeholder="Select" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="apple">Apple</SelectItem>
            <SelectItem value="banana">Banana</SelectItem>
          </SelectContent>
        </Select>
      `,
    })

    expect(wrapper.text()).toContain('Banana')
  })

  it('closes dropdown on option selection', async () => {
    const wrapper = mount({
      components: { Select, SelectTrigger, SelectValue, SelectContent, SelectItem },
      template: `
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Select" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1">Option 1</SelectItem>
          </SelectContent>
        </Select>
      `,
    })

    const trigger = wrapper.find('[role="combobox"]')
    await trigger.trigger('click')

    const item = wrapper.find('[role="option"]')
    await item.trigger('click')

    // Dropdown should be closed
    expect(wrapper.find('[role="listbox"]').exists()).toBe(false)
  })

  it('supports keyboard navigation with arrow keys', async () => {
    const wrapper = mount({
      components: { Select, SelectTrigger, SelectValue, SelectContent, SelectItem },
      template: `
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Select" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1">Option 1</SelectItem>
            <SelectItem value="2">Option 2</SelectItem>
            <SelectItem value="3">Option 3</SelectItem>
          </SelectContent>
        </Select>
      `,
    })

    const trigger = wrapper.find('[role="combobox"]')
    await trigger.trigger('keydown', { key: 'ArrowDown' })

    expect(wrapper.find('[role="listbox"]').exists()).toBe(true)
  })

  it('closes dropdown on Escape key', async () => {
    const wrapper = mount({
      components: { Select, SelectTrigger, SelectValue, SelectContent, SelectItem },
      template: `
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Select" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1">Option 1</SelectItem>
          </SelectContent>
        </Select>
      `,
    })

    const trigger = wrapper.find('[role="combobox"]')
    await trigger.trigger('click')
    await trigger.trigger('keydown', { key: 'Escape' })

    expect(wrapper.find('[role="listbox"]').exists()).toBe(false)
  })

  it('disables select when disabled prop is true', () => {
    const wrapper = mount({
      components: { Select, SelectTrigger, SelectValue },
      template: `
        <Select disabled>
          <SelectTrigger>
            <SelectValue placeholder="Select" />
          </SelectTrigger>
        </Select>
      `,
    })

    const trigger = wrapper.find('[role="combobox"]')
    expect(trigger.attributes('data-disabled')).toBeDefined()
  })

  it('disables specific options', () => {
    const wrapper = mount({
      components: { Select, SelectTrigger, SelectValue, SelectContent, SelectItem },
      template: `
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Select" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1">Option 1</SelectItem>
            <SelectItem value="2" disabled>Option 2</SelectItem>
          </SelectContent>
        </Select>
      `,
    })

    const items = wrapper.findAll('[role="option"]')
    expect(items[1].attributes('data-disabled')).toBeDefined()
  })

  it('has correct aria attributes', () => {
    const wrapper = mount({
      components: { Select, SelectTrigger, SelectValue },
      template: `
        <Select>
          <SelectTrigger aria-label="Select fruit">
            <SelectValue placeholder="Select" />
          </SelectTrigger>
        </Select>
      `,
    })

    const trigger = wrapper.find('[role="combobox"]')
    expect(trigger.attributes('aria-label')).toBe('Select fruit')
  })
})
