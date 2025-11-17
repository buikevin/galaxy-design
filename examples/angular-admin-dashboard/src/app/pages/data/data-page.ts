import { Component } from '@angular/core';
import { CardComponent, CardContentComponent, CardDescriptionComponent, CardHeaderComponent, CardTitleComponent } from '@/components/ui/card';
import { BadgeComponent } from '@/components/ui/badge';
import { AvatarComponent, AvatarFallbackComponent } from '@/components/ui/avatar';
import { SkeletonComponent } from '@/components/ui/skeleton';
import { ProgressComponent } from '@/components/ui/progress';
import { SeparatorComponent } from '@/components/ui/separator';

@Component({
  selector: 'app-data-page',
  standalone: true,
  imports: [
    CardComponent,
    CardHeaderComponent,
    CardTitleComponent,
    CardDescriptionComponent,
    CardContentComponent,
    BadgeComponent,
    AvatarComponent,
    AvatarFallbackComponent,
    SkeletonComponent,
    ProgressComponent,
    SeparatorComponent,
  ],
  template: `
    <div class="space-y-6">
      <div>
        <h1 class="text-3xl font-bold">Data Display Components</h1>
        <p class="text-gray-500 mt-2">Components for displaying data and content</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <!-- Badge Examples -->
        <ui-card>
          <ui-card-header>
            <ui-card-title>Badge</ui-card-title>
            <ui-card-description>Status indicators and labels</ui-card-description>
          </ui-card-header>
          <ui-card-content class="space-y-4">
            <div class="space-y-2">
              <p class="text-sm font-medium">Variants</p>
              <div class="flex flex-wrap gap-2">
                <ui-badge>Default</ui-badge>
                <ui-badge variant="secondary">Secondary</ui-badge>
                <ui-badge variant="outline">Outline</ui-badge>
                <ui-badge variant="destructive">Destructive</ui-badge>
              </div>
            </div>
            <ui-separator />
            <div class="space-y-2">
              <p class="text-sm font-medium">Use Cases</p>
              <div class="flex flex-wrap gap-2">
                <ui-badge>New</ui-badge>
                <ui-badge variant="secondary">In Progress</ui-badge>
                <ui-badge class="bg-green-500">Completed</ui-badge>
                <ui-badge variant="destructive">Urgent</ui-badge>
              </div>
            </div>
          </ui-card-content>
        </ui-card>

        <!-- Avatar Examples -->
        <ui-card>
          <ui-card-header>
            <ui-card-title>Avatar</ui-card-title>
            <ui-card-description>User profile images with fallback</ui-card-description>
          </ui-card-header>
          <ui-card-content class="space-y-4">
            <div class="space-y-2">
              <p class="text-sm font-medium">Fallback</p>
              <div class="flex gap-3">
                <ui-avatar>
                  <ui-avatar-fallback>AB</ui-avatar-fallback>
                </ui-avatar>
                <ui-avatar>
                  <ui-avatar-fallback class="bg-blue-500 text-white">CD</ui-avatar-fallback>
                </ui-avatar>
                <ui-avatar>
                  <ui-avatar-fallback class="bg-green-500 text-white">EF</ui-avatar-fallback>
                </ui-avatar>
              </div>
            </div>
          </ui-card-content>
        </ui-card>

        <!-- Progress -->
        <ui-card>
          <ui-card-header>
            <ui-card-title>Progress</ui-card-title>
            <ui-card-description>Progress indicators and bars</ui-card-description>
          </ui-card-header>
          <ui-card-content class="space-y-4">
            <div class="space-y-2">
              <div class="flex items-center justify-between text-sm">
                <span>Upload Progress</span>
                <span class="text-gray-500">{{ uploadProgress }}%</span>
              </div>
              <ui-progress [value]="uploadProgress" />
            </div>
            <ui-separator />
            <div class="space-y-3">
              <div class="space-y-2">
                <div class="flex items-center justify-between text-sm">
                  <span>Processing</span>
                  <span class="text-gray-500">25%</span>
                </div>
                <ui-progress [value]="25" />
              </div>
              <div class="space-y-2">
                <div class="flex items-center justify-between text-sm">
                  <span>Complete</span>
                  <span class="text-green-600">100%</span>
                </div>
                <ui-progress [value]="100" />
              </div>
            </div>
          </ui-card-content>
        </ui-card>

        <!-- Skeleton -->
        <ui-card>
          <ui-card-header>
            <ui-card-title>Skeleton</ui-card-title>
            <ui-card-description>Loading placeholders</ui-card-description>
          </ui-card-header>
          <ui-card-content class="space-y-4">
            <div class="space-y-3">
              <div class="flex items-center space-x-4">
                <ui-skeleton class="h-12 w-12 rounded-full" />
                <div class="space-y-2 flex-1">
                  <ui-skeleton class="h-4 w-full" />
                  <ui-skeleton class="h-4 w-3/4" />
                </div>
              </div>
              <ui-skeleton class="h-20 w-full" />
            </div>
          </ui-card-content>
        </ui-card>
      </div>
    </div>
  `,
  styles: [],
})
export class DataPageComponent {
  uploadProgress = 65;
}
