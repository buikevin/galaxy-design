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
  TableComponent,
  TableHeaderDirective,
  TableBodyDirective,
  TableRowDirective,
  TableHeadDirective,
  TableCellDirective,
} from '../../components/ui/table';
import { BadgeComponent } from '../../components/ui/badge';
import { AvatarComponent, AvatarImageComponent, AvatarFallbackComponent } from '../../components/ui/avatar';
import { SkeletonComponent } from '../../components/ui/skeleton';
import { ProgressComponent } from '../../components/ui/progress';
import { SeparatorComponent } from '../../components/ui/separator';
import { PaginationComponent } from '../../components/ui/pagination';

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  status: string;
}

@Component({
  selector: 'app-data',
  standalone: true,
  imports: [
    CommonModule,
    CardComponent,
    CardHeaderComponent,
    CardTitleComponent,
    CardDescriptionComponent,
    CardContentComponent,
    TableComponent,
    TableHeaderDirective,
    TableBodyDirective,
    TableRowDirective,
    TableHeadDirective,
    TableCellDirective,
    BadgeComponent,
    AvatarComponent,
    AvatarImageComponent,
    AvatarFallbackComponent,
    SkeletonComponent,
    ProgressComponent,
    SeparatorComponent,
    PaginationComponent,
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
                <ui-badge variant="outline">Draft</ui-badge>
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
              <p class="text-sm font-medium">With Images</p>
              <div class="flex gap-3">
                <ui-avatar class="h-10 w-10">
                  <ui-avatar-image src="https://github.com/shadcn.png" alt="User" />
                  <ui-avatar-fallback>CN</ui-avatar-fallback>
                </ui-avatar>
                <ui-avatar class="h-12 w-12">
                  <ui-avatar-image src="https://github.com/shadcn.png" alt="User" />
                  <ui-avatar-fallback>JD</ui-avatar-fallback>
                </ui-avatar>
                <ui-avatar class="h-14 w-14">
                  <ui-avatar-image src="https://github.com/shadcn.png" alt="User" />
                  <ui-avatar-fallback>LG</ui-avatar-fallback>
                </ui-avatar>
              </div>
            </div>
            <ui-separator />
            <div class="space-y-2">
              <p class="text-sm font-medium">Fallback Only</p>
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
                <ui-avatar>
                  <ui-avatar-fallback class="bg-purple-500 text-white">GH</ui-avatar-fallback>
                </ui-avatar>
              </div>
            </div>
          </ui-card-content>
        </ui-card>

        <!-- Skeleton Examples -->
        <ui-card>
          <ui-card-header>
            <ui-card-title>Skeleton</ui-card-title>
            <ui-card-description>Loading placeholders</ui-card-description>
          </ui-card-header>
          <ui-card-content class="space-y-4">
            <button
              (click)="simulateLoading()"
              class="text-sm text-blue-500 hover:underline"
            >
              {{ loading ? 'Loading...' : 'Click to simulate loading' }}
            </button>
            <div class="space-y-3">
              @if (loading) {
                <div class="flex items-center space-x-4">
                  <ui-skeleton class="h-12 w-12 rounded-full" />
                  <div class="space-y-2 flex-1">
                    <ui-skeleton class="h-4 w-full" />
                    <ui-skeleton class="h-4 w-3/4" />
                  </div>
                </div>
                <ui-skeleton class="h-20 w-full" />
                <div class="space-y-2">
                  <ui-skeleton class="h-4 w-full" />
                  <ui-skeleton class="h-4 w-5/6" />
                  <ui-skeleton class="h-4 w-4/6" />
                </div>
              } @else {
                <div class="flex items-center space-x-4">
                  <ui-avatar>
                    <ui-avatar-fallback>JD</ui-avatar-fallback>
                  </ui-avatar>
                  <div class="space-y-1">
                    <p class="text-sm font-medium">John Doe</p>
                    <p class="text-sm text-gray-500">john&#64;example.com</p>
                  </div>
                </div>
                <div class="p-4 bg-gray-50 rounded-md">
                  <p class="text-sm">This is some loaded content that appears after the skeleton loading state.</p>
                </div>
              }
            </div>
          </ui-card-content>
        </ui-card>

        <!-- Progress Examples -->
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
              <div class="flex gap-2">
                <button
                  (click)="increaseProgress()"
                  class="text-xs text-blue-500 hover:underline"
                >
                  +10%
                </button>
                <button
                  (click)="decreaseProgress()"
                  class="text-xs text-blue-500 hover:underline"
                >
                  -10%
                </button>
                <button
                  (click)="resetProgress()"
                  class="text-xs text-gray-500 hover:underline"
                >
                  Reset
                </button>
              </div>
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
                  <span>Installing</span>
                  <span class="text-gray-500">50%</span>
                </div>
                <ui-progress [value]="50" class="bg-blue-100" />
              </div>
              <div class="space-y-2">
                <div class="flex items-center justify-between text-sm">
                  <span>Complete</span>
                  <span class="text-green-600">100%</span>
                </div>
                <ui-progress [value]="100" class="bg-green-100" />
              </div>
            </div>
          </ui-card-content>
        </ui-card>

        <!-- Separator Examples -->
        <ui-card>
          <ui-card-header>
            <ui-card-title>Separator</ui-card-title>
            <ui-card-description>Visual dividers between content</ui-card-description>
          </ui-card-header>
          <ui-card-content class="space-y-4">
            <div class="space-y-2">
              <p class="text-sm font-medium">Horizontal Separator</p>
              <p class="text-sm text-gray-500">Above content</p>
              <ui-separator />
              <p class="text-sm text-gray-500">Below content</p>
            </div>
            <div class="space-y-2">
              <p class="text-sm font-medium">With Text Content</p>
              <div class="space-y-1">
                <h4 class="text-sm font-semibold">Section 1</h4>
                <p class="text-sm text-gray-500">First section content</p>
              </div>
              <ui-separator class="my-4" />
              <div class="space-y-1">
                <h4 class="text-sm font-semibold">Section 2</h4>
                <p class="text-sm text-gray-500">Second section content</p>
              </div>
              <ui-separator class="my-4" />
              <div class="space-y-1">
                <h4 class="text-sm font-semibold">Section 3</h4>
                <p class="text-sm text-gray-500">Third section content</p>
              </div>
            </div>
          </ui-card-content>
        </ui-card>

        <!-- Pagination Examples -->
        <ui-card>
          <ui-card-header>
            <ui-card-title>Pagination</ui-card-title>
            <ui-card-description>Navigate through pages of content</ui-card-description>
          </ui-card-header>
          <ui-card-content class="space-y-4">
            <div class="space-y-2">
              <p class="text-sm font-medium">Basic Pagination</p>
              <ui-pagination
                [currentPage]="currentPage"
                [totalPages]="10"
                (pageChange)="onPageChange($event)"
              />
              <p class="text-xs text-gray-500 text-center">
                Current page: {{ currentPage }} of 10
              </p>
            </div>
            <ui-separator />
            <div class="space-y-2">
              <p class="text-sm font-medium">With More Siblings</p>
              <ui-pagination
                [currentPage]="currentPage"
                [totalPages]="20"
                [siblingCount]="2"
                (pageChange)="onPageChange($event)"
              />
            </div>
            <ui-separator />
            <div class="space-y-2">
              <p class="text-sm font-medium">Few Pages</p>
              <ui-pagination
                [currentPage]="1"
                [totalPages]="5"
                (pageChange)="onPageChange($event)"
              />
            </div>
          </ui-card-content>
        </ui-card>

        <!-- Table with Pagination -->
        <ui-card class="md:col-span-2">
          <ui-card-header>
            <ui-card-title>Table with Pagination</ui-card-title>
            <ui-card-description>Data table with user information and pagination controls</ui-card-description>
          </ui-card-header>
          <ui-card-content class="space-y-4">
            <ui-table>
              <thead uiTableHeader>
                <tr uiTableRow>
                  <th uiTableHead>Avatar</th>
                  <th uiTableHead>Name</th>
                  <th uiTableHead>Email</th>
                  <th uiTableHead>Role</th>
                  <th uiTableHead>Status</th>
                </tr>
              </thead>
              <tbody uiTableBody>
                @for (user of users; track user.id) {
                  <tr uiTableRow>
                    <td uiTableCell>
                      <ui-avatar class="h-8 w-8">
                        <ui-avatar-fallback>
                          {{ getInitials(user.name) }}
                        </ui-avatar-fallback>
                      </ui-avatar>
                    </td>
                    <td uiTableCell class="font-medium">{{ user.name }}</td>
                    <td uiTableCell class="text-gray-500">{{ user.email }}</td>
                    <td uiTableCell>
                      <ui-badge
                        [variant]="user.role === 'Admin' ? 'default' : user.role === 'Moderator' ? 'secondary' : 'outline'"
                      >
                        {{ user.role }}
                      </ui-badge>
                    </td>
                    <td uiTableCell>
                      <ui-badge
                        [variant]="user.status === 'Active' ? 'default' : 'secondary'"
                        [class]="user.status === 'Active' ? 'bg-green-500' : ''"
                      >
                        {{ user.status }}
                      </ui-badge>
                    </td>
                  </tr>
                }
              </tbody>
            </ui-table>

            <ui-separator />

            <ui-pagination
              [currentPage]="currentPage"
              [totalPages]="10"
              (pageChange)="onPageChange($event)"
            />

            <div class="text-sm text-gray-500 text-center">
              Page {{ currentPage }} of 10 • Showing 5 of 50 users
            </div>
          </ui-card-content>
        </ui-card>

        <!-- Data Cards with Mixed Components -->
        <ui-card class="md:col-span-2">
          <ui-card-header>
            <ui-card-title>Mixed Data Display</ui-card-title>
            <ui-card-description>Combining multiple components for rich data presentation</ui-card-description>
          </ui-card-header>
          <ui-card-content>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
              <!-- Stats Card 1 -->
              <div class="p-4 border rounded-lg space-y-3">
                <div class="flex items-center justify-between">
                  <h4 class="text-sm font-semibold">Total Users</h4>
                  <ui-badge>+12%</ui-badge>
                </div>
                <div class="space-y-2">
                  <p class="text-2xl font-bold">2,543</p>
                  <ui-progress [value]="75" />
                  <p class="text-xs text-gray-500">75% of monthly goal</p>
                </div>
              </div>

              <!-- Stats Card 2 -->
              <div class="p-4 border rounded-lg space-y-3">
                <div class="flex items-center justify-between">
                  <h4 class="text-sm font-semibold">Active Sessions</h4>
                  <ui-badge variant="secondary">Live</ui-badge>
                </div>
                <div class="space-y-2">
                  <p class="text-2xl font-bold">1,234</p>
                  <ui-progress [value]="45" class="bg-blue-100" />
                  <p class="text-xs text-gray-500">45% capacity</p>
                </div>
              </div>

              <!-- Stats Card 3 -->
              <div class="p-4 border rounded-lg space-y-3">
                <div class="flex items-center justify-between">
                  <h4 class="text-sm font-semibold">Revenue</h4>
                  <ui-badge class="bg-green-500">+24%</ui-badge>
                </div>
                <div class="space-y-2">
                  <p class="text-2xl font-bold">$12,345</p>
                  <ui-progress [value]="90" class="bg-green-100" />
                  <p class="text-xs text-gray-500">90% of target</p>
                </div>
              </div>
            </div>
          </ui-card-content>
        </ui-card>
      </div>
    </div>
  `,
})
export class DataComponent {
  loading = false;
  currentPage = 1;
  uploadProgress = 65;

  users: User[] = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'Active' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User', status: 'Active' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'User', status: 'Inactive' },
    { id: 4, name: 'Alice Brown', email: 'alice@example.com', role: 'Moderator', status: 'Active' },
    { id: 5, name: 'Charlie Wilson', email: 'charlie@example.com', role: 'User', status: 'Active' },
  ];

  simulateLoading() {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
    }, 2000);
  }

  increaseProgress() {
    this.uploadProgress = Math.min(100, this.uploadProgress + 10);
  }

  decreaseProgress() {
    this.uploadProgress = Math.max(0, this.uploadProgress - 10);
  }

  resetProgress() {
    this.uploadProgress = 0;
  }

  onPageChange(page: number) {
    this.currentPage = page;
  }

  getInitials(name: string): string {
    return name
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase();
  }
}
