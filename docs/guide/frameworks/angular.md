# Angular

Learn how to use Galaxy UI with Angular 18+.

## Requirements

- **Angular**: 18.0.0 or higher
- **TypeScript**: 5.4.0 or higher
- **Tailwind CSS**: 3.4.0 or higher

## Installation

Initialize Galaxy UI in your Angular project:

::: code-group

```bash [npm]
npx galaxy-design@latest init
```

```bash [pnpm]
pnpm dlx galaxy-design@latest init
```

```bash [yarn]
yarn dlx galaxy-design@latest init
```

```bash [bun]
bunx galaxy-design@latest init
```

:::

The CLI will:
1. Detect that you're using Angular
2. Install required dependencies (`@radix-ng/primitives`, etc.)
3. Create `components.json`
4. Setup Tailwind CSS configuration
5. Create utility functions

## Project Setup

### Create New Project

```bash
# Create project
ng new my-app

# Navigate to project
cd my-app

# Initialize Galaxy UI
npx galaxy-design@latest init
```

### Configure Path Aliases

Update `tsconfig.json`:

```json
{
  "compilerOptions": {
    "baseUrl": "./",
    "paths": {
      "@/*": ["src/*"],
      "@/components/*": ["src/components/*"],
      "@/lib/*": ["src/lib/*"]
    }
  }
}
```

## Adding Components

Add components to your project:

```bash
npx galaxy-design@latest add button
```

This will:
1. Create `src/components/ui/button/` directory
2. Copy component files (button.component.ts, variants.ts, index.ts)
3. Install dependencies (`@radix-ng/primitives`, `class-variance-authority`)

## Usage

### Standalone Components

All Galaxy UI components are standalone components:

```typescript
import { Component } from '@angular/core'
import { ButtonComponent } from '@/components/ui/button'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ButtonComponent],
  template: `<ui-button>Click me</ui-button>`
})
export class AppComponent {}
```

### With Variants

```typescript
import { Component } from '@angular/core'
import { ButtonComponent } from '@/components/ui/button'

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [ButtonComponent],
  template: `
    <div class="flex gap-2">
      <ui-button variant="default">Default</ui-button>
      <ui-button variant="secondary">Secondary</ui-button>
      <ui-button variant="destructive">Destructive</ui-button>
      <ui-button variant="outline">Outline</ui-button>
      <ui-button variant="ghost">Ghost</ui-button>
    </div>
  `
})
export class DemoComponent {}
```

### With Events

```typescript
import { Component } from '@angular/core'
import { ButtonComponent } from '@/components/ui/button'

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [ButtonComponent],
  template: `
    <ui-button (click)="handleClick()">
      Click me
    </ui-button>
  `
})
export class DemoComponent {
  handleClick() {
    console.log('Button clicked!')
  }
}
```

### Form Example

```typescript
import { Component } from '@angular/core'
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms'
import { ButtonComponent } from '@/components/ui/button'
import { InputComponent } from '@/components/ui/input'
import { LabelComponent } from '@/components/ui/label'

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [ReactiveFormsModule, ButtonComponent, InputComponent, LabelComponent],
  template: `
    <form [formGroup]="form" (ngSubmit)="onSubmit()" class="space-y-4 max-w-md">
      <div class="space-y-2">
        <ui-label for="email">Email</ui-label>
        <ui-input
          id="email"
          type="email"
          formControlName="email"
          placeholder="Enter your email"
        />
      </div>

      <div class="space-y-2">
        <ui-label for="password">Password</ui-label>
        <ui-input
          id="password"
          type="password"
          formControlName="password"
          placeholder="Enter your password"
        />
      </div>

      <ui-button type="submit" class="w-full">
        Sign In
      </ui-button>
    </form>
  `
})
export class LoginFormComponent {
  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  })

  onSubmit() {
    if (this.form.valid) {
      console.log(this.form.value)
    }
  }
}
```

### Dialog Example

```typescript
import { Component, signal } from '@angular/core'
import {
  DialogComponent,
  DialogContentComponent,
  DialogHeaderComponent,
  DialogFooterComponent,
  DialogTitleComponent,
  DialogDescriptionComponent,
  DialogTriggerComponent,
} from '@/components/ui/dialog'
import { ButtonComponent } from '@/components/ui/button'

@Component({
  selector: 'app-dialog-demo',
  standalone: true,
  imports: [
    DialogComponent,
    DialogContentComponent,
    DialogHeaderComponent,
    DialogFooterComponent,
    DialogTitleComponent,
    DialogDescriptionComponent,
    DialogTriggerComponent,
    ButtonComponent
  ],
  template: `
    <ui-dialog [open]="open()" (openChange)="open.set($event)">
      <ui-dialog-trigger>
        <ui-button>Open Dialog</ui-button>
      </ui-dialog-trigger>
      <ui-dialog-content>
        <ui-dialog-header>
          <ui-dialog-title>Are you sure?</ui-dialog-title>
          <ui-dialog-description>
            This action cannot be undone.
          </ui-dialog-description>
        </ui-dialog-header>
        <ui-dialog-footer>
          <ui-button variant="outline" (click)="open.set(false)">
            Cancel
          </ui-button>
          <ui-button variant="destructive" (click)="open.set(false)">
            Delete
          </ui-button>
        </ui-dialog-footer>
      </ui-dialog-content>
    </ui-dialog>
  `
})
export class DialogDemoComponent {
  open = signal(false)
}
```

