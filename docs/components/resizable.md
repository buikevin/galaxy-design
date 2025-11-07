# Resizable

Accessible resizable panel groups and layouts with keyboard support.


<ComponentPreview name="ResizableDemo">
  <template #preview>
    <DemoContainer>
      <ResizableDemo />
    </DemoContainer>
  </template>
  <template #code>

::: code-group
```vue [Vue]
<template><div>Demo</div></template>
```

```tsx [React]
export default function App() { return <div>Demo</div> }
```

```typescript [Angular]
@Component({ template: `<div>Demo</div>` })
export class DemoComponent {}
```
:::

  </template>
</ComponentPreview>
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

```bash [global]
# If you have installed galaxy-design globally
galaxy-design add resizable
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
    <ResizablePanel :size="50">
      <div class="flex h-[200px] items-center justify-center p-6">
        <span class="font-semibold">One</span>
      </div>
    </ResizablePanel>
    <ResizableHandle />
    <ResizablePanel :size="50">
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
      <ui-resizable-panel [size]="50">
        <div class="flex h-[200px] items-center justify-center p-6">
          <span class="font-semibold">One</span>
        </div>
      </ui-resizable-panel>
      <ui-resizable-handle />
      <ui-resizable-panel [size]="50">
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
  <ResizablePanel :size="25">
    <div class="flex h-full items-center justify-center p-6">
      <span class="font-semibold">Header</span>
    </div>
  </ResizablePanel>
  <ResizableHandle />
  <ResizablePanel :size="75">
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
  <ui-resizable-panel [size]="25">
    <div class="flex h-full items-center justify-center p-6">
      <span class="font-semibold">Header</span>
    </div>
  </ui-resizable-panel>
  <ui-resizable-handle />
  <ui-resizable-panel [size]="75">
    <div class="flex h-full items-center justify-center p-6">
      <span class="font-semibold">Content</span>
    </div>
  </ui-resizable-panel>
</ui-resizable-panel-group>
```

:::

### Handle

You can set or hide the handle by using the `withHandle` prop.

::: code-group

```vue [Vue]
<ResizablePanelGroup direction="horizontal" class="max-w-md rounded-lg border">
  <ResizablePanel :size="50">
    <div class="flex h-[200px] items-center justify-center p-6">
      <span class="font-semibold">Sidebar</span>
    </div>
  </ResizablePanel>
  <ResizableHandle :withHandle="true" />
  <ResizablePanel :size="50">
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
  <ui-resizable-panel [size]="50">
    <div class="flex h-[200px] items-center justify-center p-6">
      <span class="font-semibold">Sidebar</span>
    </div>
  </ui-resizable-panel>
  <ui-resizable-handle [withHandle]="true" />
  <ui-resizable-panel [size]="50">
    <div class="flex h-[200px] items-center justify-center p-6">
      <span class="font-semibold">Content</span>
    </div>
  </ui-resizable-panel>
</ui-resizable-panel-group>
```

:::

## API Reference

### ResizablePanelGroup

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `direction` | `'horizontal' \| 'vertical'` | `'horizontal'` | The direction of the resizable panels |

### ResizablePanel

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `defaultSize` | `number` | - | The initial size of the panel (React only) |
| `size` | `number` | - | The size of the panel (Vue/Angular) |
| `minSize` | `number` | - | The minimum size of the panel |
| `maxSize` | `number` | - | The maximum size of the panel |

### ResizableHandle

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `withHandle` | `boolean` | `false` | Whether to show a handle icon |

## Accessibility

### Keyboard Interactions

| Key | Description |
|-----|-------------|
| `ArrowLeft` | When focus is on a horizontal handle, decreases the size of the left panel |
| `ArrowRight` | When focus is on a horizontal handle, increases the size of the left panel |
| `ArrowUp` | When focus is on a vertical handle, decreases the size of the top panel |
| `ArrowDown` | When focus is on a vertical handle, increases the size of the top panel |
| `Enter` | Resets the panel sizes to their default values |
| `Home` | Sets the left or top panel to its minimum size |
| `End` | Sets the left or top panel to its maximum size |

## Author

**Bùi Trọng Hiếu (kevinbui)**
- GitHub: [@buikevin](https://github.com/buikevin)
- Email: kevinbui210191@gmail.com

## License

MIT © 2025 Bùi Trọng Hiếu (kevinbui)
