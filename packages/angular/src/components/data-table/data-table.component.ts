/**
 * @author Bùi Trọng Hiếu
 * @email kevinbui210191@gmail.com
 * @desc Data Table component - Sortable table with column definitions
 */

import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { cn } from '../../lib/utils';

export interface DataTableColumn {
  key: string;
  header: string;
  sortable?: boolean;
  class?: string;
}

@Component({
  selector: 'ui-data-table',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div [class]="cn('relative w-full overflow-auto', tableClass)">
      <table class="w-full caption-bottom text-sm">
        <thead>
          <tr class="border-b border-border">
            <th
              *ngFor="let col of columns"
              [class]="cn('h-12 px-4 text-left align-middle font-medium text-muted-foreground', col.class)"
            >
              <button
                *ngIf="col.sortable !== false"
                type="button"
                class="flex items-center gap-1 hover:text-foreground"
                (click)="sortBy(col.key)"
              >
                {{ col.header }}
                <span *ngIf="sortKey === col.key" class="text-xs">
                  {{ sortDirection === 'asc' ? '↑' : '↓' }}
                </span>
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            *ngFor="let row of sortedData; let i = index"
            class="border-b border-border transition-colors hover:bg-muted/50"
          >
            <td *ngFor="let col of columns" [class]="cn('p-4 align-middle', col.class)">
              {{ row[col.key] }}
            </td>
          </tr>
          <tr *ngIf="sortedData.length === 0">
            <td [attr.colspan]="columns.length" class="h-24 text-center text-muted-foreground">
              No results.
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DataTableComponent {
  @Input() columns: DataTableColumn[] = [];
  @Input() data: Record<string, unknown>[] = [];
  @Input() tableClass = '';

  @Output() rowClick = new EventEmitter<Record<string, unknown>>();

  sortKey: string | null = null;
  sortDirection: 'asc' | 'desc' = 'asc';

  cn = cn;

  get sortedData(): Record<string, unknown>[] {
    if (!this.sortKey) return this.data;
    const key = this.sortKey;
    return [...this.data].sort((a, b) => {
      const av = a[key];
      const bv = b[key];
      if (av === bv) return 0;
      const result = String(av ?? '').localeCompare(String(bv ?? ''), undefined, { numeric: true });
      return this.sortDirection === 'asc' ? result : -result;
    });
  }

  sortBy(key: string): void {
    if (this.sortKey === key) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortKey = key;
      this.sortDirection = 'asc';
    }
  }
}
