import { describe, it, expect } from '@jest/globals'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '../index'

describe('Accordion', () => {
  it('renders accordion items', () => {
    render(
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
    )

    expect(screen.getByText('Item 1')).toBeInTheDocument()
    expect(screen.getByText('Item 2')).toBeInTheDocument()
  })

  it('expands item on trigger click', async () => {
    const user = userEvent.setup()

    render(
      <Accordion type="single">
        <AccordionItem value="item-1">
          <AccordionTrigger>Item 1</AccordionTrigger>
          <AccordionContent>Hidden Content</AccordionContent>
        </AccordionItem>
      </Accordion>
    )

    expect(screen.queryByText('Hidden Content')).not.toBeVisible()

    await user.click(screen.getByText('Item 1'))
    expect(screen.getByText('Hidden Content')).toBeVisible()
  })

  it('collapses item when clicked again in single collapsible mode', async () => {
    const user = userEvent.setup()

    render(
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Item 1</AccordionTrigger>
          <AccordionContent>Content 1</AccordionContent>
        </AccordionItem>
      </Accordion>
    )

    const trigger = screen.getByText('Item 1')

    await user.click(trigger)
    expect(screen.getByText('Content 1')).toBeVisible()

    await user.click(trigger)
    expect(screen.queryByText('Content 1')).not.toBeVisible()
  })

  it('allows only one item open in single mode', async () => {
    const user = userEvent.setup()

    render(
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
    )

    await user.click(screen.getByText('Item 1'))
    expect(screen.getByText('Content 1')).toBeVisible()

    await user.click(screen.getByText('Item 2'))
    expect(screen.getByText('Content 2')).toBeVisible()
    expect(screen.queryByText('Content 1')).not.toBeVisible()
  })

  it('allows multiple items open in multiple mode', async () => {
    const user = userEvent.setup()

    render(
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
    )

    await user.click(screen.getByText('Item 1'))
    await user.click(screen.getByText('Item 2'))

    expect(screen.getByText('Content 1')).toBeVisible()
    expect(screen.getByText('Content 2')).toBeVisible()
  })

  it('opens default items on mount', () => {
    render(
      <Accordion type="single" defaultValue="item-1">
        <AccordionItem value="item-1">
          <AccordionTrigger>Item 1</AccordionTrigger>
          <AccordionContent>Content 1</AccordionContent>
        </AccordionItem>
      </Accordion>
    )

    expect(screen.getByText('Content 1')).toBeVisible()
  })

  it('supports keyboard navigation', async () => {
    const user = userEvent.setup()

    render(
      <Accordion type="single">
        <AccordionItem value="item-1">
          <AccordionTrigger>Item 1</AccordionTrigger>
          <AccordionContent>Content 1</AccordionContent>
        </AccordionItem>
      </Accordion>
    )

    const trigger = screen.getByText('Item 1')
    trigger.focus()
    await user.keyboard(' ')

    expect(screen.getByText('Content 1')).toBeVisible()
  })

  it('disables specific items', () => {
    render(
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
    )

    const items = screen.getAllByRole('button')
    expect(items[1]).toHaveAttribute('data-disabled')
  })

  it('has correct aria attributes', () => {
    render(
      <Accordion type="single">
        <AccordionItem value="item-1">
          <AccordionTrigger>Item 1</AccordionTrigger>
          <AccordionContent>Content 1</AccordionContent>
        </AccordionItem>
      </Accordion>
    )

    const trigger = screen.getByRole('button')
    expect(trigger).toHaveAttribute('aria-expanded')
    expect(trigger).toHaveAttribute('aria-controls')
  })

  it('can be controlled externally', async () => {
    const { rerender } = render(
      <Accordion type="single" value="item-1">
        <AccordionItem value="item-1">
          <AccordionTrigger>Item 1</AccordionTrigger>
          <AccordionContent>Content 1</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Item 2</AccordionTrigger>
          <AccordionContent>Content 2</AccordionContent>
        </AccordionItem>
      </Accordion>
    )

    expect(screen.getByText('Content 1')).toBeVisible()

    rerender(
      <Accordion type="single" value="item-2">
        <AccordionItem value="item-1">
          <AccordionTrigger>Item 1</AccordionTrigger>
          <AccordionContent>Content 1</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Item 2</AccordionTrigger>
          <AccordionContent>Content 2</AccordionContent>
        </AccordionItem>
      </Accordion>
    )

    expect(screen.getByText('Content 2')).toBeVisible()
  })

  it('calls onValueChange callback', async () => {
    const user = userEvent.setup()
    const onValueChange = vi.fn()

    render(
      <Accordion type="single" onValueChange={onValueChange}>
        <AccordionItem value="item-1">
          <AccordionTrigger>Item 1</AccordionTrigger>
          <AccordionContent>Content 1</AccordionContent>
        </AccordionItem>
      </Accordion>
    )

    await user.click(screen.getByText('Item 1'))
    expect(onValueChange).toHaveBeenCalledWith('item-1')
  })
})
