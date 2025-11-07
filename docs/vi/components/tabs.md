# Tabs

Một tập hợp các phần nội dung phân lớp—được gọi là tab panels—được hiển thị từng cái một.

<ComponentPreview name="TabsDemo">
  <template #preview>
    <DemoContainer>
      <TabsDemo />
    </DemoContainer>
  </template>
  <template #code>

::: code-group

```vue [Vue]
<script setup lang="ts">
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
</script>

<template>
  <Tabs default-value="account" class="w-[400px]">
    <TabsList>
      <TabsTrigger value="account">Account</TabsTrigger>
      <TabsTrigger value="password">Password</TabsTrigger>
    </TabsList>
    <TabsContent value="account">
      Make changes to your account here.
    </TabsContent>
    <TabsContent value="password">
      Change your password here.
    </TabsContent>
  </Tabs>
</template>
```

```tsx [React]
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"

export default function App() {
  return (
    <Tabs defaultValue="account" className="w-[400px]">
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        Make changes to your account here.
      </TabsContent>
      <TabsContent value="password">
        Change your password here.
      </TabsContent>
    </Tabs>
  )
}
```

```typescript [Angular]
import { Component } from '@angular/core';
import { TabsComponent } from '@/components/ui/tabs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TabsComponent],
  template: `
    <ui-tabs [value]="activeTab" (valueChange)="activeTab = $event" class="w-[400px]">
      <ui-tabs-list>
        <ui-tabs-trigger value="account">Account</ui-tabs-trigger>
        <ui-tabs-trigger value="password">Password</ui-tabs-trigger>
      </ui-tabs-list>
      <ui-tabs-content value="account">
        Make changes to your account here.
      </ui-tabs-content>
      <ui-tabs-content value="password">
        Change your password here.
      </ui-tabs-content>
    </ui-tabs>
  `
})
export class AppComponent {
  activeTab = 'account';
}
```

:::

  </template>
</ComponentPreview>

## Cài đặt

::: code-group

```bash [npm]
npx galaxy-ui-cli@latest add tabs
```

```bash [pnpm]
pnpm dlx galaxy-ui-cli@latest add tabs
```

```bash [yarn]
yarn dlx galaxy-ui-cli@latest add tabs
```

```bash [bun]
bunx galaxy-ui-cli@latest add tabs
```

:::

## Sử dụng

### Vue

```vue
<script setup lang="ts">
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui'
</script>

<template>
  <Tabs default-value="account" class="w-[400px]">
    <TabsList>
      <TabsTrigger value="account">Tài khoản</TabsTrigger>
      <TabsTrigger value="password">Mật khẩu</TabsTrigger>
    </TabsList>
    <TabsContent value="account">
      Thay đổi thông tin tài khoản tại đây.
    </TabsContent>
    <TabsContent value="password">
      Thay đổi mật khẩu tại đây.
    </TabsContent>
  </Tabs>
</template>
```

### React

```tsx
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui'

export default function TabsDemo() {
  return (
    <Tabs defaultValue="account" className="w-[400px]">
      <TabsList>
        <TabsTrigger value="account">Tài khoản</TabsTrigger>
        <TabsTrigger value="password">Mật khẩu</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        Thay đổi thông tin tài khoản tại đây.
      </TabsContent>
      <TabsContent value="password">
        Thay đổi mật khẩu tại đây.
      </TabsContent>
    </Tabs>
  )
}
```

### Angular

```typescript
import { Component } from '@angular/core';
import { TabsComponent, TabsListComponent, TabsTriggerComponent, TabsContentComponent } from '@/components/ui';

@Component({
  selector: 'app-tabs-demo',
  standalone: true,
  imports: [TabsComponent, TabsListComponent, TabsTriggerComponent, TabsContentComponent],
  template: `
    <ui-tabs [value]="activeTab" (valueChange)="activeTab = $event" class="w-[400px]">
      <ui-tabs-list>
        <ui-tabs-trigger value="account" [isActive]="activeTab === 'account'" (triggerClick)="activeTab = $event">
          Tài khoản
        </ui-tabs-trigger>
        <ui-tabs-trigger value="password" [isActive]="activeTab === 'password'" (triggerClick)="activeTab = $event">
          Mật khẩu
        </ui-tabs-trigger>
      </ui-tabs-list>
      <ui-tabs-content value="account" [isActive]="activeTab === 'account'">
        Thay đổi thông tin tài khoản tại đây.
      </ui-tabs-content>
      <ui-tabs-content value="password" [isActive]="activeTab === 'password'">
        Thay đổi mật khẩu tại đây.
      </ui-tabs-content>
    </ui-tabs>
  `
})
export class TabsDemoComponent {
  activeTab = 'account';
}
```

## Tham khảo API

### Tabs

Component gốc quản lý trạng thái tab.

**Props:**
- `defaultValue` - Giá trị tab active mặc định
- `value` - Giá trị tab active được kiểm soát

### TabsList

Container chứa các tab triggers.

### TabsTrigger

Button kích hoạt một tab panel.

**Props:**
- `value` - Định danh duy nhất cho tab
- `disabled` - Tab có bị vô hiệu hóa không

### TabsContent

Panel nội dung cho một tab.

**Props:**
- `value` - Định danh khớp với giá trị trigger


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
