/**
 * @author Bùi Trọng Hiếu
 * @email kevinbui210191@gmail.com
 * @desc Avatar components - An image element with a fallback for representing the user
 */

import * as React from 'react'
import * as AvatarPrimitive from '@radix-ui/react-avatar'
import { cn } from '@/lib/utils'

/**
 * Avatar Component
 * 
 * Displays a user avatar image with a fallback when the image fails to load.
 * Built on top of Radix UI Avatar primitive.
 * 
 * @param {React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>} props - Avatar props
 * @param {string} [props.className] - CSS class names for the avatar container
 * @param {React.RefObject<React.ElementRef<typeof AvatarPrimitive.Root>>} ref - Reference to the avatar element
 * @returns {JSX.Element} Avatar container element
 */
const Avatar = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Root
    ref={ref}
    className={cn('relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full', className)}
    {...props}
  />
))
Avatar.displayName = AvatarPrimitive.Root.displayName

/**
 * AvatarImage Component
 * 
 * The image element within the avatar.
 * Displays the user's profile image.
 * 
 * @param {React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>} props - AvatarImage props
 * @param {string} [props.className] - CSS class names for the image
 * @param {string} [props.src] - Image source URL
 * @param {string} [props.alt] - Image alt text
 * @param {React.RefObject<React.ElementRef<typeof AvatarPrimitive.Image>>} ref - Reference to the image element
 * @returns {JSX.Element} Avatar image element
 */
const AvatarImage = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Image>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Image
    ref={ref}
    className={cn('aspect-square h-full w-full', className)}
    {...props}
  />
))
AvatarImage.displayName = AvatarPrimitive.Image.displayName

/**
 * AvatarFallback Component
 * 
 * The fallback element displayed when the avatar image fails to load.
 * Typically shows user initials or a default icon.
 * 
 * @param {React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>} props - AvatarFallback props
 * @param {string} [props.className] - CSS class names for the fallback
 * @param {React.ReactNode} [props.children] - Fallback content (initials, icon, etc.)
 * @param {React.RefObject<React.ElementRef<typeof AvatarPrimitive.Fallback>>} ref - Reference to the fallback element
 * @returns {JSX.Element} Avatar fallback element
 */
const AvatarFallback = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Fallback>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Fallback
    ref={ref}
    className={cn('flex h-full w-full items-center justify-center rounded-full bg-muted', className)}
    {...props}
  />
))
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName

export { Avatar, AvatarImage, AvatarFallback }
