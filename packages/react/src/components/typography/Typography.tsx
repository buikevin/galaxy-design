/**
 * @author Bùi Trọng Hiếu
 * @email kevinbui210191@gmail.com
 * @desc Typography component - Displays various text styles and headings
 */

import * as React from 'react'
import { cn } from '@/lib/utils'

/**
 * Typography variant types
 */
type TypographyVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'blockquote' | 'code' | 'lead' | 'large' | 'small' | 'muted'

/**
 * Typography Props interface
 * @extends React.HTMLAttributes<HTMLElement> - All standard HTML attributes
 */
export interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  /**
   * Typography variant determines the style and semantic HTML element
   * @default "p"
   */
  variant?: TypographyVariant
  /**
   * Custom HTML element to render
   * If not provided, will be inferred from variant
   */
  as?: React.ElementType
}

/**
 * Variant CSS style mapping
 */
const variantStyles = {
  h1: 'scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl',
  h2: 'scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0',
  h3: 'scroll-m-20 text-2xl font-semibold tracking-tight',
  h4: 'scroll-m-20 text-xl font-semibold tracking-tight',
  p: 'leading-7 [&:not(:first-child)]:mt-6',
  blockquote: 'mt-6 border-l-2 pl-6 italic',
  code: 'relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold',
  lead: 'text-xl text-muted-foreground',
  large: 'text-lg font-semibold',
  small: 'text-sm font-medium leading-none',
  muted: 'text-sm text-muted-foreground',
}

/**
 * Default HTML element mapping for each variant
 */
const defaultElements = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  p: 'p',
  blockquote: 'blockquote',
  code: 'code',
  lead: 'p',
  large: 'div',
  small: 'small',
  muted: 'p',
} as const

/**
 * Typography Component
 * 
 * Displays various text styles and headings with consistent formatting.
 * Supports multiple variants for different semantic levels.
 * 
 * @param {TypographyProps} props - Typography component props
 * @param {string} [props.className] - CSS class names for the typography
 * @param {TypographyVariant} [props.variant] - Text style variant
 * @param {React.ElementType} [props.as] - Custom HTML element to render
 * @param {React.ReactNode} [props.children] - Text content
 * @param {React.RefObject<HTMLElement>} ref - Reference to the typography element
 * @returns {JSX.Element} Typography element
 */
const Typography = React.forwardRef<HTMLElement, TypographyProps>(
  ({ className, variant = 'p', as, ...props }, ref) => {
    const Component = (as || defaultElements[variant]) as React.ElementType

    return (
      <Component
        ref={ref}
        className={cn(variantStyles[variant], className)}
        {...props}
      />
    )
  }
)
Typography.displayName = 'Typography'

export { Typography }
