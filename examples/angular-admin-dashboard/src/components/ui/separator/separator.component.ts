import { Component, Input, HostBinding, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RdxSeparatorRootDirective } from '@radix-ng/primitives/separator';
import { cn } from '@/lib/utils';

@Component({
  selector: 'ui-separator, [ui-separator]',
  standalone: true,
  imports: [CommonModule],
  template: ``,
  hostDirectives: [
    {
      directive: RdxSeparatorRootDirective,
      inputs: ['orientation']
    }
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SeparatorComponent {
  @Input() orientation: 'horizontal' | 'vertical' = 'horizontal';
  @Input() class?: string;

  @HostBinding('class')
  get hostClasses(): string {
    return cn(
      'shrink-0 bg-border',
      this.orientation === 'horizontal' ? 'h-[1px] w-full' : 'h-full w-[1px]',
      this.class
    );
  }
}
