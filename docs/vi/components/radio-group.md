# Radio Group

Nhóm nút radio chỉ cho phép chọn một tùy chọn.

<ComponentPreview name="RadioGroupDemo">
  <template #preview>
    <DemoContainer>
      <RadioGroupDemo />
    </DemoContainer>
  </template>
  <template #code>

::: code-group

```vue [Vue]
<script setup lang="ts">
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Label } from '@/components/ui/label'
</script>

<template>
  <RadioGroup default-value="option-one">
    <div class="flex items-center space-x-2">
      <RadioGroupItem id="option-one" value="option-one" />
      <Label for="option-one">Option One</Label>
    </div>
    <div class="flex items-center space-x-2">
      <RadioGroupItem id="option-two" value="option-two" />
      <Label for="option-two">Option Two</Label>
    </div>
  </RadioGroup>
</template>
```

```tsx [React]
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

export default function App() {
  return (
    <RadioGroup defaultValue="option-one">
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-one" id="option-one" />
        <Label htmlFor="option-one">Option One</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-two" id="option-two" />
        <Label htmlFor="option-two">Option Two</Label>
      </div>
    </RadioGroup>
  )
}
```

```typescript [Angular]
import { Component } from '@angular/core';
import { RadioGroupComponent } from '@/components/ui/radio-group';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RadioGroupComponent],
  template: `
    <ui-radio-group [(value)]="selectedValue">
      <div class="flex items-center space-x-2">
        <ui-radio-group-item value="option-one"></ui-radio-group-item>
        <ui-label>Option One</ui-label>
      </div>
      <div class="flex items-center space-x-2">
        <ui-radio-group-item value="option-two"></ui-radio-group-item>
        <ui-label>Option Two</ui-label>
      </div>
    </ui-radio-group>
  `
})
export class AppComponent {
  selectedValue = 'option-one';
}
```

:::

  </template>
</ComponentPreview>

## Cài đặt

::: code-group

```bash [npm]
npx galaxy-design@latest add radio-group
```

```bash [pnpm]
pnpm dlx galaxy-design@latest add radio-group
```

```bash [yarn]
yarn dlx galaxy-design@latest add radio-group
```

```bash [bun]
bunx galaxy-design@latest add radio-group
```

:::

## Sử Dụng

```vue
<RadioGroup default-value="option-one">
  <div class="flex items-center space-x-2">
    <RadioGroupItem value="option-one" />
    <Label>Tùy chọn 1</Label>
  </div>
</RadioGroup>
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
