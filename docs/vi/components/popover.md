# Popover

Hiển thị nội dung phong phú trong portal, được kích hoạt bởi button.

<ComponentPreview name="PopoverDemo">
  <template #preview>
    <DemoContainer>
      <PopoverDemo />
    </DemoContainer>
  </template>
  <template #code>

::: code-group

```vue [Vue]
<script setup lang="ts">
import { Popover, PopoverTrigger, PopoverContent } from '@/components/ui/popover'
</script>

<template>
  <Popover>
    <PopoverTrigger>Open</PopoverTrigger>
    <PopoverContent>
      <div class="space-y-2">
        <h4 class="font-medium">Dimensions</h4>
        <p class="text-sm">Set the dimensions for the layer.</p>
      </div>
    </PopoverContent>
  </Popover>
</template>
```

```tsx [React]
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover"

export default function App() {
  return (
    <Popover>
      <PopoverTrigger>Open</PopoverTrigger>
      <PopoverContent>
        <div className="space-y-2">
          <h4 className="font-medium">Dimensions</h4>
          <p className="text-sm">Set the dimensions for the layer.</p>
        </div>
      </PopoverContent>
    </Popover>
  )
}
```

```typescript [Angular]
import { Component } from '@angular/core';
import { PopoverComponent } from '@/components/ui/popover';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PopoverComponent],
  template: `
    <ui-popover>
      <button trigger>Open</button>
      <div content>
        <h4>Dimensions</h4>
        <p>Set the dimensions for the layer.</p>
      </div>
    </ui-popover>
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
npx galaxy-design@latest add popover
```

```bash [pnpm]
pnpm dlx galaxy-design@latest add popover
```

```bash [yarn]
yarn dlx galaxy-design@latest add popover
```

```bash [bun]
bunx galaxy-design@latest add popover
```

:::

## Sử dụng

### Vue

```vue
<script setup lang="ts">
import { Popover, PopoverTrigger, PopoverContent } from '@/components/ui'
</script>

<template>
  <Popover>
    <PopoverTrigger>Mở</PopoverTrigger>
    <PopoverContent>
      <div class="space-y-2">
        <h4 class="font-medium">Kích Thước</h4>
        <p class="text-sm">Đặt kích thước cho layer.</p>
      </div>
    </PopoverContent>
  </Popover>
</template>
```

### React

```tsx
import { Popover, PopoverTrigger, PopoverContent } from '@/components/ui'

export default function PopoverDemo() {
  return (
    <Popover>
      <PopoverTrigger>Mở</PopoverTrigger>
      <PopoverContent>
        <div className="space-y-2">
          <h4 className="font-medium">Kích Thước</h4>
          <p className="text-sm">Đặt kích thước cho layer.</p>
        </div>
      </PopoverContent>
    </Popover>
  )
}
```

### Angular

```typescript
import { Component } from '@angular/core';
import { PopoverComponent } from '@/components/ui';

@Component({
  selector: 'app-popover-demo',
  standalone: true,
  imports: [PopoverComponent],
  template: `
    <ui-popover>
      <button trigger>Mở</button>
      <div content>
        <h4>Kích Thước</h4>
        <p>Đặt kích thước cho layer.</p>
      </div>
    </ui-popover>
  `
})
export class PopoverDemoComponent {}
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
