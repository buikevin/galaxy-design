# Checkbox

Điều khiển cho phép người dùng chuyển đổi giữa trạng thái checked và unchecked.

<ComponentPreview name="CheckboxDemo">
  <template #preview>
    <DemoContainer>
      <CheckboxDemo />
    </DemoContainer>
  </template>
  <template #code>

::: code-group

```vue [Vue]
<script setup lang="ts">
import { Checkbox } from '@/components/ui/checkbox'
</script>

<template>
  <div class="flex items-center space-x-2">
    <Checkbox id="terms" />
    <label for="terms">Accept terms and conditions</label>
  </div>
</template>
```

```tsx [React]
import { Checkbox } from "@/components/ui/checkbox"

export default function App() {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox id="terms" />
      <label htmlFor="terms">Accept terms and conditions</label>
    </div>
  )
}
```

```typescript [Angular]
import { Component } from '@angular/core';
import { CheckboxComponent } from '@/components/ui/checkbox';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CheckboxComponent],
  template: `
    <div class="flex items-center space-x-2">
      <ui-checkbox id="terms"></ui-checkbox>
      <label for="terms">Accept terms and conditions</label>
    </div>
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
npx galaxy-design@latest add checkbox
```

```bash [pnpm]
pnpm dlx galaxy-design@latest add checkbox
```

```bash [yarn]
yarn dlx galaxy-design@latest add checkbox
```

```bash [bun]
bunx galaxy-design@latest add checkbox
```

:::

## Sử dụng

### Vue

```vue
<script setup lang="ts">
import { Checkbox } from '@/components/ui'
import { ref } from 'vue'

const checked = ref(false)
</script>

<template>
  <div class="flex items-center space-x-2">
    <Checkbox id="terms" v-model="checked" />
    <label for="terms">Chấp nhận điều khoản và điều kiện</label>
  </div>
</template>
```

### React

```tsx
import { Checkbox } from '@/components/ui'

export default function CheckboxDemo() {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox id="terms" />
      <label htmlFor="terms">Chấp nhận điều khoản và điều kiện</label>
    </div>
  )
}
```

### Angular

```typescript
import { Component } from '@angular/core';
import { CheckboxComponent } from '@/components/ui';

@Component({
  selector: 'app-checkbox-demo',
  standalone: true,
  imports: [CheckboxComponent],
  template: `
    <div class="flex items-center space-x-2">
      <ui-checkbox [(ngModel)]="checked" id="terms" />
      <label for="terms">Chấp nhận điều khoản và điều kiện</label>
    </div>
  `
})
export class CheckboxDemoComponent {
  checked = false;
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
