import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { cn } from '@/lib/utils';

@Component({
  selector: 'ui-avatar-fallback',
  standalone: true,
  imports: [CommonModule],
  template: `
    <span [class]="fallbackClasses">
      <ng-content></ng-content>
    </span>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AvatarFallbackComponent {
  @Input() class?: string;

  get fallbackClasses(): string {
    return cn('flex h-full w-full items-center justify-center rounded-full bg-muted', this.class);
  }
}
