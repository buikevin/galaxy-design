# Resizable

Các nhóm panel có thể thay đổi kích thước với hỗ trợ bàn phím.

<ComponentPreview name="ResizableDemo">
  <template #preview>
    <DemoContainer>
      <ResizableDemo />
    </DemoContainer>
  </template>
  <template #code>

::: code-group

```vue [Vue]
<script setup lang="ts">
import {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
} from '@/components/ui/resizable'
</script>

<template>
  <ResizablePanelGroup direction="horizontal" class="max-w-md rounded-lg border">
    <ResizablePanel :default-size="50">
      <div class="flex h-[200px] items-center justify-center p-6">
        <span class="font-semibold">One</span>
      </div>
    </ResizablePanel>
    <ResizableHandle />
    <ResizablePanel :default-size="50">
      <div class="flex h-[200px] items-center justify-center p-6">
        <span class="font-semibold">Two</span>
      </div>
    </ResizablePanel>
  </ResizablePanelGroup>
</template>
```

```tsx [React]
import {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
} from "@/components/ui/resizable"

export default function App() {
  return (
    <ResizablePanelGroup direction="horizontal" className="max-w-md rounded-lg border">
      <ResizablePanel defaultSize={50}>
        <div className="flex h-[200px] items-center justify-center p-6">
          <span className="font-semibold">One</span>
        </div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={50}>
        <div className="flex h-[200px] items-center justify-center p-6">
          <span className="font-semibold">Two</span>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}
```

```typescript [Angular]
import { Component } from '@angular/core';
import {
  ResizablePanelGroupComponent,
  ResizablePanelComponent,
  ResizableHandleComponent,
} from '@/components/ui/resizable';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    ResizablePanelGroupComponent,
    ResizablePanelComponent,
    ResizableHandleComponent,
  ],
  template: `
    <ui-resizable-panel-group direction="horizontal" class="max-w-md rounded-lg border">
      <ui-resizable-panel [defaultSize]="50">
        <div class="flex h-[200px] items-center justify-center p-6">
          <span class="font-semibold">One</span>
        </div>
      </ui-resizable-panel>
      <ui-resizable-handle />
      <ui-resizable-panel [defaultSize]="50">
        <div class="flex h-[200px] items-center justify-center p-6">
          <span class="font-semibold">Two</span>
        </div>
      </ui-resizable-panel>
    </ui-resizable-panel-group>
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
npx galaxy-ui-cli@latest add resizable
```

```bash [pnpm]
pnpm dlx galaxy-ui-cli@latest add resizable
```

```bash [yarn]
yarn dlx galaxy-ui-cli@latest add resizable
```

```bash [bun]
bunx galaxy-ui-cli@latest add resizable
```

:::

## Sử dụng

::: code-group

```vue [Vue]
<script setup lang="ts">
import {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
} from '@/components/ui/resizable'
</script>

<template>
  <ResizablePanelGroup direction="horizontal">
    <ResizablePanel>Panel One</ResizablePanel>
    <ResizableHandle />
    <ResizablePanel>Panel Two</ResizablePanel>
  </ResizablePanelGroup>
</template>
```

```tsx [React]
import {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
} from "@/components/ui/resizable"

export default function App() {
  return (
    <ResizablePanelGroup direction="horizontal">
      <ResizablePanel>Panel One</ResizablePanel>
      <ResizableHandle />
      <ResizablePanel>Panel Two</ResizablePanel>
    </ResizablePanelGroup>
  )
}
```

```typescript [Angular]
import { Component } from '@angular/core';
import {
  ResizablePanelGroupComponent,
  ResizablePanelComponent,
  ResizableHandleComponent,
} from '@/components/ui/resizable';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    ResizablePanelGroupComponent,
    ResizablePanelComponent,
    ResizableHandleComponent,
  ],
  template: `
    <ui-resizable-panel-group direction="horizontal">
      <ui-resizable-panel>Panel One</ui-resizable-panel>
      <ui-resizable-handle />
      <ui-resizable-panel>Panel Two</ui-resizable-panel>
    </ui-resizable-panel-group>
  `
})
export class AppComponent {}
```

:::

## API Reference

### ResizablePanelGroup

| Prop | Type | Default | Mô tả |
| --- | --- | --- | --- |
| `direction` | `'horizontal' \| 'vertical'` | - | Hướng của group (ngang hoặc dọc) |
| `class` | `string` | - | Class CSS tùy chỉnh |

### ResizablePanel

| Prop | Type | Default | Mô tả |
| --- | --- | --- | --- |
| `defaultSize` | `number` | - | Kích thước mặc định (phần trăm) |
| `minSize` | `number` | - | Kích thước tối thiểu (phần trăm) |
| `maxSize` | `number` | - | Kích thước tối đa (phần trăm) |
| `collapsible` | `boolean` | `false` | Có thể thu gọn panel không |
| `class` | `string` | - | Class CSS tùy chỉnh |

### ResizableHandle

| Prop | Type | Default | Mô tả |
| --- | --- | --- | --- |
| `withHandle` | `boolean` | `false` | Hiển thị icon handle |
| `class` | `string` | - | Class CSS tùy chỉnh |

## Ví dụ

### Horizontal

::: code-group

```vue [Vue]
<ResizablePanelGroup direction="horizontal" class="min-h-[200px] rounded-lg border">
  <ResizablePanel :default-size="50">
    <div class="flex h-full items-center justify-center p-6">
      <span class="font-semibold">Panel One</span>
    </div>
  </ResizablePanel>
  <ResizableHandle />
  <ResizablePanel :default-size="50">
    <div class="flex h-full items-center justify-center p-6">
      <span class="font-semibold">Panel Two</span>
    </div>
  </ResizablePanel>