## Angular Signals

Components support Angular Signals:

```typescript
import { Component, signal, computed } from '@angular/core'
import { ButtonComponent } from '@/components/ui/button'

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [ButtonComponent],
  template: `
    <div class="flex items-center gap-4">
      <ui-button (click)="decrement()">-</ui-button>
      <span class="text-2xl font-bold">{{ count() }}</span>
      <ui-button (click)="increment()">+</ui-button>
      <p>Doubled: {{ doubled() }}</p>
    </div>
  `
})
export class CounterComponent {
  count = signal(0)
  doubled = computed(() => this.count() * 2)

  increment() {
    this.count.update(v => v + 1)
  }

  decrement() {
    this.count.update(v => v - 1)
  }
}
```

## Routing Integration

### With Angular Router

```typescript
import { Component } from '@angular/core'
import { RouterLink, RouterOutlet } from '@angular/router'
import { ButtonComponent } from '@/components/ui/button'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterLink, RouterOutlet, ButtonComponent],
  template: `
    <nav class="flex gap-2 p-4">
      <ui-button variant="ghost">
        <a routerLink="/">Home</a>
      </ui-button>
      <ui-button variant="ghost">
        <a routerLink="/about">About</a>
      </ui-button>
    </nav>

    <router-outlet />
  `
})
export class AppComponent {}
```

### Programmatic Navigation

```typescript
import { Component, inject } from '@angular/core'
import { Router } from '@angular/router'
import { ButtonComponent } from '@/components/ui/button'

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [ButtonComponent],
  template: `
    <ui-button (click)="navigateToAbout()">
      Go to About
    </ui-button>
  `
})
export class DemoComponent {
  private router = inject(Router)

  navigateToAbout() {
    this.router.navigate(['/about'])
  }
}
```

## Reactive Forms

```typescript
import { Component } from '@angular/core'
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms'
import { ButtonComponent } from '@/components/ui/button'
import { InputComponent } from '@/components/ui/input'

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule, ButtonComponent, InputComponent],
  template: `
    <form [formGroup]="form" (ngSubmit)="onSubmit()">
      <ui-input formControlName="name" placeholder="Name" />
      <ui-input formControlName="email" type="email" placeholder="Email" />
      <ui-button type="submit">Submit</ui-button>
    </form>
  `
})
export class FormComponent {
  form: FormGroup

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    })
  }

  onSubmit() {
    if (this.form.valid) {
      console.log(this.form.value)
    }
  }
}
```

## Services and Dependency Injection

```typescript
// counter.service.ts
import { Injectable, signal } from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  count = signal(0)

  increment() {
    this.count.update(v => v + 1)
  }

  decrement() {
    this.count.update(v => v - 1)
  }
}

// component
import { Component, inject } from '@angular/core'
import { CounterService } from './counter.service'
import { ButtonComponent } from '@/components/ui/button'

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [ButtonComponent],
  template: `
    <div class="flex items-center gap-4">
      <ui-button (click)="counter.decrement()">-</ui-button>
      <span>{{ counter.count() }}</span>
      <ui-button (click)="counter.increment()">+</ui-button>
    </div>
  `
})
export class CounterComponent {
  counter = inject(CounterService)
}
```

## Best Practices

### Component Naming

```typescript
// ✅ Good: Import with descriptive names
import { ButtonComponent } from '@/components/ui/button'
import { InputComponent } from '@/components/ui/input'

// Use in template with ui- prefix
// <ui-button>Click</ui-button>
// <ui-input />
```

### Type Safety

```typescript
import { Component } from '@angular/core'
import { ButtonComponent, type ButtonProps } from '@/components/ui/button'

@Component({
  selector: 'app-custom-button',
  standalone: true,
  imports: [ButtonComponent],
  template: `<ui-button [variant]="variant">{{ label }}</ui-button>`
})
export class CustomButtonComponent {
  @Input() variant: ButtonProps['variant'] = 'default'
  @Input() label = 'Click me'
}
```

## Troubleshooting

### Module not found errors

```bash
# Clear cache and reinstall
rm -rf node_modules .angular
npm install
```

### Path alias not working

1. Check `tsconfig.json` paths configuration
2. Restart Angular Language Service
3. Rebuild project: `ng build`

### Styles not applying

1. Verify Tailwind CSS configuration
2. Check `angular.json` includes styles correctly
3. Restart dev server: `ng serve`

## Next Steps

- [Vue Guide](/guide/frameworks/vue) - Learn about Vue integration
- [React Guide](/guide/frameworks/react) - Learn about React integration
- [Components](/components/overview) - Explore available components
- [Examples](https://github.com/buikevin/galaxy-design/tree/main/examples/angular-example) - View Angular examples
