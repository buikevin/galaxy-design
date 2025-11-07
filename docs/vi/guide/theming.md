# Tùy Chỉnh Giao Diện

Tùy chỉnh giao diện của các component Galaxy UI để phù hợp với thương hiệu của bạn.

## Tổng Quan

Galaxy UI sử dụng **CSS variables** để tùy chỉnh giao diện, giúp bạn dễ dàng thay đổi màu sắc và các design token khác cho tất cả các component.

## Giao Diện Mặc Định

Giao diện mặc định bao gồm hỗ trợ chế độ sáng và tối:

```css
@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 222.2 84% 4.9%;
    --card: 0 0% 100%;
    --card-foreground: 222.2 84% 4.9%;
    --primary: 222.2 47.4% 11.2%;
    --primary-foreground: 210 40% 98%;
    --secondary: 210 40% 96.1%;
    --secondary-foreground: 222.2 47.4% 11.2%;
    --muted: 210 40% 96.1%;
    --muted-foreground: 215.4 16.3% 46.9%;
    --accent: 210 40% 96.1%;
    --accent-foreground: 222.2 47.4% 11.2%;
    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 210 40% 98%;
    --border: 214.3 31.8% 91.4%;
    --input: 214.3 31.8% 91.4%;
    --ring: 222.2 84% 4.9%;
    --radius: 0.5rem;
  }

  .dark {
    --background: 222.2 84% 4.9%;
    --foreground: 210 40% 98%;
    /* ... các biến dark mode khác */
  }
}
```

## Biến Màu Sắc

### Hiểu Về Giá Trị HSL

Màu sắc được định nghĩa bằng giá trị HSL (Hue, Saturation, Lightness) **không có** hàm `hsl()`:

```css
/* ❌ Sai */
--primary: hsl(222.2 47.4% 11.2%);

/* ✅ Đúng */
--primary: 222.2 47.4% 11.2%;
```

Hàm `hsl()` được thêm vào trong cấu hình Tailwind:

```js
colors: {
  primary: "hsl(var(--primary))",
}
```

### Màu Sắc Cốt Lõi

| Biến | Mục Đích | Ví Dụ Sử Dụng |
|----------|---------|---------------|
| `--background` | Nền trang | `bg-background` |
| `--foreground` | Màu chữ | `text-foreground` |
| `--card` | Nền card | `bg-card` |
| `--card-foreground` | Chữ trên card | `text-card-foreground` |
| `--primary` | Hành động chính | Nút, liên kết |
| `--primary-foreground` | Chữ chính | Chữ trên nền chính |
| `--secondary` | Hành động phụ | Nút phụ |
| `--secondary-foreground` | Chữ phụ | Chữ trên nền phụ |
| `--muted` | Nền mờ | Nền nhạt |
| `--muted-foreground` | Chữ mờ | Chữ placeholder |
| `--accent` | Nền nhấn mạnh | Trạng thái hover |
| `--accent-foreground` | Chữ nhấn mạnh | Chữ trên nền nhấn mạnh |
| `--destructive` | Hành động phá hủy | Nút xóa |
| `--destructive-foreground` | Chữ phá hủy | Chữ trên nền phá hủy |
| `--border` | Màu viền | Viền component |
| `--input` | Viền input | Ô nhập liệu |
| `--ring` | Viền focus | Trạng thái focus |

### Bo Góc

```css
--radius: 0.5rem; /* Bo góc mặc định */
```

Sử dụng trong cấu hình Tailwind:

```js
borderRadius: {
  lg: "var(--radius)",
  md: "calc(var(--radius) - 2px)",
  sm: "calc(var(--radius) - 4px)",
}
```

## Tạo Giao Diện Tùy Chỉnh

### Phương Pháp 1: CSS Variables

Tạo giao diện tùy chỉnh bằng cách ghi đè CSS variables:

::: code-group

```css [src/index.css]
@layer base {
  /* Giao diện tùy chỉnh */
  :root {
    --primary: 270 70% 55%; /* Tím */
    --primary-foreground: 0 0% 100%;
    --secondary: 340 80% 60%; /* Hồng */
    --secondary-foreground: 0 0% 100%;
    --accent: 200 95% 50%; /* Xanh dương */
    --accent-foreground: 0 0% 100%;
  }
}
```

```vue [App.vue]
<template>
  <div>
    <Button variant="default">Nút Chính</Button>
    <Button variant="secondary">Nút Phụ</Button>
  </div>
</template>
```

