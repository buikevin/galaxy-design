# Label

Render nhãn có khả năng tiếp cận được liên kết với các form controls.

<ComponentPreview name="LabelDemo">
  <template #preview>
    <DemoContainer>
      <LabelDemo />
    </DemoContainer>
  </template>
  <template #code>

::: code-group

```vue [Vue]
<script setup lang="ts">
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
</script>

<template>
  <div class="space-y-2">
    <Label for="email">Email</Label>
    <Input id="email" type="email" placeholder="Enter your email" />
  </div>
</template>
```

```tsx [React]
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"

export default function App() {
  return (
    <div className="space-y-2">
      <Label htmlFor="email">Email</Label>
      <Input id="email" type="email" placeholder="Enter your email" />
    </div>
  )
}
```

```typescript [Angular]
import { Component } from '@angular/core';
import { LabelComponent } from '@/components/ui/label';
import { InputComponent } from '@/components/ui/input';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LabelComponent, InputComponent],
  template: `
    <div class="space-y-2">
      <ui-label for="email">Email</ui-label>
      <ui-input id="email" type="email" placeholder="Enter your email"></ui-input>
    </div>
  `
})
export class AppComponent {}
```

:::

  </template>
</ComponentPreview>

## Cài Đặt

::: code-group

```bash [npm]
npx galaxy-ui-cli@latest add label
```

```bash [pnpm]
pnpm dlx galaxy-ui-cli@latest add label
```

```bash [yarn]
yarn dlx galaxy-ui-cli@latest add label
```

```bash [bun]
bunx galaxy-ui-cli@latest add label
```

:::

## Sử Dụng

### Vue

```vue
<script setup lang="ts">
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
</script>

<template>
  <div class="space-y-2">
    <Label for="email">Email</Label>
    <Input id="email" type="email" placeholder="Nhập email của bạn" />
  </div>
</template>
```

### React

```tsx
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"

export default function App() {
  return (
    <div className="space-y-2">
      <Label htmlFor="email">Email</Label>
      <Input id="email" type="email" placeholder="Nhập email của bạn" />
    </div>
  )
}
```

### Angular

```typescript
import { Component } from '@angular/core';
import { LabelComponent } from '@/components/ui/label';
import { InputComponent } from '@/components/ui/input';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LabelComponent, InputComponent],
  template: `
    <div class="space-y-2">
      <ui-label for="email">Email</ui-label>
      <ui-input id="email" type="email" placeholder="Nhập email của bạn" />
    </div>
  `
})
export class AppComponent {}
```

## Ví Dụ

### Form Cơ Bản

::: code-group

```vue [Vue]
<template>
  <div class="space-y-4">
    <div class="space-y-2">
      <Label for="username">Tên đăng nhập</Label>
      <Input id="username" placeholder="johndoe" />
    </div>
    <div class="space-y-2">
      <Label for="password">Mật khẩu</Label>
      <Input id="password" type="password" />
    </div>
  </div>
</template>
```

```tsx [React]
<div className="space-y-4">
  <div className="space-y-2">
    <Label htmlFor="username">Tên đăng nhập</Label>
    <Input id="username" placeholder="johndoe" />
  </div>
  <div className="space-y-2">
    <Label htmlFor="password">Mật khẩu</Label>
    <Input id="password" type="password" />
  </div>
</div>
```

```html [Angular]
<div class="space-y-4">
  <div class="space-y-2">
    <ui-label for="username">Tên đăng nhập</ui-label>
    <ui-input id="username" placeholder="johndoe" />
  </div>
  <div class="space-y-2">
    <ui-label for="password">Mật khẩu</ui-label>
    <ui-input id="password" type="password" />
  </div>
</div>
```

:::

### Với Dấu Bắt Buộc

::: code-group

```vue [Vue]
<template>
  <div class="space-y-2">
    <Label for="required-field">
      Họ tên
      <span class="text-destructive">*</span>
    </Label>
    <Input id="required-field" required />
  </div>
</template>
```

```tsx [React]
<div className="space-y-2">
  <Label htmlFor="required-field">
    Họ tên
    <span className="text-destructive">*</span>
  </Label>
  <Input id="required-field" required />
</div>
```

```html [Angular]
<div class="space-y-2">
  <ui-label for="required-field">
    Họ tên
    <span class="text-destructive">*</span>
  </ui-label>
  <ui-input id="required-field" required />
</div>
```

:::

### Với Checkbox

::: code-group

```vue [Vue]
<template>
  <div class="flex items-center space-x-2">
    <Checkbox id="terms" />
    <Label
      for="terms"
      class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
    >
      Chấp nhận điều khoản và điều kiện
    </Label>
  </div>
</template>
```

```tsx [React]
<div className="flex items-center space-x-2">
  <Checkbox id="terms" />
  <Label
    htmlFor="terms"
    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
  >
    Chấp nhận điều khoản và điều kiện
  </Label>
</div>
```

```html [Angular]
<div class="flex items-center space-x-2">
  <ui-checkbox id="terms" />
  <ui-label
    for="terms"
    class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
  >
    Chấp nhận điều khoản và điều kiện
  </ui-label>
</div>
```

:::

## Tham Chiếu API

### Props

| Prop | Kiểu | Mặc định | Mô tả |
|------|------|---------|-------|
| `for` / `htmlFor` | `string` | - | Id của form control để liên kết với |
| `class` / `className` | `string` | - | CSS classes bổ sung |

### Đặc Biệt Theo Framework

#### Vue
- Sử dụng component `Label` của Radix Vue
- Props: `for`, `asChild`

#### React
- Sử dụng component `Label` của Radix UI
- Props: `htmlFor`, `asChild`

#### Angular
- Implementation tùy chỉnh với `HostBinding`
- Props: `for`, `class`

## Khả Năng Tiếp Cận

- Liên kết đúng label với form control sử dụng thuộc tính `for`
- Hỗ trợ click để focus input liên kết
- Hoạt động với screen readers
- Hỗ trợ styling trạng thái disabled (`peer-disabled`)

## Tạo Kiểu

Label component sử dụng các style cơ bản:

```css
text-sm font-medium leading-none
peer-disabled:cursor-not-allowed
peer-disabled:opacity-70
```

Bạn có thể override hoặc mở rộng các styles này bằng cách truyền custom classes.

## Components Liên Quan

- [Input](/vi/components/input) - Trường nhập văn bản
- [Checkbox](/vi/components/checkbox) - Checkbox input
- [Radio Group](/vi/components/radio-group) - Nhóm radio button
- [Select](/vi/components/select) - Select dropdown

## Tác Giả

**Bùi Trọng Hiếu (kevinbui)**
- GitHub: [@buikevin](https://github.com/buikevin)
- Email: kevinbui210191@gmail.com

## Giấy Phép

MIT © 2025 Bùi Trọng Hiếu (kevinbui)


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
