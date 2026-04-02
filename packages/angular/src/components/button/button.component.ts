/**
 * @author Bùi Trọng Hiếu
 * @email kevinbui210191@gmail.com
 * @desc Versatile button with 6 status variants and 5 sizes
 */

import { Component, Input, HostBinding, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { type ButtonVariants, buttonVariants } from './variants';
import { cn } from '../../lib/utils';

@Component({
  selector: 'ui-button, button[ui-button]',
  standalone: true,
  imports: [CommonModule],
  template: `<ng-content></ng-content>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
  @Input() variant: ButtonVariants['variant'] = 'default';
  @Input() size: ButtonVariants['size'] = 'default';
  @Input() class?: string;
  @Input() disabled?: boolean;
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  @Input() ariaLabel?: string;

  @HostBinding('class')
  get hostClasses(): string {
    return cn(buttonVariants({ variant: this.variant, size: this.size }), this.class);
  }

  @HostBinding('attr.type')
  get buttonType(): string {
    return this.type;
  }

  @HostBinding('attr.disabled')
  get isDisabled(): boolean | null {
    return this.disabled ? true : null;
  }

  @HostBinding('attr.aria-label')
  get ariaLabelAttr(): string | null {
    return this.ariaLabel || null;
  }
}
