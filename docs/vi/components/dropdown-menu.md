# Dropdown Menu

Hiển thị menu cho người dùng—chẳng hạn như một tập hợp các hành động hoặc chức năng—được kích hoạt bởi một button.

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

:::

  </template>
</ComponentPreview>

## Cài đặt

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

:::

## Sử dụng

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
      <Button variant="outline">Mở</Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent>
      <DropdownMenuItem>Hồ sơ</DropdownMenuItem>
      <DropdownMenuItem>Cài đặt</DropdownMenuItem>
      <DropdownMenuItem>Đăng xuất</DropdownMenuItem>
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
        <Button variant="outline">Mở</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>Hồ sơ</DropdownMenuItem>
        <DropdownMenuItem>Cài đặt</DropdownMenuItem>
        <DropdownMenuItem>Đăng xuất</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
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
