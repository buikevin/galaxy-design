/**
 * @author Bùi Trọng Hiếu
 * @email kevinbui210191@gmail.com
 * @desc Dashboard block - Sidebar navigation + stat cards + data table
 */

import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { cn } from '../../lib/utils';

export interface DashboardNavItem {
  label: string;
  href: string;
  active?: boolean;
}

export interface DashboardStatCard {
  label: string;
  value: string;
  change: string;
  trend: 'up' | 'down';
}

export interface DashboardTableColumn {
  key: string;
  header: string;
}

@Component({
  selector: 'ui-dashboard',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="flex min-h-screen bg-background">
      <aside *ngIf="sidebarOpen" class="border-r bg-card w-64">
        <div class="flex h-16 items-center border-b px-4">
          <span class="text-lg font-semibold">{{ title }}</span>
        </div>
        <nav class="space-y-1 p-2">
          <a
            *ngFor="let item of navItems"
            [href]="item.href"
            [class]="
              cn(
                'flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors hover:bg-accent',
                item.active
                  ? 'bg-accent font-medium text-accent-foreground'
                  : ''
              )
            "
          >
            {{ item.label }}
          </a>
        </nav>
      </aside>

      <main class="flex-1 overflow-y-auto p-6">
        <div class="flex items-center justify-between mb-6">
          <h2 class="text-2xl font-semibold">{{ title }}</h2>
          <button
            type="button"
            class="inline-flex h-8 w-8 items-center justify-center rounded-md border"
            (click)="toggleSidebar()"
          >
            ☰
          </button>
        </div>

        <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-6">
          <div
            *ngFor="let stat of stats"
            class="rounded-lg border bg-card p-6 shadow-sm"
          >
            <p class="text-sm font-medium text-muted-foreground">
              {{ stat.label }}
            </p>
            <p class="text-2xl font-semibold mt-2">{{ stat.value }}</p>
            <p
              [class]="
                stat.trend === 'up'
                  ? 'text-xs mt-1 text-green-600'
                  : 'text-xs mt-1 text-red-600'
              "
            >
              {{ stat.trend === 'up' ? '↑' : '↓' }} {{ stat.change }}
            </p>
          </div>
        </div>

        <div class="rounded-lg border bg-card shadow-sm">
          <div class="border-b px-4 py-3">
            <h3 class="text-sm font-medium">Recent Activity</h3>
          </div>
          <table class="w-full text-sm">
            <thead>
              <tr class="border-b bg-muted/50">
                <th
                  *ngFor="let col of columns"
                  class="h-10 px-4 text-left font-medium text-muted-foreground"
                >
                  {{ col.header }}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                *ngFor="let row of tableData | slice : 0 : 5"
                class="border-b hover:bg-muted/50"
              >
                <td *ngFor="let col of columns" class="p-4">
                  {{ row[col.key] }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent {
  @Input() navItems: DashboardNavItem[] = [];
  @Input() stats: DashboardStatCard[] = [];
  @Input() columns: DashboardTableColumn[] = [];
  @Input() tableData: Record<string, unknown>[] = [];
  @Input() title = 'Dashboard';
  @Input() class?: string;
  @Output() sidebarToggle = new EventEmitter<boolean>();

  cn = cn;
  sidebarOpen = true;

  toggleSidebar(): void {
    this.sidebarOpen = !this.sidebarOpen;
  }
}
