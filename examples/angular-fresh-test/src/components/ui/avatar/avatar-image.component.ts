import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ui-avatar-image',
  standalone: true,
  imports: [CommonModule],
  template: `
    <img
      [src]="src"
      [alt]="alt"
      class="aspect-square h-full w-full rounded-full object-cover"
    />
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AvatarImageComponent {
  @Input() src?: string;
  @Input() alt?: string;
}
