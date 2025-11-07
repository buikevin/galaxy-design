# Đóng Góp

Cảm ơn bạn đã quan tâm đến việc đóng góp cho Galaxy UI! Hướng dẫn này sẽ giúp bạn bắt đầu.

## Bắt Đầu

### Yêu Cầu

- **Node.js**: 18.0.0 trở lên
- **Package Manager**: npm, pnpm, yarn, hoặc bun
- **Git**: Để quản lý phiên bản

### Fork và Clone

1. **Fork repository**

   Truy cập [github.com/buikevin/galaxy-design](https://github.com/buikevin/galaxy-design) và nhấp "Fork"

2. **Clone fork của bạn**

   ```bash
   git clone https://github.com/TEN_CUA_BAN/galaxy-design.git
   cd galaxy-ui-cli
   ```

3. **Thêm upstream remote**

   ```bash
   git remote add upstream https://github.com/buikevin/galaxy-design.git
   ```

### Cài Đặt Dependencies

```bash
# Cài đặt dependencies
npm install

# hoặc
bun install
```

## Cấu Trúc Dự Án

```
galaxy-ui-cli/
├── packages/
│   ├── cli/                 # Mã nguồn công cụ CLI
│   │   ├── src/
│   │   │   ├── commands/    # Các lệnh CLI (init, add)
│   │   │   ├── utils/       # Các hàm tiện ích
│   │   │   └── registries/  # Registry của component
│   │   └── package.json
│   │
│   ├── react/               # Component React
│   │   └── src/components/
│   │
│   ├── vue/                 # Component Vue
│   │   └── src/components/
│   │
│   └── angular/             # Component Angular
│       └── src/components/
│
├── docs/                    # Tài liệu VitePress
│   ├── .vitepress/
│   ├── guide/
│   ├── components/
│   └── vi/                  # Tài liệu tiếng Việt
│
└── examples/                # Các dự án ví dụ
    ├── react-example/
    ├── vue-example/
    └── angular-example/
```

## Quy Trình Phát Triển

### 1. Tạo Branch

```bash
# Cập nhật branch main
git checkout main
git pull upstream main

# Tạo feature branch
git checkout -b feat/ten-tinh-nang-cua-ban

# hoặc cho bug fix
git checkout -b fix/mo-ta-loi
```

### 2. Thực Hiện Thay Đổi

Tuân theo [chuẩn code](#chuan-code) và [quy ước commit](#quy-uoc-commit) của chúng tôi.

### 3. Kiểm Tra Thay Đổi

```bash
# Build CLI
npm run build

# Test CLI locally
cd examples/react-example
node ../../packages/cli/dist/bin.js add button

# Chạy dev server
npm run dev
```

### 4. Commit Thay Đổi

```bash
git add .
git commit -m "feat: thêm variant nút mới"
```

### 5. Push và Tạo PR

```bash
git push origin feat/ten-tinh-nang-cua-ban
```

Sau đó tạo Pull Request trên GitHub.

## Các Loại Đóng Góp

### 🐛 Sửa Lỗi

1. **Tìm kiếm issue hiện có** để tránh trùng lặp
2. **Tạo issue** mô tả lỗi
3. **Sửa lỗi** và thêm test
4. **Gửi PR** tham chiếu issue

### ✨ Tính Năng Mới

1. **Mở discussion** cho các tính năng lớn
2. **Nhận phê duyệt** trước khi bắt đầu
3. **Triển khai tính năng** với test và docs
4. **Gửi PR** với mô tả chi tiết

### 📝 Tài Liệu

1. **Xác định khoảng trống** trong tài liệu
2. **Viết tài liệu rõ ràng, súc tích**
3. **Thêm ví dụ code**
4. **Gửi PR**

### 🎨 Component Mới

Thêm component mới cần làm việc trên nhiều package:

#### Component React

```bash
# Tạo thư mục component
mkdir -p packages/react/src/components/new-component

# Tạo file component
touch packages/react/src/components/new-component/NewComponent.tsx
touch packages/react/src/components/new-component/index.ts
```

**NewComponent.tsx**:
```tsx
import * as React from 'react'
import { cn } from '@/lib/utils'

export interface NewComponentProps extends React.HTMLAttributes<HTMLDivElement> {
  // Props đặc thù của component
}

const NewComponent = React.forwardRef<HTMLDivElement, NewComponentProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn('new-component-base-classes', className)}
        {...props}
      />
    )
  }
)
NewComponent.displayName = 'NewComponent'

export { NewComponent }
```

**index.ts**:
```typescript
export * from './NewComponent'
```

#### Component Vue

```bash
mkdir -p packages/vue/src/components/new-component
touch packages/vue/src/components/new-component/NewComponent.vue
touch packages/vue/src/components/new-component/index.ts
```

**NewComponent.vue**:
```vue
<script setup lang="ts">
import { cn } from '@/lib/utils'
import { computed } from 'vue'

interface Props {
  class?: string
}

const props = defineProps<Props>()

const className = computed(() => cn('new-component-base-classes', props.class))
</script>

<template>
  <div :class="className">
    <slot />
  </div>
</template>
```

#### Component Angular

```bash
mkdir -p packages/angular/src/components/new-component
touch packages/angular/src/components/new-component/new-component.component.ts
touch packages/angular/src/components/new-component/index.ts
```

**new-component.component.ts**:
```typescript
import { Component, Input } from '@angular/core'
import { cn } from '@/lib/utils'

@Component({
  selector: 'ui-new-component',
  standalone: true,
  template: `
    <div [class]="className">
      <ng-content />
    </div>
  `
})
export class NewComponentComponent {
  @Input() class?: string

  get className() {
    return cn('new-component-base-classes', this.class)
  }
}
```

#### Cập Nhật Registry

Thêm component vào cả ba file registry:

**packages/cli/src/registries/registry-react.json**:
```json
{
  "new-component": {
    "name": "NewComponent",
    "type": "other",
    "description": "Mô tả component mới",
    "dependencies": [],
    "devDependencies": [],
    "registryDependencies": [],
    "files": ["NewComponent.tsx", "index.ts"],
    "category": "other"
  }
}
```

Lặp lại cho `registry-vue.json` và `registry-angular.json`.

#### Tạo Tài Liệu

```bash
touch docs/components/new-component.md
```

**new-component.md**:
````markdown
# New Component

Mô tả component và mục đích của nó.

## Import

::: code-group

```tsx [React]
import { NewComponent } from '@/components/ui/new-component'
```

```vue [Vue]
import { NewComponent } from '@/components/ui/new-component'
```

```typescript [Angular]
import { NewComponentComponent } from '@/components/ui/new-component'
```

:::

## Sử Dụng

::: code-group

```tsx [React]
export default function Example() {
  return <NewComponent>Nội dung</NewComponent>
}
```

```vue [Vue]
<template>
  <NewComponent>Nội dung</NewComponent>
</template>
```

```typescript [Angular]
@Component({
  template: `<ui-new-component>Nội dung</ui-new-component>`
})
```

:::

## API

### Props

| Prop | Kiểu | Mặc định | Mô tả |
|------|------|---------|-------------|
| `class` | `string` | - | CSS class bổ sung |

## Ví Dụ

### Cơ Bản

[Thêm ví dụ ở đây]
````

#### Cập Nhật Sidebar

Thêm component vào [docs/.vitepress/config.ts](../docs/.vitepress/config.ts):

```typescript
{
  text: 'Components',
  items: [
    // ... các item hiện có
    { text: 'New Component', link: '/components/new-component' },
  ],
}
```

## Chuẩn Code

### TypeScript

- Sử dụng **TypeScript** cho mọi code
- Bật **strict mode**
- Thêm type cho tất cả props và function
- Tránh type `any`

```typescript
// ✅ Tốt
interface Props {
  variant: 'default' | 'secondary'
  onClick?: () => void
}

// ❌ Không tốt
interface Props {
  variant: any
  onClick: Function
}
```

### Style Component

- Sử dụng **functional component**
- Sử dụng **React.forwardRef** cho React component
- Export interface/type
- Thêm `displayName` cho React component

```tsx
// ✅ Tốt
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'secondary'
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'default', ...props }, ref) => {
    return <button ref={ref} {...props} />
  }
)
Button.displayName = 'Button'
```

### Styling

- Sử dụng **Tailwind CSS** classes
- Sử dụng **cn()** utility để merge class
- Hỗ trợ **dark mode**

```tsx
// ✅ Tốt
<div className={cn('bg-background text-foreground', className)} />

// ❌ Không tốt
<div className={`bg-white text-black ${className}`} />
```

### Đặt Tên File

- **React**: PascalCase (Button.tsx)
- **Vue**: PascalCase (Button.vue)
- **Angular**: kebab-case (button.component.ts)

## Quy Ước Commit

Chúng tôi tuân theo [Conventional Commits](https://www.conventionalcommits.org/):

```
<type>(<scope>): <description>

[body tùy chọn]

[footer tùy chọn]
```

### Types

- `feat`: Tính năng mới
- `fix`: Sửa lỗi
- `docs`: Chỉ tài liệu
- `style`: Style code (format, không thay đổi code)
- `refactor`: Refactor code
- `test`: Thêm test
- `chore`: Công việc bảo trì

### Ví Dụ

```bash
# Tính năng
feat(cli): thêm hỗ trợ pnpm package manager

# Sửa lỗi
fix(react): sửa style trạng thái disabled của nút

# Tài liệu
docs: cập nhật hướng dẫn cài đặt

# Breaking change
feat(vue)!: thay đổi API dialog để sử dụng composable

BREAKING CHANGE: Dialog giờ yêu cầu useDialog composable
```

## Hướng Dẫn Pull Request

### Tiêu Đề PR

Tuân theo quy ước commit:

```
feat(react): thêm component tooltip
fix(cli): giải quyết path alias trên Windows
docs: thêm hướng dẫn dark mode
```

### Mô Tả PR

Sử dụng template này:

```markdown
## Mô Tả
Mô tả ngắn gọn về thay đổi

## Loại Thay Đổi
- [ ] Sửa lỗi
- [ ] Tính năng mới
- [ ] Breaking change
- [ ] Cập nhật tài liệu

## Checklist
- [ ] Code tuân theo hướng dẫn style của dự án
- [ ] Đã tự review code
- [ ] Đã thêm/cập nhật test
- [ ] Đã thêm/cập nhật tài liệu
- [ ] Thay đổi không tạo cảnh báo mới
- [ ] Đã test ở cả ba framework (React, Vue, Angular)

## Screenshots (nếu có)
[Thêm screenshots]

## Issue Liên Quan
Fixes #123
```

### Quy Trình Review

1. **Kiểm tra tự động** phải pass (linting, type checking)
2. **Review của maintainer** - có thể yêu cầu thay đổi
3. **Phê duyệt** - PR sẽ được merge
4. **Release** - Thay đổi được đưa vào bản phát hành tiếp theo

## Testing

### Component Testing

Test component ở cả ba framework:

```bash
# React
cd examples/react-example
npm run dev

# Vue
cd examples/vue-example
npm run dev

# Angular
cd examples/angular-example
npm run dev
```

### CLI Testing

```bash
# Build CLI
cd packages/cli
npm run build

# Test lệnh init
cd ../../examples/react-example
rm -rf components components.json
node ../../packages/cli/dist/bin.js init

# Test lệnh add
node ../../packages/cli/dist/bin.js add button
```

## Tài Liệu

### Hướng Dẫn Viết

1. **Rõ ràng và súc tích**
2. **Sử dụng ví dụ code** cho mọi tính năng
3. **Bao gồm tất cả framework** (React, Vue, Angular)
4. **Thêm TypeScript type**
5. **Hiển thị cả cách dùng cơ bản và nâng cao**

### Ví Dụ Code

Luôn cung cấp ví dụ cho tất cả framework:

```markdown
::: code-group

\`\`\`tsx [React]
// Ví dụ React
\`\`\`

\`\`\`vue [Vue]
// Ví dụ Vue
\`\`\`

\`\`\`typescript [Angular]
// Ví dụ Angular
\`\`\`

:::
```

### Phát Triển Docs Cục Bộ

```bash
cd docs
npm install
npm run dev
```

Truy cập `http://localhost:5173`

## Cộng Đồng

### Nhận Hỗ Trợ

- **GitHub Issues**: Báo cáo lỗi và yêu cầu tính năng
- **GitHub Discussions**: Câu hỏi và thảo luận
- **Discord**: Chat thời gian thực (sắp ra mắt)

### Quy Tắc Ứng Xử

Hãy tôn trọng và mang tính xây dựng. Chúng tôi tuân theo [Contributor Covenant Code of Conduct](https://www.contributor-covenant.org/).

## Giấy Phép

Bằng việc đóng góp, bạn đồng ý rằng các đóng góp của bạn sẽ được cấp phép theo giấy phép MIT của dự án.

## Có Câu Hỏi?

- Đọc [tài liệu](/)
- Tìm kiếm [issue hiện có](https://github.com/buikevin/galaxy-design/issues)
- Mở [discussion mới](https://github.com/buikevin/galaxy-design/discussions)

Cảm ơn bạn đã đóng góp! 🎉