```tsx [App.tsx]
export default function App() {
  return (
    <div>
      <Button variant="default">Nút Chính</Button>
      <Button variant="secondary">Nút Phụ</Button>
    </div>
  )
}
```

:::

### Phương Pháp 2: Nhiều Giao Diện

Tạo nhiều class giao diện:

```css
/* Giao diện 1: Đại dương */
.theme-ocean {
  --primary: 200 95% 50%;
  --primary-foreground: 0 0% 100%;
  --secondary: 180 60% 45%;
  --secondary-foreground: 0 0% 100%;
}

/* Giao diện 2: Rừng */
.theme-forest {
  --primary: 140 60% 45%;
  --primary-foreground: 0 0% 100%;
  --secondary: 120 40% 40%;
  --secondary-foreground: 0 0% 100%;
}

/* Giao diện 3: Hoàng hôn */
.theme-sunset {
  --primary: 25 95% 55%;
  --primary-foreground: 0 0% 100%;
  --secondary: 340 80% 60%;
  --secondary-foreground: 0 0% 100%;
}
```

Áp dụng giao diện động:

::: code-group

```vue [Vue]
<script setup lang="ts">
import { ref } from 'vue'

const theme = ref('theme-ocean')
</script>

<template>
  <div :class="theme">
    <select v-model="theme">
      <option value="theme-ocean">Đại Dương</option>
      <option value="theme-forest">Rừng</option>
      <option value="theme-sunset">Hoàng Hôn</option>
    </select>

    <Button>Nút Có Giao Diện</Button>
  </div>
</template>
```

```tsx [React]
import { useState } from 'react'
import { Button } from '@/components/ui/button'

export default function App() {
  const [theme, setTheme] = useState('theme-ocean')

  return (
    <div className={theme}>
      <select value={theme} onChange={(e) => setTheme(e.target.value)}>
        <option value="theme-ocean">Đại Dương</option>
        <option value="theme-forest">Rừng</option>
        <option value="theme-sunset">Hoàng Hôn</option>
      </select>

      <Button>Nút Có Giao Diện</Button>
    </div>
  )
}
```

```typescript [Angular]
import { Component, signal } from '@angular/core'
import { ButtonComponent } from '@/components/ui/button'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ButtonComponent],
  template: `
    <div [class]="theme()">
      <select (change)="changeTheme($event)">
        <option value="theme-ocean">Đại Dương</option>
        <option value="theme-forest">Rừng</option>
        <option value="theme-sunset">Hoàng Hôn</option>
      </select>

      <ui-button>Nút Có Giao Diện</ui-button>
    </div>
  `
})
export class AppComponent {
  theme = signal('theme-ocean')

  changeTheme(event: Event) {
    const target = event.target as HTMLSelectElement
    this.theme.set(target.value)
  }
}
```

:::

### Phương Pháp 3: Công Cụ Tạo Giao Diện

Sử dụng các công cụ trực tuyến để tạo bảng màu:

