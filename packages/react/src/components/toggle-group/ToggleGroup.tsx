/**
 * @author Bùi Trọng Hiếu
 * @email kevinbui210191@gmail.com
 * @desc ToggleGroup components - A set of buttons that can be toggled on or off as a group
 */

import * as React from 'react';
import * as ToggleGroupPrimitive from '@radix-ui/react-toggle-group';
import { type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { toggleVariants } from '../toggle';

/**
 * Context for sharing variant and size props between ToggleGroup and ToggleGroupItem
 */
const ToggleGroupContext = React.createContext<
  VariantProps<typeof toggleVariants>
>({
  size: 'default',
  variant: 'default',
});

/**
 * ToggleGroup Component
 *
 * A container for a group of toggle buttons. Manages the state of the toggles as a group.
 * Built on top of Radix UI ToggleGroup primitive.
 *
 * @param {React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Root> & VariantProps<typeof toggleVariants>} props - ToggleGroup props
 * @param {string} [props.className] - CSS class names for the group container
 * @param {'default' | 'outline'} [props.variant] - Visual style variant shared with items
 * @param {'default' | 'sm' | 'lg'} [props.size] - Size variant shared with items
 * @param {boolean} [props.disabled] - Disables all toggles in the group
 * @param {string} [props.type] - Selection type (single, multiple)
 * @param {string | string[]} [props.value] - Current selected value(s)
 * @param {(value: string | string[]) => void} [props.onValueChange] - Value change handler
 * @param {boolean} [props.rovingFocus] - Enables roving focus management
 * @param {boolean} [props.loop] - Enables loop navigation
 * @param {React.RefObject<React.ElementRef<typeof ToggleGroupPrimitive.Root>>} ref - Reference to the group element
 * @returns {JSX.Element} ToggleGroup container element
 */
const ToggleGroup = React.forwardRef<
  React.ElementRef<typeof ToggleGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Root> &
    VariantProps<typeof toggleVariants>
>(({ className, variant, size, children, ...props }, ref) => (
  <ToggleGroupPrimitive.Root
    ref={ref}
    className={cn('flex items-center justify-center gap-1', className)}
    {...props}
  >
    <ToggleGroupContext.Provider value={{ variant, size }}>
      {children}
    </ToggleGroupContext.Provider>
  </ToggleGroupPrimitive.Root>
));

ToggleGroup.displayName = ToggleGroupPrimitive.Root.displayName;

/**
 * ToggleGroupItem Component
 *
 * An individual toggle button within a ToggleGroup.
 * Inherits variant and size from the parent ToggleGroup context.
 *
 * @param {React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Item> & VariantProps<typeof toggleVariants>} props - ToggleGroupItem props
 * @param {string} [props.className] - CSS class names for the item
 * @param {string} props.value - The value associated with the item
 * @param {'default' | 'outline'} [props.variant] - Visual style variant (overrides context)
 * @param {'default' | 'sm' | 'lg'} [props.size] - Size variant (overrides context)
 * @param {boolean} [props.disabled] - Disables the item
 * @param {React.ReactNode} [props.children] - Item content
 * @param {React.RefObject<React.ElementRef<typeof ToggleGroupPrimitive.Item>>} ref - Reference to the item element
 * @returns {JSX.Element} ToggleGroup item element
 */
const ToggleGroupItem = React.forwardRef<
  React.ElementRef<typeof ToggleGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Item> &
    VariantProps<typeof toggleVariants>
>(({ className, children, variant, size, ...props }, ref) => {
  const context = React.useContext(ToggleGroupContext);

  return (
    <ToggleGroupPrimitive.Item
      ref={ref}
      className={cn(
        toggleVariants({
          variant: context.variant || variant,
          size: context.size || size,
        }),
        className
      )}
      {...props}
    >
      {children}
    </ToggleGroupPrimitive.Item>
  );
});

ToggleGroupItem.displayName = ToggleGroupPrimitive.Item.displayName;

export { ToggleGroup, ToggleGroupItem };
