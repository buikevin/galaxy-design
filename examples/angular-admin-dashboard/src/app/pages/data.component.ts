import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent, CardHeaderComponent, CardTitleComponent, CardContentComponent } from '../../components/ui/card';
import { TableComponent } from '../../components/ui/table';
import { BadgeComponent } from '../../components/ui/badge';
import { AvatarComponent } from '../../components/ui/avatar';

@Component({
  selector: 'app-data',
  standalone: true,
  imports: [
    CommonModule,
    CardComponent,
    CardHeaderComponent,
    CardTitleComponent,
    CardContentComponent,
    TableComponent,
    BadgeComponent,
    AvatarComponent
  ],
  template: `
    <div class="space-y-6">
      <div>
        <h2 class="text-3xl font-bold">Data Display</h2>
        <p class="text-gray-600 mt-2">Table, Badge, and Avatar components</p>
      </div>

      <ui-card>
        <ui-card-header>
          <ui-card-title>User List</ui-card-title>
        </ui-card-header>
        <ui-card-content>
          <div class="space-y-4">
            <div class="flex gap-2 flex-wrap">
              <ui-badge>Default</ui-badge>
              <ui-badge variant="secondary">Secondary</ui-badge>
              <ui-badge variant="destructive">Destructive</ui-badge>
              <ui-badge variant="outline">Outline</ui-badge>
            </div>

            <div class="flex gap-4 items-center">
              <ui-avatar src="https://i.pravatar.cc/150?img=1" alt="User 1" />
              <ui-avatar src="https://i.pravatar.cc/150?img=2" alt="User 2" />
              <ui-avatar src="https://i.pravatar.cc/150?img=3" alt="User 3" />
            </div>
          </div>
        </ui-card-content>
      </ui-card>
    </div>
  `
})
export class DataComponent {}
