import { Component } from '@angular/core';
import { CardComponent, CardContentComponent, CardDescriptionComponent, CardHeaderComponent, CardTitleComponent } from '@/components/ui/card';

@Component({
  selector: 'app-dashboard-home',
  standalone: true,
  imports: [
    CardComponent,
    CardHeaderComponent,
    CardTitleComponent,
    CardDescriptionComponent,
    CardContentComponent,
  ],
  template: `
    <div class="space-y-6">
      <div>
        <h1 class="text-3xl font-bold">Welcome to Galaxy UI</h1>
        <p class="text-gray-500 mt-2">
          Explore the component library for Angular
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ui-card>
          <ui-card-header>
            <ui-card-title>Form Components</ui-card-title>
            <ui-card-description>Interactive form inputs and controls</ui-card-description>
          </ui-card-header>
          <ui-card-content>
            <p class="text-sm text-gray-600">
              Buttons, inputs, selects, checkboxes, and more form elements.
            </p>
          </ui-card-content>
        </ui-card>

        <ui-card>
          <ui-card-header>
            <ui-card-title>Data Display</ui-card-title>
            <ui-card-description>Components for displaying data</ui-card-description>
          </ui-card-header>
          <ui-card-content>
            <p class="text-sm text-gray-600">
              Tables, badges, avatars, and data visualization components.
            </p>
          </ui-card-content>
        </ui-card>

        <ui-card>
          <ui-card-header>
            <ui-card-title>Feedback</ui-card-title>
            <ui-card-description>User feedback and notifications</ui-card-description>
          </ui-card-header>
          <ui-card-content>
            <p class="text-sm text-gray-600">
              Alerts, dialogs, toasts, and tooltips for user interaction.
            </p>
          </ui-card-content>
        </ui-card>

        <ui-card>
          <ui-card-header>
            <ui-card-title>Navigation</ui-card-title>
            <ui-card-description>Navigation and menu components</ui-card-description>
          </ui-card-header>
          <ui-card-content>
            <p class="text-sm text-gray-600">
              Tabs, breadcrumbs, menus, and navigation patterns.
            </p>
          </ui-card-content>
        </ui-card>

        <ui-card>
          <ui-card-header>
            <ui-card-title>Layout</ui-card-title>
            <ui-card-description>Structure and layout helpers</ui-card-description>
          </ui-card-header>
          <ui-card-content>
            <p class="text-sm text-gray-600">
              Cards, separators, accordions, and layout components.
            </p>
          </ui-card-content>
        </ui-card>

        <ui-card>
          <ui-card-header>
            <ui-card-title>Getting Started</ui-card-title>
            <ui-card-description>Quick start guide</ui-card-description>
          </ui-card-header>
          <ui-card-content>
            <p class="text-sm text-gray-600">
              Click on any category in the sidebar to explore the components.
            </p>
          </ui-card-content>
        </ui-card>
      </div>
    </div>
  `,
  styles: [],
})
export class DashboardHomeComponent {}
