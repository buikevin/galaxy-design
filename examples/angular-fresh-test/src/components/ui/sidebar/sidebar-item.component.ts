/**
 * Galaxy UI - Sidebar Item Component (Stub)
 *
 * This is a placeholder component. Full implementation coming soon.
 */

import { Component, Input, Output, EventEmitter } from '@angular/core'
import { CommonModule } from '@angular/common'
import type { MenuItem } from './types'

@Component({
  selector: 'ui-sidebar-item',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="sidebar-item-placeholder" (click)="itemClick.emit(item)">
      <span *ngIf="!collapsed">{{ item?.label }}</span>
      <span *ngIf="collapsed" class="icon-only">{{ item?.icon || '•' }}</span>
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
    .icon-only {
      display: inline-block;
      text-align: center;
      width: 100%;
    }
  `]
})
export class SidebarItemComponent {
  @Input() item: MenuItem = { id: '', label: '' }
  @Input() collapsed: boolean = false
  @Output() itemClick = new EventEmitter<MenuItem>()
}
