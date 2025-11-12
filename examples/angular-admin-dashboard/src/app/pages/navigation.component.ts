import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent, CardHeaderComponent, CardTitleComponent, CardContentComponent } from '../../components/ui/card';
import { TabsComponent, TabsListComponent, TabsTriggerComponent, TabsContentComponent } from '../../components/ui/tabs';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [
    CommonModule,
    CardComponent,
    CardHeaderComponent,
    CardTitleComponent,
    CardContentComponent,
    TabsComponent,
    TabsListComponent,
    TabsTriggerComponent,
    TabsContentComponent
  ],
  template: `
    <div class="space-y-6">
      <div>
        <h2 class="text-3xl font-bold">Navigation Components</h2>
        <p class="text-gray-600 mt-2">Tabs and Breadcrumb components</p>
      </div>

      <ui-card>
        <ui-card-header>
          <ui-card-title>Tabs Example</ui-card-title>
        </ui-card-header>
        <ui-card-content>
          <ui-tabs defaultValue="account">
            <ui-tabs-list>
              <ui-tabs-trigger value="account">Account</ui-tabs-trigger>
              <ui-tabs-trigger value="password">Password</ui-tabs-trigger>
              <ui-tabs-trigger value="settings">Settings</ui-tabs-trigger>
            </ui-tabs-list>
            <ui-tabs-content value="account">
              <p class="mt-4">Account settings and preferences</p>
            </ui-tabs-content>
            <ui-tabs-content value="password">
              <p class="mt-4">Change your password</p>
            </ui-tabs-content>
            <ui-tabs-content value="settings">
              <p class="mt-4">General settings</p>
            </ui-tabs-content>
          </ui-tabs>
        </ui-card-content>
      </ui-card>
    </div>
  `
})
export class NavigationComponent {}
