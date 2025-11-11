import { Component, Input } from '@angular/core'
import { cn } from '@/lib/utils'

@Component({
  selector: 'ui-kbd',
  standalone: true,
  template: `
    <kbd [class]="className">
      <ng-content />
    </kbd>
  `,
})
export class KbdComponent {
  /**
   * CSS class
   */
  @Input() class?: string

  /**
   * Size variant
   * @default "default"
   */
  @Input() size: 'sm' | 'default' | 'lg' = 'default'

  get className() {
    return cn(
      'inline-flex items-center justify-center rounded border border-border bg-muted px-2 font-mono text-sm font-medium text-muted-foreground shadow-sm',
      {
        'h-5 min-w-[20px] text-xs': this.size === 'sm',
        'h-6 min-w-[24px] text-sm': this.size === 'default',
        'h-7 min-w-[28px] text-base': this.size === 'lg',
      },
      this.class
    )
  }
}
