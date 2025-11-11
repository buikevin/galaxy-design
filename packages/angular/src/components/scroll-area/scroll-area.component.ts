import { Component, Input } from '@angular/core'
import { CommonModule } from '@angular/common'

@Component({
  selector: 'ui-scroll-area',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div [class]="scrollAreaClasses" [style.overflow]="orientation === 'vertical' ? 'auto' : 'auto'">
      <div class="h-full w-full rounded-[inherit]">
        <ng-content></ng-content>
      </div>
    </div>
  `,
  styles: [`
    :host {
      display: block;
    }
  `]
})
export class ScrollAreaComponent {
  @Input() class?: string
  @Input() orientation: 'vertical' | 'horizontal' = 'vertical'

  get scrollAreaClasses(): string {
    return `relative overflow-auto ${this.class || ''}`
  }
}
