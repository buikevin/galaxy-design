/**
 * @author Bùi Trọng Hiếu
 * @email kevinbui210191@gmail.com
 * @desc Accordion components - A vertically stacked set of interactive headings that each reveal an associated section of content
 */

import * as React from 'react';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

/**
 * Accordion Props interface
 * @extends React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Root> - All standard accordion root attributes
 */
export type AccordionProps = React.ComponentPropsWithoutRef<
  typeof AccordionPrimitive.Root
> & {
  /**
   * Accordion selection behavior
   * @default 'single'
   */
  type?: 'single' | 'multiple';
  /**
   * Controlled value for the open item or items
   */
  value?: string | string[];
  /**
   * Uncontrolled initial value for the open item or items
   */
  defaultValue?: string | string[];
  /**
   * Called when the open item or items change
   */
  onValueChange?: (value: string | string[]) => void;
  /**
   * When type is single, allows closing the open item
   * @default false
   */
  collapsible?: boolean;
  /**
   * Disables the accordion and all items
   * @default false
   */
  disabled?: boolean;
  /**
   * Reading direction for RTL or LTR layouts
   * @default 'ltr'
   */
  dir?: 'ltr' | 'rtl';
  /**
   * Accordion orientation
   * @default 'vertical'
   */
  orientation?: 'vertical' | 'horizontal';
  /**
   * Render the root as a child element
   * @default false
   */
  asChild?: boolean;
  /**
   * CSS class names for the root element
   */
  className?: string;
};

/**
 * AccordionItem Props interface
 * @extends React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item> - All standard accordion item attributes
 */
export type AccordionItemProps = React.ComponentPropsWithoutRef<
  typeof AccordionPrimitive.Item
> & {
  /**
   * Unique value for the item
   */
  value?: string;
  /**
   * Disables the item
   * @default false
   */
  disabled?: boolean;
  /**
   * Render the item as a child element
   * @default false
   */
  asChild?: boolean;
  /**
   * CSS class names for the item
   */
  className?: string;
};

/**
 * AccordionTrigger Props interface
 * @extends React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger> - All standard accordion trigger attributes
 */
export type AccordionTriggerProps = React.ComponentPropsWithoutRef<
  typeof AccordionPrimitive.Trigger
> & {
  /**
   * Render the trigger as a child element
   * @default false
   */
  asChild?: boolean;
  /**
   * CSS class names for the trigger
   */
  className?: string;
};

/**
 * AccordionContent Props interface
 * @extends React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content> - All standard accordion content attributes
 */
export type AccordionContentProps = React.ComponentPropsWithoutRef<
  typeof AccordionPrimitive.Content
> & {
  /**
   * Render the content as a child element
   * @default false
   */
  asChild?: boolean;
  /**
   * Force mount content even when closed
   */
  forceMount?: boolean;
  /**
   * CSS class names for the content container
   */
  className?: string;
};

/**
 * Accordion Component
 *
 * Root component for the accordion. Manages the state of all accordion items.
 * Built on top of Radix UI Accordion primitive.
 *
 * @param {AccordionProps} props - Accordion component props
 * @param {string} [props.className] - CSS class names for the accordion
 * @param {'single' | 'multiple'} [props.type='single'] - Accordion selection behavior
 * @param {string | string[]} [props.value] - Controlled value for the open item(s)
 * @param {string | string[]} [props.defaultValue] - Uncontrolled initial value for the open item(s)
 * @param {(value: string | string[]) => void} [props.onValueChange] - Called when the open item(s) change
 * @param {boolean} [props.collapsible=false] - Allows closing the open item when type is single
 * @param {boolean} [props.disabled=false] - Disables the accordion
 * @param {'ltr' | 'rtl'} [props.dir='ltr'] - Reading direction
 * @param {'vertical' | 'horizontal'} [props.orientation='vertical'] - Accordion orientation
 * @param {boolean} [props.asChild=false] - Render the root as a child element
 * @param {React.RefObject<React.ElementRef<typeof AccordionPrimitive.Root>>} ref - Reference to the accordion element
 * @returns {JSX.Element} Accordion root element
 */
const Accordion = AccordionPrimitive.Root;

/**
 * AccordionItem Component
 *
 * An individual item within the accordion.
 * Each item contains a trigger and content.
 *
 * @param {AccordionItemProps} props - AccordionItem component props
 * @param {string} [props.className] - CSS class names for the item
 * @param {string} [props.value] - Unique value for the item
 * @param {boolean} [props.disabled=false] - Whether the item is disabled
 * @param {boolean} [props.asChild=false] - Render the item as a child element
 * @param {React.RefObject<React.ElementRef<typeof AccordionPrimitive.Item>>} ref - Reference to the item element
 * @returns {JSX.Element} Accordion item element
 */
const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  AccordionItemProps
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn('border-b', className)}
    {...props}
  />
));
AccordionItem.displayName = 'AccordionItem';

/**
 * AccordionTrigger Component
 *
 * The interactive header that toggles the visibility of the content.
 * Displays a chevron icon that rotates when expanded.
 *
 * @param {AccordionTriggerProps} props - AccordionTrigger component props
 * @param {string} [props.className] - CSS class names for the trigger
 * @param {boolean} [props.asChild=false] - Render the trigger as a child element
 * @param {React.ReactNode} [props.children] - Trigger content (heading text)
 * @param {React.RefObject<React.ElementRef<typeof AccordionPrimitive.Trigger>>} ref - Reference to the trigger element
 * @returns {JSX.Element} Accordion trigger element
 */
const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  AccordionTriggerProps
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        'flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180',
        className
      )}
      {...props}
    >
      {children}
      <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

/**
 * AccordionContent Component
 *
 * The collapsible content panel that is shown when the trigger is activated.
 * Animates open and closed with smooth transitions.
 *
 * @param {AccordionContentProps} props - AccordionContent component props
 * @param {string} [props.className] - CSS class names for the content
 * @param {boolean} [props.asChild=false] - Render the content as a child element
 * @param {boolean} [props.forceMount] - Force mount the content even when closed
 * @param {React.ReactNode} [props.children] - Content to display when expanded
 * @param {React.RefObject<React.ElementRef<typeof AccordionPrimitive.Content>>} ref - Reference to the content element
 * @returns {JSX.Element} Accordion content element
 */
const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  AccordionContentProps
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className={cn(
      'overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down',
      className
    )}
    {...props}
  >
    <div className="pb-4 pt-0">{children}</div>
  </AccordionPrimitive.Content>
));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
