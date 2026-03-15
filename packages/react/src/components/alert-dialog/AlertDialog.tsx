/**
 * @author Bùi Trọng Hiếu
 * @email kevinbui210191@gmail.com
 * @desc Alert Dialog components - A modal dialog that interrupts the user with important content and expects a response
 */

import * as React from 'react'
import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog'
import { cn } from '@/lib/utils'

/**
 * AlertDialog Component
 * 
 * Root component for the alert dialog. Manages the open/close state.
 * Built on top of Radix UI Alert Dialog primitive.
 */
const AlertDialog = AlertDialogPrimitive.Root

/**
 * AlertDialogTrigger Component
 * 
 * The trigger element that opens the alert dialog.
 * Can be any element (button, link, etc.).
 */
const AlertDialogTrigger = AlertDialogPrimitive.Trigger

/**
 * AlertDialogPortal Component
 * 
 * Renders dialog content in a portal for proper z-index layering.
 */
const AlertDialogPortal = AlertDialogPrimitive.Portal

/**
 * AlertDialogOverlay Component
 * 
 * The semi-transparent overlay behind the alert dialog.
 * 
 * @param {React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Overlay>} props - AlertDialogOverlay props
 * @param {string} [props.className] - CSS class names for the overlay
 * @param {boolean} [props.forceMount] - Force mount the overlay
 * @param {React.RefObject<React.ElementRef<typeof AlertDialogPrimitive.Overlay>>} ref - Reference to the overlay element
 * @returns {JSX.Element} Alert dialog overlay element
 */
const AlertDialogOverlay = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Overlay
    className={cn('fixed inset-0 z-50 bg-black/80', className)}
    {...props}
    ref={ref}
  />
))
AlertDialogOverlay.displayName = AlertDialogPrimitive.Overlay.displayName

/**
 * AlertDialogContent Component
 * 
 * The main content area of the alert dialog.
 * Renders centered on the screen with a backdrop.
 * 
 * @param {React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Content>} props - AlertDialogContent props
 * @param {string} [props.className] - CSS class names for the content
 * @param {React.ReactNode} [props.children] - Dialog content
 * @param {boolean} [props.forceMount] - Force mount the content
 * @param {React.RefObject<React.ElementRef<typeof AlertDialogPrimitive.Content>>} ref - Reference to the content element
 * @returns {JSX.Element} Alert dialog content element
 */
const AlertDialogContent = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Content>
>(({ className, ...props }, ref) => (
  <AlertDialogPortal>
    <AlertDialogOverlay />
    <AlertDialogPrimitive.Content
      ref={ref}
      className={cn('fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg sm:rounded-lg', className)}
      {...props}
    />
  </AlertDialogPortal>
))
AlertDialogContent.displayName = AlertDialogPrimitive.Content.displayName

/**
 * AlertDialogHeader Component
 * 
 * A container for alert dialog header content (title and description).
 * 
 * @param {React.HTMLAttributes<HTMLDivElement>} props - AlertDialogHeader props
 * @param {string} [props.className] - CSS class names for the header
 * @param {React.ReactNode} [props.children] - Header content
 * @returns {JSX.Element} Alert dialog header element
 */
const AlertDialogHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn('flex flex-col space-y-2 text-center sm:text-left', className)}
    {...props}
  />
)
AlertDialogHeader.displayName = 'AlertDialogHeader'

/**
 * AlertDialogFooter Component
 * 
 * A container for alert dialog footer content (actions like cancel/confirm).
 * 
 * @param {React.HTMLAttributes<HTMLDivElement>} props - AlertDialogFooter props
 * @param {string} [props.className] - CSS class names for the footer
 * @param {React.ReactNode} [props.children] - Footer content
 * @returns {JSX.Element} Alert dialog footer element
 */
const AlertDialogFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn('flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2', className)}
    {...props}
  />
)
AlertDialogFooter.displayName = 'AlertDialogFooter'

/**
 * AlertDialogTitle Component
 * 
 * The title text of the alert dialog.
 * Accessible title for screen readers.
 */
export const AlertDialogTitle = AlertDialogPrimitive.Title

/**
 * AlertDialogDescription Component
 * 
 * The description text of the alert dialog.
 * Provides additional context about the dialog's purpose.
 */
export const AlertDialogDescription = AlertDialogPrimitive.Description

/**
 * AlertDialogAction Component
 * 
 * The primary action button (e.g., "Continue", "Delete").
 * Typically styled with a prominent color.
 */
export const AlertDialogAction = AlertDialogPrimitive.Action

/**
 * AlertDialogCancel Component
 * 
 * The cancel button that closes the dialog without taking action.
 * Typically styled with a secondary or outline variant.
 */
export const AlertDialogCancel = AlertDialogPrimitive.Cancel

export {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogPortal
}
