# Switch

Công tắc bật/tắt.

<ComponentPreview name="SwitchDemo">
  <template #preview>
    <DemoContainer>
      <SwitchDemo />
    </DemoContainer>
  </template>
  <template #code>

::: code-group

```vue [Vue]
<script setup lang="ts">
import { Switch } from '@/components/ui/switch'
</script>

<template>
  <Switch />
</template>
```

```tsx [React]
import { Switch } from "@/components/ui/switch"

export default function App() {
  return <Switch />
}
```

```typescript [Angular]
import { Component } from '@angular/core';
import { SwitchComponent } from '@/components/ui/switch';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SwitchComponent],
  template: `<ui-switch></ui-switch>`
})
export class AppComponent {}
```

:::

  </template>
</ComponentPreview>

## Cài đặt

::: code-group

```bash [npm]
npx galaxy-design@latest add switch
```

```bash [pnpm]
pnpm dlx galaxy-design@latest add switch
```

```bash [yarn]
yarn dlx galaxy-design@latest add switch
```

```bash [bun]
bunx galaxy-design@latest add switch
```

:::

## Sử dụng

```vue
<Switch v-model:checked="enabled" />
```

```tsx
<Switch checked={enabled} onCheckedChange={setEnabled} />
```

```html
<ui-switch [(checked)]="enabled" />
```

**Bùi Trọng Hiếu** - MIT © 2025


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
