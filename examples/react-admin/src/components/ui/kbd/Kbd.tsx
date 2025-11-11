import * as React from 'react'
import { cn } from '@/lib/utils'

export interface KbdProps extends React.HTMLAttributes<HTMLElement> {
  /**
   * Size variant
   * @default "default"
   */
  size?: 'sm' | 'default' | 'lg'
}

const Kbd = React.forwardRef<HTMLElement, KbdProps>(
  ({ className, size = 'default', ...props }, ref) => {
    return (
      <kbd
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center rounded border border-border bg-muted px-2 font-mono text-sm font-medium text-muted-foreground shadow-sm',
          {
            'h-5 min-w-[20px] text-xs': size === 'sm',
            'h-6 min-w-[24px] text-sm': size === 'default',
            'h-7 min-w-[28px] text-base': size === 'lg',
          },
          className
        )}
        {...props}
      />
    )
  }
)
Kbd.displayName = 'Kbd'

export { Kbd }
