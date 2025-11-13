import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../services/auth.service';
import { ButtonComponent } from '../../components/ui/button';
import { InputComponent } from '../../components/ui/input';
import { LabelComponent } from '../../components/ui/label';
import {
  CardComponent,
  CardHeaderComponent,
  CardTitleComponent,
  CardContentComponent,
} from '../../components/ui/card';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ButtonComponent,
    InputComponent,
    LabelComponent,
    CardComponent,
    CardHeaderComponent,
    CardTitleComponent,
    CardContentComponent,
  ],
  template: `
    <div class="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div class="w-full max-w-md">
        <ui-card>
          <ui-card-header>
            <ui-card-title class="text-2xl text-center">Galaxy UI Admin</ui-card-title>
          </ui-card-header>
          <ui-card-content>
            <form (ngSubmit)="onSubmit()" class="space-y-4">
              <div class="space-y-2">
                <ui-label [for]="'username'">Username</ui-label>
                <ui-input
                  type="text"
                  id="username"
                  placeholder="Enter username"
                  [(ngModel)]="username"
                  name="username"
                  required
                />
              </div>
              <div class="space-y-2">
                <ui-label [for]="'password'">Password</ui-label>
                <ui-input
                  type="password"
                  id="password"
                  placeholder="Enter password"
                  [(ngModel)]="password"
                  name="password"
                  required
                />
              </div>
              @if (error) {
              <div class="text-sm text-red-600">
                {{ error }}
              </div>
              }
              <button ui-button type="submit" class="w-full">Login</button>
              <div class="text-sm text-gray-600 text-center mt-4">
                Default credentials: admin / Abc123@
              </div>
            </form>
          </ui-card-content>
        </ui-card>
      </div>
    </div>
  `,
})
export class LoginComponent {
  username = '';
  password = '';
  error = '';

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    try {
      console.log('hihihihi');
      this.error = '';
      const success = this.authService.login(this.username, this.password);
      console.log('🚀 ~ LoginComponent ~ onSubmit ~ success:', success);

      if (success) {
        this.router.navigate(['/dashboard']);
      } else {
        this.error = 'Invalid username or password';
      }
    } catch (error) {
      console.error('Login error:', error);
    }
  }
}
