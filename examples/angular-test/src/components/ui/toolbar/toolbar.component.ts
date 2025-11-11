import { Component, Input } from '@angular/core'
import { cn } from '@/lib/utils'

@Component({
  selector: 'ui-toolbar',
  standalone: true,
  template: `
    <div [class]="className">
      <ng-content />
    </div>
  `,
})
export class ToolbarComponent {
  @Input() class?: string

  get className() {
    return cn(
      'flex w-full min-w-max items-center gap-1 rounded-md bg-background p-1',
      this.class
    )
  }
}
