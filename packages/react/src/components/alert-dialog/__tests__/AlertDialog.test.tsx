import { describe, it, expect, vi } from '@jest/globals'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogAction,
  AlertDialogCancel
} from '../AlertDialog'

describe('AlertDialog', () => {
  it('renders alert dialog trigger', () => {
    render(
      <AlertDialog>
        <AlertDialogTrigger>Delete</AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogTitle>Confirm</AlertDialogTitle>
        </AlertDialogContent>
      </AlertDialog>
    )

    expect(screen.getByText('Delete')).toBeInTheDocument()
  })

  it('opens dialog when trigger is clicked', async () => {
    const user = userEvent.setup()

    render(
      <AlertDialog>
        <AlertDialogTrigger>Delete</AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogTitle>Are you sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone.
          </AlertDialogDescription>
        </AlertDialogContent>
      </AlertDialog>
    )

    await user.click(screen.getByText('Delete'))

    expect(screen.getByText('Are you sure?')).toBeInTheDocument()
    expect(screen.getByText('This action cannot be undone.')).toBeInTheDocument()
  })

  it('closes dialog when cancel is clicked', async () => {
    const user = userEvent.setup()

    render(
      <AlertDialog>
        <AlertDialogTrigger>Delete</AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogTitle>Confirm</AlertDialogTitle>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    )

    await user.click(screen.getByText('Delete'))
    expect(screen.getByText('Confirm')).toBeInTheDocument()

    await user.click(screen.getByText('Cancel'))
    expect(screen.queryByText('Confirm')).not.toBeInTheDocument()
  })

  it('calls action handler when confirmed', async () => {
    const user = userEvent.setup()
    const onConfirm = vi.fn()

    render(
      <AlertDialog>
        <AlertDialogTrigger>Delete</AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogTitle>Confirm</AlertDialogTitle>
          <AlertDialogFooter>
            <AlertDialogAction onClick={onConfirm}>Confirm</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    )

    await user.click(screen.getByText('Delete'))
    await user.click(screen.getByText('Confirm'))

    expect(onConfirm).toHaveBeenCalled()
  })

  it('does not close on Escape by default', async () => {
    const user = userEvent.setup()

    render(
      <AlertDialog>
        <AlertDialogTrigger>Delete</AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogTitle>Important</AlertDialogTitle>
        </AlertDialogContent>
      </AlertDialog>
    )

    await user.click(screen.getByText('Delete'))
    expect(screen.getByText('Important')).toBeInTheDocument()

    await user.keyboard('{Escape}')
    // Should still be visible
    expect(screen.getByText('Important')).toBeInTheDocument()
  })

  it('does not close on outside click', async () => {
    const user = userEvent.setup()

    render(
      <>
        <AlertDialog>
          <AlertDialogTrigger>Delete</AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogTitle>Confirm</AlertDialogTitle>
          </AlertDialogContent>
        </AlertDialog>
        <div>Outside</div>
      </>
    )

    await user.click(screen.getByText('Delete'))
    expect(screen.getByText('Confirm')).toBeInTheDocument()

    // Try to click outside (on overlay)
    const overlay = document.querySelector('[data-radix-alert-dialog-overlay]')
    if (overlay) {
      await user.click(overlay as Element)
      // Should still be visible
      expect(screen.getByText('Confirm')).toBeInTheDocument()
    }
  })

  it('has correct ARIA attributes', async () => {
    const user = userEvent.setup()

    render(
      <AlertDialog>
        <AlertDialogTrigger>Delete</AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogTitle>Confirm deletion</AlertDialogTitle>
          <AlertDialogDescription>
            This will delete the item permanently.
          </AlertDialogDescription>
        </AlertDialogContent>
      </AlertDialog>
    )

    await user.click(screen.getByText('Delete'))

    const dialog = screen.getByRole('alertdialog')
    expect(dialog).toHaveAttribute('aria-modal', 'true')
  })

  it('renders header, description, and footer', async () => {
    const user = userEvent.setup()

    render(
      <AlertDialog>
        <AlertDialogTrigger>Open</AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete Account</AlertDialogTitle>
            <AlertDialogDescription>
              All your data will be permanently deleted.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction>Delete</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    )

    await user.click(screen.getByText('Open'))

    expect(screen.getByText('Delete Account')).toBeInTheDocument()
    expect(screen.getByText('All your data will be permanently deleted.')).toBeInTheDocument()
    expect(screen.getByText('Cancel')).toBeInTheDocument()
  })

  it('can be controlled', () => {
    const { rerender } = render(
      <AlertDialog open={false}>
        <AlertDialogTrigger>Open</AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogTitle>Controlled</AlertDialogTitle>
        </AlertDialogContent>
      </AlertDialog>
    )

    expect(screen.queryByText('Controlled')).not.toBeInTheDocument()

    rerender(
      <AlertDialog open={true}>
        <AlertDialogTrigger>Open</AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogTitle>Controlled</AlertDialogTitle>
        </AlertDialogContent>
      </AlertDialog>
    )

    expect(screen.getByText('Controlled')).toBeInTheDocument()
  })
})
