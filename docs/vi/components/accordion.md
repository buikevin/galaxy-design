# Accordion

Tập hợp các tiêu đề tương tác xếp chồng theo chiều dọc, mỗi tiêu đề hiển thị một phần nội dung.

<ComponentPreview name="AccordionDemo">
  <template #preview>
    <DemoContainer>
      <AccordionDemo />
    </DemoContainer>
  </template>
  <template #code>

::: code-group

```vue [Vue]
<script setup lang="ts">
import { Accordion } from '@/components/ui/accordion'
</script>

<template>
  <Accordion>Example content</Accordion>
</template>
```

```tsx [React]
import { Accordion } from "@/components/ui/accordion"

export default function App() {
  return <Accordion>Example content</Accordion>
}
```

```typescript [Angular]
import { Component } from '@angular/core';
import { AccordionComponent } from '@/components/ui/accordion';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AccordionComponent],
  template: `<ui-accordion>Example content</ui-accordion>`
})
export class AppComponent {}
```

:::

  </template>
</ComponentPreview>

## Cài đặt

::: code-group

```bash [npm]
npx galaxy-design@latest add accordion
```

```bash [pnpm]
pnpm dlx galaxy-design@latest add accordion
```

```bash [yarn]
yarn dlx galaxy-design@latest add accordion
```

```bash [bun]
bunx galaxy-design@latest add accordion
```

```bash [global]
# Nếu bạn đã cài galaxy-design global
galaxy-ui add accordion
```

:::


::: tip Dependencies
Component này tự động cài đặt các dependencies sau:
- **React**: `@radix-ui/react-accordion`
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
| `type` | `'single' | 'multiple'` | `'single'` | Cho phép mở nhiều mục cùng lúc hay không | Tất cả |
| `collapsible` | `boolean` | `false` | Cho phép đóng tất cả các mục (chỉ ở chế độ single) | Tất cả |
| `defaultValue` | `string | string[]` | `undefined` | Mục mở mặc định | Tất cả |


## Subcomponents

### AccordionItem

Container cho mỗi mục accordion

### AccordionTrigger

Nút bấm để đóng/mở mục accordion

### AccordionContent

Vùng nội dung có thể thu gọn



## Khả năng truy cập

- **Điều hướng bàn phím**: Space/Enter để đóng/mở, Tab để điều hướng
- **Đọc màn hình**: Sử dụng mẫu ARIA accordion chuẩn
- **Quản lý focus**: Quản lý focus giữa các trigger
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
