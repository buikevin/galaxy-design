# Sử dụng CLI

Galaxy UI CLI cung cấp các lệnh để dễ dàng thêm components vào dự án của bạn.

## Các Lệnh

### `init`

Khởi tạo dự án của bạn để sử dụng Galaxy UI components.

::: code-group

```bash [npm]
npx galaxy-design@latest init
```

```bash [pnpm]
pnpm dlx galaxy-design@latest init
```

```bash [yarn]
yarn dlx galaxy-design@latest init
```

```bash [bun]
bunx galaxy-design@latest init
```

```bash [global]
galaxy-design init
```

:::

Lệnh này sẽ:

1. **Phát hiện framework** - Tự động phát hiện nếu bạn đang sử dụng Vue, React, hay Angular
2. **Tạo file cấu hình** - Tạo file `galaxy-ui.config.json` trong thư mục gốc dự án
3. **Thiết lập thư mục** - Tạo cấu trúc thư mục `components/ui`
4. **Cấu hình đường dẫn** - Cập nhật `tsconfig.json` với path aliases
5. **Cài đặt dependencies** - Cài đặt các peer dependencies cần thiết (Radix primitives, etc.)

#### Tùy chọn

```bash
--cwd <path>        # Thư mục làm việc (mặc định: thư mục hiện tại)
--yes, -y           # Bỏ qua tất cả prompts và sử dụng mặc định
```

Ví dụ:

```bash
npx galaxy-design@latest init --yes
```

### `add`

Thêm components vào dự án của bạn.

::: code-group

```bash [npm]
npx galaxy-design@latest add [components...]
```

```bash [pnpm]
pnpm dlx galaxy-design@latest add [components...]
```

```bash [yarn]
yarn dlx galaxy-design@latest add [components...]
```

```bash [bun]
bunx galaxy-design@latest add [components...]
```

```bash [global]
galaxy-design add [components...]
```

:::

#### Ví dụ

Thêm một component:

```bash
npx galaxy-design@latest add button
```

Thêm nhiều components:

```bash
npx galaxy-design@latest add button input dialog
```

Thêm tất cả form components:

```bash
npx galaxy-design@latest add button input checkbox radio-group select slider switch textarea label
```

#### Tùy chọn

```bash
--cwd <path>        # Thư mục làm việc
--overwrite         # Ghi đè các file đã tồn tại
--yes, -y           # Bỏ qua prompts xác nhận
--path <path>       # Đường dẫn tùy chỉnh cho components (mặc định: components/ui)
```

Ví dụ:

```bash
npx galaxy-design@latest add button --overwrite --yes
```

### `list`

Liệt kê tất cả components có sẵn.

::: code-group

```bash [npm]
npx galaxy-design@latest list
```

```bash [pnpm]
pnpm dlx galaxy-design@latest list
```

```bash [yarn]
yarn dlx galaxy-design@latest list
```

```bash [bun]
bunx galaxy-design@latest list
```

```bash [global]
galaxy-design list
```

:::

Lệnh này sẽ hiển thị tất cả 41 components có sẵn với mô tả của chúng.

### `diff`

Kiểm tra sự khác biệt giữa phiên bản local và registry.

::: code-group

```bash [npm]
npx galaxy-design@latest diff [component]
```

```bash [pnpm]
pnpm dlx galaxy-design@latest diff [component]
```

```bash [yarn]
yarn dlx galaxy-design@latest diff [component]
```

```bash [bun]
bunx galaxy-design@latest diff [component]
```

```bash [global]
galaxy-design diff [component]
```

:::

Ví dụ:

```bash
npx galaxy-design@latest diff button
```

## File Cấu Hình

Lệnh init tạo file `galaxy-ui.config.json`:

```json
{
  "$schema": "https://galaxy-ui.dev/schema.json",
  "framework": "vue",
  "style": "default",
  "tailwind": {
    "config": "tailwind.config.js",
    "css": "src/assets/index.css",
    "baseColor": "slate",
    "cssVariables": true
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils"
  }
}
```

### Các Tùy Chọn Cấu Hình

| Tùy chọn | Kiểu | Mô tả |
|--------|------|-------------|
| `framework` | `"vue" \| "react" \| "angular"` | Framework của bạn |
| `style` | `"default" \| "new-york"` | Biến thể style component |
| `tailwind.config` | `string` | Đường dẫn đến Tailwind config |
| `tailwind.css` | `string` | Đường dẫn đến file CSS toàn cục |
| `tailwind.baseColor` | `string` | Bảng màu cơ bản |
| `tailwind.cssVariables` | `boolean` | Sử dụng CSS variables |
| `aliases.components` | `string` | Alias đường dẫn component |
| `aliases.utils` | `string` | Alias đường dẫn utils |

## Phát Hiện Package Manager

CLI tự động phát hiện package manager dựa trên lock files:

- `package-lock.json` → npm
- `pnpm-lock.yaml` → pnpm
- `yarn.lock` → yarn
- `bun.lockb` → bun

CLI sẽ sử dụng package manager đã phát hiện để cài đặt dependencies.

## Mẹo

### Luôn sử dụng phiên bản mới nhất

Sử dụng `@latest` đảm bảo bạn nhận được phiên bản mới nhất:

```bash
npx galaxy-design@latest add button
```

### Tạo aliases để tiện lợi

Thêm vào shell profile (`.bashrc`, `.zshrc`, etc.):

```bash
alias gui="npx galaxy-design@latest"
```

Sau đó sử dụng:

```bash
gui add button
gui init
```

### Sử dụng với CI/CD

Trong môi trường CI/CD, sử dụng flag `--yes` để bỏ qua prompts:

```bash
npx galaxy-design@latest init --yes
npx galaxy-design@latest add button input --yes
```

## Xử Lý Sự Cố

### "Component not found"

Đảm bảo bạn đang sử dụng đúng tên component. Sử dụng `galaxy-design list` để xem tất cả components có sẵn.

### "Framework not detected"

CLI không thể phát hiện framework của bạn. Đảm bảo bạn đã cài đặt dependencies của framework trong package.json:

- Vue: package `vue`
- React: packages `react` và `react-dom`
- Angular: package `@angular/core`

### "Path alias not configured"

Đảm bảo `tsconfig.json` hoặc `jsconfig.json` của bạn có path aliases:

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

## Bước Tiếp Theo

- [Cấu hình](/vi/guide/configuration) - Tùy chỉnh thiết lập
- [Components](/vi/components/overview) - Duyệt qua các components có sẵn
- [Theming](/vi/guide/theming) - Tùy chỉnh giao diện

## Tác Giả

**Bùi Trọng Hiếu (kevinbui)**
- GitHub: [@buikevin](https://github.com/buikevin)
- Email: kevinbui210191@gmail.com

## Giấy Phép

MIT © 2025 Bùi Trọng Hiếu (kevinbui)
