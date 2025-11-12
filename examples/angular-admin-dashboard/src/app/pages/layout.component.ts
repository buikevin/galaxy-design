import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent, CardHeaderComponent, CardTitleComponent, CardDescriptionComponent, CardContentComponent } from '../../components/ui/card';
import { SeparatorComponent } from '../../components/ui/separator';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    CommonModule,
    CardComponent,
    CardHeaderComponent,
    CardTitleComponent,
    CardDescriptionComponent,
    CardContentComponent,
    SeparatorComponent
  ],
  template: `
    <div class="space-y-6">
      <div>
        <h2 class="text-3xl font-bold">Layout Components</h2>
        <p class="text-gray-600 mt-2">Card and Separator components</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ui-card>
          <ui-card-header>
            <ui-card-title>Card Title</ui-card-title>
            <ui-card-description>Card description goes here</ui-card-description>
          </ui-card-header>
          <ui-card-content>
            This is the card content area. You can put any content here.
          </ui-card-content>
        </ui-card>

        <ui-card>
          <ui-card-header>
            <ui-card-title>Another Card</ui-card-title>
          </ui-card-header>
          <ui-card-content>
            <p>Cards are versatile containers for your content.</p>
            <ui-separator [class]="'my-4'" />
            <p>Use separators to divide content sections.</p>
          </ui-card-content>
        </ui-card>
      </div>
    </div>
  `
})
export class LayoutComponent {}
