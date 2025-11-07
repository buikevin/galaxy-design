# Toolbar

A container for grouping a set of controls, such as buttons, toggle groups, or dropdown menus.


<ComponentPreview name="ToolbarDemo">
  <template #preview>
    <DemoContainer>
      <ToolbarDemo />
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
## Cài đặt

::: code-group
```bash [React]
npx galaxy-ui-cli add toolbar
```

```bash [Vue]
npx galaxy-ui-cli add toolbar
```

```bash [Angular]
npx galaxy-ui-cli add toolbar
```
:::

## Usage

::: code-group
```tsx [React]
import {
  Toolbar,
  ToolbarButton,
  ToolbarSeparator,
  ToolbarLink,
  ToolbarToggleGroup,
  ToolbarToggleItem,
} from '@/components/toolbar'

export default function ToolbarDemo() {
  return (
    <Toolbar>
      <ToolbarButton>Undo</ToolbarButton>
      <ToolbarButton>Redo</ToolbarButton>
      <ToolbarSeparator />
      <ToolbarToggleGroup type="single">
        <ToolbarToggleItem value="bold">Bold</ToolbarToggleItem>
        <ToolbarToggleItem value="italic">Italic</ToolbarToggleItem>
      </ToolbarToggleGroup>
    </Toolbar>
  )
}
```
:::


## API Reference

### Props

Component này chấp nhận các props sau:

| Prop | Kiểu | Mặc định | Mô tả |
|------|------|---------|-------------|
| ... | ... | ... | ... |

## Components

- `Toolbar` - Main toolbar container
- `ToolbarButton` - Clickable button
- `ToolbarSeparator` - Visual separator
- `ToolbarLink` - Link button
- `ToolbarToggleGroup` - Group of toggle items
- `ToolbarToggleItem` - Individual toggle button


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
