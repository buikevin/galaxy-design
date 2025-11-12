import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { cn } from '@/lib/utils';

@Component({
  selector: 'ui-avatar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <span [class]="avatarClasses">
      <ng-content></ng-content>
    </span>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AvatarComponent {
  @Input() class?: string;

  get avatarClasses(): string {
    return cn('relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full', this.class);
  }
}
