/**
 * @author Bùi Trọng Hiếu
 * @email kevinbui210191@gmail.com
 * @desc Card components - A card container with header, title, description, content, and footer sections
 */

import * as React from 'react';
import { cn } from '@/lib/utils';

/**
 * Card Component
 * 
 * A container component for displaying content in a card layout.
 * 
 * @param {React.HTMLAttributes<HTMLDivElement>} props - Card props
 * @param {string} [props.className] - CSS class names for the card
 * @param {React.RefObject<HTMLDivElement>} ref - Reference to the card element
 * @returns {JSX.Element} Card container element
 */
const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        'rounded-lg border bg-card text-card-foreground shadow-sm',
        className
      )}
      {...props}
    />
  )
);
Card.displayName = 'Card';

/**
 * CardHeader Component
 * 
 * The header section of a card, typically containing title and description.
 * 
 * @param {React.HTMLAttributes<HTMLDivElement>} props - CardHeader props
 * @param {string} [props.className] - CSS class names for the header
 * @param {React.RefObject<HTMLDivElement>} ref - Reference to the header element
 * @returns {JSX.Element} Card header element
 */
const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('flex flex-col space-y-1.5 p-6', className)}
      {...props}
    />
  )
);
CardHeader.displayName = 'CardHeader';

/**
 * CardTitle Component
 * 
 * The title text of a card. Renders as an h3 element.
 * 
 * @param {React.HTMLAttributes<HTMLHeadingElement>} props - CardTitle props
 * @param {string} [props.className] - CSS class names for the title
 * @param {React.RefObject<HTMLParagraphElement>} ref - Reference to the title element
 * @returns {JSX.Element} Card title element
 */
const CardTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h3
      ref={ref}
      className={cn(
        'text-2xl font-semibold leading-none tracking-tight',
        className
      )}
      {...props}
    />
  )
);
CardTitle.displayName = 'CardTitle';

/**
 * CardDescription Component
 * 
 * The description text of a card. Renders as a paragraph with muted styling.
 * 
 * @param {React.HTMLAttributes<HTMLParagraphElement>} props - CardDescription props
 * @param {string} [props.className] - CSS class names for the description
 * @param {React.RefObject<HTMLParagraphElement>} ref - Reference to the description element
 * @returns {JSX.Element} Card description element
 */
const CardDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p
      ref={ref}
      className={cn('text-sm text-muted-foreground', className)}
      {...props}
    />
  )
);
CardDescription.displayName = 'CardDescription';

/**
 * CardContent Component
 * 
 * The main content area of a card.
 * 
 * @param {React.HTMLAttributes<HTMLDivElement>} props - CardContent props
 * @param {string} [props.className] - CSS class names for the content
 * @param {React.RefObject<HTMLDivElement>} ref - Reference to the content element
 * @returns {JSX.Element} Card content element
 */
const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('p-6 pt-0', className)} {...props} />
  )
);
CardContent.displayName = 'CardContent';

/**
 * CardFooter Component
 * 
 * The footer section of a card, typically containing actions or additional info.
 * 
 * @param {React.HTMLAttributes<HTMLDivElement>} props - CardFooter props
 * @param {string} [props.className] - CSS class names for the footer
 * @param {React.RefObject<HTMLDivElement>} ref - Reference to the footer element
 * @returns {JSX.Element} Card footer element
 */
const CardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('flex items-center p-6 pt-0', className)}
      {...props}
    />
  )
);
CardFooter.displayName = 'CardFooter';

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };
