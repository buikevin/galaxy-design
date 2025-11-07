# Menubar

Menu hiển thị liên tục phổ biến trong các ứng dụng desktop, cung cấp quyền truy cập nhanh vào một tập hợp các lệnh nhất quán.

::: warning Chỉ dành cho Web
Component này chỉ khả dụng cho các framework web (Vue, React, Angular). Menubar dành cho desktop không phù hợp với nền tảng mobile.
:::

<ComponentPreview name="MenubarDemo">
  <template #preview>
    <DemoContainer>
      <MenubarDemo />
    </DemoContainer>
  </template>
  <template #code>

::: code-group

```vue [Vue]
<script setup lang="ts">
import { Menubar, MenubarMenu, MenubarTrigger, MenubarContent, MenubarItem } from '@/components/ui/menubar'
</script>

<template>
  <Menubar>
    <MenubarMenu>
      <MenubarTrigger>File</MenubarTrigger>
      <MenubarContent>
        <MenubarItem>New</MenubarItem>
        <MenubarItem>Open</MenubarItem>
      </MenubarContent>
    </MenubarMenu>
  </Menubar>
</template>
```

```tsx [React]
import { Menubar, MenubarMenu, MenubarTrigger, MenubarContent, MenubarItem } from "@/components/ui/menubar"

export default function App() {
  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>File</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>New</MenubarItem>
          <MenubarItem>Open</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  )
}
```

```typescript [Angular]
import { Component } from '@angular/core';
import { MenubarComponent } from '@/components/ui/menubar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MenubarComponent],
  template: `
    <ui-menubar>
      <ui-menubar-menu>
        <ui-menubar-trigger>File</ui-menubar-trigger>
        <ui-menubar-content>
          <ui-menubar-item>New</ui-menubar-item>
          <ui-menubar-item>Open</ui-menubar-item>
        </ui-menubar-content>
      </ui-menubar-menu>
    </ui-menubar>
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
npx galaxy-design@latest add menubar
```

```bash [pnpm]
pnpm dlx galaxy-design@latest add menubar
```

```bash [yarn]
yarn dlx galaxy-design@latest add menubar
```

```bash [bun]
bunx galaxy-design@latest add menubar
```

:::

## Sử dụng

### Vue

```vue
<script setup lang="ts">
import { Menubar, MenubarMenu, MenubarTrigger, MenubarContent, MenubarItem } from '@/components/ui'
</script>

<template>
  <Menubar>
    <MenubarMenu>
      <MenubarTrigger>Tệp</MenubarTrigger>
      <MenubarContent>
        <MenubarItem>Mới</MenubarItem>
        <MenubarItem>Mở</MenubarItem>
      </MenubarContent>
    </MenubarMenu>
  </Menubar>
</template>
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
