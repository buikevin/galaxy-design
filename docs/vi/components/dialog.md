# Dialog

Cửa sổ được đặt chồng lên cửa sổ chính hoặc cửa sổ dialog khác.

<ComponentPreview name="DialogDemo">
  <template #preview>
    <DemoContainer>
      <DialogDemo />
    </DemoContainer>
  </template>
  <template #code>

::: code-group

```vue [Vue]
<script setup lang="ts">
import { Dialog } from '@/components/ui/dialog'
</script>

<template>
  <Dialog>Example content</Dialog>
</template>
```

```tsx [React]
import { Dialog } from "@/components/ui/dialog"

export default function App() {
  return <Dialog>Example content</Dialog>
}
```

```typescript [Angular]
import { Component } from '@angular/core';
import { DialogComponent } from '@/components/ui/dialog';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [DialogComponent],
  template: `<ui-dialog>Example content</ui-dialog>`
})
export class AppComponent {}
```

:::

  </template>
</ComponentPreview>

## Cài đặt

::: code-group

```bash [npm]
npx galaxy-design@latest add dialog
```

```bash [pnpm]
pnpm dlx galaxy-design@latest add dialog
```

```bash [yarn]
yarn dlx galaxy-design@latest add dialog
```

```bash [bun]
bunx galaxy-design@latest add dialog
```

```bash [global]
# Nếu bạn đã cài galaxy-design global
galaxy-ui add dialog
```

:::


::: tip Dependencies
Component này tự động cài đặt các dependencies sau:
- **React**: `@radix-ui/react-dialog`
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
| `open` | `boolean` | `false` | Dialog có đang mở hay không | Tất cả |
| `modal` | `boolean` | `true` | Dialog có phải là modal hay không | Tất cả |


## Subcomponents

### DialogTrigger

Nút để mở dialog

### DialogContent

Container chứa nội dung dialog

### DialogHeader

Phần header của dialog

### DialogTitle

Tiêu đề của dialog

### DialogDescription

Văn bản mô tả

### DialogFooter

Phần footer cho các hành động



## Khả năng truy cập

- **Điều hướng bàn phím**: Escape để đóng, Tab để điều hướng bên trong
- **Đọc màn hình**: Sử dụng role dialog với nhãn phù hợp
- **Quản lý focus**: Focus bị giữ trong dialog khi mở
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
