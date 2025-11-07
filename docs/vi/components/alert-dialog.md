# Alert Dialog

Hộp thoại modal làm gián đoạn người dùng với nội dung quan trọng và mong đợi phản hồi.

<ComponentPreview name="AlertDialogDemo">
  <template #preview>
    <DemoContainer>
      <AlertDialogDemo />
    </DemoContainer>
  </template>
  <template #code>

::: code-group

```vue [Vue]
<script setup lang="ts">
import { AlertDialog, AlertDialogTrigger, AlertDialogContent, AlertDialogTitle, AlertDialogDescription, AlertDialogAction, AlertDialogCancel } from '@/components/ui/alert-dialog'
</script>

<template>
  <AlertDialog>
    <AlertDialogTrigger>Delete Account</AlertDialogTrigger>
    <AlertDialogContent>
      <AlertDialogTitle>Are you sure?</AlertDialogTitle>
      <AlertDialogDescription>
        This action cannot be undone.
      </AlertDialogDescription>
      <AlertDialogCancel>Cancel</AlertDialogCancel>
      <AlertDialogAction>Delete</AlertDialogAction>
    </AlertDialogContent>
  </AlertDialog>
</template>
```

```tsx [React]
import { AlertDialog, AlertDialogTrigger, AlertDialogContent, AlertDialogTitle, AlertDialogDescription, AlertDialogAction, AlertDialogCancel } from "@/components/ui/alert-dialog"

export default function App() {
  return (
    <AlertDialog>
      <AlertDialogTrigger>Delete Account</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogTitle>Are you sure?</AlertDialogTitle>
        <AlertDialogDescription>
          This action cannot be undone.
        </AlertDialogDescription>
        <AlertDialogCancel>Cancel</AlertDialogCancel>
        <AlertDialogAction>Delete</AlertDialogAction>
      </AlertDialogContent>
    </AlertDialog>
  )
}
```

```typescript [Angular]
import { Component } from '@angular/core';
import { AlertDialogComponent } from '@/components/ui/alert-dialog';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AlertDialogComponent],
  template: `
    <ui-alert-dialog [isOpen]="isOpen" (openChange)="isOpen = $event">
      <h2>Are you sure?</h2>
      <p>This action cannot be undone.</p>
      <button (click)="isOpen = false">Cancel</button>
      <button (click)="handleDelete()">Delete</button>
    </ui-alert-dialog>
  `
})
export class AppComponent {
  isOpen = false;

  handleDelete() {
    this.isOpen = false;
  }
}
```

:::

  </template>
</ComponentPreview>

## Cài đặt

::: code-group

```bash [npm]
npx galaxy-ui-cli@latest add alert-dialog
```

```bash [pnpm]
pnpm dlx galaxy-ui-cli@latest add alert-dialog
```

```bash [yarn]
yarn dlx galaxy-ui-cli@latest add alert-dialog
```

```bash [bun]
bunx galaxy-ui-cli@latest add alert-dialog
```

:::

## Sử dụng

### Vue

```vue
<script setup lang="ts">
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel
} from '@/components/ui'
</script>

<template>
  <AlertDialog>
    <AlertDialogTrigger>Xóa Tài Khoản</AlertDialogTrigger>
    <AlertDialogContent>
      <AlertDialogTitle>Bạn có chắc chắn?</AlertDialogTitle>
      <AlertDialogDescription>
        Hành động này không thể hoàn tác.
      </AlertDialogDescription>
      <AlertDialogCancel>Hủy</AlertDialogCancel>
      <AlertDialogAction>Xóa</AlertDialogAction>
    </AlertDialogContent>
  </AlertDialog>
</template>
```

### React

```tsx
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel
} from '@/components/ui'

export default function AlertDialogDemo() {
  return (
    <AlertDialog>
      <AlertDialogTrigger>Xóa Tài Khoản</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogTitle>Bạn có chắc chắn?</AlertDialogTitle>
        <AlertDialogDescription>
          Hành động này không thể hoàn tác.
        </AlertDialogDescription>
        <AlertDialogCancel>Hủy</AlertDialogCancel>
        <AlertDialogAction>Xóa</AlertDialogAction>
      </AlertDialogContent>
    </AlertDialog>
  )
}
```

### Angular

```typescript
import { Component } from '@angular/core';
import { AlertDialogComponent } from '@/components/ui';

@Component({
  selector: 'app-alert-dialog-demo',
  standalone: true,
  imports: [AlertDialogComponent],
  template: `
    <ui-alert-dialog [isOpen]="isOpen" (openChange)="isOpen = $event">
      <h2>Bạn có chắc chắn?</h2>
      <p>Hành động này không thể hoàn tác.</p>
      <button (click)="isOpen = false">Hủy</button>
      <button (click)="handleDelete()">Xóa</button>
    </ui-alert-dialog>
  `
})
export class AlertDialogDemoComponent {
  isOpen = false;

  handleDelete() {
    this.isOpen = false;
    // Xử lý xóa
  }
}
```


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
