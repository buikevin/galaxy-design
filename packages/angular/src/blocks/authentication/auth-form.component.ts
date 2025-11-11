import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'

@Component({
  selector: 'ui-auth-form',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="auth-form-placeholder">
      <p class="text-muted-foreground">Authentication Form - Component Stub</p>
      <p class="text-sm text-muted-foreground">This is a placeholder. Implement your authentication form here.</p>
    </div>
  `,
  styles: [`
    .auth-form-placeholder {
      padding: 2rem;
      border: 1px dashed #ccc;
      border-radius: 0.5rem;
      text-align: center;
    }
  `]
})
export class AuthFormComponent {}