1. **Realtime Colors** - [realtimecolors.com](https://realtimecolors.com)
2. **Coolors** - [coolors.co](https://coolors.co)
3. **Adobe Color** - [color.adobe.com](https://color.adobe.com)

Chuyển đổi màu sang định dạng HSL:

```js
// Ví dụ: Chuyển hex sang HSL
function hexToHSL(hex) {
  // Xóa #
  hex = hex.replace(/^#/, '')

  // Chuyển sang RGB
  const r = parseInt(hex.substring(0, 2), 16) / 255
  const g = parseInt(hex.substring(2, 4), 16) / 255
  const b = parseInt(hex.substring(4, 6), 16) / 255

  // Tìm min/max
  const max = Math.max(r, g, b)
  const min = Math.min(r, g, b)
  const diff = max - min

  // Tính H, S, L
  let h = 0
  let s = 0
  const l = (max + min) / 2

  if (diff !== 0) {
    s = l > 0.5 ? diff / (2 - max - min) : diff / (max + min)

    switch (max) {
      case r: h = ((g - b) / diff + (g < b ? 6 : 0)) / 6; break
      case g: h = ((b - r) / diff + 2) / 6; break
      case b: h = ((r - g) / diff + 4) / 6; break
    }
  }

  return `${Math.round(h * 360)} ${Math.round(s * 100)}% ${Math.round(l * 100)}%`
}

// Sử dụng
hexToHSL('#3b82f6') // "217 91% 60%"
```

## Tùy Chỉnh Component Cụ Thể

### Ghi Đè Class Component

Tất cả component đều chấp nhận prop `className`:

::: code-group

```vue [Vue]
<Button class="bg-gradient-to-r from-purple-500 to-pink-500">
  Nút Gradient
</Button>
```

```tsx [React]
<Button className="bg-gradient-to-r from-purple-500 to-pink-500">
  Nút Gradient
</Button>
```

```typescript [Angular]
<ui-button class="bg-gradient-to-r from-purple-500 to-pink-500">
  Nút Gradient
</ui-button>
```

:::

### Variant Tùy Chỉnh

Chỉnh sửa file variants của component:

```typescript
// components/ui/button/variants.ts
import { cva } from 'class-variance-authority'

export const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary/90',
        secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        outline: 'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline',

        // ✨ Thêm variant tùy chỉnh
        gradient: 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-8',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)
```

Sử dụng variant tùy chỉnh:

```vue
<Button variant="gradient">Gradient Tùy Chỉnh</Button>
```

## Thực Hành Tốt

### 1. Sử Dụng Màu Ngữ Nghĩa

```css
/* ✅ Tốt: Đặt tên theo ngữ nghĩa */
--primary: 270 70% 55%;
--success: 140 60% 45%;
--warning: 45 95% 55%;
--error: 0 84% 60%;

/* ❌ Không tốt: Đặt tên theo màu */
--blue: 217 91% 60%;
--green: 140 60% 45%;
--yellow: 45 95% 55%;
--red: 0 84% 60%;
```

### 2. Duy Trì Tỷ Lệ Tương Phản

Đảm bảo chữ dễ đọc (tuân thủ WCAG AA):

- **Chữ thường**: Tỷ lệ tương phản tối thiểu 4.5:1
- **Chữ lớn**: Tỷ lệ tương phản tối thiểu 3:1

Sử dụng công cụ như [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)

### 3. Kiểm Tra Cả Chế Độ Sáng và Tối

```css
:root {
  --primary: 270 70% 55%;
}

.dark {
  /* Điều chỉnh độ sáng cho dark mode */
  --primary: 270 70% 65%;
}
```

### 4. Tài Liệu Hóa Giao Diện

Tạo file cấu hình giao diện:

```typescript
// config/theme.ts
export const theme = {
  colors: {
    primary: {
      hsl: '270 70% 55%',
      name: 'Tím',
      usage: 'Hành động chính, liên kết',
    },
    secondary: {
      hsl: '340 80% 60%',
      name: 'Hồng',
      usage: 'Hành động phụ',
    },
  },
  borderRadius: {
    default: '0.5rem',
    usage: 'Card, nút, input',
  },
}
```

## Ví Dụ

### Giao Diện Thương Hiệu

```css
/* Màu thương hiệu công ty */
:root {
  --primary: 210 100% 50%; /* Xanh dương thương hiệu */
  --primary-foreground: 0 0% 100%;
  --secondary: 150 60% 50%; /* Xanh lá thương hiệu */
  --secondary-foreground: 0 0% 100%;
  --accent: 30 100% 50%; /* Cam thương hiệu */
  --accent-foreground: 0 0% 100%;
}
```

### Giao Diện Tối Giản

```css
/* Giao diện trung tính, tối giản */
:root {
  --primary: 0 0% 10%;
  --primary-foreground: 0 0% 100%;
  --secondary: 0 0% 96%;
  --secondary-foreground: 0 0% 10%;
  --accent: 0 0% 90%;
  --accent-foreground: 0 0% 10%;
  --radius: 0.25rem; /* Bo góc nhỏ hơn */
}
```

### Giao Diện Rực Rỡ

```css
/* Giao diện đầy màu sắc, sống động */
:root {
  --primary: 280 100% 60%; /* Tím rực rỡ */
  --primary-foreground: 0 0% 100%;
  --secondary: 340 100% 65%; /* Hồng rực rỡ */
  --secondary-foreground: 0 0% 100%;
  --accent: 180 100% 50%; /* Xanh cyan rực rỡ */
  --accent-foreground: 0 0% 10%;
  --radius: 1rem; /* Bo góc lớn hơn */
}
```

## Tài Nguyên

- [Tailwind CSS Colors](https://tailwindcss.com/docs/customizing-colors)
- [HSL Color Picker](https://hslpicker.com)
- [Coolors Generator](https://coolors.co)
- [Material Design Color Tool](https://material.io/resources/color)
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker)

## Bước Tiếp Theo

- [Chế Độ Tối](/vi/guide/dark-mode) - Triển khai chế độ tối
- [Cấu Hình](/vi/guide/configuration) - Tùy chỉnh components.json
- [Components](/vi/components/overview) - Khám phá các component
