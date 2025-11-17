import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./layouts/dashboard-layout').then((m) => m.DashboardLayoutComponent),
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./pages/dashboard/dashboard-home').then((m) => m.DashboardHomeComponent),
      },
      {
        path: 'forms',
        loadComponent: () =>
          import('./pages/forms/forms-page').then((m) => m.FormsPageComponent),
      },
      {
        path: 'data',
        loadComponent: () =>
          import('./pages/data/data-page').then((m) => m.DataPageComponent),
      },
      {
        path: 'feedback',
        loadComponent: () =>
          import('./pages/feedback/feedback-page').then((m) => m.FeedbackPageComponent),
      },
      {
        path: 'navigation',
        loadComponent: () =>
          import('./pages/navigation/navigation-page').then((m) => m.NavigationPageComponent),
      },
      {
        path: 'layout',
        loadComponent: () =>
          import('./pages/layout/layout-page').then((m) => m.LayoutPageComponent),
      },
    ],
  },
];
