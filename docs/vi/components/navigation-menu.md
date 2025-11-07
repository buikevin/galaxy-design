# Navigation Menu

Tập hợp các liên kết để điều hướng trang web.

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

:::

  </template>
</ComponentPreview>

## Cài đặt

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

:::

## Sử dụng

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
        <NavigationMenuTrigger>Bắt Đầu</NavigationMenuTrigger>
        <NavigationMenuContent>
          <NavigationMenuLink href="/docs/installation">
            Cài Đặt
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
          <NavigationMenuTrigger>Bắt Đầu</NavigationMenuTrigger>
          <NavigationMenuContent>
            <NavigationMenuLink href="/docs/installation">
              Cài Đặt
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
      <a href="/docs">Tài Liệu</a>
      <a href="/components">Components</a>
      <a href="/examples">Ví Dụ</a>
    </ui-navigation-menu>
  `
})
export class NavigationMenuDemoComponent {}
```


## Khả năng truy cập

- **Điều hướng bàn phím**: [TODO]
- **Đọc màn hình**: [TODO]
- **Quản lý focus**: [TODO]
- **Tuân thủ WCAG**: Tuân thủ WCAG 2.1 cấp độ AA

## Tác giả

**Bùi Trọng Hiếu (kevinbui)**
- GitHub: [@buikevin](https://github.com/buikevin)
- Email: kevinbui210191@gmail.com

## Giấy phép

MIT © 2025 Bùi Trọng Hiếu (kevinbui)
