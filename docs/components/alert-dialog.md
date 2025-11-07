# Alert Dialog

A modal dialog that interrupts the user with important content and expects a response.

<ComponentPreview name="AlertDialogDemo">
  <template #preview>
    <DemoContainer>
      <AlertDialogDemo />
    </DemoContainer>
  </template>
  <template #code>

::: code-group

```vue [Vue]
<script setup lang="ts">
import { AlertDialog, AlertDialogTrigger, AlertDialogContent, AlertDialogTitle, AlertDialogDescription, AlertDialogAction, AlertDialogCancel } from '@/components/ui/alert-dialog'
</script>

<template>
  <AlertDialog>
    <AlertDialogTrigger>Delete Account</AlertDialogTrigger>
    <AlertDialogContent>
      <AlertDialogTitle>Are you sure?</AlertDialogTitle>
      <AlertDialogDescription>
        This action cannot be undone.
      </AlertDialogDescription>
      <AlertDialogCancel>Cancel</AlertDialogCancel>
      <AlertDialogAction>Delete</AlertDialogAction>
    </AlertDialogContent>
  </AlertDialog>
</template>
```

```tsx [React]
import { AlertDialog, AlertDialogTrigger, AlertDialogContent, AlertDialogTitle, AlertDialogDescription, AlertDialogAction, AlertDialogCancel } from "@/components/ui/alert-dialog"

export default function App() {
  return (
    <AlertDialog>
      <AlertDialogTrigger>Delete Account</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogTitle>Are you sure?</AlertDialogTitle>
        <AlertDialogDescription>
          This action cannot be undone.
        </AlertDialogDescription>
        <AlertDialogCancel>Cancel</AlertDialogCancel>
        <AlertDialogAction>Delete</AlertDialogAction>
      </AlertDialogContent>
    </AlertDialog>
  )
}
```

```typescript [Angular]
import { Component } from '@angular/core';
import { AlertDialogComponent } from '@/components/ui/alert-dialog';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AlertDialogComponent],
  template: `
    <ui-alert-dialog [isOpen]="isOpen" (openChange)="isOpen = $event">
      <h2>Are you sure?</h2>
      <p>This action cannot be undone.</p>
      <button (click)="isOpen = false">Cancel</button>
      <button (click)="handleDelete()">Delete</button>
    </ui-alert-dialog>
  `
})
export class AppComponent {
  isOpen = false;

  handleDelete() {
    this.isOpen = false;
  }
}
```

```tsx [React Native]
import { AlertDialog, AlertDialogTrigger, AlertDialogContent, AlertDialogTitle, AlertDialogDescription, AlertDialogAction, AlertDialogCancel } from '@/components/ui/alert-dialog'
import { Button, ButtonText } from '@/components/ui/button'

export default function App() {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button><ButtonText>Delete Account</ButtonText></Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogTitle>Are you sure?</AlertDialogTitle>
        <AlertDialogDescription>
          This action cannot be undone.
        </AlertDialogDescription>
        <AlertDialogCancel><ButtonText>Cancel</ButtonText></AlertDialogCancel>
        <AlertDialogAction><ButtonText>Delete</ButtonText></AlertDialogAction>
      </AlertDialogContent>
    </AlertDialog>
  )
}
```

```dart [Flutter]
import 'package:flutter/material.dart';
import 'package:your_app/components/ui/button.dart';

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return GalaxyButton(
      onPressed: () {
        showDialog(
          context: context,
          builder: (context) => AlertDialog(
            title: const Text('Are you sure?'),
            content: const Text('This action cannot be undone.'),
            actions: [
              TextButton(
                onPressed: () => Navigator.pop(context),
                child: const Text('Cancel'),
              ),
              TextButton(
                onPressed: () {
                  Navigator.pop(context);
                  // Handle delete
                },
                child: const Text('Delete'),
              ),
            ],
          ),
        );
      },
      child: const Text('Delete Account'),
    );
  }
}
```

:::

  </template>
</ComponentPreview>

## Installation

::: code-group

```bash [npm]
npx galaxy-ui-cli@latest add alert-dialog
```

```bash [pnpm]
pnpm dlx galaxy-ui-cli@latest add alert-dialog
```

```bash [yarn]
yarn dlx galaxy-ui-cli@latest add alert-dialog
```

```bash [bun]
bunx galaxy-ui-cli@latest add alert-dialog
```

```bash [global]
# If you have installed galaxy-ui-cli globally
galaxy-ui-cli add alert-dialog
```

:::

## Usage


## API Reference

### Props

This component accepts the following props:

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| ... | ... | ... | ... |

### Vue

```vue
<script setup lang="ts">
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel
} from '@/components/ui'
</script>

<template>
  <AlertDialog>
    <AlertDialogTrigger>Delete Account</AlertDialogTrigger>
    <AlertDialogContent>
      <AlertDialogTitle>Are you sure?</AlertDialogTitle>
      <AlertDialogDescription>
        This action cannot be undone.
      </AlertDialogDescription>
      <AlertDialogCancel>Cancel</AlertDialogCancel>
      <AlertDialogAction>Delete</AlertDialogAction>
    </AlertDialogContent>
  </AlertDialog>
</template>
```

### React

```tsx
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel
} from '@/components/ui'

export default function AlertDialogDemo() {
  return (
    <AlertDialog>
      <AlertDialogTrigger>Delete Account</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogTitle>Are you sure?</AlertDialogTitle>
        <AlertDialogDescription>
          This action cannot be undone.
        </AlertDialogDescription>
        <AlertDialogCancel>Cancel</AlertDialogCancel>
        <AlertDialogAction>Delete</AlertDialogAction>
      </AlertDialogContent>
    </AlertDialog>
  )
}
```

### Angular

```typescript
import { Component } from '@angular/core';
import { AlertDialogComponent } from '@/components/ui';

@Component({
  selector: 'app-alert-dialog-demo',
  standalone: true,
  imports: [AlertDialogComponent],
  template: `
    <ui-alert-dialog [isOpen]="isOpen" (openChange)="isOpen = $event">
      <h2>Are you sure?</h2>
      <p>This action cannot be undone.</p>
      <button (click)="isOpen = false">Cancel</button>
      <button (click)="handleDelete()">Delete</button>
    </ui-alert-dialog>
  `
})
export class AlertDialogDemoComponent {
  isOpen = false;

  handleDelete() {
    this.isOpen = false;
    // Handle delete
  }
}
```


## Accessibility

- **Keyboard Navigation**: [TODO]
- **Screen Reader**: [TODO]
- **Focus Management**: [TODO]
- **WCAG Compliance**: WCAG 2.1 Level AA compliant

## Author

**Bùi Trọng Hiếu (kevinbui)**
- GitHub: [@buikevin](https://github.com/buikevin)
- Email: kevinbui210191@gmail.com

## License

MIT © 2025 Bùi Trọng Hiếu (kevinbui)
