import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxSonnerToaster } from 'ngx-sonner';

@Component({
  selector: 'ui-toast',
  standalone: true,
  imports: [CommonModule, NgxSonnerToaster],
  template: `
    <ngx-sonner-toaster
      [theme]="theme"
      [class]="'toaster group'"
      [toastOptions]="{
        classes: {
          toast: 'group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg',
          description: 'group-[.toast]:text-muted-foreground',
          actionButton: 'group-[.toast]:bg-primary group-[.toast]:text-primary-foreground',
          cancelButton: 'group-[.toast]:bg-muted group-[.toast]:text-muted-foreground',
          success: 'group-[.toaster]:bg-green-50 group-[.toaster]:text-green-900 group-[.toaster]:border-green-200',
          error: 'group-[.toaster]:bg-red-50 group-[.toaster]:text-red-900 group-[.toaster]:border-red-200',
          warning: 'group-[.toaster]:bg-yellow-50 group-[.toaster]:text-yellow-900 group-[.toaster]:border-yellow-200',
          info: 'group-[.toaster]:bg-blue-50 group-[.toaster]:text-blue-900 group-[.toaster]:border-blue-200'
        }
      }"
    />
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToastComponent {
  @Input() theme: 'light' | 'dark' | 'system' = 'light';
}
