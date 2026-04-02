/**
 * @author Bùi Trọng Hiếu
 * @email kevinbui210191@gmail.com
 * @desc Command components - Composable command palette for fast keyboard-first interactions
 */

import * as React from 'react';
import { Command as CommandPrimitive } from 'cmdk';
import { Search } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Dialog, DialogContent } from '../dialog/Dialog';

/**
 * Command Component
 *
 * Root component for the command palette.
 * Provides a container for command items with search functionality.
 * Built on top of cmdk primitive.
 *
 * @param {React.ComponentPropsWithoutRef<typeof CommandPrimitive>} props - Command props
 * @param {string} [props.className] - CSS class names for the command container
 * @param {React.RefObject<React.ElementRef<typeof CommandPrimitive>>} ref - Reference to the command element
 * @returns {JSX.Element} Command palette container
 */

const Command = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive>
>(({ className, ...props }, ref) => (
  <CommandPrimitive
    ref={ref}
    className={cn(
      'flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground',
      className
    )}
    {...props}
  />
));
Command.displayName = CommandPrimitive.displayName;

/**
 * CommandDialog Component
 *
 * A dialog that contains a command palette.
 * Renders the command palette inside a modal dialog.
 *
 * @param {React.ComponentPropsWithoutRef<typeof Dialog>} props - Dialog props
 * @param {React.ReactNode} [props.children] - Command palette content
 * @returns {JSX.Element} Dialog with command palette
 */
const CommandDialog = ({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Dialog>) => {
  return (
    <Dialog {...props}>
      <DialogContent className="overflow-hidden p-0 shadow-lg">
        <Command className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5">
          {children}
        </Command>
      </DialogContent>
    </Dialog>
  );
};

/**
 * CommandInput Component
 *
 * The search input field for the command palette.
 * Displays a search icon and accepts user input for filtering commands.
 *
 * @param {React.ComponentPropsWithoutRef<typeof CommandPrimitive.Input>} props - CommandInput props
 * @param {string} [props.className] - CSS class names for the input
 * @param {string} [props.placeholder] - Placeholder text for the input
 * @param {string} [props.value] - Current value of the input
 * @param {(value: string) => void} [props.onValueChange] - Callback when input value changes
 * @param {React.RefObject<React.ElementRef<typeof CommandPrimitive.Input>>} ref - Reference to the input element
 * @returns {JSX.Element} Command input field
 */
const CommandInput = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Input>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Input>
>(({ className, ...props }, ref) => (
  <div className="flex items-center border-b px-3" cmdk-input-wrapper="">
    <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
    <CommandPrimitive.Input
      ref={ref}
      className={cn(
        'flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50',
        className
      )}
      {...props}
    />
  </div>
));

CommandInput.displayName = CommandPrimitive.Input.displayName;

/**
 * CommandList Component
 *
 * The scrollable list container for command items.
 * Renders all command items, groups, and empty states.
 *
 * @param {React.ComponentPropsWithoutRef<typeof CommandPrimitive.List>} props - CommandList props
 * @param {string} [props.className] - CSS class names for the list container
 * @param {React.RefObject<React.ElementRef<typeof CommandPrimitive.List>>} ref - Reference to the list element
 * @returns {JSX.Element} Command list container
 */
const CommandList = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.List>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.List
    ref={ref}
    className={cn('max-h-[300px] overflow-y-auto overflow-x-hidden', className)}
    {...props}
  />
));

CommandList.displayName = CommandPrimitive.List.displayName;

/**
 * CommandEmpty Component
 *
 * Displays when no commands match the search query.
 * Shows a "no results" message to the user.
 *
 * @param {React.ComponentPropsWithoutRef<typeof CommandPrimitive.Empty>} props - CommandEmpty props
 * @param {string} [props.className] - CSS class names for the empty state
 * @param {React.ReactNode} [props.children] - Empty state content
 * @param {React.RefObject<React.ElementRef<typeof CommandPrimitive.Empty>>} ref - Reference to the empty element
 * @returns {JSX.Element} Empty state message
 */
const CommandEmpty = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Empty>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Empty>
>((props, ref) => (
  <CommandPrimitive.Empty
    ref={ref}
    className="py-6 text-center text-sm"
    {...props}
  />
));

CommandEmpty.displayName = CommandPrimitive.Empty.displayName;

/**
 * CommandGroup Component
 *
 * A container for grouping related command items.
 * Can include an optional heading for the group.
 *
 * @param {React.ComponentPropsWithoutRef<typeof CommandPrimitive.Group>} props - CommandGroup props
 * @param {string} [props.className] - CSS class names for the group container
 * @param {string} [props.heading] - Optional heading text for the group
 * @param {React.RefObject<React.ElementRef<typeof CommandPrimitive.Group>>} ref - Reference to the group element
 * @returns {JSX.Element} Command group container
 */
const CommandGroup = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Group>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Group>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Group
    ref={ref}
    className={cn(
      'overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground',
      className
    )}
    {...props}
  />
));

CommandGroup.displayName = CommandPrimitive.Group.displayName;

/**
 * CommandSeparator Component
 *
 * A visual separator between command groups or items.
 * Renders as a horizontal line.
 *
 * @param {React.ComponentPropsWithoutRef<typeof CommandPrimitive.Separator>} props - CommandSeparator props
 * @param {string} [props.className] - CSS class names for the separator
 * @param {React.RefObject<React.ElementRef<typeof CommandPrimitive.Separator>>} ref - Reference to the separator element
 * @returns {JSX.Element} Command separator line
 */
const CommandSeparator = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Separator
    ref={ref}
    className={cn('-mx-1 h-px bg-border', className)}
    {...props}
  />
));
CommandSeparator.displayName = CommandPrimitive.Separator.displayName;

/**
 * CommandItem Component
 *
 * An individual command item in the list.
 * Supports keyboard navigation and selection.
 *
 * @param {React.ComponentPropsWithoutRef<typeof CommandPrimitive.Item>} props - CommandItem props
 * @param {string} [props.className] - CSS class names for the item
 * @param {string} [props.value] - The value of the command item (used for matching)
 * @param {boolean} [props.disabled] - Whether the item is disabled
 * @param {() => void} [props.onSelect] - Callback when item is selected
 * @param {React.RefObject<React.ElementRef<typeof CommandPrimitive.Item>>} ref - Reference to the item element
 * @returns {JSX.Element} Command item
 */
const CommandItem = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Item>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Item
    ref={ref}
    className={cn(
      'relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-accent aria-selected:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      className
    )}
    {...props}
  />
));

CommandItem.displayName = CommandPrimitive.Item.displayName;

/**
 * CommandShortcut Component
 *
 * Displays a keyboard shortcut hint for a command item.
 * Typically shown on the right side of the command item.
 *
 * @param {React.HTMLAttributes<HTMLSpanElement>} props - CommandShortcut props
 * @param {string} [props.className] - CSS class names for the shortcut
 * @param {React.ReactNode} [props.children] - Shortcut text (e.g., "⌘K")
 * @returns {JSX.Element} Keyboard shortcut display
 */
const CommandShortcut = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cn(
        'ml-auto text-xs tracking-widest text-muted-foreground',
        className
      )}
      {...props}
    />
  );
};
CommandShortcut.displayName = 'CommandShortcut';

export {
  Command,
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandShortcut,
  CommandSeparator,
};
