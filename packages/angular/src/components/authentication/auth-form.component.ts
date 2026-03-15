/**
 * @author Bùi Trọng Hiếu
 * @email kevinbui210191@gmail.com
 * @desc Auth Form component - Base authentication form component
 */

import { Component, Input, Output, EventEmitter } from '@angular/core'
import { CommonModule } from '@angular/common'

export interface AuthFormData {
  email: string
  password: string
}

@Component({
  selector: 'ui-auth-form',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="auth-form-placeholder">
      <p>Auth Form Component - Coming Soon</p>
    </div>
  `,
  styles: [`
    .auth-form-placeholder {
      padding: 2rem;
      text-align: center;
      border: 1px dashed #ccc;
      border-radius: 8px;
    }
  `]
})
export class AuthFormComponent {
  @Input() mode: 'login' | 'register' = 'login'
  @Output() submit = new EventEmitter<AuthFormData>()
}
