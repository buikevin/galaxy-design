# Resizable

Các nhóm panel có thể thay đổi kích thước với hỗ trợ bàn phím.

## Cài đặt

::: code-group

```bash [npm]
npx galaxy-design@latest add resizable
```

```bash [pnpm]
pnpm dlx galaxy-design@latest add resizable
```

```bash [yarn]
yarn dlx galaxy-design@latest add resizable
```

```bash [bun]
bunx galaxy-design@latest add resizable
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

## Ví dụ

### Vertical

::: code-group

```vue [Vue]
<ResizablePanelGroup direction="vertical" class="min-h-[200px] max-w-md rounded-lg border">
  <ResizablePanel :default-size="25">
    <div class="flex h-full items-center justify-center p-6">
      <span class="font-semibold">Header</span>
    </div>
  </ResizablePanel>
  <ResizableHandle />
  <ResizablePanel :default-size="75">
    <div class="flex h-full items-center justify-center p-6">
      <span class="font-semibold">Content</span>
    </div>
  </ResizablePanel>
</ResizablePanelGroup>
```

```tsx [React]
<ResizablePanelGroup direction="vertical" className="min-h-[200px] max-w-md rounded-lg border">
  <ResizablePanel defaultSize={25}>
    <div className="flex h-full items-center justify-center p-6">
      <span className="font-semibold">Header</span>
    </div>
  </ResizablePanel>
  <ResizableHandle />
  <ResizablePanel defaultSize={75}>
    <div className="flex h-full items-center justify-center p-6">
      <span className="font-semibold">Content</span>
    </div>
  </ResizablePanel>
</ResizablePanelGroup>
```

```html [Angular]
<ui-resizable-panel-group direction="vertical" class="min-h-[200px] max-w-md rounded-lg border">
  <ui-resizable-panel [defaultSize]="25">
    <div class="flex h-full items-center justify-center p-6">
      <span class="font-semibold">Header</span>
    </div>
  </ui-resizable-panel>
  <ui-resizable-handle />
  <ui-resizable-panel [defaultSize]="75">
    <div class="flex h-full items-center justify-center p-6">
      <span class="font-semibold">Content</span>
    </div>
  </ui-resizable-panel>
</ui-resizable-panel-group>
```

:::

### Handle

Bạn có thể hiển thị tay cầm bằng `withHandle`.

::: code-group

```vue [Vue]
<ResizablePanelGroup direction="horizontal" class="max-w-md rounded-lg border">
  <ResizablePanel :default-size="50">
    <div class="flex h-[200px] items-center justify-center p-6">
      <span class="font-semibold">Sidebar</span>
    </div>
  </ResizablePanel>
  <ResizableHandle :with-handle="true" />
  <ResizablePanel :default-size="50">
    <div class="flex h-[200px] items-center justify-center p-6">
      <span class="font-semibold">Content</span>
    </div>
  </ResizablePanel>
</ResizablePanelGroup>
```

```tsx [React]
<ResizablePanelGroup direction="horizontal" className="max-w-md rounded-lg border">
  <ResizablePanel defaultSize={50}>
    <div className="flex h-[200px] items-center justify-center p-6">
      <span className="font-semibold">Sidebar</span>
    </div>
  </ResizablePanel>
  <ResizableHandle withHandle />
  <ResizablePanel defaultSize={50}>
    <div className="flex h-[200px] items-center justify-center p-6">
      <span className="font-semibold">Content</span>
    </div>
  </ResizablePanel>
</ResizablePanelGroup>
```

```html [Angular]
<ui-resizable-panel-group direction="horizontal" class="max-w-md rounded-lg border">
  <ui-resizable-panel [defaultSize]="50">
    <div class="flex h-[200px] items-center justify-center p-6">
      <span class="font-semibold">Sidebar</span>
    </div>
  </ui-resizable-panel>
  <ui-resizable-handle [withHandle]="true" />
  <ui-resizable-panel [defaultSize]="50">
    <div class="flex h-[200px] items-center justify-center p-6">
      <span class="font-semibold">Content</span>
    </div>
  </ui-resizable-panel>
</ui-resizable-panel-group>
```

:::

## API Reference

### ResizablePanelGroup

| Prop | Vue | React | Angular | Mô tả |
| --- | --- | --- | --- | --- |
| `direction` | `'horizontal' \| 'vertical'` | `'horizontal' \| 'vertical'` | `'horizontal' \| 'vertical'` | Hướng của panel group |
| `autoSaveId` | `string` | `string` | - | Lưu layout vào local storage |
| `keyboardResizeBy` | `number` | `number` | - | Bước resize khi dùng bàn phím |
| `gutterSize` | - | - | `number` | Kích thước gutter theo pixel cho `angular-split` |
| `class` / `className` | `string` | `string` | `string` | Class cho container |
| `layout` / `onLayout` / `layoutChange` | `(sizes: number[]) => void` | `(sizes: number[]) => void` | `(sizes: number[]) => void` | Event khi layout thay đổi |

### ResizablePanel

| Prop | Vue | React | Angular | Mô tả |
| --- | --- | --- | --- | --- |
| `defaultSize` | `number` | `number` | `number` | Kích thước khởi tạo theo phần trăm |
| `size` | - | - | `number` | Alias tương thích ngược của Angular cho kích thước khởi tạo |
| `minSize` | `number` | `number` | `number` | Kích thước tối thiểu |
| `maxSize` | `number` | `number` | `number` | Kích thước tối đa |
| `collapsible` | `boolean` | `boolean` | `boolean` | Cho phép panel thu gọn |
| `collapsedSize` | `number` | `number` | `number` | Kích thước khi thu gọn |
| `order` | `number` | `number` | `number` | Thứ tự panel |
| `class` / `className` | `string` | `string` | `string` | Class cho panel |
| `resize` / `onResize` | `(size: number, prevSize?: number) => void` | event của primitive | - | Event khi panel thay đổi kích thước |
| `collapse` / `expand` | `() => void` | event của primitive | - | Event khi panel thu gọn hoặc mở lại |

### ResizableHandle

| Prop | Vue | React | Angular | Mô tả |
| --- | --- | --- | --- | --- |
| `disabled` | `boolean` | `boolean` | `boolean` | Tắt resize qua handle hoặc gutter |
| `withHandle` | `boolean` | `boolean` | `boolean` | Hiển thị tay cầm trực quan |
| `class` / `className` | `string` | `string` | `string` | Class cho handle |
| `dragging` | `(dragging: boolean) => void` | event của primitive | - | Event khi đang kéo |

## Ghi chú

- Vue hiện dùng `Radix Vue Splitter`.
- React dùng `react-resizable-panels`.
- Angular dùng `angular-split` và được chuẩn hoá để gần API chung nhất có thể.
- Angular vẫn giữ `size` như alias tương thích ngược của `defaultSize`.
- Angular đã expose `collapsible` và `collapsedSize` theo schema chung, nhưng wrapper hiện chưa enforce đầy đủ hai prop này.

## Khả năng tiếp cận

### Tương tác bàn phím

| Phím | Mô tả |
| --- | --- |
| `ArrowLeft` / `ArrowRight` | Resize layout ngang |
| `ArrowUp` / `ArrowDown` | Resize layout dọc |
| `Enter` | Reset gần về kích thước mặc định nếu primitive nền hỗ trợ |
| `Home` / `End` | Di chuyển nhanh về min/max nếu primitive nền hỗ trợ |

## Giấy phép

MIT © 2025 Bùi Trọng Hiếu (kevinbui)
