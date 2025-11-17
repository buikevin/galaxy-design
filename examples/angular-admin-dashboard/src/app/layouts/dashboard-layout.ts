import { Component } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';
import { SidebarComponent, SidebarItemComponent } from '@/components/ui/sidebar';
import { ButtonComponent } from '@/components/ui/button';

interface MenuItem {
  id: string;
  label: string;
  icon?: string;
  href?: string;
}

@Component({
  selector: 'app-dashboard-layout',
  standalone: true,
  imports: [RouterOutlet, SidebarComponent, SidebarItemComponent, ButtonComponent],
  template: `
    <div class="min-h-screen flex bg-gray-50">
      <ui-sidebar
        [items]="menuItems"
        (itemClick)="handleItemClick($event)"
        (collapseChange)="handleCollapseChange($event)"
      />
      <div class="flex-1 flex flex-col">
        <header class="bg-white border-b p-4 flex justify-between items-center">
          <h1 class="text-xl font-bold">Galaxy UI Admin Dashboard (Angular)</h1>
        </header>
        <main class="flex-1 p-8 overflow-auto">
          <router-outlet />
        </main>
      </div>
    </div>
  `,
  styles: [],
})
export class DashboardLayoutComponent {
  menuItems: MenuItem[] = [
    { id: 'dashboard', label: 'Dashboard', href: '/dashboard' },
    { id: 'forms', label: 'Form Components', href: '/dashboard/forms' },
    { id: 'data', label: 'Data Display', href: '/dashboard/data' },
    { id: 'feedback', label: 'Feedback', href: '/dashboard/feedback' },
    { id: 'navigation', label: 'Navigation', href: '/dashboard/navigation' },
    { id: 'layout', label: 'Layout', href: '/dashboard/layout' },
  ];

  constructor(private router: Router) {}

  handleItemClick(item: MenuItem) {
    if (item.href) {
      this.router.navigate([item.href]);
    }
  }

  handleCollapseChange(collapsed: boolean) {
    // Handle collapse state if needed
  }
}
