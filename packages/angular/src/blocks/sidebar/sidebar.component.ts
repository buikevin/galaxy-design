import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '@/components/ui/button/button.component';
import { SeparatorComponent } from '@/components/ui/separator/separator.component';
import { SidebarItemComponent } from './sidebar-item.component';
import type { MenuItem } from './types';

@Component({
  selector: 'ui-sidebar',
  standalone: true,
  imports: [CommonModule, ButtonComponent, SeparatorComponent, SidebarItemComponent],
  template: `
    <aside
      class="flex flex-col h-full border-r bg-card transition-all duration-300"
      [style.width]="currentWidth"
    >
      <!-- Header -->
      <div class="flex items-center justify-between p-4">
        <div *ngIf="!isCollapsed" class="flex items-center gap-2">
          <div class="h-8 w-8 rounded bg-primary"></div>
          <h2 class="text-lg font-semibold">Menu</h2>
        </div>
        <div *ngIf="isCollapsed" class="flex justify-center w-full">
          <div class="h-8 w-8 rounded bg-primary"></div>
        </div>
      </div>

      <ui-separator />

      <!-- Navigation Items -->
      <nav class="flex-1 overflow-y-auto p-2">
        <ui-sidebar-item
          *ngFor="let item of items"
          [item]="item"
          [collapsed]="isCollapsed"
          (itemClick)="onItemClick.emit($event)"
        />
      </nav>

      <ui-separator />

      <!-- Footer -->
      <div class="p-2">
        <ui-button
          *ngIf="collapsible"
          variant="ghost"
          [class]="'w-full' + (isCollapsed ? ' justify-center px-2' : '')"
          (click)="toggleCollapse()"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            [class]="'transition-transform' + (isCollapsed ? ' rotate-180' : '')"
          >
            <path d="m15 18-6-6 6-6" />
          </svg>
          <span *ngIf="!isCollapsed" class="ml-2">Collapse</span>
        </ui-button>
      </div>
    </aside>
  `,
})
export class SidebarComponent {
  @Input() items: MenuItem[] = [];
  @Input() collapsible = true;
  @Input() defaultCollapsed = false;
  @Input() width = '280px';
  @Input() collapsedWidth = '60px';

  @Output() itemClick = new EventEmitter<MenuItem>();
  @Output() collapseChange = new EventEmitter<boolean>();

  isCollapsed = this.defaultCollapsed;

  get currentWidth(): string {
    return this.isCollapsed ? this.collapsedWidth : this.width;
  }

  toggleCollapse(): void {
    this.isCollapsed = !this.isCollapsed;
    this.collapseChange.emit(this.isCollapsed);
  }
}
