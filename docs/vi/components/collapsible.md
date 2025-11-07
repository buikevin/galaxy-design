# Collapsible

Một component tương tác mở rộng/thu gọn một panel.

<ComponentPreview name="CollapsibleDemo">
  <template #preview>
    <DemoContainer>
      <CollapsibleDemo />
    </DemoContainer>
  </template>
  <template #code>

::: code-group

```vue [Vue]
<script setup lang="ts">
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from '@/components/ui/collapsible'
</script>

<template>
  <Collapsible>
    <CollapsibleTrigger>Can I use this in my project?</CollapsibleTrigger>
    <CollapsibleContent>
      Yes. Free to use for personal and commercial projects.
    </CollapsibleContent>
  </Collapsible>
</template>
```

```tsx [React]
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@/components/ui/collapsible"

export default function App() {
  return (
    <Collapsible>
      <CollapsibleTrigger>Can I use this in my project?</CollapsibleTrigger>
      <CollapsibleContent>
        Yes. Free to use for personal and commercial projects.
      </CollapsibleContent>
    </Collapsible>
  )
}
```

```typescript [Angular]
import { Component } from '@angular/core';
import { CollapsibleComponent } from '@/components/ui/collapsible';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CollapsibleComponent],
  template: `
    <ui-collapsible>
      <ui-collapsible-trigger>Can I use this in my project?</ui-collapsible-trigger>
      <ui-collapsible-content>
        Yes. Free to use for personal and commercial projects.
      </ui-collapsible-content>
    </ui-collapsible>
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
npx galaxy-ui-cli@latest add collapsible
```

```bash [pnpm]
pnpm dlx galaxy-ui-cli@latest add collapsible
```

```bash [yarn]
yarn dlx galaxy-ui-cli@latest add collapsible
```

```bash [bun]
bunx galaxy-ui-cli@latest add collapsible
```

:::

## Sử dụng

### Vue

```vue
<script setup lang="ts">
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from '@/components/ui'
import { ref } from 'vue'

const isOpen = ref(false)
</script>

<template>
  <Collapsible v-model:open="isOpen">
    <CollapsibleTrigger>Tôi có thể sử dụng trong dự án của mình không?</CollapsibleTrigger>
    <CollapsibleContent>
      Có. Miễn phí sử dụng cho các dự án cá nhân và thương mại.
    </CollapsibleContent>
  </Collapsible>
</template>
```

### React

```tsx
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from '@/components/ui'

export default function CollapsibleDemo() {
  return (
    <Collapsible>
      <CollapsibleTrigger>Tôi có thể sử dụng trong dự án của mình không?</CollapsibleTrigger>
      <CollapsibleContent>
        Có. Miễn phí sử dụng cho các dự án cá nhân và thương mại.
      </CollapsibleContent>
    </Collapsible>
  )
}
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
