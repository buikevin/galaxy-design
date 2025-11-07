# Pagination

Page navigation component with previous, next, and page numbers.

<ComponentPreview name="PaginationDemo">
  <template #preview>
    <DemoContainer>
      <PaginationDemo />
    </DemoContainer>
  </template>
  <template #code>

::: code-group
```vue [Vue]
<script setup lang="ts">
import { ref } from 'vue'
const currentPage = ref(1)
</script>

<template>
  <Pagination v-model="currentPage" :total="100" />
</template>
```

```tsx [React]
import { Pagination } from '@/components/ui/pagination'
export default function App() {
  return <Pagination />
}
```

```typescript [Angular]
@Component({
  template: `<ui-pagination [(page)]="page" />`
})
export class DemoComponent {
  page = 1;
}
```
:::

  </template>
</ComponentPreview>

## Cài đặt

::: code-group
```bash [React]
npx galaxy-ui-cli add pagination
```

```bash [Vue]
npx galaxy-ui-cli add pagination
```

```bash [Angular]
npx galaxy-ui-cli add pagination
```
:::

## Usage

::: code-group
```tsx [React]
import { Pagination } from '@/components/pagination'

export default function PaginationDemo() {
  const [currentPage, setCurrentPage] = React.useState(1)
  const totalPages = 10

  return (
    <Pagination
      currentPage={currentPage}
      totalPages={totalPages}
      onPageChange={setCurrentPage}
    />
  )
}
```

```vue [Vue]
<script setup lang="ts">
import { ref } from 'vue'
import { Pagination } from '@/components/pagination'

const currentPage = ref(1)
const totalPages = 10

const handlePageChange = (page: number) => {
  currentPage.value = page
}
</script>

<template>
  <Pagination
    :current-page="currentPage"
    :total-pages="totalPages"
    @page-change="handlePageChange"
  />
</template>
```

```typescript [Angular]
import { Component } from '@angular/core'
import { PaginationComponent } from '@/components/pagination'

@Component({
  selector: 'app-pagination-demo',
  standalone: true,
  imports: [PaginationComponent],
  template: `
    <ui-pagination
      [currentPage]="currentPage"
      [totalPages]="totalPages"
      (pageChange)="handlePageChange($event)"
    />
  `
})
export class PaginationDemo {
  currentPage = 1
  totalPages = 10

  handlePageChange(page: number) {
    this.currentPage = page
  }
}
```
:::


## API Reference

### Props

Component này chấp nhận các props sau:

| Prop | Kiểu | Mặc định | Mô tả |
|------|------|---------|-------------|
| ... | ... | ... | ... |

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `currentPage` | `number` | `1` | The current active page (1-indexed) |
| `totalPages` | `number` | `1` | Total number of pages |
| `siblingCount` | `number` | `1` | Number of page buttons to show on each side of current page |
| `onPageChange` | `(page: number) => void` | - | Callback fired when page changes |

## Examples

### With Custom Sibling Count

::: code-group
```tsx [React]
<Pagination
  currentPage={currentPage}
  totalPages={20}
  siblingCount={2}
  onPageChange={setCurrentPage}
/>
```

```vue [Vue]
<Pagination
  :current-page="currentPage"
  :total-pages="20"
  :sibling-count="2"
  @page-change="handlePageChange"
/>
```

```typescript [Angular]
<ui-pagination
  [currentPage]="currentPage"
  [totalPages]="20"
  [siblingCount]="2"
  (pageChange)="handlePageChange($event)"
/>
```
:::

### With Data Table

::: code-group
```tsx [React]
const itemsPerPage = 10
const totalItems = 100
const totalPages = Math.ceil(totalItems / itemsPerPage)

const paginatedData = data.slice(
  (currentPage - 1) * itemsPerPage,
  currentPage * itemsPerPage
)

return (
  <>
    <Table data={paginatedData} />
    <Pagination
      currentPage={currentPage}
      totalPages={totalPages}
      onPageChange={setCurrentPage}
    />
  </>
)
```
:::

## Accessibility

- Uses semantic `<nav>` element with `role="navigation"`
- Page buttons have `aria-label` describing their function
- Current page has `aria-current="page"`
- Disabled buttons have `disabled` attribute and reduced opacity

## Tác giả

**Bùi Trọng Hiếu (kevinbui)**
- GitHub: [@buikevin](https://github.com/buikevin)
- Email: kevinbui210191@gmail.com

## Giấy phép

MIT © 2025 Bùi Trọng Hiếu (kevinbui)
