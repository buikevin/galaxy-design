import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RdxAspectRatioDirective } from '@radix-ng/primitives/aspect-ratio';

@Component({
  selector: 'ui-aspect-ratio',
  standalone: true,
  imports: [CommonModule, RdxAspectRatioDirective],
  template: `
    <div rdxAspectRatio [ratio]="ratio" [class]="aspectRatioClasses">
      <ng-content></ng-content>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AspectRatioComponent {
  @Input() ratio: number = 16 / 9;
  @Input() class?: string;

  get aspectRatioClasses(): string {
    return this.class || '';
  }
}
