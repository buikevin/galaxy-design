import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { Alert, AlertTitle, AlertDescription } from '../index'

describe('Alert', () => {
  it('renders alert with title and description', () => {
    const wrapper = mount({
      components: { Alert, AlertTitle, AlertDescription },
      template: `
        <Alert>
          <AlertTitle>Alert Title</AlertTitle>
          <AlertDescription>This is an alert message</AlertDescription>
        </Alert>
      `,
    })

    expect(wrapper.text()).toContain('Alert Title')
    expect(wrapper.text()).toContain('This is an alert message')
  })

  it('renders with different variants', () => {
    const variants = ['default', 'destructive', 'success', 'warning', 'info']

    variants.forEach((variant) => {
      const wrapper = mount({
        components: { Alert, AlertTitle },
        template: `
          <Alert :variant="variant">
            <AlertTitle>Title</AlertTitle>
          </Alert>
        `,
        data() {
          return { variant }
        },
      })

      expect(wrapper.exists()).toBe(true)
    })
  })

  it('shows icon for variant', () => {
    const wrapper = mount({
      components: { Alert, AlertTitle },
      template: `
        <Alert variant="success">
          <AlertTitle>Success</AlertTitle>
        </Alert>
      `,
    })

    expect(wrapper.find('.alert-icon').exists()).toBe(true)
  })

  it('renders as dismissable with close button', () => {
    const wrapper = mount({
      components: { Alert, AlertTitle },
      template: `
        <Alert dismissable>
          <AlertTitle>Dismissable Alert</AlertTitle>
        </Alert>
      `,
    })

    expect(wrapper.find('button').exists()).toBe(true)
  })

  it('emits dismiss event when closed', async () => {
    const wrapper = mount({
      components: { Alert, AlertTitle },
      template: `
        <Alert dismissable @dismiss="onDismiss">
          <AlertTitle>Alert</AlertTitle>
        </Alert>
      `,
      methods: {
        onDismiss() {},
      },
    })

    const closeButton = wrapper.find('button')
    await closeButton.trigger('click')

    expect(wrapper.emitted('dismiss')).toBeTruthy()
  })

  it('hides alert when dismissed', async () => {
    const wrapper = mount({
      components: { Alert, AlertTitle },
      template: `
        <Alert dismissable>
          <AlertTitle>Alert</AlertTitle>
        </Alert>
      `,
    })

    const closeButton = wrapper.find('button')
    await closeButton.trigger('click')

    expect(wrapper.html()).toBe('')
  })

  it('applies custom className', () => {
    const wrapper = mount({
      components: { Alert, AlertTitle },
      template: `
        <Alert class="custom-alert">
          <AlertTitle>Alert</AlertTitle>
        </Alert>
      `,
    })

    expect(wrapper.classes()).toContain('custom-alert')
  })

  it('has correct role attribute', () => {
    const wrapper = mount({
      components: { Alert, AlertTitle },
      template: `
        <Alert>
          <AlertTitle>Alert</AlertTitle>
        </Alert>
      `,
    })

    expect(wrapper.attributes('role')).toBe('alert')
  })

  it('supports custom icon', () => {
    const wrapper = mount({
      components: { Alert, AlertTitle },
      template: `
        <Alert>
          <template #icon>
            <span class="custom-icon">🔔</span>
          </template>
          <AlertTitle>Alert</AlertTitle>
        </Alert>
      `,
    })

    expect(wrapper.find('.custom-icon').exists()).toBe(true)
    expect(wrapper.text()).toContain('🔔')
  })

  it('renders without icon when specified', () => {
    const wrapper = mount({
      components: { Alert, AlertTitle },
      template: `
        <Alert :show-icon="false">
          <AlertTitle>No Icon</AlertTitle>
        </Alert>
      `,
    })

    expect(wrapper.find('.alert-icon').exists()).toBe(false)
  })
})
