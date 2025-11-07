# Cài Đặt

Hướng dẫn cài đặt Galaxy UI vào dự án của bạn.

## Yêu Cầu

Trước khi bắt đầu, đảm bảo bạn đã cài đặt:

- **Node.js** 18+ hoặc **Bun** 1.0+
- **npm**, **yarn**, **pnpm** hoặc **bun**
- Một trong các framework: **Vue 3**, **React 18+**, hoặc **Angular 20+**
- **Tailwind CSS** 3.4+ đã được cấu hình

## Bước 1: Khởi Tạo Dự Án

Bạn không cần cài đặt CLI globally. Sử dụng trực tiếp với package manager:

::: code-group

```bash [npm]
npx galaxy-ui-cli@latest init
```

```bash [pnpm]
pnpm dlx galaxy-ui-cli@latest init
```

```bash [yarn]
yarn dlx galaxy-ui-cli@latest init
```

```bash [bun]
bunx galaxy-ui-cli@latest init
```

:::

### Hoặc Cài Đặt Global (Tùy chọn)

::: code-group

```bash [npm]
npm install -g @galaxy-ui-cli/cli
galaxy-ui-cli init
```

```bash [pnpm]
pnpm add -g @galaxy-ui-cli/cli
galaxy-ui-cli init
```

```bash [yarn]
yarn global add @galaxy-ui-cli/cli
galaxy-ui-cli init
```

```bash [bun]
bun add -g @galaxy-ui-cli/cli
galaxy-ui-cli init
```

:::

## Bước 2: Cấu Hình

Lệnh init sẽ chạy cấu hình tương tác:

CLI sẽ:
1. ✅ Phát hiện framework của bạn tự động
2. ✅ Hỏi về cấu hình (TypeScript, base color, icon library)
3. ✅ Tạo file `components.json`
4. ✅ Cài đặt dependencies cần thiết
5. ✅ Tạo file utility functions

### Cấu Hình Interactive

```
? Framework detected: vue
? Use TypeScript? Yes
? Choose base color: › slate
? Icon library: › lucide
? Where is your global CSS file? › src/assets/styles/global.css
? Configure import alias for components? › @/components
? Configure import alias for utils? › @/lib/utils
```

## Bước 3: Thêm Components

Thêm components bạn cần:

::: code-group

```bash [npm]
npx galaxy-ui-cli@latest add button
```

```bash [pnpm]
pnpm dlx galaxy-ui-cli@latest add button
```

```bash [yarn]
yarn dlx galaxy-ui-cli@latest add button
```

```bash [bun]
bunx galaxy-ui-cli@latest add button
```

```bash [global]
galaxy-ui-cli add button
```

:::

### Thêm Nhiều Components

::: code-group

```bash [npm]
npx galaxy-ui-cli@latest add button input dialog
```

```bash [pnpm]
pnpm dlx galaxy-ui-cli@latest add button input dialog
```

```bash [yarn]
yarn dlx galaxy-ui-cli@latest add button input dialog
```

```bash [bun]
bunx galaxy-ui-cli@latest add button input dialog
```

```bash [global]
galaxy-ui-cli add button input dialog
```

:::

## File Cấu Hình: components.json

File `components.json` được tạo trong thư mục gốc:

```json
{
  "$schema": "https://ui.galaxy.com/schema.json",
  "framework": "vue",
  "typescript": true,
  "tailwind": {
    "config": "tailwind.config.js",
    "css": "src/assets/styles/global.css",
    "baseColor": "slate",
    "cssVariables": true
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils"
  },
  "iconLibrary": "lucide"
}
```

## Framework Cụ Thể

### Vue 3

```bash
# Khởi tạo
galaxy-ui-cli init

# Dependencies được cài đặt:
# - radix-vue
# - clsx
# - tailwind-merge
# - lucide-vue-next
```

### React

```bash
# Khởi tạo
galaxy-ui-cli init

# Dependencies được cài đặt:
# - @radix-ui/react-slot
# - clsx
# - tailwind-merge
# - lucide-react
```

### Angular

```bash
# Khởi tạo
galaxy-ui-cli init

# Dependencies được cài đặt:
# - radix-ng
# - clsx
# - tailwind-merge
# - lucide-angular
```

## Cấu Hình Tailwind CSS

Đảm bảo Tailwind CSS được cấu hình đúng:

### tailwind.config.js

```js
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        // ... more colors
      },
    },
  },
  plugins: [],
}
```

### Global CSS

Thêm CSS variables vào file CSS global của bạn:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 222.2 84% 4.9%;
    --primary: 222.2 47.4% 11.2%;
    --primary-foreground: 210 40% 98%;
    /* ... more variables */
  }

  .dark {
    --background: 222.2 84% 4.9%;
    --foreground: 210 40% 98%;
    --primary: 210 40% 98%;
    --primary-foreground: 222.2 47.4% 11.2%;
    /* ... more variables */
  }
}
```

## Sử Dụng

Sau khi cài đặt, import và sử dụng components:

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

## Tiếp Theo

- [Sử dụng CLI](/vi/guide/cli-usage) - Tìm hiểu thêm về CLI commands
- [Cấu hình](/vi/guide/configuration) - Tùy chỉnh components.json
- [Components](/vi/components/overview) - Khám phá tất cả components

## Gặp Vấn Đề?

Nếu bạn gặp vấn đề, vui lòng:
- Kiểm tra [GitHub Issues](https://github.com/buikevin/galaxy-design/issues)
- Tạo issue mới với thông tin chi tiết
- Liên hệ: kevinbui210191@gmail.com
