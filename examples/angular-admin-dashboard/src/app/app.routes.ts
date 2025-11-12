import { Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';
import { LoginComponent } from './pages/login.component';
import { DashboardLayoutComponent } from './pages/dashboard-layout.component';
import { DashboardHomeComponent } from './pages/dashboard-home.component';
import { FormsComponent } from './pages/forms.component';
import { DataComponent } from './pages/data.component';
import { FeedbackComponent } from './pages/feedback.component';
import { NavigationComponent } from './pages/navigation.component';
import { LayoutComponent } from './pages/layout.component';

export const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'dashboard',
    component: DashboardLayoutComponent,
    canActivate: [authGuard],
    children: [
      { path: '', component: DashboardHomeComponent },
      { path: 'forms', component: FormsComponent },
      { path: 'data', component: DataComponent },
      { path: 'feedback', component: FeedbackComponent },
      { path: 'navigation', component: NavigationComponent },
      { path: 'layout', component: LayoutComponent }
    ]
  }
];
