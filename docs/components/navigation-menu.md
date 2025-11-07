# Navigation Menu

A collection of links for navigating websites.

<ComponentPreview name="NavigationMenuDemo">
  <template #preview>
    <DemoContainer>
      <NavigationMenuDemo />
    </DemoContainer>
  </template>
  <template #code>

::: code-group

```vue [Vue]
<script setup lang="ts">
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuTrigger, NavigationMenuContent, NavigationMenuLink } from '@/components/ui/navigation-menu'
</script>

<template>
  <NavigationMenu>
    <NavigationMenuList>
      <NavigationMenuItem>
        <NavigationMenuTrigger>Getting Started</NavigationMenuTrigger>
        <NavigationMenuContent>
          <NavigationMenuLink href="/docs/installation">
            Installation
          </NavigationMenuLink>
        </NavigationMenuContent>
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenu>
</template>
```

```tsx [React]
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuTrigger, NavigationMenuContent, NavigationMenuLink } from "@/components/ui/navigation-menu"

export default function App() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Getting Started</NavigationMenuTrigger>
          <NavigationMenuContent>
            <NavigationMenuLink href="/docs/installation">
              Installation
            </NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}
```

```typescript [Angular]
import { Component } from '@angular/core';
import { NavigationMenuComponent } from '@/components/ui/navigation-menu';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavigationMenuComponent],
  template: `
    <ui-navigation-menu>
      <a href="/docs">Documentation</a>
      <a href="/components">Components</a>
      <a href="/examples">Examples</a>
    </ui-navigation-menu>
  `
})
export class AppComponent {}
```

```tsx [React Native]
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuTrigger, NavigationMenuContent, NavigationMenuLink } from '@/components/ui/navigation-menu'
import { View, Text } from 'react-native'

export default function App() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>
            <Text>Getting Started</Text>
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <NavigationMenuLink href="/docs/installation">
              <Text>Installation</Text>
            </NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}
```

```dart [Flutter]
import 'package:flutter/material.dart';
import 'package:your_app/components/ui/navigation_menu.dart';

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return GalaxyNavigationMenu(
      items: [
        NavigationMenuItem(
          label: 'Getting Started',
          children: [
            NavigationMenuLink(
              label: 'Installation',
              onTap: () {
                // Navigate to installation page
              },
            ),
          ],
        ),
        NavigationMenuItem(
          label: 'Components',
          onTap: () {
            // Navigate to components
          },
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
npx galaxy-design@latest add navigation-menu
```

```bash [pnpm]
pnpm dlx galaxy-design@latest add navigation-menu
```

```bash [yarn]
yarn dlx galaxy-design@latest add navigation-menu
```

```bash [bun]
bunx galaxy-design@latest add navigation-menu
```

```bash [global]
# If you have installed galaxy-design globally
galaxy-design add navigation-menu
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
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink
} from '@/components/ui'
</script>

<template>
  <NavigationMenu>
    <NavigationMenuList>
      <NavigationMenuItem>
        <NavigationMenuTrigger>Getting Started</NavigationMenuTrigger>
        <NavigationMenuContent>
          <NavigationMenuLink href="/docs/installation">
            Installation
          </NavigationMenuLink>
        </NavigationMenuContent>
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenu>
</template>
```

### React

```tsx
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink
} from '@/components/ui'

export default function NavigationMenuDemo() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Getting Started</NavigationMenuTrigger>
          <NavigationMenuContent>
            <NavigationMenuLink href="/docs/installation">
              Installation
            </NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}
```

### Angular

```typescript
import { Component } from '@angular/core';
import { NavigationMenuComponent } from '@/components/ui';

@Component({
  selector: 'app-navigation-menu-demo',
  standalone: true,
  imports: [NavigationMenuComponent],
  template: `
    <ui-navigation-menu>
      <a href="/docs">Documentation</a>
      <a href="/components">Components</a>
      <a href="/examples">Examples</a>
    </ui-navigation-menu>
  `
})
export class NavigationMenuDemoComponent {}
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
