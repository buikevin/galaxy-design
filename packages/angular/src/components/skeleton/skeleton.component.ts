/**
 * @author Bùi Trọng Hiếu
 * @email kevinbui210191@gmail.com
 * @desc Placeholder component for loading states
 */

import { Component, Input } from '@angular/core'
import { cn } from '@/lib/utils'

@Component({
  selector: 'ui-skeleton',
  standalone: true,
  template: `
    <div [class]="className">
      <ng-content />
    </div>
  `,
})
export class SkeletonComponent {
  /**
   * CSS class
   */
  @Input() class?: string

  /**
   * Skeleton variant
   * @default "default"
   */
  @Input() variant: 'default' | 'circle' | 'text' = 'default'

  get className() {
    return cn(
      'animate-pulse bg-muted',
      {
        'rounded-md': this.variant === 'default',
        'rounded-full': this.variant === 'circle',
        'h-4 rounded': this.variant === 'text',
      },
      this.class
    )
  }
}
