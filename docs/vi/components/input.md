# Input

Trường nhập liệu văn bản với nhãn và trạng thái xác thực.

<ComponentPreview name="InputDemo">
  <template #preview>
    <DemoContainer>
      <InputDemo />
    </DemoContainer>
  </template>
  <template #code>

::: code-group

```vue [Vue]
<script setup lang="ts">
import { Input } from '@/components/ui/input'
</script>

<template>
  <Input>Example content</Input>
</template>
```

```tsx [React]
import { Input } from "@/components/ui/input"

export default function App() {
  return <Input>Example content</Input>
}
```

```typescript [Angular]
import { Component } from '@angular/core';
import { InputComponent } from '@/components/ui/input';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [InputComponent],
  template: `<ui-input>Example content</ui-input>`
})
export class AppComponent {}
```

:::

  </template>
</ComponentPreview>

## Cài đặt

::: code-group

```bash [npm]
npx galaxy-design@latest add input
```

```bash [pnpm]
pnpm dlx galaxy-design@latest add input
```

```bash [yarn]
yarn dlx galaxy-design@latest add input
```

```bash [bun]
bunx galaxy-design@latest add input
```

```bash [global]
# Nếu bạn đã cài galaxy-design global
galaxy-ui add input
```

:::


::: tip Dependencies
Component này tự động cài đặt các dependencies sau:

Không cần cài đặt thủ công!
:::

## Sử dụng

### Ví dụ cơ bản

Ví dụ sử dụng cơ bản sẽ được thêm vào đây.

## API Reference

### Props

| Prop | Kiểu | Mặc định | Mô tả | Hỗ trợ Framework |
|------|------|---------|-------------|-------------------|
| `type` | `'text' | 'password' | 'email' | 'number' | ...` | `'text'` | Loại input | Tất cả |
| `placeholder` | `string` | `""` | Văn bản placeholder | Tất cả |
| `disabled` | `boolean` | `false` | Input có bị vô hiệu hóa hay không | Tất cả |


## Khả năng truy cập

- **Điều hướng bàn phím**: Điều hướng bàn phím chuẩn cho input
- **Đọc màn hình**: Sử dụng thẻ `<input>` ngữ nghĩa với nhãn
- **Quản lý focus**: Focus được hiển thị với viền ring
- **Tuân thủ WCAG**: Tuân thủ WCAG 2.1 cấp độ AA



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
## Tác giả

**Bùi Trọng Hiếu (kevinbui)**
- GitHub: [@buikevin](https://github.com/buikevin)
- Email: kevinbui210191@gmail.com

## Giấy phép

MIT © 2025 Bùi Trọng Hiếu (kevinbui)
