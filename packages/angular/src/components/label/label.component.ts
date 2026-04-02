/**
 * @author Bùi Trọng Hiếu
 * @email kevinbui210191@gmail.com
 * @desc Form label with accessible for attribute
 */

import { Component, Input, HostBinding, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RdxLabelDirective } from '@radix-ng/primitives/label';
import { cn } from '../../lib/utils';

@Component({
  selector: 'ui-label, label[ui-label]',
  standalone: true,
  imports: [CommonModule],
  template: `<ng-content></ng-content>`,
  hostDirectives: [RdxLabelDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LabelComponent {
  @Input() htmlFor?: string;
  @Input() class?: string;

  @HostBinding('class')
  get hostClasses(): string {
    return cn(
      'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
      this.class
    );
  }

  @HostBinding('attr.for')
  get forAttribute(): string | null {
    return this.htmlFor || this.for || null;
  }
}
