import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'

@Component({
  selector: 'ui-login-form',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="login-form-placeholder">
      <p class="text-muted-foreground">Login Form - Component Stub</p>
      <p class="text-sm text-muted-foreground">This is a placeholder. Implement your login form here.</p>
    </div>
  `,
  styles: [`
    .login-form-placeholder {
      padding: 2rem;
      border: 1px dashed #ccc;
      border-radius: 0.5rem;
      text-align: center;
    }
  `]
})
export class LoginFormComponent {}
