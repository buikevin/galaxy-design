import { Component, Input } from '@angular/core'
import { cn } from '@/lib/utils'
import { CommonModule } from '@angular/common'

@Component({
  selector: 'ui-empty',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div [class]="className">
      <ng-content select="[image]">
        <svg
          class="mb-4 h-16 w-16 text-muted-foreground/40"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          [attr.aria-label]="imageAlt"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            [attr.stroke-width]="1"
            d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
          />
        </svg>
      </ng-content>
      <p *ngIf="description" class="text-sm text-muted-foreground">
        {{ description }}
      </p>
      <div class="mt-4">
        <ng-content />
      </div>
    </div>
  `,
})
export class EmptyComponent {
  /**
   * CSS class
   */
  @Input() class?: string

  /**
   * Empty state description
   */
  @Input() description?: string

  /**
   * Custom image alt text
   */
  @Input() imageAlt: string = 'Empty'

  get className() {
    return cn(
      'flex flex-col items-center justify-center p-8 text-center',
      this.class
    )
  }
}
