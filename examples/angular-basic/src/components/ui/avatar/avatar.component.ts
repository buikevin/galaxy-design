import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  RdxAvatarRootDirective,
  RdxAvatarImageDirective,
  RdxAvatarFallbackDirective,
} from '@radix-ng/primitives/avatar';
import { cn } from '@/lib/utils';

@Component({
  selector: 'ui-avatar',
  standalone: true,
  imports: [CommonModule, RdxAvatarRootDirective, RdxAvatarImageDirective, RdxAvatarFallbackDirective],
  template: `
    <span rdxAvatarRoot [class]="avatarClasses">
      <img
        rdxAvatarImage
        [src]="src"
        [alt]="alt"
        class="aspect-square h-full w-full"
      />
      <span rdxAvatarFallback [class]="fallbackClasses">
        <ng-content></ng-content>
      </span>
    </span>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AvatarComponent {
  @Input() src?: string;
  @Input() alt?: string;
  @Input() class?: string;

  get avatarClasses(): string {
    return cn('relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full', this.class);
  }

  get fallbackClasses(): string {
    return cn('flex h-full w-full items-center justify-center rounded-full bg-muted');
  }
}
