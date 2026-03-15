/**
 * @author Bùi Trọng Hiếu
 * @email kevinbui210191@gmail.com
 * @desc Breadcrumb components - Displays the path to the current resource using a list of links
 */

import * as React from 'react';
import { ChevronRight, MoreHorizontal } from 'lucide-react';
import { cn } from '@/lib/utils';

/**
 * Breadcrumb Component
 * 
 * Root component for the breadcrumb navigation.
 * Renders as a nav element with aria-label for accessibility.
 * 
 * @param {React.ComponentPropsWithoutRef<'nav'> & { separator?: React.ReactNode }} props - Breadcrumb props
 * @param {string} [props.className] - CSS class names for the breadcrumb
 * @param {React.ReactNode} [props.separator] - Custom separator element between breadcrumb items
 * @param {React.RefObject<HTMLElement>} ref - Reference to the breadcrumb nav element
 * @returns {JSX.Element} Breadcrumb navigation element
 */
const Breadcrumb = React.forwardRef<
  HTMLElement,
  React.ComponentPropsWithoutRef<'nav'> & {
    separator?: React.ReactNode;
  }
>(({ ...props }, ref) => <nav ref={ref} aria-label="breadcrumb" {...props} />);
Breadcrumb.displayName = 'Breadcrumb';

/**
 * BreadcrumbList Component
 * 
 * Renders an ordered list (ol) for breadcrumb items.
 * Uses flexbox for horizontal layout with responsive wrapping.
 * 
 * @param {React.ComponentPropsWithoutRef<'ol'>} props - BreadcrumbList props
 * @param {string} [props.className] - CSS class names for the list
 * @param {React.RefObject<HTMLOListElement>} ref - Reference to the ol element
 * @returns {JSX.Element} Ordered list element for breadcrumb items
 */
const BreadcrumbList = React.forwardRef<
  HTMLOListElement,
  React.ComponentPropsWithoutRef<'ol'>
>(({ className, ...props }, ref) => (
  <ol
    ref={ref}
    className={cn(
      'flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5',
      className
    )}
    {...props}
  />
));
BreadcrumbList.displayName = 'BreadcrumbList';

/**
 * BreadcrumbItem Component
 * 
 * Renders a list item (li) for individual breadcrumb entries.
 * Uses flexbox for inline layout with gap between items.
 * 
 * @param {React.ComponentPropsWithoutRef<'li'>} props - BreadcrumbItem props
 * @param {string} [props.className] - CSS class names for the list item
 * @param {React.RefObject<HTMLLIElement>} ref - Reference to the li element
 * @returns {JSX.Element} List item element for breadcrumb entry
 */
const BreadcrumbItem = React.forwardRef<
  HTMLLIElement,
  React.ComponentPropsWithoutRef<'li'>
>(({ className, ...props }, ref) => (
  <li
    ref={ref}
    className={cn('inline-flex items-center gap-1.5', className)}
    {...props}
  />
));
BreadcrumbItem.displayName = 'BreadcrumbItem';

/**
 * BreadcrumbLink Component
 * 
 * Renders an anchor element (a) for clickable breadcrumb links.
 * Includes hover transition effect for better UX.
 * 
 * @param {React.ComponentPropsWithoutRef<'a'> & { asChild?: boolean }} props - BreadcrumbLink props
 * @param {boolean} [props.asChild] - If true, renders as a child component (for Slot/Compound pattern)
 * @param {string} [props.className] - CSS class names for the anchor element
 * @param {React.RefObject<HTMLAnchorElement>} ref - Reference to the a element
 * @returns {JSX.Element} Anchor element for breadcrumb link
 */
const BreadcrumbLink = React.forwardRef<
  HTMLAnchorElement,
  React.ComponentPropsWithoutRef<'a'> & {
    asChild?: boolean;
  }
>(({ asChild, className, ...props }, ref) => {
  const Comp = 'a';

  return (
    <Comp
      ref={ref}
      className={cn('transition-colors hover:text-foreground', className)}
      {...props}
    />
  );
});
BreadcrumbLink.displayName = 'BreadcrumbLink';

/**
 * BreadcrumbPage Component
 * 
 * Renders a span element for the current page breadcrumb (non-clickable).
 * Includes ARIA attributes for accessibility (aria-current="page").
 * 
 * @param {React.ComponentPropsWithoutRef<'span'>} props - BreadcrumbPage props
 * @param {string} [props.className] - CSS class names for the span element
 * @param {React.RefObject<HTMLSpanElement>} ref - Reference to the span element
 * @returns {JSX.Element} Span element representing current page in breadcrumb
 */
const BreadcrumbPage = React.forwardRef<
  HTMLSpanElement,
  React.ComponentPropsWithoutRef<'span'>
>(({ className, ...props }, ref) => (
  <span
    ref={ref}
    role="link"
    aria-disabled="true"
    aria-current="page"
    className={cn('font-normal text-foreground', className)}
    {...props}
  />
));
BreadcrumbPage.displayName = 'BreadcrumbPage';

/**
 * BreadcrumbSeparator Component
 * 
 * Renders a separator element (li with ChevronRight icon) between breadcrumb items.
 * Uses role="presentation" and aria-hidden="true" for screen readers to skip decorative elements.
 * 
 * @param {React.ComponentProps<'li'>} props - BreadcrumbSeparator props
 * @param {React.ReactNode} [props.children] - Custom separator content (defaults to ChevronRight icon)
 * @param {string} [props.className] - CSS class names for the separator
 * @returns {JSX.Element} List item element with separator icon
 */
const BreadcrumbSeparator = ({
  children,
  className,
  ...props
}: React.ComponentProps<'li'>) => (
  <li
    role="presentation"
    aria-hidden="true"
    className={cn('[&>svg]:size-3.5', className)}
    {...props}
  >
    {children ?? <ChevronRight />}
  </li>
);
BreadcrumbSeparator.displayName = 'BreadcrumbSeparator';

/**
 * BreadcrumbEllipsis Component
 * 
 * Renders an ellipsis indicator (MoreHorizontal icon) for overflowed breadcrumb items.
 * Includes sr-only span for screen reader accessibility.
 * 
 * @param {React.ComponentProps<'span'>} props - BreadcrumbEllipsis props
 * @param {string} [props.className] - CSS class names for the span element
 * @returns {JSX.Element} Span element with ellipsis icon indicating more items
 */
const BreadcrumbEllipsis = ({
  className,
  ...props
}: React.ComponentProps<'span'>) => (
  <span
    role="presentation"
    aria-hidden="true"
    className={cn('flex h-9 w-9 items-center justify-center', className)}
    {...props}
  >
    <MoreHorizontal className="h-4 w-4" />
    <span className="sr-only">More</span>
  </span>
);
BreadcrumbEllipsis.displayName = 'BreadcrumbEllipsis';

export {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
};
