# Toggle

Nút bấm hai trạng thái có thể bật hoặc tắt.

<ComponentPreview name="ToggleDemo">
  <template #preview>
    <DemoContainer>
      <ToggleDemo />
    </DemoContainer>
  </template>
  <template #code>

::: code-group

```vue [Vue]
<script setup lang="ts">
import { Bold } from 'lucide-vue-next'
import { Toggle } from '@/components/ui/toggle'
</script>

<template>
  <Toggle aria-label="Toggle bold">
    <Bold class="h-4 w-4" />
  </Toggle>
</template>
```

```tsx [React]
import { Bold } from "lucide-react"
import { Toggle } from "@/components/ui/toggle"

export default function App() {
  return (
    <Toggle aria-label="Toggle bold">
      <Bold className="h-4 w-4" />
    </Toggle>
  )
}
```

```typescript [Angular]
import { Component } from '@angular/core';
import { ToggleComponent } from '@/components/ui/toggle';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ToggleComponent],
  template: `
    <ui-toggle aria-label="Toggle bold">
      <i class="icon-bold"></i>
    </ui-toggle>
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
npx galaxy-ui-cli@latest add toggle
```

```bash [pnpm]
pnpm dlx galaxy-ui-cli@latest add toggle
```

```bash [yarn]
yarn dlx galaxy-ui-cli@latest add toggle
```

```bash [bun]
bunx galaxy-ui-cli@latest add toggle
```

:::

## Sử dụng

::: code-group

```vue [Vue]
<script setup lang="ts">
import { Toggle } from '@/components/ui/toggle'
</script>

<template>
  <Toggle>Toggle</Toggle>
</template>
```

```tsx [React]
import { Toggle } from "@/components/ui/toggle"

export default function App() {
  return <Toggle>Toggle</Toggle>
}
```

```typescript [Angular]
import { Component } from '@angular/core';
import { ToggleComponent } from '@/components/ui/toggle';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ToggleComponent],
  template: `<ui-toggle>Toggle</ui-toggle>`
})
export class AppComponent {}
```

:::

## API Reference

### Toggle

| Prop | Type | Default | Mô tả |
| --- | --- | --- | --- |
| `variant` | `'default' \| 'outline'` | `'default'` | Kiểu hiển thị của toggle |
| `size` | `'default' \| 'sm' \| 'lg'` | `'default'` | Kích thước của toggle |
| `disabled` | `boolean` | `false` | Vô hiệu hóa toggle |
| `pressed` | `boolean` | - | Trạng thái được nhấn của toggle |
| `class` | `string` | - | Class CSS tùy chỉnh |

## Ví dụ

### Mặc định

::: code-group

```vue [Vue]
<Toggle>Toggle</Toggle>
```

```tsx [React]
<Toggle>Toggle</Toggle>
```

```typescript [Angular]
<ui-toggle>Toggle</ui-toggle>
```

:::

### Outline

::: code-group

```vue [Vue]
<Toggle variant="outline">Toggle</Toggle>
```

```tsx [React]
<Toggle variant="outline">Toggle</Toggle>
```

```typescript [Angular]
<ui-toggle variant="outline">Toggle</ui-toggle>
```

:::

### Với text

::: code-group

```vue [Vue]
<script setup lang="ts">
import { Italic } from 'lucide-vue-next'
import { Toggle } from '@/components/ui/toggle'
</script>

<template>
  <Toggle aria-label="Toggle italic">
    <Italic class="mr-2 h-4 w-4" />
    Italic
  </Toggle>
</template>
```

```tsx [React]
import { Italic } from "lucide-react"
import { Toggle } from "@/components/ui/toggle"

export default function App() {
  return (
    <Toggle aria-label="Toggle italic">
      <Italic className="mr-2 h-4 w-4" />
      Italic
    </Toggle>
  )
}
```

```typescript [Angular]
<ui-toggle aria-label="Toggle italic">
  <i class="icon-italic mr-2"></i>
  Italic
</ui-toggle>
```

:::

### Kích thước

::: code-group

```vue [Vue]
<div class="flex gap-2">
  <Toggle size="sm">Small</Toggle>
  <Toggle size="default">Default</Toggle>
  <Toggle size="lg">Large</Toggle>
</div>
```

```tsx [React]
<div className="flex gap-2">
  <Toggle size="sm">Small</Toggle>
  <Toggle size="default">Default</Toggle>
  <Toggle size="lg">Large</Toggle>
</div>
```

```typescript [Angular]
<div class="flex gap-2">
  <ui-toggle size="sm">Small</ui-toggle>
  <ui-toggle size="default">Default</ui-toggle>
  <ui-toggle size="lg">Large</ui-toggle>
</div>
```

:::

### Vô hiệu hóa

::: code-group

```vue [Vue]
<Toggle disabled>Disabled</Toggle>
```

```tsx [React]
<Toggle disabled>Disabled</Toggle>
```

```typescript [Angular]
<ui-toggle [disabled]="true">Disabled</ui-toggle>
```

:::

## Tương tác bàn phím

| Phím | Mô tả |
| --- | --- |
| `Space` | Bật/tắt trạng thái |
| `Enter` | Bật/tắt trạng thái |

## Khả năng tiếp cận

Tuân thủ [WAI-ARIA Toggle Button Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/button/).

- Sử dụng thuộc tính `aria-pressed` để chỉ ra trạng thái toggle
- Hỗ trợ điều hướng bằng bàn phím
- Có thể focus được


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
