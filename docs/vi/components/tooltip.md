# Tooltip

Popup hiển thị thông tin liên quan đến phần tử khi phần tử nhận focus bàn phím hoặc chuột di chuyển qua.

<ComponentPreview name="TooltipDemo">
  <template #preview>
    <DemoContainer>
      <TooltipDemo />
    </DemoContainer>
  </template>
  <template #code>

::: code-group

```vue [Vue]
<script setup lang="ts">
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from '@/components/ui/tooltip'
</script>

<template>
  <TooltipProvider>
    <Tooltip>
      <TooltipTrigger>Hover me</TooltipTrigger>
      <TooltipContent>
        <p>Add to library</p>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
</template>
```

```tsx [React]
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from "@/components/ui/tooltip"

export default function App() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>Hover me</TooltipTrigger>
        <TooltipContent>
          <p>Add to library</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
```

```typescript [Angular]
import { Component } from '@angular/core';
import { TooltipComponent } from '@/components/ui/tooltip';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TooltipComponent],
  template: `
    <ui-tooltip>
      <button trigger>Hover me</button>
      <div content>Add to library</div>
    </ui-tooltip>
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
npx galaxy-design@latest add tooltip
```

```bash [pnpm]
pnpm dlx galaxy-design@latest add tooltip
```

```bash [yarn]
yarn dlx galaxy-design@latest add tooltip
```

```bash [bun]
bunx galaxy-design@latest add tooltip
```

:::

## Sử dụng

### Vue

```vue
<script setup lang="ts">
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from '@/components/ui'
</script>

<template>
  <TooltipProvider>
    <Tooltip>
      <TooltipTrigger>Di chuột vào đây</TooltipTrigger>
      <TooltipContent>
        <p>Thêm vào thư viện</p>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
</template>
```

### React

```tsx
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from '@/components/ui'

export default function TooltipDemo() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>Di chuột vào đây</TooltipTrigger>
        <TooltipContent>
          <p>Thêm vào thư viện</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
```

### Angular

```typescript
import { Component } from '@angular/core';
import { TooltipComponent } from '@/components/ui';

@Component({
  selector: 'app-tooltip-demo',
  standalone: true,
  imports: [TooltipComponent],
  template: `
    <ui-tooltip>
      <button trigger>Di chuột vào đây</button>
      <div content>Thêm vào thư viện</div>
    </ui-tooltip>
  `
})
export class TooltipDemoComponent {}
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