</ResizablePanelGroup>
```

```tsx [React]
<ResizablePanelGroup direction="horizontal" className="min-h-[200px] rounded-lg border">
  <ResizablePanel defaultSize={50}>
    <div className="flex h-full items-center justify-center p-6">
      <span className="font-semibold">Panel One</span>
    </div>
  </ResizablePanel>
  <ResizableHandle />
  <ResizablePanel defaultSize={50}>
    <div className="flex h-full items-center justify-center p-6">
      <span className="font-semibold">Panel Two</span>
    </div>
  </ResizablePanel>
</ResizablePanelGroup>
```

```typescript [Angular]
<ui-resizable-panel-group direction="horizontal" class="min-h-[200px] rounded-lg border">
  <ui-resizable-panel [defaultSize]="50">
    <div class="flex h-full items-center justify-center p-6">
      <span class="font-semibold">Panel One</span>
    </div>
  </ui-resizable-panel>
  <ui-resizable-handle />
  <ui-resizable-panel [defaultSize]="50">
    <div class="flex h-full items-center justify-center p-6">
      <span class="font-semibold">Panel Two</span>
    </div>
  </ui-resizable-panel>
</ui-resizable-panel-group>
```

:::

### Vertical

::: code-group

```vue [Vue]
<ResizablePanelGroup direction="vertical" class="min-h-[200px] rounded-lg border">
  <ResizablePanel :default-size="50">
    <div class="flex h-full items-center justify-center p-6">
      <span class="font-semibold">Header</span>
    </div>
  </ResizablePanel>
  <ResizableHandle />
  <ResizablePanel :default-size="50">
    <div class="flex h-full items-center justify-center p-6">
      <span class="font-semibold">Content</span>
    </div>
  </ResizablePanel>
</ResizablePanelGroup>
```

```tsx [React]
<ResizablePanelGroup direction="vertical" className="min-h-[200px] rounded-lg border">
  <ResizablePanel defaultSize={50}>
    <div className="flex h-full items-center justify-center p-6">
      <span className="font-semibold">Header</span>
    </div>
  </ResizablePanel>
  <ResizableHandle />
  <ResizablePanel defaultSize={50}>
    <div className="flex h-full items-center justify-center p-6">
      <span className="font-semibold">Content</span>
    </div>
  </ResizablePanel>
</ResizablePanelGroup>
```

```typescript [Angular]
<ui-resizable-panel-group direction="vertical" class="min-h-[200px] rounded-lg border">
  <ui-resizable-panel [defaultSize]="50">
    <div class="flex h-full items-center justify-center p-6">
      <span class="font-semibold">Header</span>
    </div>
  </ui-resizable-panel>
  <ui-resizable-handle />
  <ui-resizable-panel [defaultSize]="50">
    <div class="flex h-full items-center justify-center p-6">
      <span class="font-semibold">Content</span>
    </div>
  </ui-resizable-panel>
</ui-resizable-panel-group>
```

:::

### Handle

::: code-group

```vue [Vue]
<ResizablePanelGroup direction="horizontal" class="min-h-[200px] rounded-lg border">
  <ResizablePanel :default-size="50">
    <div class="flex h-full items-center justify-center p-6">
      <span class="font-semibold">Sidebar</span>
    </div>
  </ResizablePanel>
  <ResizableHandle with-handle />
  <ResizablePanel :default-size="50">
    <div class="flex h-full items-center justify-center p-6">
      <span class="font-semibold">Content</span>
    </div>
  </ResizablePanel>
</ResizablePanelGroup>
```

```tsx [React]
<ResizablePanelGroup direction="horizontal" className="min-h-[200px] rounded-lg border">
  <ResizablePanel defaultSize={50}>
    <div className="flex h-full items-center justify-center p-6">
      <span className="font-semibold">Sidebar</span>
    </div>
  </ResizablePanel>
  <ResizableHandle withHandle />
  <ResizablePanel defaultSize={50}>
    <div className="flex h-full items-center justify-center p-6">
      <span className="font-semibold">Content</span>
    </div>
  </ResizablePanel>
</ResizablePanelGroup>
```

```typescript [Angular]
<ui-resizable-panel-group direction="horizontal" class="min-h-[200px] rounded-lg border">
  <ui-resizable-panel [defaultSize]="50">
    <div class="flex h-full items-center justify-center p-6">
      <span class="font-semibold">Sidebar</span>
    </div>
  </ui-resizable-panel>
  <ui-resizable-handle [withHandle]="true" />
  <ui-resizable-panel [defaultSize]="50">
    <div class="flex h-full items-center justify-center p-6">
      <span class="font-semibold">Content</span>
    </div>
  </ui-resizable-panel>
</ui-resizable-panel-group>
```

:::

## Tương tác bàn phím

| Phím | Mô tả |
| --- | --- |
| `ArrowLeft` / `ArrowRight` | Di chuyển handle theo chiều ngang |
| `ArrowUp` / `ArrowDown` | Di chuyển handle theo chiều dọc |
| `Enter` | Reset về kích thước mặc định |
| `Home` | Thu gọn panel đầu tiên |
| `End` | Thu gọn panel cuối cùng |

## Khả năng tiếp cận

- Hỗ trợ điều hướng bằng bàn phím đầy đủ
- Handle có thể focus được
- Có thể resize bằng chuột hoặc bàn phím
- Hỗ trợ screen readers với ARIA labels phù hợp


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
