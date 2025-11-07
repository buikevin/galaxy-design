# Select

Hiển thị danh sách các tùy chọn để người dùng chọn—được kích hoạt bởi một nút.

<ComponentPreview name="SelectDemo">
  <template #preview>
    <DemoContainer>
      <SelectDemo />
    </DemoContainer>
  </template>
  <template #code>

::: code-group

```vue [Vue]
<script setup lang="ts">
import { Select } from '@/components/ui/select'
</script>

<template>
  <Select>Example content</Select>
</template>
```

```tsx [React]
import { Select } from "@/components/ui/select"

export default function App() {
  return <Select>Example content</Select>
}
```

```typescript [Angular]
import { Component } from '@angular/core';
import { SelectComponent } from '@/components/ui/select';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SelectComponent],
  template: `<ui-select>Example content</ui-select>`
})
export class AppComponent {}
```

:::

  </template>
</ComponentPreview>

## Cài đặt

::: code-group

```bash [npm]
npx galaxy-design@latest add select
```

```bash [pnpm]
pnpm dlx galaxy-design@latest add select
```

```bash [yarn]
yarn dlx galaxy-design@latest add select
```

```bash [bun]
bunx galaxy-design@latest add select
```

```bash [global]
# Nếu bạn đã cài galaxy-design global
galaxy-ui add select
```

:::


::: tip Dependencies
Component này tự động cài đặt các dependencies sau:
- **React**: `@radix-ui/react-select`
- **Vue**: `radix-vue`
- **Angular**: `@radix-ng/primitives`

Không cần cài đặt thủ công!
:::

## Sử dụng

### Ví dụ cơ bản

Ví dụ sử dụng cơ bản sẽ được thêm vào đây.

## API Reference

### Props

| Prop | Kiểu | Mặc định | Mô tả | Hỗ trợ Framework |
|------|------|---------|-------------|-------------------|
| `value` | `string` | `undefined` | Giá trị đã chọn | Tất cả |
| `defaultValue` | `string` | `undefined` | Giá trị mặc định được chọn | Tất cả |
| `disabled` | `boolean` | `false` | Select có bị vô hiệu hóa hay không | Tất cả |


## Subcomponents

### SelectTrigger

Nút mở dropdown select

### SelectContent

Container cho các tùy chọn select

### SelectItem

Tùy chọn có thể chọn riêng lẻ

### SelectValue

Hiển thị giá trị đã chọn



## Khả năng truy cập

- **Điều hướng bàn phím**: Phím mũi tên để điều hướng, Enter để chọn, Escape để đóng
- **Đọc màn hình**: Sử dụng mẫu ARIA select chuẩn
- **Quản lý focus**: Quản lý focus giữa trigger và các tùy chọn
- **Tuân thủ WCAG**: Tuân thủ mẫu thiết kế WAI-ARIA



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
