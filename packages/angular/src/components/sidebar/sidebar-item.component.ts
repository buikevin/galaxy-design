/**
 * Galaxy UI - Sidebar Item Component (Stub)
 *
 * This is a placeholder component. Full implementation coming soon.
 */

import { Component, Input } from '@angular/core'
import { CommonModule } from '@angular/common'

export interface SidebarItemData {
  label: string
  icon?: string
  link?: string
}

@Component({
  selector: 'ui-sidebar-item',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="sidebar-item-placeholder">
      <span>{{ label }}</span>
    </div>
  `,
  styles: [`
    .sidebar-item-placeholder {
      padding: 0.5rem 1rem;
      cursor: pointer;
      border-radius: 4px;
    }
    .sidebar-item-placeholder:hover {
      background: #f5f5f5;
    }
  `]
})
export class SidebarItemComponent {
  @Input() label: string = ''
  @Input() icon?: string
  @Input() link?: string
}
