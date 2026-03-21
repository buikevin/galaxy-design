/**
 * @author Bùi Trọng Hiếu
 * @email kevinbui210191@gmail.com
 * @desc Register Form component - User registration form with email, password and confirm password
 */

import { Component, Output, EventEmitter } from '@angular/core'
import { CommonModule } from '@angular/common'

export interface RegisterFormData {
  email: string
  password: string
  confirmPassword: string
}

@Component({
  selector: 'ui-register-form',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="register-form-placeholder">
      <p>Register Form Component - Coming Soon</p>
    </div>
  `,
  styles: [`
    .register-form-placeholder {
      padding: 2rem;
      text-align: center;
      border: 1px dashed #ccc;
      border-radius: 8px;
    }
  `]
})
export class RegisterFormComponent {
  @Output() submitForm = new EventEmitter<RegisterFormData>()
}
