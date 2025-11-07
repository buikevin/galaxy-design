# Tổng quan Components

Galaxy UI cung cấp **197 components production-ready** trên **5 nền tảng**: Vue, React, Angular, React Native và Flutter.

## Phạm Vi Nền Tảng

| Nền Tảng | Components | Styling | Trạng Thái |
|----------|-----------|---------|--------|
| **Vue 3** | 41 | Tailwind CSS + Radix Vue | ✅ Hoàn Thành |
| **React 18+** | 41 | Tailwind CSS + Radix UI | ✅ Hoàn Thành |
| **Angular 20+** | 41 | Tailwind CSS + Radix NG | ✅ Hoàn Thành |
| **React Native** | 37 | NativeWind v4 | ✅ Hoàn Thành |
| **Flutter** | 37 | Material Design 3 | ✅ Hoàn Thành |

**Tổng cộng: 197 components** với **phạm vi thực tế 100%** cho các component phù hợp với mobile.

## Cài đặt

Cài đặt từng component riêng lẻ bằng CLI:

::: code-group

```bash [npm]
npx galaxy-design@latest add button
```

```bash [pnpm]
pnpm dlx galaxy-design@latest add button
```

```bash [yarn]
yarn dlx galaxy-design@latest add button
```

```bash [bun]
bunx galaxy-design@latest add button
```

```bash [global]
galaxy-design add button
```

:::

Hoặc cài đặt nhiều components cùng lúc:

::: code-group

```bash [npm]
npx galaxy-design@latest add button input dialog
```

```bash [pnpm]
pnpm dlx galaxy-design@latest add button input dialog
```

```bash [yarn]
yarn dlx galaxy-design@latest add button input dialog
```

```bash [bun]
bunx galaxy-design@latest add button input dialog
```

```bash [global]
galaxy-design add button input dialog
```

:::

## Phân loại Components

### Form Components

Các controls cơ bản cho form nhập liệu:

- **[Button](./button)** - Nút bấm với nhiều biến thể
- **[Input](./input)** - Trường nhập văn bản
- **[Checkbox](./checkbox)** - Hộp kiểm cho lựa chọn nhị phân
- **[Radio Group](./radio-group)** - Nhóm radio button cho lựa chọn duy nhất
- **[Select](./select)** - Menu lựa chọn dropdown
- **[Slider](./slider)** - Thanh trượt range
- **[Switch](./switch)** - Công tắc bật/tắt
- **[Textarea](./textarea)** - Nhập văn bản nhiều dòng
- **[Label](./label)** - Nhãn cho trường form
- **[Calendar](./calendar)** - Lịch chọn ngày
- **[Calendar Range](./calendar-range)** - Chọn khoảng thời gian
- **[Tags Input](./tags-input)** - Nhập nhiều giá trị tag

### Layout Components

Components để tổ chức nội dung:

- **[Separator](./separator)** - Đường phân cách
- **[Accordion](./accordion)** - Các phần nội dung mở rộng được
- **[Collapsible](./collapsible)** - Vùng nội dung có thể thu gọn
- **[Tabs](./tabs)** - Giao diện tab
- **[Aspect Ratio](./aspect-ratio)** - Duy trì tỷ lệ khung hình cho nội dung media
- **[Resizable](./resizable)** - Nhóm panel có thể thay đổi kích thước với hỗ trợ bàn phím
- **[Sheet](./sheet)** - Panel trượt từ cạnh màn hình
- **[Toolbar](./toolbar)** - Container nhóm các controls

### Navigation Components

Components cho điều hướng và menu:

- **[Navigation Menu](./navigation-menu)** - Menu điều hướng với submenu
- **[Menubar](./menubar)** - Thanh menu với dropdown
- **[Context Menu](./context-menu)** - Menu ngữ cảnh (chuột phải)
- **[Dropdown Menu](./dropdown-menu)** - Menu dropdown
- **[Pagination](./pagination)** - Phân trang với số trang
- **[Command](./command)** - Command palette cho điều hướng bằng bàn phím

### Interactive Components

Các thành phần tương tác:

- **[Toggle](./toggle)** - Nút bấm hai trạng thái
- **[Toggle Group](./toggle-group)** - Nhóm nút toggle cho lựa chọn đơn hoặc nhiều

### Overlay Components

Hộp thoại modal và popup:

- **[Dialog](./dialog)** - Hộp thoại modal
- **[Alert Dialog](./alert-dialog)** - Hộp thoại xác nhận
- **[Popover](./popover)** - Nội dung popover nổi
- **[Tooltip](./tooltip)** - Tooltip khi hover
- **[Hover Card](./hover-card)** - Card hover phong phú

### Data Display Components

Components để hiển thị dữ liệu và phản hồi:

- **[Avatar](./avatar)** - Avatar người dùng với fallback
- **[Progress](./progress)** - Thanh tiến trình
- **[Table](./table)** - Bảng dữ liệu responsive
- **[Kbd](./kbd)** - Hiển thị phím bàn phím
- **[Typography](./typography)** - Components định dạng văn bản
- **[Empty](./empty)** - Placeholder trạng thái rỗng
- **[Skeleton](./skeleton)** - Placeholder khi đang tải

## Hỗ trợ Nền Tảng

### Web Frameworks

Tất cả web components đều khả dụng cho:

- **Vue 3** - Composition API với `<script setup>`
- **React 18+** - Hooks với `forwardRef`
- **Angular 20+** - Standalone components với Signals

### Mobile Platforms

Mobile components (37 trên mỗi nền tảng) khả dụng cho:

- **React Native** - Functional components với NativeWind v4 styling
- **Flutter** - StatelessWidget với Material Design 3

> **Lưu ý**: Không phải tất cả web components đều phù hợp với mobile (ví dụ: Hover Card, Context Menu). Các nền tảng mobile bao gồm 37 components thực tế phù hợp.

## Tính năng

- **Accessible** - Xây dựng trên Radix primitives (tuân thủ WAI-ARIA)
- **Tùy biến** - Kiểm soát hoàn toàn với Tailwind CSS
- **Type-safe** - Hỗ trợ TypeScript cho tất cả frameworks
- **Dark mode** - Hỗ trợ dark mode tích hợp
- **Copy & Paste** - Không cần npm dependencies, copy components trực tiếp vào project
- **API nhất quán** - API tương tự trên tất cả frameworks

## Ví dụ sử dụng

Mỗi component hoạt động tương tự trên các framework:

::: code-group

```vue [Vue]
<script setup lang="ts">
import { Button } from '@/components/ui/button'
</script>

<template>
  <Button variant="default">Click me</Button>
</template>
```

```tsx [React]
import { Button } from "@/components/ui/button"

export default function App() {
  return <Button variant="default">Click me</Button>
}
```

```typescript [Angular]
import { Component } from '@angular/core';
import { ButtonComponent } from '@/components/ui/button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ButtonComponent],
  template: `<ui-button variant="default">Click me</ui-button>`
})
export class AppComponent {}
```

:::

## Bước tiếp theo

- Duyệt qua [components](#phân-loại-components) để tìm component bạn cần
- Xem hướng dẫn [Sử dụng CLI](/vi/guide/cli-usage) để tìm hiểu thêm về CLI
- Đọc hướng dẫn [Theming](/vi/guide/theming) để tùy chỉnh giao diện


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
