/**
 * @author Bùi Trọng Hiếu
 * @email kevinbui210191@gmail.com
 * @desc Dialog components - A window overlaid on either the primary window or another dialog window
 */

import * as React from 'react'
import * as DialogPrimitive from '@radix-ui/react-dialog'
import { cn } from '@/lib/utils'

/**
 * Dialog Props interface
 * @extends React.ComponentPropsWithoutRef<typeof DialogPrimitive.Root> - All standard dialog root attributes
 */
export interface DialogProps extends React.ComponentPropsWithoutRef<typeof DialogPrimitive.Root> {
  /**
   * Open state (controlled)
   */
  open?: boolean
  /**
   * Uncontrolled initial open state
   */
  defaultOpen?: boolean
  /**
   * Called when the open state changes
   */
  onOpenChange?: (open: boolean) => void
  /**
   * Whether interaction outside the dialog is disabled while open
   * @default true
   */
  modal?: boolean
}

/**
 * DialogContent Props interface
 * @extends React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content> - All standard dialog content attributes
 */
export interface DialogContentProps extends React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content> {
  /**
   * Force-mount the content even when closed
   */
  forceMount?: boolean
  /**
   * Called when focus moves into the dialog after opening
   */
  onOpenAutoFocus?: (event: Event) => void
  /**
   * Called when focus returns after closing
   */
  onCloseAutoFocus?: (event: Event) => void
  /**
   * Called when Escape is pressed
   */
  onEscapeKeyDown?: (event: KeyboardEvent) => void
  /**
   * Called when pointer interaction happens outside the dialog
   */
  onPointerDownOutside?: (event: any) => void
  /**
   * Called when focus or pointer interaction happens outside the dialog
   */
  onInteractOutside?: (event: any) => void
  /**
   * CSS class names for the dialog content
   */
  className?: string
}

/**
 * DialogTrigger Props interface
 * @extends React.ComponentPropsWithoutRef<typeof DialogPrimitive.Trigger> - All standard dialog trigger attributes
 */
export interface DialogTriggerProps extends React.ComponentPropsWithoutRef<typeof DialogPrimitive.Trigger> {
  /**
   * Render the trigger as a child element
   * @default false
   */
  asChild?: boolean
}

/**
 * DialogOverlay Props interface
 * @extends React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay> - All standard dialog overlay attributes
 */
export interface DialogOverlayProps extends React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay> {
  /**
   * Force-mount the overlay
   */
  forceMount?: boolean
  /**
   * CSS class names for the overlay
   */
  className?: string
}

/**
 * Dialog Component
 * 
 * Root component for the dialog. Manages the open/close state.
 * Built on top of Radix UI Dialog primitive.
 * 
 * @param {DialogProps} props - Dialog component props
 * @param {boolean} [props.open] - Open state (controlled)
 * @param {boolean} [props.defaultOpen] - Uncontrolled initial open state
 * @param {(open: boolean) => void} [props.onOpenChange] - Called when the open state changes
 * @param {boolean} [props.modal=true] - Whether interaction outside the dialog is disabled while open
 */
const Dialog = DialogPrimitive.Root

/**
 * DialogTrigger Component
 * 
 * The trigger element that opens the dialog.
 * Can be any element (button, link, etc.).
 * 
 * @param {DialogTriggerProps} props - DialogTrigger component props
 * @param {boolean} [props.asChild=false] - Render the trigger as a child element
 */
const DialogTrigger = DialogPrimitive.Trigger

/**
 * DialogPortal Component
 * 
 * Renders dialog content in a portal for proper z-index layering.
 */
const DialogPortal = DialogPrimitive.Portal

/**
 * DialogOverlay Component
 * 
 * The semi-transparent overlay behind the dialog.
 * 
 * @param {DialogOverlayProps} props - DialogOverlay component props
 * @param {string} [props.className] - CSS class names for the overlay
 * @param {boolean} [props.forceMount] - Force mount the overlay
 * @param {React.RefObject<React.ElementRef<typeof DialogPrimitive.Overlay>>} ref - Reference to the overlay element
 * @returns {JSX.Element} Dialog overlay element
 */
const DialogOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  DialogOverlayProps
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn('fixed inset-0 z-50 bg-black/80', className)}
    {...props}
  />
))
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName

/**
 * DialogContent Component
 * 
 * The main content area of the dialog.
 * Renders centered on the screen with a backdrop.
 * 
 * @param {DialogContentProps} props - DialogContent component props
 * @param {string} [props.className] - CSS class names for the content
 * @param {boolean} [props.forceMount] - Force-mount the content even when closed
 * @param {(event: Event) => void} [props.onOpenAutoFocus] - Called when focus moves into the dialog after opening
 * @param {(event: Event) => void} [props.onCloseAutoFocus] - Called when focus returns after closing
 * @param {(event: KeyboardEvent) => void} [props.onEscapeKeyDown] - Called when Escape is pressed
 * @param {(event: any) => void} [props.onPointerDownOutside] - Called when pointer interaction happens outside the dialog
 * @param {(event: any) => void} [props.onInteractOutside] - Called when focus or pointer interaction happens outside the dialog
 * @param {React.ReactNode} [props.children] - Dialog body content
 * @param {React.RefObject<React.ElementRef<typeof DialogPrimitive.Content>>} ref - Reference to the content element
 * @returns {JSX.Element} Dialog content element
 */
const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  DialogContentProps
>(({ className, children, ...props }, ref) => (
  <DialogPortal>
    <DialogOverlay />
    <DialogPrimitive.Content
      ref={ref}
      className={cn('fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg sm:rounded-lg', className)}
      {...props}
    >
      {children}
    </DialogPrimitive.Content>
  </DialogPortal>
))
DialogContent.displayName = DialogPrimitive.Content.displayName

/**
 * DialogHeader Component
 * 
 * A container for dialog header content (title and description).
 * 
 * @param {React.HTMLAttributes<HTMLDivElement>} props - DialogHeader props
 * @param {string} [props.className] - CSS class names for the header
 * @param {React.ReactNode} [props.children] - Header content
 * @returns {JSX.Element} Dialog header element
 */
const DialogHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn('flex flex-col space-y-1.5 text-center sm:text-left', className)}
    {...props}
  />
)
DialogHeader.displayName = 'DialogHeader'

/**
 * DialogFooter Component
 * 
 * A container for dialog footer content (actions like cancel/confirm).
 * 
 * @param {React.HTMLAttributes<HTMLDivElement>} props - DialogFooter props
 * @param {string} [props.className] - CSS class names for the footer
 * @param {React.ReactNode} [props.children] - Footer content
 * @returns {JSX.Element} Dialog footer element
 */
const DialogFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn('flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2', className)}
    {...props}
  />
)
DialogFooter.displayName = 'DialogFooter'

/**
 * DialogTitle Component
 * 
 * The title text of the dialog.
 * Accessible title for screen readers.
 */
export const DialogTitle = DialogPrimitive.Title

/**
 * DialogDescription Component
 * 
 * The description text of the dialog.
 * Provides additional context about the dialog's purpose.
 */
export const DialogDescription = DialogPrimitive.Description

/**
 * DialogClose Component
 * 
 * A button that closes the dialog.
 * Can be used as a trigger to close the dialog.
 */
export const DialogClose = DialogPrimitive.Close

export { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogFooter }
