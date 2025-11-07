import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '../index'

describe('Dialog', () => {
  it('renders dialog trigger', () => {
    const wrapper = mount({
      components: { Dialog, DialogTrigger },
      template: `
        <Dialog>
          <DialogTrigger>Open Dialog</DialogTrigger>
        </Dialog>
      `,
    })

    expect(wrapper.text()).toContain('Open Dialog')
  })

  it('opens dialog on trigger click', async () => {
    const wrapper = mount({
      components: { Dialog, DialogTrigger, DialogContent, DialogTitle },
      template: `
        <Dialog>
          <DialogTrigger>Open</DialogTrigger>
          <DialogContent>
            <DialogTitle>Dialog Title</DialogTitle>
          </DialogContent>
        </Dialog>
      `,
    })

    const trigger = wrapper.find('button')
    await trigger.trigger('click')

    expect(wrapper.find('[role="dialog"]').exists()).toBe(true)
  })

  it('shows dialog content when open', async () => {
    const wrapper = mount({
      components: { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogDescription },
      template: `
        <Dialog>
          <DialogTrigger>Open</DialogTrigger>
          <DialogContent>
            <DialogTitle>Welcome</DialogTitle>
            <DialogDescription>This is a dialog</DialogDescription>
          </DialogContent>
        </Dialog>
      `,
    })

    await wrapper.find('button').trigger('click')

    expect(wrapper.text()).toContain('Welcome')
    expect(wrapper.text()).toContain('This is a dialog')
  })

  it('closes dialog on close button click', async () => {
    const wrapper = mount({
      components: { Dialog, DialogTrigger, DialogContent, DialogTitle },
      template: `
        <Dialog>
          <DialogTrigger>Open</DialogTrigger>
          <DialogContent>
            <DialogTitle>Title</DialogTitle>
            <button class="close-btn">Close</button>
          </DialogContent>
        </Dialog>
      `,
    })

    await wrapper.find('button').trigger('click')
    expect(wrapper.find('[role="dialog"]').exists()).toBe(true)

    await wrapper.find('.close-btn').trigger('click')
    expect(wrapper.find('[role="dialog"]').exists()).toBe(false)
  })

  it('closes dialog on Escape key', async () => {
    const wrapper = mount({
      components: { Dialog, DialogTrigger, DialogContent, DialogTitle },
      template: `
        <Dialog>
          <DialogTrigger>Open</DialogTrigger>
          <DialogContent>
            <DialogTitle>Title</DialogTitle>
          </DialogContent>
        </Dialog>
      `,
    })

    await wrapper.find('button').trigger('click')
    expect(wrapper.find('[role="dialog"]').exists()).toBe(true)

    await wrapper.find('[role="dialog"]').trigger('keydown', { key: 'Escape' })
    expect(wrapper.find('[role="dialog"]').exists()).toBe(false)
  })

  it('closes dialog on overlay click', async () => {
    const wrapper = mount({
      components: { Dialog, DialogTrigger, DialogContent, DialogTitle },
      template: `
        <Dialog>
          <DialogTrigger>Open</DialogTrigger>
          <DialogContent>
            <DialogTitle>Title</DialogTitle>
          </DialogContent>
        </Dialog>
      `,
    })

    await wrapper.find('button').trigger('click')

    const overlay = wrapper.find('[data-radix-dialog-overlay]')
    await overlay.trigger('click')

    expect(wrapper.find('[role="dialog"]').exists()).toBe(false)
  })

  it('has correct aria attributes', async () => {
    const wrapper = mount({
      components: { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogDescription },
      template: `
        <Dialog>
          <DialogTrigger>Open</DialogTrigger>
          <DialogContent>
            <DialogTitle>Dialog Title</DialogTitle>
            <DialogDescription>Dialog Description</DialogDescription>
          </DialogContent>
        </Dialog>
      `,
    })

    await wrapper.find('button').trigger('click')

    const dialog = wrapper.find('[role="dialog"]')
    expect(dialog.attributes('aria-modal')).toBe('true')
    expect(dialog.attributes('aria-labelledby')).toBeTruthy()
    expect(dialog.attributes('aria-describedby')).toBeTruthy()
  })

  it('renders in portal', async () => {
    const wrapper = mount({
      components: { Dialog, DialogTrigger, DialogContent, DialogTitle },
      template: `
        <Dialog>
          <DialogTrigger>Open</DialogTrigger>
          <DialogContent>
            <DialogTitle>Title</DialogTitle>
          </DialogContent>
        </Dialog>
      `,
      attachTo: document.body,
    })

    await wrapper.find('button').trigger('click')

    // Dialog should be rendered in a portal (outside the component tree)
    expect(document.querySelector('[role="dialog"]')).toBeTruthy()

    wrapper.unmount()
  })

  it('prevents body scroll when open', async () => {
    const wrapper = mount({
      components: { Dialog, DialogTrigger, DialogContent, DialogTitle },
      template: `
        <Dialog>
          <DialogTrigger>Open</DialogTrigger>
          <DialogContent>
            <DialogTitle>Title</DialogTitle>
          </DialogContent>
        </Dialog>
      `,
      attachTo: document.body,
    })

    const initialOverflow = document.body.style.overflow

    await wrapper.find('button').trigger('click')
    expect(document.body.style.overflow).toBe('hidden')

    wrapper.unmount()
    document.body.style.overflow = initialOverflow
  })

  it('can be controlled externally', async () => {
    const wrapper = mount({
      components: { Dialog, DialogTrigger, DialogContent, DialogTitle },
      data() {
        return { isOpen: false }
      },
      template: `
        <Dialog v-model:open="isOpen">
          <DialogTrigger>Open</DialogTrigger>
          <DialogContent>
            <DialogTitle>Title</DialogTitle>
          </DialogContent>
        </Dialog>
      `,
    })

    expect(wrapper.find('[role="dialog"]').exists()).toBe(false)

    await wrapper.setData({ isOpen: true })
    expect(wrapper.find('[role="dialog"]').exists()).toBe(true)

    await wrapper.setData({ isOpen: false })
    expect(wrapper.find('[role="dialog"]').exists()).toBe(false)
  })

  it('renders header, body, footer sections', async () => {
    const wrapper = mount({
      components: { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle },
      template: `
        <Dialog>
          <DialogTrigger>Open</DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Header Title</DialogTitle>
            </DialogHeader>
            <div class="dialog-body">Body Content</div>
            <div class="dialog-footer">Footer Content</div>
          </DialogContent>
        </Dialog>
      `,
    })

    await wrapper.find('button').trigger('click')

    expect(wrapper.text()).toContain('Header Title')
    expect(wrapper.text()).toContain('Body Content')
    expect(wrapper.text()).toContain('Footer Content')
  })
})
