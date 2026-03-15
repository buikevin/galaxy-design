/**
 * @author Bùi Trọng Hiếu
 * @email kevinbui210191@gmail.com
 * @desc Loading spinner with 3 size variants
 */

import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { cn } from '@/lib/utils';

export type SpinnerSize = 'sm' | 'default' | 'lg';

@Component({
  selector: 'ui-spinner',
  standalone: true,
  template: `
    <span
      role="status"
      [attr.aria-label]="label"
      [class]="spinnerClasses"
    ></span>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SpinnerComponent {
  @Input() size: SpinnerSize = 'default';
  @Input() label: string = 'Loading...';
  @Input() class?: string;

  get spinnerClasses(): string {
    return cn(
      'inline-block shrink-0 animate-spin rounded-full border-solid border-current border-t-transparent text-muted-foreground',
      {
        'h-4 w-4 border-2': this.size === 'sm',
        'h-6 w-6 border-2': this.size === 'default',
        'h-8 w-8 border-[3px]': this.size === 'lg',
      },
      this.class,
    );
  }
}
