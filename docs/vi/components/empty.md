# Empty

Displays an empty state placeholder when there is no content.

<ComponentPreview name="EmptyDemo">
  <template #preview>
    <DemoContainer>
      <EmptyDemo />
    </DemoContainer>
  </template>
  <template #code>

::: code-group
```vue [Vue]
<template>
  <Empty title="No content" description="Get started by creating your first item" />
</template>
```

```tsx [React]
import { Empty } from '@/components/ui/empty'
export default function App() {
  return <Empty />
}
```

```typescript [Angular]
@Component({
  template: `<ui-empty />`
})
export class DemoComponent {}
```
:::

  </template>
</ComponentPreview>

## Cài đặt

::: code-group
```bash [React]
npx galaxy-ui-cli add empty
```

```bash [Vue]
npx galaxy-ui-cli add empty
```

```bash [Angular]
npx galaxy-ui-cli add empty
```
:::

## Usage

::: code-group
```tsx [React]
import { Empty } from '@/components/empty'
import { Button } from '@/components/button'

export default function EmptyDemo() {
  return (
    <Empty description="No data available">
      <Button>Create New</Button>
    </Empty>
  )
}
```

```vue [Vue]
<script setup lang="ts">
import { Empty } from '@/components/empty'
import { Button } from '@/components/button'
</script>

<template>
  <Empty description="No data available">
    <Button>Create New</Button>
  </Empty>
</template>
```

```typescript [Angular]
import { Component } from '@angular/core'
import { EmptyComponent } from '@/components/empty'
import { ButtonDirective } from '@/components/button'

@Component({
  selector: 'app-empty-demo',
  standalone: true,
  imports: [EmptyComponent, ButtonDirective],
  template: `
    <ui-empty description="No data available">
      <button gButton>Create New</button>
    </ui-empty>
  `
})
export class EmptyDemo {}
```
:::


## API Reference

### Props

Component này chấp nhận các props sau:

| Prop | Kiểu | Mặc định | Mô tả |
|------|------|---------|-------------|
| ... | ... | ... | ... |

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `description` | `string` | - | Description text to display |
| `image` | `ReactNode` | - | Custom image/icon (React) |
| `imageAlt` | `string` | `'Empty'` | Alt text for image |

## Examples

### Custom Image

::: code-group
```tsx [React]
<Empty
  image={<img src="/empty.svg" alt="No data" className="w-32 h-32" />}
  description="No items found"
/>
```
:::

### With Action Button

::: code-group
```tsx [React]
<Empty description="No projects yet">
  <Button onClick={() => navigate('/create')}>
    Create First Project
  </Button>
</Empty>
```
:::


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
