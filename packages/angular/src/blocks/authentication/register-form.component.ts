import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'

@Component({
  selector: 'ui-register-form',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="register-form-placeholder">
      <p class="text-muted-foreground">Register Form - Component Stub</p>
      <p class="text-sm text-muted-foreground">This is a placeholder. Implement your registration form here.</p>
    </div>
  `,
  styles: [`
    .register-form-placeholder {
      padding: 2rem;
      border: 1px dashed #ccc;
      border-radius: 0.5rem;
      text-align: center;
    }
  `]
})
export class RegisterFormComponent {}
