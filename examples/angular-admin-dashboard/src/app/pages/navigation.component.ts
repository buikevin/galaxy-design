import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  CardComponent,
  CardHeaderComponent,
  CardTitleComponent,
  CardDescriptionComponent,
  CardContentComponent,
} from '../../components/ui/card';
import {
  UiTabsRootDirective,
  UiTabsListDirective,
  UiTabsTriggerDirective,
  UiTabsContentDirective,
} from '../../components/ui/tabs';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [
    CommonModule,
    CardComponent,
    CardHeaderComponent,
    CardTitleComponent,
    CardDescriptionComponent,
    CardContentComponent,
    UiTabsRootDirective,
    UiTabsListDirective,
    UiTabsTriggerDirective,
    UiTabsContentDirective,
  ],
  template: `
    <div class="space-y-6">
      <div>
        <h1 class="text-3xl font-bold">Navigation Components</h1>
        <p class="text-gray-500 mt-2">Tabs and navigation patterns</p>
      </div>

      <!-- Tabs -->
      <ui-card>
        <ui-card-header>
          <ui-card-title>Tabs</ui-card-title>
          <ui-card-description>Organize content in tabs</ui-card-description>
        </ui-card-header>
        <ui-card-content>
          <div class="space-y-6">
            <!-- Basic Tabs -->
            <div>
              <p class="text-sm font-medium mb-4">Basic Tabs</p>
              <div uiTabsRoot defaultValue="overview" class="w-full">
                <div uiTabsList class="inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground grid w-full grid-cols-3">
                  <button uiTabsTrigger value="overview" class="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm">Overview</button>
                  <button uiTabsTrigger value="analytics" class="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm">Analytics</button>
                  <button uiTabsTrigger value="reports" class="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm">Reports</button>
                </div>
                <div uiTabsContent value="overview" class="mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 space-y-4">
                  <div class="rounded-lg border p-4">
                    <h3 class="text-lg font-semibold mb-2">Overview</h3>
                    <p class="text-sm text-muted-foreground">
                      View your project overview and recent activity here.
                    </p>
                  </div>
                </div>
                <div uiTabsContent value="analytics" class="mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 space-y-4">
                  <div class="rounded-lg border p-4">
                    <h3 class="text-lg font-semibold mb-2">Analytics</h3>
                    <p class="text-sm text-muted-foreground">
                      Track your metrics and performance analytics.
                    </p>
                  </div>
                </div>
                <div uiTabsContent value="reports" class="mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 space-y-4">
                  <div class="rounded-lg border p-4">
                    <h3 class="text-lg font-semibold mb-2">Reports</h3>
                    <p class="text-sm text-muted-foreground">
                      Generate and view detailed reports.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Settings Tabs -->
            <div>
              <p class="text-sm font-medium mb-4">Settings Tabs</p>
              <div uiTabsRoot defaultValue="account" class="w-full">
                <div uiTabsList class="inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground grid w-full grid-cols-4">
                  <button uiTabsTrigger value="account" class="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm">Account</button>
                  <button uiTabsTrigger value="password" class="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm">Password</button>
                  <button uiTabsTrigger value="notifications" class="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm">Notifications</button>
                  <button uiTabsTrigger value="privacy" class="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm">Privacy</button>
                </div>
                <div uiTabsContent value="account" class="mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 space-y-4">
                  <div class="rounded-lg border p-4">
                    <h3 class="text-lg font-semibold mb-2">Account Settings</h3>
                    <p class="text-sm text-muted-foreground mb-4">
                      Manage your account settings and preferences.
                    </p>
                    <div class="space-y-2 text-sm">
                      <div class="flex justify-between">
                        <span class="text-muted-foreground">Email:</span>
                        <span>john.doe@example.com</span>
                      </div>
                      <div class="flex justify-between">
                        <span class="text-muted-foreground">Username:</span>
                        <span>johndoe</span>
                      </div>
                      <div class="flex justify-between">
                        <span class="text-muted-foreground">Role:</span>
                        <span>Administrator</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div uiTabsContent value="password" class="mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 space-y-4">
                  <div class="rounded-lg border p-4">
                    <h3 class="text-lg font-semibold mb-2">Password</h3>
                    <p class="text-sm text-muted-foreground">
                      Change your password and manage security settings.
                    </p>
                  </div>
                </div>
                <div uiTabsContent value="notifications" class="mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 space-y-4">
                  <div class="rounded-lg border p-4">
                    <h3 class="text-lg font-semblold mb-2">Notifications</h3>
                    <p class="text-sm text-muted-foreground">
                      Configure how you receive notifications.
                    </p>
                  </div>
                </div>
                <div uiTabsContent value="privacy" class="mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 space-y-4">
                  <div class="rounded-lg border p-4">
                    <h3 class="text-lg font-semibold mb-2">Privacy</h3>
                    <p class="text-sm text-muted-foreground">
                      Control your privacy and data sharing settings.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ui-card-content>
      </ui-card>

      <div class="rounded-lg border border-dashed p-8 text-center">
        <p class="text-sm text-muted-foreground mb-2">
          Additional navigation components like Breadcrumb, DropdownMenu, HoverCard, Popover, Sheet, Command, and NavigationMenu
        </p>
        <p class="text-xs text-muted-foreground">
          will be available once their sub-components are implemented in the base library
        </p>
      </div>
    </div>
  `
})
export class NavigationComponent {
  // Component logic here if needed
}
