# Resizable

Accessible resizable panel groups and layouts with keyboard support.

## Installation

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

## Usage

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
    <ResizablePanelGroup
      direction="horizontal"
      className="max-w-md rounded-lg border"
    >
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

## Examples

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
<ResizablePanelGroup
  direction="vertical"
  className="min-h-[200px] max-w-md rounded-lg border"
>
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

You can show the visual grip with `withHandle`.

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
<ResizablePanelGroup
  direction="horizontal"
  className="max-w-md rounded-lg border"
>
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

| Prop | Vue | React | Angular | Description |
| --- | --- | --- | --- | --- |
| `direction` | `'horizontal' \| 'vertical'` | `'horizontal' \| 'vertical'` | `'horizontal' \| 'vertical'` | Panel group layout direction |
| `autoSaveId` | `string` | `string` | - | Persist layout using local storage |
| `keyboardResizeBy` | `number` | `number` | - | Resize step when using keyboard interaction |
| `gutterSize` | - | - | `number` | Gutter size in pixels for `angular-split` |
| `class` / `className` | `string` | `string` | `string` | Container classes |
| `layout` / `onLayout` / `layoutChange` | `(sizes: number[]) => void` | `(sizes: number[]) => void` | `(sizes: number[]) => void` | Emitted after layout changes |

### ResizablePanel

| Prop | Vue | React | Angular | Description |
| --- | --- | --- | --- | --- |
| `defaultSize` | `number` | `number` | `number` | Initial panel size percentage |
| `size` | - | - | `number` | Angular backward-compatible alias for initial size |
| `minSize` | `number` | `number` | `number` | Minimum panel size percentage |
| `maxSize` | `number` | `number` | `number` | Maximum panel size percentage |
| `collapsible` | `boolean` | `boolean` | `boolean` | Whether the panel may collapse |
| `collapsedSize` | `number` | `number` | `number` | Size when collapsed |
| `order` | `number` | `number` | `number` | Panel ordering index |
| `class` / `className` | `string` | `string` | `string` | Panel classes |
| `resize` / `onResize` | `(size: number, prevSize?: number) => void` | framework primitive event | - | Emitted when the panel resizes |
| `collapse` / `expand` | `() => void` | framework primitive event | - | Emitted on collapse or expand |

### ResizableHandle

| Prop | Vue | React | Angular | Description |
| --- | --- | --- | --- | --- |
| `disabled` | `boolean` | `boolean` | `boolean` | Disable resizing through the handle or gutter |
| `withHandle` | `boolean` | `boolean` | `boolean` | Show visual handle affordance |
| `class` / `className` | `string` | `string` | `string` | Handle classes |
| `dragging` | `(dragging: boolean) => void` | framework primitive event | - | Emitted while dragging |

## Notes

- Vue now uses `Radix Vue Splitter`.
- React uses `react-resizable-panels`.
- Angular uses `angular-split` and is normalized toward the shared API.
- Angular currently keeps `size` as a backward-compatible alias for `defaultSize`.
- Angular exposes `collapsible` and `collapsedSize` in the normalized API, but they are not yet fully enforced by the wrapper.

## Accessibility

### Keyboard Interactions

| Key | Description |
| --- | --- |
| `ArrowLeft` / `ArrowRight` | Resize horizontal layouts |
| `ArrowUp` / `ArrowDown` | Resize vertical layouts |
| `Enter` | Reset toward default panel sizes when supported by the underlying primitive |
| `Home` / `End` | Jump toward min/max panel sizes when supported by the underlying primitive |

## License

MIT © 2025 Bùi Trọng Hiếu (kevinbui)
