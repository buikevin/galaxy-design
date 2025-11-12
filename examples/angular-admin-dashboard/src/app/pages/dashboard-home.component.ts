import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent, CardHeaderComponent, CardTitleComponent, CardDescriptionComponent, CardContentComponent } from '../../components/ui/card';

@Component({
  selector: 'app-dashboard-home',
  standalone: true,
  imports: [
    CommonModule,
    CardComponent,
    CardHeaderComponent,
    CardTitleComponent,
    CardDescriptionComponent,
    CardContentComponent
  ],
  template: `
    <div class="space-y-6">
      <div>
        <h2 class="text-3xl font-bold">Welcome to Galaxy UI Admin Dashboard</h2>
        <p class="text-gray-600 mt-2">
          Built with Angular 20 and Galaxy Design System
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ui-card>
          <ui-card-header>
            <ui-card-title>📝 Form Components</ui-card-title>
            <ui-card-description>
              Input, Label, Checkbox and Form elements
            </ui-card-description>
          </ui-card-header>
          <ui-card-content>
            Explore various form components for building interactive forms.
          </ui-card-content>
        </ui-card>

        <ui-card>
          <ui-card-header>
            <ui-card-title>📈 Data Display</ui-card-title>
            <ui-card-description>
              Table, Badge, and Avatar components
            </ui-card-description>
          </ui-card-header>
          <ui-card-content>
            Display and organize data with tables and visual indicators.
          </ui-card-content>
        </ui-card>

        <ui-card>
          <ui-card-header>
            <ui-card-title>💬 Feedback</ui-card-title>
            <ui-card-description>
              Alert components for user feedback
            </ui-card-description>
          </ui-card-header>
          <ui-card-content>
            Provide feedback to users with various alert styles.
          </ui-card-content>
        </ui-card>

        <ui-card>
          <ui-card-header>
            <ui-card-title>🧭 Navigation</ui-card-title>
            <ui-card-description>
              Tabs and Breadcrumb components
            </ui-card-description>
          </ui-card-header>
          <ui-card-content>
            Build intuitive navigation with tabs and breadcrumbs.
          </ui-card-content>
        </ui-card>

        <ui-card>
          <ui-card-header>
            <ui-card-title>📐 Layout</ui-card-title>
            <ui-card-description>
              Card and Separator components
            </ui-card-description>
          </ui-card-header>
          <ui-card-content>
            Structure your content with flexible layout components.
          </ui-card-content>
        </ui-card>

        <ui-card>
          <ui-card-header>
            <ui-card-title>🎨 Components</ui-card-title>
            <ui-card-description>
              20+ UI components available
            </ui-card-description>
          </ui-card-header>
          <ui-card-content>
            Fully typed, accessible, and customizable components.
          </ui-card-content>
        </ui-card>
      </div>
    </div>
  `
})
export class DashboardHomeComponent {}
