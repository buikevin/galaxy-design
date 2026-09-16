/**
 * @author Bùi Trọng Hiếu
 * @email kevinbui210191@gmail.com
 * @desc Dashboard block - Sidebar navigation + stat cards + charts + data table
 */

import * as React from 'react';
import { cn } from '@/lib/utils';

export interface DashboardStatCard {
  label: string;
  value: string;
  change: string;
  trend: 'up' | 'down';
}

export interface DashboardBlockProps {
  /** Sidebar navigation items */
  navItems: Array<{ label: string; href: string; active?: boolean }>;
  /** Stat cards at the top */
  stats: DashboardStatCard[];
  /** Table columns */
  columns: Array<{ key: string; header: string }>;
  /** Table data rows */
  tableData: Record<string, unknown>[];
  /** Block title */
  title?: string;
  className?: string;
}

export interface DashboardStatCard {
  label: string;
  value: string;
  trend: 'up' | 'down';
  change: string;
}

export function DashboardBlock({ navItems, stats, columns, tableData, title = 'Dashboard', className }: DashboardBlockProps) {
  const [sidebarOpen, setSidebarOpen] = React.useState(true);

  return (
    <div className={cn('flex min-h-screen bg-background', className)}>
      {/* Sidebar */}
      <aside
        className={cn(
          'border-r bg-card transition-all duration-200',
          sidebarOpen ? 'w-64' : 'w-0 overflow-hidden',
        )}
      >
        <div className="flex h-16 items-center border-b px-4">
          <span className="text-lg font-semibold">{title}</span>
        </div>
        <nav className="space-y-1 p-2">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={cn(
                'flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors hover:bg-accent',
                item.active && 'bg-accent font-medium text-accent-foreground',
              )}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 overflow-y-auto p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold">{title}</h2>
          <button
            type="button"
            className="inline-flex h-8 w-8 items-center justify-center rounded-md border"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            ☰
          </button>
        </div>

        {/* Stats */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-lg border bg-card p-6 shadow-sm"
            >
              <p className="text-sm font-medium text-muted-foreground">{stat.label}</p>
              <p className="text-2xl font-semibold mt-2">{stat.value}</p>
              <p className={cn(
                'text-xs mt-1',
                stat.trend === 'up' ? 'text-green-600' : 'text-red-600',
              )}>
                {stat.trend === 'up' ? '↑' : '↓'} {stat.change}
              </p>
            </div>
          ))}
        </div>

        {/* Data table */}
        <div className="rounded-lg border bg-card shadow-sm">
          <div className="border-b px-4 py-3">
            <h3 className="text-sm font-medium">Recent Activity</h3>
          </div>
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b bg-muted/50">
                {columns.map((col) => (
                  <th key={col.key} className="h-10 px-4 text-left font-medium text-muted-foreground">
                    {col.header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tableData.slice(0, 5).map((row, i) => (
                <tr key={i} className="border-b hover:bg-muted/50">
                  {columns.map((col) => (
                    <td key={col.key} className="p-4">{String(row[col.key] ?? '')}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};
DashboardBlock.displayName = 'DashboardBlock';
