# Separator

Đường phân cách.

<ComponentPreview name="SeparatorDemo">
  <template #preview>
    <DemoContainer>
      <SeparatorDemo />
    </DemoContainer>
  </template>
  <template #code>

::: code-group

```vue [Vue]
<script setup lang="ts">
import { Separator } from '@/components/ui/separator'
</script>

<template>
  <Separator />
</template>
```

```tsx [React]
import { Separator } from "@/components/ui/separator"

export default function App() {
  return <Separator />
}
```

```typescript [Angular]
import { Component } from '@angular/core';
import { SeparatorComponent } from '@/components/ui/separator';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SeparatorComponent],
  template: `<ui-separator></ui-separator>`
})
export class AppComponent {}
```

:::

  </template>
</ComponentPreview>

## Cài đặt

::: code-group

```bash [npm]
npx galaxy-ui-cli@latest add separator
```

```bash [pnpm]
pnpm dlx galaxy-ui-cli@latest add separator
```

```bash [yarn]
yarn dlx galaxy-ui-cli@latest add separator
```

```bash [bun]
bunx galaxy-ui-cli@latest add separator
```

:::

```vue
<Separator />
<Separator orientation="vertical" />
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
