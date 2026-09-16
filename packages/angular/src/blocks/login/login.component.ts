/**
 * @author Bùi Trọng Hiếu
 * @email kevinbui210191@gmail.com
 * @desc Login block - Full login page with form
 */

import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { cn } from '../../lib/utils';

@Component({
  selector: 'ui-login',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div
      [class]="
        cn('flex min-h-screen items-center justify-center bg-background', class)
      "
    >
      <div class="w-full max-w-sm space-y-6 px-4">
        <div class="space-y-2 text-center">
          <h1 class="text-2xl font-semibold tracking-tight">{{ title }}</h1>
          <p class="text-sm text-muted-foreground">{{ subtitle }}</p>
        </div>
        <form class="space-y-4" (ngSubmit)="onSubmit()">
          <div class="space-y-2">
            <label for="login-email" class="text-sm font-medium leading-none"
              >Email</label
            >
            <input
              id="login-email"
              type="email"
              placeholder="m@example.com"
              [(ngModel)]="email"
              name="email"
              required
              class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>
          <div class="space-y-2">
            <label for="login-password" class="text-sm font-medium leading-none"
              >Password</label
            >
            <input
              id="login-password"
              type="password"
              [(ngModel)]="password"
              name="password"
              required
              class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>
          <div class="flex items-center space-x-2">
            <input
              type="checkbox"
              id="login-remember"
              [(ngModel)]="remember"
              name="remember"
              class="h-4 w-4 rounded"
            />
            <label for="login-remember" class="text-sm">Remember me</label>
          </div>
          <button
            type="submit"
            class="w-full inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
          >
            Sign In
          </button>
        </form>
        <p class="px-8 text-center text-sm text-muted-foreground">
          Don&apos;t have an account?
          <a
            href="/register"
            class="underline underline-offset-4 hover:text-primary"
            >Sign up</a
          >
        </p>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginBlockComponent {
  @Input() title = 'Welcome back';
  @Input() subtitle = 'Enter your email to sign in to your account';
  @Input() class?: string;
  @Output() submit = new EventEmitter<{
    email: string;
    password: string;
    remember: boolean;
  }>();

  email = '';
  password = '';
  remember = false;
  cn = cn;
}
