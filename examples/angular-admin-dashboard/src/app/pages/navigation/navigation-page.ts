import { Component } from '@angular/core';
import { CardComponent, CardContentComponent, CardDescriptionComponent, CardHeaderComponent, CardTitleComponent } from '@/components/ui/card';
import { TabsComponent, TabsListComponent, TabsTriggerComponent, TabsContentComponent } from '@/components/ui/tabs';
import { BreadcrumbComponent, BreadcrumbListComponent, BreadcrumbItemComponent, BreadcrumbLinkComponent, BreadcrumbSeparatorComponent, BreadcrumbPageComponent } from '@/components/ui/breadcrumb';
import { DropdownMenuComponent, DropdownMenuTriggerComponent, DropdownMenuContentComponent, DropdownMenuItemComponent, DropdownMenuSeparatorComponent } from '@/components/ui/dropdown-menu';
import { ButtonComponent } from '@/components/ui/button';
import { SeparatorComponent } from '@/components/ui/separator';

@Component({
  selector: 'app-navigation-page',
  standalone: true,
  imports: [
    CardComponent,
    CardHeaderComponent,
    CardTitleComponent,
    CardDescriptionComponent,
    CardContentComponent,
    TabsComponent,
    TabsListComponent,
    TabsTriggerComponent,
    TabsContentComponent,
    BreadcrumbComponent,
    BreadcrumbListComponent,
    BreadcrumbItemComponent,
    BreadcrumbLinkComponent,
    BreadcrumbSeparatorComponent,
    BreadcrumbPageComponent,
    DropdownMenuComponent,
    DropdownMenuTriggerComponent,
    DropdownMenuContentComponent,
    DropdownMenuItemComponent,
    DropdownMenuSeparatorComponent,
    
    ButtonComponent,
    SeparatorComponent,
  ],
  template: `
    <div class="space-y-6">
      <div>
        <h1 class="text-3xl font-bold">Navigation Components</h1>
        <p class="text-gray-500 mt-2">Tabs, breadcrumbs, dropdowns, and more</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <!-- Breadcrumb -->
        <ui-card>
          <div ui-card-header>
            <h3 ui-card-title>Breadcrumb</h3>
            <p ui-card-description>Page navigation breadcrumb</p>
          </div>
          <div ui-card-content class="space-y-4">
            <nav ui-breadcrumb>
              <ol ui-breadcrumb-list>
                <li ui-breadcrumb-item>
                  <a ui-breadcrumb-link href="/dashboard">Home</a>
                </li>
                <li ui-breadcrumb-separator></li>
                <li ui-breadcrumb-item>
                  <a ui-breadcrumb-link href="/dashboard">Dashboard</a>
                </li>
                <li ui-breadcrumb-separator></li>
                <li ui-breadcrumb-item>
                  <span ui-breadcrumb-page>Navigation</span>
                </li>
              </ol>
            </nav>
          </div>
        </ui-card>

        <!-- Tabs -->
        <!-- <ui-card>
          <div ui-card-header>
            <h3 ui-card-title>Tabs</h3>
            <p ui-card-description>Tabbed navigation interface</p>
          </div>
          <div ui-card-content>
            <ui-tabs defaultValue="overview">
              <ui-tabs-list>
                <button ui-tabs-trigger value="overview">Overview</button>
                <button ui-tabs-trigger value="analytics">Analytics</button>
                <button ui-tabs-trigger value="reports">Reports</button>
              </ui-tabs-list>
              <div ui-tabs-content value="overview">
                <p class="py-4 text-sm text-gray-600">
                  Dashboard overview with key metrics.
                </p>
              </div>
              <div ui-tabs-content value="analytics">
                <p class="py-4 text-sm text-gray-600">
                  Detailed analytics and performance data.
                </p>
              </div>
              <div ui-tabs-content value="reports">
                <p class="py-4 text-sm text-gray-600">
                  Generate and view reports.
                </p>
              </div>
            </ui-tabs>
          </div>
        </ui-card> -->

        <!-- Dropdown Menu -->
        <ui-card>
          <div ui-card-header>
            <h3 ui-card-title>Dropdown Menu</h3>
            <p ui-card-description>Contextual dropdown menus</p>
          </div>
          <div ui-card-content class="space-y-4">
            <ui-dropdown-menu>
              <button ui-button variant="outline" ui-dropdown-menu-trigger>
                My Account
              </button>
              <ui-dropdown-menu-content class="w-56">
                <div ui-dropdown-menu-label>My Account</div>
                <ui-dropdown-menu-separator />
                <div ui-dropdown-menu-item>Profile</div>
                <div ui-dropdown-menu-item>Settings</div>
                <ui-dropdown-menu-separator />
                <div ui-dropdown-menu-item class="text-red-600">Logout</div>
              </ui-dropdown-menu-content>
            </ui-dropdown-menu>
          </div>
        </ui-card>
      </div>
    </div>
  `,
  styles: [],
})
export class NavigationPageComponent {}
