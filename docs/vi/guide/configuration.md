# Cấu Hình

Tìm hiểu cách cấu hình Galaxy UI cho dự án của bạn bằng `components.json`.

## components.json

File `components.json` được tạo khi bạn chạy `galaxy-ui-cli init`. Nó lưu trữ cấu hình và tùy chọn của dự án.

### Vị Trí File

File được tạo trong thư mục gốc dự án:

```
your-project/
├── components.json    ← File cấu hình
├── package.json
├── tailwind.config.js
└── src/
```

### Ví Dụ Cấu Hình

```json
{
  "$schema": "https://ui.galaxy.com/schema.json",
  "framework": "react",
  "typescript": true,
  "tailwind": {
    "config": "tailwind.config.js",
    "css": "src/index.css",
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

## Các Tùy Chọn Cấu Hình

### framework

**Kiểu**: `"vue" | "react" | "angular"`
**Bắt buộc**: Có

Framework bạn đang sử dụng:

```json
{
  "framework": "react"
}
```

### typescript

**Kiểu**: `boolean`
**Mặc định**: `true`

Dự án có sử dụng TypeScript hay không:

```json
{
  "typescript": true
}
```

### tailwind

Cấu hình cho Tailwind CSS.

#### tailwind.config

**Kiểu**: `string`
**Mặc định**: `"tailwind.config.js"`

Đường dẫn đến file cấu hình Tailwind:

```json
{
  "tailwind": {
    "config": "tailwind.config.js"
  }
}
```

#### tailwind.css

**Kiểu**: `string`
**Bắt buộc**: Có

Đường dẫn đến file CSS toàn cục nơi các directives Tailwind được import:

```json
{
  "tailwind": {
    "css": "src/index.css"
  }
}
```

**Mặc định theo framework:**
- **Vue**: `"src/assets/styles/global.css"`
- **React**: `"src/index.css"`
- **Angular**: `"src/styles.css"`

#### tailwind.baseColor

**Kiểu**: `"slate" | "gray" | "zinc" | "neutral" | "stone"`
**Mặc định**: `"slate"`

Bảng màu cơ bản cho components:

```json
{
  "tailwind": {
    "baseColor": "slate"
  }
}
```

#### tailwind.cssVariables

**Kiểu**: `boolean`
**Mặc định**: `true`

Sử dụng CSS variables cho theming. Giữ giá trị `true` cho Galaxy UI:

```json
{
  "tailwind": {
    "cssVariables": true
  }
}
```

### aliases

Path aliases để import components và utilities.

#### aliases.components

**Kiểu**: `string`
**Mặc định**: `"@/components"`

Nơi components sẽ được cài đặt:

```json
{
  "aliases": {
    "components": "@/components"
  }
}
```

Với cài đặt này, components được cài đặt vào:
- `src/components/ui/button/`
- `src/components/ui/input/`
- v.v.

#### aliases.utils

**Kiểu**: `string`
**Mặc định**: `"@/lib/utils"`

Nơi các utility functions được đặt:

```json
{
  "aliases": {
    "utils": "@/lib/utils"
  }
}
```

### iconLibrary

**Kiểu**: `"lucide" | "heroicons" | "none"`
**Mặc định**: `"lucide"`

Thư viện icon sử dụng:

```json
{
  "iconLibrary": "lucide"
}
```

**Các tùy chọn có sẵn:**
- `"lucide"` - Lucide Icons (khuyến nghị)
- `"heroicons"` - Heroicons
- `"none"` - Không dùng thư viện icon

## Thiết Lập Path Aliases

Galaxy UI sử dụng path aliases để import sạch sẽ. Đảm bảo dự án của bạn được cấu hình đúng.

### Vue (Vite)

```ts
// vite.config.ts
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
```

```json
// tsconfig.json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

### React (Vite)

```ts
// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
```

```json
// tsconfig.json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

### Angular

```json
// tsconfig.json
{
  "compilerOptions": {
    "baseUrl": "./",
    "paths": {
      "@/*": ["src/*"],
      "@/components/*": ["src/components/*"],
      "@/lib/*": ["src/lib/*"]
    }
  }
}
```

## Sửa Đổi Cấu Hình

Bạn có thể chỉnh sửa `components.json` thủ công để thay đổi cài đặt. CLI sẽ tôn trọng các thay đổi của bạn.

### Ví dụ: Thay Đổi Đường Dẫn Component

```json
{
  "aliases": {
    "components": "@/app/components"
  }
}
```

Bây giờ components sẽ được cài đặt vào `src/app/components/ui/`.

### Ví dụ: Sử Dụng File CSS Khác

```json
{
  "tailwind": {
    "css": "src/styles/main.css"
  }
}
```

CLI bây giờ sẽ cập nhật `src/styles/main.css` thay vì file mặc định.

## Schema Validation

Trường `$schema` cung cấp autocomplete và validation trong editors:

```json
{
  "$schema": "https://ui.galaxy.com/schema.json"
}
```

Điều này bật:
- ✅ Autocompletion trong VS Code
- ✅ Validation các tùy chọn cấu hình
- ✅ Tài liệu inline

## Cấu Hình Theo Môi Trường

Bạn có thể có các cấu hình khác nhau cho các môi trường khác nhau:

```bash
# Development
components.dev.json

# Production
components.prod.json

# Staging
components.staging.json
```

## Xử Lý Sự Cố

### Không phát hiện được cấu hình

1. Kiểm tra tên file chính xác là `components.json`
2. Xác minh file ở thư mục gốc dự án
3. Đảm bảo cú pháp JSON hợp lệ

### Path aliases không hoạt động

1. Kiểm tra cấu hình TypeScript
2. Xác minh cấu hình Vite/build tool
3. Khởi động lại TypeScript server trong editor
4. Xóa cache và rebuild

### Components cài đặt sai vị trí

1. Kiểm tra giá trị `aliases.components`
2. Xác minh thiết lập path alias trong build config
3. Đảm bảo đường dẫn bắt đầu với `@/`

## Bước Tiếp Theo

- [Sử dụng CLI](/vi/guide/cli-usage) - Học các lệnh CLI
- [Components](/vi/components/overview) - Duyệt qua các components có sẵn
- [Theming](/vi/guide/theming) - Tùy chỉnh giao diện
