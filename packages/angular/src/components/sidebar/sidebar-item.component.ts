/**
 * @author Bùi Trọng Hiếu
 * @email kevinbui210191@gmail.com
 * @desc Sidebar menu item with label, icon, and active state
 */

import { Component, Input, Output, EventEmitter } from '@angular/core'
import { CommonModule } from '@angular/common'

export interface MenuItem {
  label: string
  icon?: string
  link?: string
  active?: boolean
}

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
  @Input() item: MenuItem = { label: '' }
  @Input() collapsed: boolean = false
  @Output() itemClick = new EventEmitter<MenuItem>()
}
