import { Component, Input, HostBinding, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RdxLabelDirective } from '@radix-ng/primitives/label';
import { cn } from '@/lib/utils';

@Component({
  selector: 'ui-label, label[ui-label]',
  standalone: true,
  imports: [CommonModule],
  template: `<ng-content></ng-content>`,
  hostDirectives: [RdxLabelDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LabelComponent {
  @Input() for?: string;
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
    return this.for || null;
  }
}
