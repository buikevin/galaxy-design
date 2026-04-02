/**
 * @author Bùi Trọng Hiếu
 * @email kevinbui210191@gmail.com
 * @desc Status badges with 4 variants for labeling
 */

import { Component, Input, HostBinding, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { type BadgeVariants, badgeVariants } from './variants';
import { cn } from '../../lib/utils';

@Component({
  selector: 'ui-badge',
  standalone: true,
  imports: [CommonModule],
  template: `<ng-content></ng-content>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BadgeComponent {
  @Input() variant: BadgeVariants['variant'] = 'default';
  @Input() class?: string;

  @HostBinding('class')
  get hostClasses(): string {
    return cn(badgeVariants({ variant: this.variant }), this.class);
  }
}
