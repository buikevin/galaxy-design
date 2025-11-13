import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../services/auth.service';
import { ButtonComponent } from '../../components/ui/button';
import { SidebarComponent, type MenuItem } from '../../components/ui/sidebar';

@Component({
  selector: 'app-dashboard-layout',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    ButtonComponent,
    SidebarComponent
  ],
  template: `
    <div class="min-h-screen flex bg-gray-50">
      <ui-sidebar
        [items]="menuItems"
        (itemClick)="onItemClick($event)"
        (collapseChange)="onCollapseChange($event)"
      />
      <div class="flex-1 flex flex-col">
        <header class="bg-white border-b p-4 flex justify-between items-center">
          <h1 class="text-xl font-bold">Galaxy UI Admin Dashboard</h1>
          <button ui-button variant="outline" (click)="handleLogout()">
            Logout
          </button>
        </header>
        <main class="flex-1 p-8 overflow-auto">
          <router-outlet />
        </main>
      </div>
    </div>
  `
})
export class DashboardLayoutComponent {
  menuItems: MenuItem[] = [
    { id: 'dashboard', label: 'Dashboard', icon: '📊', href: '/dashboard' },
    { id: 'forms', label: 'Form Components', icon: '📝', href: '/dashboard/forms' },
    { id: 'data', label: 'Data Display', icon: '📈', href: '/dashboard/data' },
    { id: 'feedback', label: 'Feedback', icon: '💬', href: '/dashboard/feedback' },
    { id: 'navigation', label: 'Navigation', icon: '🧭', href: '/dashboard/navigation' },
    { id: 'layout', label: 'Layout', icon: '📐', href: '/dashboard/layout' },
  ];

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  onItemClick(item: MenuItem) {
    if (item.href) {
      this.router.navigate([item.href]);
    }
  }

  onCollapseChange(collapsed: boolean) {
    // Handle sidebar collapse state if needed
  }

  handleLogout() {
    this.authService.logout();
  }
}
