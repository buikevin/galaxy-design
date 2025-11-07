# Dropdown Menu

Displays a menu to the user—such as a set of actions or functions—triggered by a button.

<ComponentPreview name="DropdownMenuDemo">
  <template #preview>
    <DemoContainer>
      <DropdownMenuDemo />
    </DemoContainer>
  </template>
  <template #code>

::: code-group

```vue [Vue]
<script setup lang="ts">
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'
</script>

<template>
  <DropdownMenu>
    <DropdownMenuTrigger as-child>
      <Button variant="outline">Open</Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent>
      <DropdownMenuItem>Profile</DropdownMenuItem>
      <DropdownMenuItem>Settings</DropdownMenuItem>
      <DropdownMenuItem>Logout</DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</template>
```

```tsx [React]
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"

export default function App() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Open</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Settings</DropdownMenuItem>
        <DropdownMenuItem>Logout</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
```

```typescript [Angular]
import { Component } from '@angular/core';
import { DropdownMenuComponent } from '@/components/ui/dropdown-menu';
import { ButtonComponent } from '@/components/ui/button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [DropdownMenuComponent, ButtonComponent],
  template: `
    <ui-dropdown-menu>
      <ui-button trigger variant="outline">Open</ui-button>
      <div content>
        <ui-dropdown-menu-item>Profile</ui-dropdown-menu-item>
        <ui-dropdown-menu-item>Settings</ui-dropdown-menu-item>
        <ui-dropdown-menu-item>Logout</ui-dropdown-menu-item>
      </div>
    </ui-dropdown-menu>
  `
})
export class AppComponent {}
```

```tsx [React Native]
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from '@/components/ui/dropdown-menu'
import { Button, ButtonText } from '@/components/ui/button'

export default function App() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          <ButtonText>Open</ButtonText>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Settings</DropdownMenuItem>
        <DropdownMenuItem>Logout</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
```

```dart [Flutter]
import 'package:flutter/material.dart';
import 'package:your_app/components/ui/dropdown_menu.dart';
import 'package:your_app/components/ui/button.dart';

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return GalaxyDropdownMenu(
      trigger: GalaxyButton(
        onPressed: () {},
        variant: ButtonVariant.outline,
        child: const Text('Open'),
      ),
      items: [
        DropdownMenuItem(
          child: const Text('Profile'),
          onTap: () {},
        ),
        DropdownMenuItem(
          child: const Text('Settings'),
          onTap: () {},
        ),
        DropdownMenuItem(
          child: const Text('Logout'),
          onTap: () {},
        ),
      ],
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
npx galaxy-ui-cli@latest add dropdown-menu
```

```bash [pnpm]
pnpm dlx galaxy-ui-cli@latest add dropdown-menu
```

```bash [yarn]
yarn dlx galaxy-ui-cli@latest add dropdown-menu
```

```bash [bun]
bunx galaxy-ui-cli@latest add dropdown-menu
```

```bash [global]
# If you have installed galaxy-ui-cli globally
galaxy-ui-cli add dropdown-menu
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
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem
} from '@/components/ui'
import { Button } from '@/components/ui'
</script>

<template>
  <DropdownMenu>
    <DropdownMenuTrigger as-child>
      <Button variant="outline">Open</Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent>
      <DropdownMenuItem>Profile</DropdownMenuItem>
      <DropdownMenuItem>Settings</DropdownMenuItem>
      <DropdownMenuItem>Logout</DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</template>
```

### React

```tsx
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem
} from '@/components/ui'
import { Button } from '@/components/ui'

export default function DropdownMenuDemo() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Open</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Settings</DropdownMenuItem>
        <DropdownMenuItem>Logout</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
```

### Angular

```typescript
import { Component } from '@angular/core';
import { DropdownMenuComponent, DropdownMenuItemComponent } from '@/components/ui';
import { ButtonComponent } from '@/components/ui';

@Component({
  selector: 'app-dropdown-menu-demo',
  standalone: true,
  imports: [DropdownMenuComponent, DropdownMenuItemComponent, ButtonComponent],
  template: `
    <ui-dropdown-menu [isOpen]="isOpen" (openChange)="isOpen = $event">
      <ui-button trigger variant="outline" (click)="isOpen = !isOpen">Open</ui-button>
      <div content>
        <ui-dropdown-menu-item>Profile</ui-dropdown-menu-item>
        <ui-dropdown-menu-item>Settings</ui-dropdown-menu-item>
        <ui-dropdown-menu-item>Logout</ui-dropdown-menu-item>
      </div>
    </ui-dropdown-menu>
  `
})
export class DropdownMenuDemoComponent {
  isOpen = false;
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
