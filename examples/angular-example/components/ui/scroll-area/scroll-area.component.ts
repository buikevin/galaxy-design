import { Component, Input } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RdxScrollAreaModule } from '@radix-ng/primitives/scroll-area'

@Component({
  selector: 'ui-scroll-area',
  standalone: true,
  imports: [CommonModule, RdxScrollAreaModule],
  template: `
    <div rdxScrollAreaRoot [class]="scrollAreaClasses">
      <div rdxScrollAreaViewport class="h-full w-full rounded-[inherit]">
        <ng-content></ng-content>
      </div>
      <div
        rdxScrollAreaScrollbar
        [orientation]="orientation"
        [class]="scrollbarClasses"
      >
        <div rdxScrollAreaThumb class="relative flex-1 rounded-full bg-border"></div>
      </div>
      <div rdxScrollAreaCorner></div>
    </div>
  `,
})
export class ScrollAreaComponent {
  @Input() class?: string
  @Input() orientation: 'vertical' | 'horizontal' = 'vertical'

  get scrollAreaClasses(): string {
    return `relative overflow-hidden ${this.class || ''}`
  }

  get scrollbarClasses(): string {
    const baseClasses = 'flex touch-none select-none transition-colors'
    const orientationClasses =
      this.orientation === 'vertical'
        ? 'h-full w-2.5 border-l border-l-transparent p-[1px]'
        : 'h-2.5 flex-col border-t border-t-transparent p-[1px]'
    return `${baseClasses} ${orientationClasses}`
  }
}
