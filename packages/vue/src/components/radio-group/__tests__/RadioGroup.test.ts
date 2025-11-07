import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import { defineComponent } from 'vue'
import { RadioGroup } from '../RadioGroup.vue'
import { RadioGroupItem } from '../RadioGroupItem.vue'

// Helper component for testing
const TestRadioGroup = defineComponent({
  components: { RadioGroup, RadioGroupItem },
  template: `
    <RadioGroup v-model="value">
      <div class="flex items-center space-x-2">
        <RadioGroupItem value="option1" id="option1" />
        <label for="option1">Option 1</label>
      </div>
      <div class="flex items-center space-x-2">
        <RadioGroupItem value="option2" id="option2" />
        <label for="option2">Option 2</label>
      </div>
      <div class="flex items-center space-x-2">
        <RadioGroupItem value="option3" id="option3" disabled />
        <label for="option3">Option 3 (Disabled)</label>
      </div>
    </RadioGroup>
  `,
  data() {
    return {
      value: 'option1'
    }
  }
})

describe('RadioGroup', () => {
  it('renders radio group correctly', () => {
    const wrapper = mount(TestRadioGroup)
    expect(wrapper.find('[role="radiogroup"]').exists()).toBe(true)
  })

  it('renders all radio items', () => {
    const wrapper = mount(TestRadioGroup)
    const radioItems = wrapper.findAll('[role="radio"]')
    expect(radioItems).toHaveLength(3)
  })

  it('has one item checked by default', () => {
    const wrapper = mount(TestRadioGroup)
    const checkedItem = wrapper.find('[aria-checked="true"]')
    expect(checkedItem.exists()).toBe(true)
  })

  it('allows selecting a radio option', async () => {
    const wrapper = mount(TestRadioGroup)

    const option2 = wrapper.find('#option2')
    await option2.trigger('click')

    expect(wrapper.vm.value).toBe('option2')
  })

  it('only one option can be selected at a time', async () => {
    const wrapper = mount(TestRadioGroup)

    const option2 = wrapper.find('#option2')
    await option2.trigger('click')

    const checkedItems = wrapper.findAll('[aria-checked="true"]')
    expect(checkedItems).toHaveLength(1)
    expect(checkedItems[0].attributes('id')).toBe('option2')
  })

  it('does not select disabled option', async () => {
    const wrapper = mount(TestRadioGroup)

    const disabledOption = wrapper.find('#option3')
    await disabledOption.trigger('click')

    expect(wrapper.vm.value).not.toBe('option3')
  })

  it('disabled item has correct attributes', () => {
    const wrapper = mount(TestRadioGroup)

    const disabledOption = wrapper.find('#option3')
    expect(disabledOption.attributes('data-disabled')).toBeDefined()
  })

  it('supports keyboard navigation with arrow keys', async () => {
    const wrapper = mount(TestRadioGroup)

    const radioGroup = wrapper.find('[role="radiogroup"]')
    await radioGroup.trigger('keydown', { key: 'ArrowDown' })

    // Should move to next option
    expect(wrapper.vm.value).toBe('option2')
  })

  it('wraps around when navigating with arrow keys', async () => {
    const wrapper = mount(TestRadioGroup)

    // Set to last enabled option
    wrapper.vm.value = 'option2'
    await wrapper.vm.$nextTick()

    const radioGroup = wrapper.find('[role="radiogroup"]')
    await radioGroup.trigger('keydown', { key: 'ArrowDown' })

    // Should wrap to first option
    expect(wrapper.vm.value).toBe('option1')
  })

  it('supports ArrowUp navigation', async () => {
    const wrapper = mount(TestRadioGroup)

    wrapper.vm.value = 'option2'
    await wrapper.vm.$nextTick()

    const radioGroup = wrapper.find('[role="radiogroup"]')
    await radioGroup.trigger('keydown', { key: 'ArrowUp' })

    expect(wrapper.vm.value).toBe('option1')
  })

  it('has correct ARIA role attributes', () => {
    const wrapper = mount(TestRadioGroup)

    expect(wrapper.find('[role="radiogroup"]').exists()).toBe(true)

    const radioItems = wrapper.findAll('[role="radio"]')
    radioItems.forEach(item => {
      expect(item.attributes('role')).toBe('radio')
    })
  })

  it('has correct aria-checked attributes', () => {
    const wrapper = mount(TestRadioGroup)

    const option1 = wrapper.find('#option1')
    expect(option1.attributes('aria-checked')).toBe('true')

    const option2 = wrapper.find('#option2')
    expect(option2.attributes('aria-checked')).toBe('false')
  })

  it('shows indicator icon when checked', () => {
    const wrapper = mount(TestRadioGroup)

    const option1 = wrapper.find('#option1')
    const indicator = option1.find('svg')
    expect(indicator.exists()).toBe(true)
  })

  it('applies custom className to items', () => {
    const wrapper = mount({
      components: { RadioGroup, RadioGroupItem },
      template: `
        <RadioGroup>
          <RadioGroupItem value="test" class="custom-radio" />
        </RadioGroup>
      `
    })

    expect(wrapper.find('[role="radio"]').classes()).toContain('custom-radio')
  })
})
