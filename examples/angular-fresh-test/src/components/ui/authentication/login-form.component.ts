/**
 * Galaxy UI - Login Form Component (Stub)
 *
 * This is a placeholder component. Full implementation coming soon.
 */

import { Component, Output, EventEmitter } from '@angular/core'
import { CommonModule } from '@angular/common'
import type { AuthFormData } from './auth-form.component'

@Component({
  selector: 'ui-login-form',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="login-form-placeholder">
      <p>Login Form Component - Coming Soon</p>
    </div>
  `,
  styles: [`
    .login-form-placeholder {
      padding: 2rem;
      text-align: center;
      border: 1px dashed #ccc;
      border-radius: 8px;
    }
  `]
})
export class LoginFormComponent {
  @Output() submit = new EventEmitter<AuthFormData>()
}
